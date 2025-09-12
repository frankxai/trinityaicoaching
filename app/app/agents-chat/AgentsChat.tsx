"use client";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function AgentsChat({ agents }: { agents: { id: string; name: string; role: string }[] }) {
  const [agent, setAgent] = useState<string>(agents[0]?.id || "");
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: 'Pick an agent and ask a question.' } as Message]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ viewRef.current?.scrollTo({ top: viewRef.current.scrollHeight }); }, [messages]);

  async function send() {
    const text = input.trim(); if (!text || !agent) return;
    setInput("");
    const next = [...messages, { role: 'user' as const, content: text } as Message]; setMessages(next); setLoading(true);
    try {
      const res = await fetch('/api/agents/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ agent, messages: next.slice(-12) }) });
      const data = await res.json(); setMessages([...next, { role: 'assistant' as const, content: data.reply } as Message]);
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Could not reply.' }]);
    } finally { setLoading(false); }
  }

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <select value={agent} onChange={(e)=>setAgent(e.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sm">
          {agents.map(a => <option key={a.id} value={a.id}>{a.name} — {a.role}</option>)}
        </select>
      </div>
      <div ref={viewRef} className="rounded-lg border border-white/10 bg-white/5 p-4 h-[50vh] overflow-y-auto space-y-3">
        {messages.map((m,i)=> (
          <div key={i} className={m.role==='user'?'text-right':'text-left'}>
            <div className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === 'user' ? 'bg-brand-600 text-white' : 'bg-white/10 text-neutral-100'}`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-xs text-neutral-400">Thinking…</div>}
      </div>
      <div className="flex gap-2 items-center">
        <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{ if (e.key==='Enter') send(); }} placeholder="Ask the selected agent…" className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600" />
        <button onClick={send} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Send</button>
      </div>
    </div>
  );
}
