"use client";
import { useEffect, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";

type Profile = {
  name?: string; age?: number; sex?: string; height_cm?: number; weight_kg?: number;
  training_age?: string; injuries?: string; equipment?: string; sleep?: string;
  values?: string; mission?: string; distractions?: string;
};

export default function ProfilePage() {
  const [p, setP] = useState<Profile>({});
  const [saved, setSaved] = useState(false);
  useEffect(()=>{ setP(getLocal<Profile>("profile", {})); },[]);
  function save() { setLocal("profile", p); setSaved(true); setTimeout(()=>setSaved(false), 1200); }
  function exportJson() {
    const blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='profile.json'; a.click(); URL.revokeObjectURL(url);
  }
  function importJson(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return;
    const r = new FileReader(); r.onload = () => { try { const obj = JSON.parse(String(r.result||'{}')); setP(obj); } catch {} };
    r.readAsText(f);
  }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Profile & Baselines</h2>
      <p className="mt-2 text-neutral-300">Plans and coaching can use this context.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name"><input value={p.name||""} onChange={e=>setP({...p, name:e.target.value})} className="inp"/></Field>
        <Field label="Age"><input type="number" value={p.age||""} onChange={e=>setP({...p, age:Number(e.target.value)})} className="inp"/></Field>
        <Field label="Sex"><input value={p.sex||""} onChange={e=>setP({...p, sex:e.target.value})} className="inp"/></Field>
        <Field label="Height (cm)"><input type="number" value={p.height_cm||""} onChange={e=>setP({...p, height_cm:Number(e.target.value)})} className="inp"/></Field>
        <Field label="Weight (kg)"><input type="number" value={p.weight_kg||""} onChange={e=>setP({...p, weight_kg:Number(e.target.value)})} className="inp"/></Field>
        <Field label="Training age"><input value={p.training_age||""} onChange={e=>setP({...p, training_age:e.target.value})} className="inp"/></Field>
        <Field label="Injuries"><input value={p.injuries||""} onChange={e=>setP({...p, injuries:e.target.value})} className="inp"/></Field>
        <Field label="Equipment"><input value={p.equipment||""} onChange={e=>setP({...p, equipment:e.target.value})} className="inp"/></Field>
        <Field label="Sleep (avg)"><input value={p.sleep||""} onChange={e=>setP({...p, sleep:e.target.value})} className="inp"/></Field>
        <Field label="Values"><input value={p.values||""} onChange={e=>setP({...p, values:e.target.value})} className="inp"/></Field>
        <Field label="Mission"><input value={p.mission||""} onChange={e=>setP({...p, mission:e.target.value})} className="inp"/></Field>
        <Field label="Distractions"><input value={p.distractions||""} onChange={e=>setP({...p, distractions:e.target.value})} className="inp"/></Field>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button onClick={save} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Save</button>
        <button onClick={exportJson} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Export JSON</button>
        <label className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20 cursor-pointer">
          Import JSON
          <input onChange={importJson} type="file" accept="application/json" className="hidden" />
        </label>
        {saved && <span className="text-sm text-brand-300">Saved ✓</span>}
      </div>
      <style jsx>{`
        .inp { @apply w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600; }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-300">{label}</span>
      {children}
    </label>
  );
}
