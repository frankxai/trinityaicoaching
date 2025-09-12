"use client";
import { useState } from "react";

export default function AgentsBuilderPage() {
  const [name, setName] = useState("New Agent");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState<string>("plan.generate, journal.summarize");
  const [voice, setVoice] = useState("concise, warm");

  function download() {
    const yaml = `name: ${name}\nrole: ${role}\ndescription: ${description}\nstyle:\n  voice: ${voice}\ntools:\n${tools.split(',').map(t=>`  - name: ${t.trim()}`).join('\n')}\n`;
    const blob = new Blob([yaml], { type: 'text/yaml' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${name.toLowerCase().replace(/\s+/g,'_')}.yaml`; a.click(); URL.revokeObjectURL(a.href);
  }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Agent Builder (YAML)</h2>
      <p className="mt-2 text-neutral-300">Define a persona and download as YAML. Upload later to your workspace.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Field label="Name"><input className="inp" value={name} onChange={e=>setName(e.target.value)} /></Field>
        <Field label="Role"><input className="inp" value={role} onChange={e=>setRole(e.target.value)} /></Field>
        <Field label="Description"><input className="inp" value={description} onChange={e=>setDescription(e.target.value)} /></Field>
        <Field label="Style (voice)"><input className="inp" value={voice} onChange={e=>setVoice(e.target.value)} /></Field>
        <Field label="Tools (comma-separated)"><input className="inp" value={tools} onChange={e=>setTools(e.target.value)} /></Field>
      </div>
      <div className="mt-4">
        <button onClick={download} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Download YAML</button>
      </div>
      <style jsx>{`.inp{ @apply w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600; }`}</style>
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

