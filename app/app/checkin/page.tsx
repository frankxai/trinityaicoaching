"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";
import { todayISO } from "@/lib/date";

type Section = { title: string; items: string[] };
type Plan = Section[];
type Checkin = { date: string; tasks: string[]; mood: number; energy: number; notes?: string };

export default function CheckinPage() {
  const [savedPlans, setSavedPlans] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selection, setSelection] = useState<string[]>([]);
  const [mood, setMood] = useState<number>(3);
  const [energy, setEnergy] = useState<number>(3);
  const [notes, setNotes] = useState<string>("");
  const [today, setToday] = useState<string>(todayISO());

  useEffect(()=>{
    setSavedPlans(getLocal("plans.saved", []));
    setActiveId(getLocal("plans.active", null));
  }, []);

  const activePlan: Plan | undefined = useMemo(() => savedPlans.find(p=>p.id===activeId)?.plan, [savedPlans, activeId]);
  const allItems = useMemo(() => (activePlan||[]).flatMap(s => s.items.map(it => `${s.title}: ${it}`)), [activePlan]);

  useEffect(()=>{
    // Load existing checkin for today
    const ci = getLocal<Record<string, Checkin>>("checkins.map", {});
    const existing = ci[today];
    if (existing) {
      setSelection(existing.tasks);
      setMood(existing.mood);
      setEnergy(existing.energy);
      setNotes(existing.notes||"");
    }
  }, [today]);

  function toggleTask(task: string) {
    setSelection(prev => prev.includes(task) ? prev.filter(t => t!==task) : [...prev, task]);
  }

  function save() {
    const ci = getLocal<Record<string, Checkin>>("checkins.map", {});
    ci[today] = { date: today, tasks: selection, mood, energy, notes };
    setLocal("checkins.map", ci);
    alert("Check-in saved for " + today);
  }

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Daily Check‑in</h2>
        {!activePlan && (<p className="mt-2 text-neutral-400">No active plan. Set one on the <a className="text-brand-300 hover:text-brand-200" href="/app/plans">Plans</a> page.</p>)}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <label className="text-neutral-300">Date</label>
          <input type="date" value={today} onChange={(e)=>setToday(e.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1" />
        </div>
        <div className="mt-6 grid gap-3">
          <div>
            <div className="text-sm font-medium">Pick up to 3 focus tasks</div>
            <div className="mt-2 grid gap-2">
              {allItems.slice(0, 18).map(it => (
                <label key={it} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={selection.includes(it)} onChange={()=>toggleTask(it)} />
                  <span className="text-neutral-300">{it}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="text-sm">Mood (1–5)
              <input type="range" min={1} max={5} value={mood} onChange={e=>setMood(Number(e.target.value))} className="w-full" />
            </label>
            <label className="text-sm">Energy (1–5)
              <input type="range" min={1} max={5} value={energy} onChange={e=>setEnergy(Number(e.target.value))} className="w-full" />
            </label>
          </div>
          <div>
            <div className="text-sm font-medium">Notes</div>
            <textarea value={notes} onChange={e=>setNotes(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm h-24" placeholder="How did today go?" />
          </div>
          <div>
            <button onClick={save} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Save Check‑in</button>
          </div>
        </div>
      </section>
    </div>
  );
}

