"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";

type Plan = { title: string; items: string[] }[];

export default function PlansPage() {
  const [horizon, setHorizon] = useState<7 | 30 | 90>(30);
  const [plan, setPlan] = useState<Plan>([]);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [savedPlans, setSavedPlans] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(()=>{
    setProfile(getLocal("profile", null));
    setSavedPlans(getLocal("plans.saved", []));
    setActiveId(getLocal("plans.active", null));
  },[]);

  async function generate() {
    setLoading(true);
    setPlan([]);
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ horizon, profile })
      });
      const data = await res.json();
      setPlan(data.plan);
    } catch (e) {
      setPlan([{ title: "Error", items: ["Could not generate plan."] }]);
    } finally {
      setLoading(false);
    }
  }

  function exportMarkdown() {
    const lines: string[] = [];
    lines.push(`# ${horizon}-Day Plan`);
    for (const section of plan) {
      lines.push(`\n## ${section.title}`);
      for (const it of section.items) lines.push(`- ${it}`);
    }
    const blob = new Blob([lines.join("\n")], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${horizon}-day-plan.md`; a.click();
    URL.revokeObjectURL(url);
  }
  function exportICS() {
    if (plan.length===0) return;
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 9, 0, 0);
    const lines: string[] = [];
    lines.push('BEGIN:VCALENDAR');
    lines.push('VERSION:2.0');
    lines.push('PRODID:-//Trinity AI//Plan//EN');
    for (let d=0; d<Number(horizon); d++) {
      const dt = new Date(startDate); dt.setDate(startDate.getDate()+d);
      const ds = dt.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
      const items = plan.flatMap(s=>s.items.slice(0,1).map(it=>`${s.title}: ${it}`)).slice(0,3);
      const summary = `${horizon}-day plan: Day ${d+1}`;
      const desc = items.join('\\n');
      const uid = `trinity-${Date.now()}-${d}@trinity.ai`;
      lines.push('BEGIN:VEVENT');
      lines.push(`UID:${uid}`);
      lines.push(`DTSTAMP:${ds}`);
      lines.push(`DTSTART:${ds}`);
      // 60-minute block
      const end = new Date(dt.getTime()+60*60*1000).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
      lines.push(`DTEND:${end}`);
      lines.push(`SUMMARY:${summary}`);
      lines.push(`DESCRIPTION:${desc}`);
      lines.push('END:VEVENT');
    }
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`trinity-plan-${horizon}d.ics`; a.click(); URL.revokeObjectURL(url);
  }

  function saveCurrent() {
    if (!plan || plan.length===0) return;
    const id = crypto.randomUUID();
    const entry = { id, name: `${horizon}-day plan`, horizon, createdAt: Date.now(), plan };
    const next = [...savedPlans, entry];
    setSavedPlans(next); setLocal("plans.saved", next);
    setActive(id);
  }

  function setActive(id: string) {
    setActiveId(id); setLocal("plans.active", id);
  }

  function deleteSaved(id: string) {
    const next = savedPlans.filter(p => p.id !== id);
    setSavedPlans(next); setLocal("plans.saved", next);
    if (activeId === id) { setActiveId(null); setLocal("plans.active", null); }
  }

  const activePlan = useMemo(()=> savedPlans.find(p=>p.id===activeId)?.plan as Plan | undefined, [savedPlans, activeId]);

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Plan Generator</h2>
        <p className="mt-2 text-neutral-300">Create a structured {horizon}-day coaching plan across Body, Mind, and Soul.</p>
        {profile && (
          <p className="mt-2 text-xs text-neutral-400">Using profile context for personalization. <a className="text-brand-300 hover:text-brand-200" href="/app/profile">Edit profile</a></p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {[7,30,90].map((h) => (
            <button key={h} onClick={() => setHorizon(h as 7|30|90)} className={`rounded-lg border px-3 py-1.5 text-sm ${horizon===h ? 'bg-brand-600 border-brand-600 text-white' : 'bg-white/5 border-white/10 text-neutral-200 hover:bg-white/10'}`}>{h} days</button>
          ))}
          <button onClick={generate} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Generate</button>
          {plan.length>0 && (
            <button onClick={saveCurrent} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Save as plan</button>
          )}
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h3 className="text-base font-semibold">Your {horizon}-Day Plan</h3>
        {loading && <p className="mt-3 text-neutral-400">Crafting a balanced plan…</p>}
        {!loading && plan.length === 0 && (
          <p className="mt-3 text-neutral-400">No plan yet. Click Generate to create one.</p>
        )}
        <div className="mt-2 flex gap-3">
          {plan.length > 0 && (
            <button onClick={exportMarkdown} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export Markdown</button>
          )}
          {plan.length > 0 && (
            <button onClick={exportICS} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export ICS</button>
          )}
        </div>
        <div className="mt-4 grid gap-4">
          {plan.map((section, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-medium">{section.title}</div>
              <ul className="mt-2 grid gap-1 text-sm text-neutral-300 list-disc pl-5">
                {section.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h3 className="text-base font-semibold">Saved Plans</h3>
        {savedPlans.length===0 && (<p className="mt-3 text-neutral-400">No saved plans yet.</p>)}
        <div className="mt-3 grid gap-3">
          {savedPlans.map(sp => (
            <div key={sp.id} className="rounded-lg border border-white/10 bg-white/5 p-3 flex items-center justify-between">
              <div className="text-sm">
                <div className="font-medium">{sp.name}</div>
                <div className="text-neutral-400">{new Date(sp.createdAt).toLocaleString()} • {sp.horizon}-day</div>
              </div>
              <div className="flex gap-2">
                <button onClick={()=>setPlan(sp.plan)} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Load</button>
                <button onClick={()=>setActive(sp.id)} className={`rounded-lg px-3 py-1.5 text-sm ${activeId===sp.id?'bg-brand-600 hover:bg-brand-700':'bg-white/10 hover:bg-white/20'}`}>{activeId===sp.id?'Active':'Set active'}</button>
                <button onClick={()=>deleteSaved(sp.id)} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Delete</button>
              </div>
            </div>
          ))}
        </div>
        {activePlan && <p className="mt-3 text-xs text-neutral-400">Active plan is used by Check‑in and Review pages.</p>}
      </section>
    </div>
  );
}
