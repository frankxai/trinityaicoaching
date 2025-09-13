"use client";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const SYSTEM = `You are Trinity Super Agent: you orchestrate Body Coach, Mind Coach, and Soul Guide to give one concise plan. Always propose 1–3 next actions. Be kind and practical.`;

export default function SuperAgentPage() {
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: 'I am Trinity Super Agent. What outcome would you like to achieve?' }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [triad, setTriad] = useState(true);
  const [model, setModel] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{ ref.current?.scrollTo({ top: ref.current.scrollHeight }); }, [messages]);
  useEffect(()=>{ try { const raw = localStorage.getItem('settings'); if (raw) { const s = JSON.parse(raw); if (s.triadDefault!=null) setTriad(!!s.triadDefault); if (s.openaiModel) setModel(String(s.openaiModel)); } } catch {} }, []);

  async function send() {
    const text = input.trim(); if (!text) return; setInput("");
    const next = [...messages, { role: 'user' as const, content: text } as Message]; setMessages(next); setLoading(true);
    const res = await fetch('/api/stream/coach', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [{ role: 'system', content: SYSTEM }, ...next].slice(-12), orchestrate: triad, model }) });
    const reader = res.body?.getReader();
    const dec = new TextDecoder();
    let acc = '';
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMessages(prev => { const copy = [...prev]; copy[copy.length-1] = { role: 'assistant', content: acc }; return copy; });
      }
    }
    setLoading(false);
  }

  return (
    <div className="glass rounded-2xl p-6 h-[70vh] flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Trinity Super Agent</h2>
        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <span>{model ? `Model: ${model}` : 'Model: default'}</span>
          <label className="flex items-center gap-2"><input type="checkbox" checked={triad} onChange={e=>setTriad(e.target.checked)} /> Triad Orchestration</label>
        </div>
      </div>
      <div ref={ref} className="mt-4 flex-1 overflow-y-auto rounded-lg border border-white/10 bg-white/5 p-4 space-y-3">
        {messages.map((m,i)=> (
          <div key={i} className={m.role==='user'?'text-right':'text-left'}>
            <div className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role==='user'?'bg-brand-600 text-white':'bg-white/10 text-neutral-100'}`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-xs text-neutral-400">Thinking…</div>}
      </div>
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={(e)=>{ if (e.key==='Enter') send(); }} placeholder="Ask anything…" className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600" />
        <button onClick={send} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Send</button>
        <QuickChips onPick={(t)=>setInput(t)} />
      </div>
    </div>
  );
}

function QuickChips({ onPick }: { onPick: (t: string)=>void }) {
  const chips = [
    'Design a balanced 30‑day plan',
    'I need a simple daily routine',
    'How to align work with values?',
  ];
  return (
    <div className="flex gap-2">
      {chips.map((c,i)=>(<button key={i} onClick={()=>onPick(c)} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">{c}</button>))}
    </div>
  );
}
