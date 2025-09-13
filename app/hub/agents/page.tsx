"use client";
import { useEffect, useState } from "react";

type Agent = { id?: string; name: string; yaml: string };

export default function AgentsHubPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selected, setSelected] = useState<Agent | null>(null);
  const [testInput, setTestInput] = useState("");
  const [testOutput, setTestOutput] = useState("");
  const [info, setInfo] = useState("");

  async function load() {
    try {
      const res = await fetch('/api/hub/agents');
      const data = await res.json();
      setAgents(data.items || []);
    } catch { setAgents([]); }
  }
  useEffect(()=>{ load(); }, []);

  function newAgent() {
    setSelected({ name: 'New Agent', yaml: 'name: New Agent\nrole: \ndescription: \n' });
    setInfo(""); setTestInput(""); setTestOutput("");
  }

  async function saveAgent() {
    if (!selected) return;
    try {
      const res = await fetch('/api/hub/agents', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(selected) });
      const data = await res.json();
      if (res.ok) { setInfo('Saved'); setSelected({ ...selected, id: data.id }); await load(); }
      else setInfo(data?.error || 'Error');
    } catch { setInfo('Error'); }
  }

  async function testRun() {
    if (!selected) return;
    setTestOutput("");
    const res = await fetch('/api/agents/test', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ yaml: selected.yaml, messages: [{ role:'user', content: testInput||'Say hello' }] }) });
    if (!res.body) { setTestOutput('No output'); return; }
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let acc = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      acc += dec.decode(value, { stream: true });
      setTestOutput(acc);
    }
  }

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Agent Library</h2>
          <button onClick={newAgent} className="btn btn-primary">New Agent</button>
        </div>
        <p className="text-neutral-300 text-sm mt-2">Create reusable YAML personas; test them with streaming; save to your workspace.</p>
      </section>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-1">
          <div className="text-sm text-neutral-400 mb-2">Agents</div>
          <div className="grid gap-2">
            {agents.map(a => (
              <button key={a.id||a.name} onClick={()=>{ setSelected(a); setInfo(""); setTestInput(""); setTestOutput(""); }} className="text-left rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/10">
                <div className="font-medium">{a.name}</div>
                <div className="text-xs text-neutral-400 truncate">{(a.yaml||'').slice(0,80)}</div>
              </button>
            ))}
            {agents.length===0 && <div className="text-neutral-500 text-sm">No agents yet.</div>}
          </div>
        </div>
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Editor</div>
            {info && <div className="text-xs text-brand-300">{info}</div>}
          </div>
          {!selected && <div className="text-neutral-500 text-sm mt-3">Select an agent to edit.</div>}
          {selected && (
            <div className="mt-3 grid gap-3">
              <input value={selected.name} onChange={(e)=>setSelected({ ...selected, name: e.target.value })} className="input" placeholder="Name" />
              <textarea value={selected.yaml} onChange={(e)=>setSelected({ ...selected, yaml: e.target.value })} className="input h-64 font-mono" placeholder="YAML definition" />
              <div className="flex gap-2">
                <button onClick={saveAgent} className="btn btn-primary">Save</button>
                <a className="btn btn-ghost" href="/agents" target="_blank">Browse examples</a>
              </div>
              <div className="mt-4">
                <div className="font-medium text-sm">Test run</div>
                <div className="mt-2 flex gap-2">
                  <input value={testInput} onChange={(e)=>setTestInput(e.target.value)} className="input flex-1" placeholder="Ask the agent…" />
                  <button onClick={testRun} className="btn btn-ghost">Run</button>
                </div>
                <pre className="mt-3 whitespace-pre-wrap text-sm text-neutral-200 min-h-[6rem] bg-white/5 rounded-lg p-3 border border-white/10">{testOutput}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

