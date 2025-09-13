"use client";
import { useEffect, useMemo, useState } from "react";
import { getLocal } from "@/lib/clientStore";

export default function PlanDetail({ params }: { params: { id: string } }) {
  const [plan, setPlan] = useState<any | null>(null);
  const [name, setName] = useState<string>("");
  const [horizon, setHorizon] = useState<number>(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    const saved = getLocal<any[]>("plans.saved", []);
    const found = saved.find(p => p.id === params.id) || null;
    setPlan(found?.plan || null);
    setName(found?.name || "");
    setHorizon(found?.horizon || 30);
    setIsActive(getLocal<string|null>("plans.active", null) === params.id);
  }, [params.id]);

  function makeActive() {
    localStorage.setItem("plans.active", JSON.stringify(params.id));
    setIsActive(true);
  }
  function exportICS() {
    if (!plan) return;
    const now = new Date(); const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 9,0,0);
    const lines: string[] = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Trinity AI//Plan//EN'];
    for (let d=0; d<Number(horizon); d++) {
      const s = new Date(start); s.setDate(start.getDate()+d);
      const ds = s.toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
      const items = plan.flatMap((sec: any)=>sec.items.slice(0,1).map((it:string)=>`${sec.title}: ${it}`)).slice(0,3);
      const uid = `trinity-${params.id}-${d}@trinity.ai`;
      lines.push('BEGIN:VEVENT', `UID:${uid}`, `DTSTAMP:${ds}`, `DTSTART:${ds}`, `DTEND:${new Date(s.getTime()+3600000).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z'}`, `SUMMARY:${name} — Day ${d+1}`, `DESCRIPTION:${items.join('\\n')}`, 'END:VEVENT');
    }
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${name||'plan'}.ics`; a.click(); URL.revokeObjectURL(a.href);
  }

  const sections = useMemo(()=> Array.isArray(plan)? plan : [], [plan]);

  if (!plan) return <div className="glass rounded-2xl p-6">Plan not found.</div>;
  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-neutral-400 text-sm">{horizon}-day plan</p>
          </div>
          <div className="flex items-center gap-2">
            {!isActive && <button onClick={makeActive} className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm hover:bg-brand-700">Set Active</button>}
            <button onClick={exportICS} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Export ICS</button>
          </div>
        </div>
      </section>
      <section className="grid gap-4">
        {sections.map((sec:any, i:number) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-medium">{sec.title}</div>
            <ul className="mt-2 grid gap-1 text-sm text-neutral-300 list-disc pl-5">
              {sec.items.map((it:string, j:number) => <li key={j}>{it}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

