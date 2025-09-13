"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";
import { todayISO } from "@/lib/date";

export default function DashboardPage() {
  const [activePlan, setActivePlan] = useState<any | null>(null);
  useEffect(()=>{
    const saved = getLocal<any[]>("plans.saved", []);
    const id = getLocal<string | null>("plans.active", null);
    const ap = saved.find(p=>p.id===id) || null; setActivePlan(ap);
  }, []);
  const [today, setToday] = useState<string>(todayISO());
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const topTasks = useMemo(()=>{
    const p = activePlan?.plan as { title: string; items: string[] }[] | undefined;
    if (!p) return [] as string[];
    const items = p.flatMap(s=> s.items.map(it => `${s.title}: ${it}`));
    return items.slice(0,3);
  }, [activePlan]);

  useEffect(()=>{
    const map = getLocal<Record<string, any>>("checkins.map", {});
    const tasks = map[today]?.tasks || [];
    const m: Record<string, boolean> = {}; for (const t of tasks) m[t]=true; setChecked(m);
  }, [today]);

  function toggleTask(task: string) {
    setChecked(prev => ({ ...prev, [task]: !prev[task] }));
    const map = getLocal<Record<string, any>>("checkins.map", {});
    const entry = map[today] || { date: today, tasks: [], mood: 3, energy: 3 };
    const exists = new Set(entry.tasks||[]);
    if (exists.has(task)) exists.delete(task); else exists.add(task);
    entry.tasks = Array.from(exists);
    map[today] = entry; setLocal("checkins.map", map);
  }

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Today</h2>
        <p className="mt-2 text-neutral-300">Quick wins and focus for the day.</p>
        {topTasks.length>0 ? (
          <div className="mt-4 grid gap-2 text-sm text-neutral-300">
            {topTasks.map((t,i)=>(
              <label key={i} className="flex items-center gap-3">
                <input type="checkbox" checked={!!checked[t]} onChange={()=>toggleTask(t)} />
                <span>{t}</span>
              </label>
            ))}
          </div>
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
