"use client";
import { useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";

const steps = ["Body", "Mind", "Soul"] as const;

export default function IntakePage() {
  const existing = getLocal<any>("profile", {});
  const [i, setI] = useState(0);
  const [form, setForm] = useState<any>({ ...existing });

  function next() { setI(s=> Math.min(s+1, steps.length-1)); }
  function back() { setI(s=> Math.max(s-1, 0)); }
  function save() { setLocal("profile", form); alert("Saved. Plans will use this."); }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Intake</h2>
      <p className="mt-2 text-neutral-300">Provide a few details so Trinity can personalize your plan.</p>
      <div className="mt-4 flex gap-2 text-xs text-neutral-400">
        {steps.map((s,idx)=>(<span key={s} className={`px-2 py-1 rounded ${i===idx?'bg-white/10 text-white':''}`}>{idx+1}. {s}</span>))}
      </div>
      <div className="mt-6">
        {i===0 && <Body form={form} setForm={setForm} />}
        {i===1 && <Mind form={form} setForm={setForm} />}
        {i===2 && <Soul form={form} setForm={setForm} />}
      </div>
      <div className="mt-6 flex gap-2">
        <button onClick={back} className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20" disabled={i===0}>Back</button>
        {i<steps.length-1 ? (
          <button onClick={next} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Next</button>
        ) : (
          <button onClick={save} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Save</button>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm mb-3">
      <span className="text-neutral-300">{label}</span>
      {children}
    </label>
  );
}

function Body({ form, setForm }: any) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Field label="Height (cm)"><input type="number" value={form.height_cm||''} onChange={(e)=>setForm({ ...form, height_cm: Number(e.target.value) })} className="inp"/></Field>
      <Field label="Weight (kg)"><input type="number" value={form.weight_kg||''} onChange={(e)=>setForm({ ...form, weight_kg: Number(e.target.value) })} className="inp"/></Field>
      <Field label="Training age"><input value={form.training_age||''} onChange={(e)=>setForm({ ...form, training_age: e.target.value })} className="inp"/></Field>
      <Field label="Injuries"><input value={form.injuries||''} onChange={(e)=>setForm({ ...form, injuries: e.target.value })} className="inp"/></Field>
      <Field label="Equipment"><input value={form.equipment||''} onChange={(e)=>setForm({ ...form, equipment: e.target.value })} className="inp"/></Field>
      <Field label="Sleep (avg)"><input value={form.sleep||''} onChange={(e)=>setForm({ ...form, sleep: e.target.value })} className="inp"/></Field>
      <style jsx>{`.inp { @apply w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600; }`}</style>
    </div>
  );
}

function Mind({ form, setForm }: any) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Field label="Deep work blocks/day"><input value={form.work_blocks||''} onChange={(e)=>setForm({ ...form, work_blocks: e.target.value })} className="inp"/></Field>
      <Field label="Top projects"><input value={(form.main_projects||[]).join(', ')} onChange={(e)=>setForm({ ...form, main_projects: e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean) })} className="inp"/></Field>
      <Field label="Distractions"><input value={(form.distractions||[]).join(', ')} onChange={(e)=>setForm({ ...form, distractions: e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean) })} className="inp"/></Field>
      <style jsx>{`.inp { @apply w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600; }`}</style>
    </div>
  );
}

function Soul({ form, setForm }: any) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Field label="Values"><input value={(form.values||[]).join(', ')} onChange={(e)=>setForm({ ...form, values: e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean) })} className="inp"/></Field>
      <Field label="Mission"><input value={form.mission||''} onChange={(e)=>setForm({ ...form, mission: e.target.value })} className="inp"/></Field>
      <style jsx>{`.inp { @apply w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600; }`}</style>
    </div>
  );
}

