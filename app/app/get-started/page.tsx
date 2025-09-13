"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal } from "@/lib/clientStore";

type Step = { id: string; title: string; desc: string; href: string; done: boolean };

export default function GetStartedPage() {
  const [profile, setProfile] = useState<any>(null);
  const [savedPlans, setSavedPlans] = useState<any[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [journalCount, setJournalCount] = useState(0);
  const [habitsCount, setHabitsCount] = useState(0);

  useEffect(()=>{
    setProfile(getLocal("profile", null));
    setSavedPlans(getLocal("plans.saved", []));
    setActive(getLocal("plans.active", null));
    setJournalCount(getLocal<any[]>("journal.entries", []).length || 0);
    setHabitsCount(getLocal<any[]>("habits.items", []).length || 0);
  }, []);

  const steps: Step[] = useMemo(()=>[
    { id: 'profile', title: 'Fill your Profile & Baselines', desc: 'Age, height, training age, values, mission. Better inputs → better plans.', href: '/app/profile', done: !!profile },
    { id: 'plan', title: 'Generate a 30‑day plan', desc: 'Pick 7/30/90 — start with 30. Save and set Active.', href: '/app/plans', done: savedPlans.length>0 && !!active },
    { id: 'habits', title: 'Add 2–3 habits to track', desc: 'Make wins tiny and visible. Steps, sleep, deep work.', href: '/app/habits', done: habitsCount>0 },
    { id: 'journal', title: 'Write your first journal note', desc: 'One reflection today; summarize weekly.', href: '/app/journal', done: journalCount>0 },
    { id: 'checkin', title: 'Do a daily check‑in', desc: 'Pick 1–3 focus tasks from your plan, rate mood/energy.', href: '/app/checkin', done: false },
  ], [profile, savedPlans, active, journalCount, habitsCount]);

  const completed = steps.filter(s=>s.done).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Get Started</h2>
      <p className="mt-2 text-neutral-300">A few simple steps and you’re rolling. Progress saves locally for now.</p>
      <div className="mt-4 h-2 rounded bg-white/10">
        <div className="h-2 rounded bg-brand-600" style={{ width: pct + '%' }} />
      </div>
      <div className="mt-6 grid gap-3">
        {steps.map(s => (
          <a key={s.id} href={s.href} className={`rounded-xl border p-4 ${s.done? 'border-brand-600 bg-brand-600/10' : 'border-white/10 bg-white/5'} hover:bg-white/10`}> 
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-neutral-300">{s.desc}</div>
              </div>
              <span className={`text-xs ${s.done? 'text-brand-300' : 'text-neutral-400'}`}>{s.done? 'Done' : 'Start'}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

