export function todayISO(d = new Date()) { return d.toISOString().slice(0,10); }
export function addDays(base: Date, days: number) { const d = new Date(base); d.setDate(d.getDate()+days); return d; }
export function lastNDays(n: number) {
  const base = new Date();
  const out: string[] = [];
  for (let i=n-1; i>=0; i--) out.push(todayISO(addDays(base, -i)));
  return out;
}

