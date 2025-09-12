"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal, setLocal } from "@/lib/clientStore";

type Habit = { id: string; name: string; cadence: string };
type Log = Record<string, boolean>; // key: `${habitId}:${YYYY-MM-DD}`

function todayISO(d = new Date()) { return d.toISOString().slice(0,10); }
function addDays(base: Date, days: number) { const d = new Date(base); d.setDate(d.getDate()+days); return d; }

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [log, setLog] = useState<Log>({});
  const [name, setName] = useState("");
  const [cadence, setCadence] = useState("daily");

  useEffect(() => {
    setHabits(getLocal<Habit[]>("habits.items", []));
    setLog(getLocal<Log>("habits.log", {}));
  }, []);

  useEffect(() => { setLocal("habits.items", habits); }, [habits]);
  useEffect(() => { setLocal("habits.log", log); }, [log]);

  function addHabit() {
    const n = name.trim();
    if (!n) return;
    setHabits(prev => [...prev, { id: crypto.randomUUID(), name: n, cadence }]);
    setName("");
  }

  function toggle(habitId: string, day: string) {
    const key = `${habitId}:${day}`;
    setLog(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const days = useMemo(() => {
    const base = new Date();
    const start = addDays(base, -6);
    return Array.from({ length: 7 }, (_, i) => todayISO(addDays(start, i)));
  }, []);

  const streaks = useMemo(() => {
    const res: Record<string, number> = {};
    for (const h of habits) {
      let s = 0;
      for (let i=days.length-1; i>=0; i--) {
        if (log[`${h.id}:${days[i]}`]) s++; else break;
      }
      res[h.id] = s;
    }
    return res;
  }, [habits, log, days]);

  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Habits</h2>
        <p className="mt-2 text-neutral-300">Keep streaks visible. Tiny wins, daily.</p>
        <div className="mt-2">
          <button onClick={exportCSV} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export CSV</button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="New habit (e.g., 10k steps)" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600" />
          <select value={cadence} onChange={(e)=>setCadence(e.target.value)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-sm">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
          <button onClick={addHabit} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Add</button>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-neutral-400">
              <tr>
                <th className="text-left font-medium py-2">Habit</th>
                {days.map(d => (<th key={d} className="font-medium py-2 text-center">{d.slice(5)}</th>))}
                <th className="text-left font-medium py-2">Streak</th>
              </tr>
            </thead>
            <tbody>
              {habits.length===0 && (
                <tr><td className="text-neutral-400 py-4" colSpan={days.length+2}>No habits yet.</td></tr>
              )}
              {habits.map(h => (
                <tr key={h.id} className="border-t border-white/10">
                  <td className="py-2">{h.name}</td>
                  {days.map(d => {
                    const k = `${h.id}:${d}`;
                    const checked = !!log[k];
                    return (
                      <td key={d} className="py-2 text-center">
                        <button onClick={()=>toggle(h.id,d)} className={`inline-block h-5 w-5 rounded ${checked? 'bg-brand-600' : 'bg-white/10'} border border-white/10`}></button>
                      </td>
                    );
                  })}
                  <td className="py-2">{streaks[h.id] ?? 0}d</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function exportCSV() {
  const items = getLocal<any[]>("habits.items", []);
  const log = getLocal<Record<string, boolean>>("habits.log", {});
  const rows: string[] = [];
  rows.push(["habitId","habitName","date","done"].join(","));
  for (const h of items) {
    for (const k of Object.keys(log)) {
      if (!k.startsWith(h.id+":")) continue;
      const date = k.split(":")[1] || "";
      rows.push([h.id, quote(h.name), date, String(!!log[k])].join(","));
    }
  }
  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='habits.csv'; a.click(); URL.revokeObjectURL(url);
}

function quote(s: string) { return '"'+s.replace(/"/g,'""')+'"'; }
