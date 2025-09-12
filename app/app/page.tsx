"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal } from "@/lib/clientStore";

export default function DashboardPage() {
  const [activePlan, setActivePlan] = useState<any | null>(null);
  useEffect(()=>{
    const saved = getLocal<any[]>("plans.saved", []);
    const id = getLocal<string | null>("plans.active", null);
    const ap = saved.find(p=>p.id===id) || null; setActivePlan(ap);
  }, []);
  const topTasks = useMemo(()=>{
    const p = activePlan?.plan as { title: string; items: string[] }[] | undefined;
    if (!p) return [] as string[];
    const items = p.flatMap(s=> s.items.map(it => `${s.title}: ${it}`));
    return items.slice(0,3);
  }, [activePlan]);

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Today</h2>
        <p className="mt-2 text-neutral-300">Quick wins and focus for the day.</p>
        {topTasks.length>0 ? (
          <ul className="mt-4 grid gap-2 text-sm text-neutral-300 list-disc pl-5">
            {topTasks.map((t,i)=>(<li key={i}>{t}</li>))}
          </ul>
        ) : (
          <ul className="mt-4 grid gap-2 text-sm text-neutral-300 list-disc pl-5">
            <li>10-minute mobility and breathwork</li>
            <li>90-minute deep work block (no notifications)</li>
            <li>Evening reflection: one lesson, one gratitude</li>
          </ul>
        )}
        <div className="mt-4 flex gap-2">
          <a href="/app/checkin" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">Start Check‑in</a>
          <a href="/app/review" className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20">Weekly Review</a>
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Active Plan</h2>
        {!activePlan && <p className="mt-2 text-neutral-300">You haven’t created a plan yet. Generate your 7/30/90-day plan and get rolling.</p>}
        {activePlan && (
          <div className="mt-2 text-neutral-300 text-sm">
            <div className="font-medium">{activePlan.name}</div>
            <div className="text-neutral-400">{new Date(activePlan.createdAt).toLocaleString()} • {activePlan.horizon}-day</div>
          </div>
        )}
        <div className="mt-4">
          <a href="/app/plans" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">Create Plan</a>
        </div>
      </section>
    </div>
  );
}
