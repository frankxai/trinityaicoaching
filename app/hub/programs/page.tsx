"use client";
import { useEffect, useState } from "react";
import { PROGRAM_TEMPLATES } from "@/lib/programTemplates";

export default function ProgramStudio() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [horizon, setHorizon] = useState(30);
  const [plan, setPlan] = useState(PROGRAM_TEMPLATES["beginner-30"].plan);
  const [info, setInfo] = useState<string>("");

  useEffect(()=>{ setName(PROGRAM_TEMPLATES["beginner-30"].name); },[]);

  async function save() {
    try {
      const res = await fetch('/api/programs', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, description, horizon, plan })});
      const data = await res.json();
      if (res.ok) setInfo('Saved program template'); else setInfo(data?.error || 'Error');
    } catch { setInfo('Error saving'); }
  }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Program Studio</h2>
      <p className="text-neutral-300 mt-2">Turn goals into structured plans with milestones. Requires database to persist.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-neutral-300">Name</span>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-neutral-300">Horizon (days)</span>
          <input type="number" value={horizon} onChange={(e)=>setHorizon(Number(e.target.value))} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
        </label>
        <label className="grid gap-1 text-sm sm:col-span-2">
          <span className="text-neutral-300">Description</span>
          <input value={description} onChange={(e)=>setDescription(e.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm" />
        </label>
      </div>
      <div className="mt-4 text-sm text-neutral-300">Start from template:</div>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {Object.entries(PROGRAM_TEMPLATES).map(([k,v]) => (
          <button key={k} onClick={()=>{ setName(v.name); setHorizon(v.horizon); setPlan(v.plan); }} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">{v.name}</button>
        ))}
      </div>
      <div className="mt-4 grid gap-4">
        {plan.map((sec, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-medium">{sec.title}</div>
            <ul className="mt-2 text-sm text-neutral-300 list-disc pl-5">
              {sec.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button onClick={save} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Save Template</button>
        <span className="text-xs text-neutral-400">{info}</span>
      </div>
    </div>
  );
}

