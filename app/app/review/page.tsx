"use client";
import { useEffect, useState } from "react";
import { getLocal } from "@/lib/clientStore";
import { lastNDays } from "@/lib/date";

export default function ReviewPage() {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [days] = useState<string[]>(lastNDays(7));

  async function generate() {
    setLoading(true); setSummary("");
    const checkinsMap = getLocal<Record<string, any>>("checkins.map", {});
    const journal = getLocal<any[]>("journal.entries", []);
    const habits = { items: getLocal<any[]>("habits.items", []), log: getLocal<Record<string, boolean>>("habits.log", {}) };
    const checkins = days.map(d => checkinsMap[d]).filter(Boolean);
    const res = await fetch("/api/review/weekly", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ checkins, journal, habits }) });
    const data = await res.json(); setSummary(data.summary || ''); setLoading(false);
  }

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Weekly Review</h2>
        <div className="flex items-center gap-2">
          {summary && (
            <button onClick={() => exportMD(summary)} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export</button>
          )}
          <button onClick={generate} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">{loading? 'Generating…' : 'Generate'}</button>
        </div>
      </div>
      <p className="mt-2 text-neutral-300">Summarizes check‑ins, journals, and habits from the last 7 days.</p>
      <pre className="mt-4 whitespace-pre-wrap text-sm text-neutral-200 min-h-[8rem]">{summary}</pre>
    </div>
  );
}

function exportMD(text: string) {
  const blob = new Blob([`# Weekly Review\n\n${text}`], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='weekly-review.md'; a.click(); URL.revokeObjectURL(url);
}
