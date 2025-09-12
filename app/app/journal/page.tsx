"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";

type Entry = { id: string; ts: number; text: string };

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [text, setText] = useState("");
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEntries(getLocal<Entry[]>("journal.entries", []));
  }, []);

  useEffect(() => {
    setLocal("journal.entries", entries);
  }, [entries]);

  const sorted = useMemo(() => [...entries].sort((a,b)=>b.ts-a.ts), [entries]);

  function addEntry() {
    const t = text.trim();
    if (!t) return;
    setEntries(prev => [...prev, { id: crypto.randomUUID(), ts: Date.now(), text: t }]);
    setText("");
  }

  function remove(id: string) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  async function summarize() {
    setLoading(true);
    setSummary("");
    try {
      const res = await fetch("/api/journal/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entries: sorted.slice(0, 20).map(e => e.text) })
      });
      const data = await res.json();
      setSummary(data.summary);
    } catch {
      setSummary("Could not summarize right now.");
    } finally { setLoading(false); }
  }

  function exportEntries() {
    const blob = new Blob([JSON.stringify(sorted, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='journal.json'; a.click(); URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Journal</h2>
        <p className="mt-2 text-neutral-300">Capture a quick reflection. Summarize insights weekly.</p>
        <div className="mt-4 flex gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a reflection…"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm h-24 outline-none focus:ring-2 focus:ring-brand-600"
          />
          <button onClick={addEntry} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium h-10 self-end hover:bg-brand-700">Add</button>
        </div>
        <div className="mt-6 grid gap-3">
          {sorted.length === 0 && <p className="text-neutral-400">No entries yet.</p>}
          {sorted.map(e => (
            <div key={e.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex justify-between items-center text-xs text-neutral-400">
                <span>{new Date(e.ts).toLocaleString()}</span>
                <button onClick={() => remove(e.id)} className="hover:text-white">Delete</button>
              </div>
              <p className="mt-1 text-sm text-neutral-200 whitespace-pre-wrap">{e.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Summary</h3>
          <div className="flex items-center gap-2">
            <button onClick={exportEntries} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export</button>
            <button onClick={summarize} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">{loading ? 'Summarizing…' : 'Summarize'}</button>
          </div>
        </div>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-neutral-200 min-h-[4rem]">{summary}</pre>
      </section>
    </div>
  );
}
