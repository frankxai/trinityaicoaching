"use client";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "I am your Trinity Coach. What’s your current goal?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [triad, setTriad] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const next = [...messages, { role: "user", content: text } as Message];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12), orchestrate: triad })
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: "I had trouble replying. Try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-2xl p-6 h-[70vh] flex flex-col">
      <h2 className="text-lg font-semibold">Coach Chat</h2>
      <div ref={viewportRef} className="mt-4 flex-1 overflow-y-auto rounded-lg border border-white/10 bg-white/5 p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <div className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-brand-600 text-white" : "bg-white/10 text-neutral-100"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-xs text-neutral-400">Thinking…</div>}
      </div>
      <div className="mt-4 flex gap-2 items-center">
        <label className="text-xs text-neutral-400 flex items-center gap-2">
          <input type="checkbox" checked={triad} onChange={e=>setTriad(e.target.checked)} /> Triad Mode
        </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          placeholder="Ask Body, Mind, and Soul…"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600"
        />
        <button onClick={send} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Send</button>
      </div>
    </div>
  );
}
