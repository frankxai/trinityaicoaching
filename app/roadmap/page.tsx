"use client";
import { useMemo, useState } from "react";

type Item = { id: string; title: string; desc: string; phase: "MVP" | "SaaS" | "Intelligence" | "Marketplace"; status: "done" | "in-progress" | "planned" };

const ROADMAP: Item[] = [
  { id: "landing", title: "Landing + SaaS shell", desc: "Marketing site + dashboard", phase: "MVP", status: "done" },
  { id: "coach-chat", title: "Coach chat (triad)", desc: "Body/Mind/Soul triad with synthesis", phase: "MVP", status: "done" },
  { id: "plans", title: "Plan generator 7/30/90", desc: "Program creation + export", phase: "MVP", status: "done" },
  { id: "journal", title: "Journal + summaries", desc: "Entries + weekly insights", phase: "MVP", status: "done" },
  { id: "habits", title: "Habits + streaks", desc: "Local tracking + CSV", phase: "MVP", status: "done" },
  { id: "checkin", title: "Check-ins + Weekly Review", desc: "Active plan tasks + review", phase: "MVP", status: "done" },
  { id: "agents", title: "Agents library + YAML", desc: "Personas for reuse + MCP", phase: "MVP", status: "done" },
  { id: "ai-sdk", title: "Vercel AI SDK streaming", desc: "Super Agent streaming chat", phase: "MVP", status: "in-progress" },
  { id: "auth", title: "Auth + billing", desc: "Clerk/Auth.js + Stripe", phase: "SaaS", status: "planned" },
  { id: "db", title: "DB persistence", desc: "Supabase + Prisma", phase: "SaaS", status: "planned" },
  { id: "uploads", title: "Uploads + triage", desc: "S3 + OCR + routing", phase: "SaaS", status: "planned" },
  { id: "marketplace", title: "Programs marketplace", desc: "Listings + search + reviews", phase: "Marketplace", status: "planned" },
  { id: "orchestration", title: "Agent orchestration", desc: "Graph teams + memory", phase: "Intelligence", status: "planned" },
];

export default function RoadmapPage() {
  const [phase, setPhase] = useState<"All" | Item["phase"]>("All");
  const [status, setStatus] = useState<"All" | Item["status"]>("All");
  const items = useMemo(() => ROADMAP.filter(i => (phase === "All" || i.phase === phase) && (status === "All" || i.status === status)), [phase, status]);
  return (
    <div className="container-px mx-auto max-w-6xl py-10">
      <h1 className="text-2xl font-semibold">Roadmap</h1>
      <p className="mt-2 text-neutral-400">Filter by phase/status. We’ll evolve this into a public roadmap with voting and changelog.</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <select value={phase} onChange={(e)=>setPhase(e.target.value as any)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">
          {(["All","MVP","SaaS","Intelligence","Marketplace"] as const).map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <select value={status} onChange={(e)=>setStatus(e.target.value as any)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">
          {(["All","done","in-progress","planned"] as const).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="mt-6 grid gap-3">
        {items.map(i => (
          <div key={i.id} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-neutral-400">{i.desc}</div>
            </div>
            <div className="text-xs text-neutral-300 flex items-center gap-2">
              <span className="rounded bg-white/10 px-2 py-1">{i.phase}</span>
              <span className={`rounded px-2 py-1 ${i.status==='done'?'bg-brand-600':'bg-white/10'}`}>{i.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

