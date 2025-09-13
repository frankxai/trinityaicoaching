"use client";
import { useEffect, useState } from "react";

type Settings = { openaiModel?: string; triadDefault?: boolean };

export default function SettingsPage() {
  const [s, setS] = useState<Settings>({ openaiModel: '', triadDefault: true });
  const [saved, setSaved] = useState(false);

  useEffect(()=>{
    try { const raw = localStorage.getItem('settings'); if (raw) setS(JSON.parse(raw)); } catch {}
  }, []);

  function save() {
    localStorage.setItem('settings', JSON.stringify(s));
    setSaved(true); setTimeout(()=>setSaved(false), 1200);
  }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Settings</h2>
      <p className="mt-2 text-neutral-300">Client-side preferences for chat and defaults.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-neutral-300">OpenAI model override</span>
          <input value={s.openaiModel||''} onChange={e=>setS({...s, openaiModel:e.target.value})} placeholder="e.g., gpt-4o-mini" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600" />
          <span className="text-xs text-neutral-500">Leave blank to use server default (OPENAI_MODEL).</span>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-neutral-300">Triad orchestration default</span>
          <select value={s.triadDefault? 'on':'off'} onChange={(e)=>setS({...s, triadDefault: e.target.value==='on'})} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </label>
      </div>
      <div className="mt-6">
        <button onClick={save} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Save</button>
        {saved && <span className="ml-3 text-sm text-brand-300">Saved ✓</span>}
      </div>
    </div>
  );
}

