import Link from "next/link";
import { BrainCircuit, HeartHandshake, Activity, ShieldCheck, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="relative">
        <div className="absolute inset-0 bg-grid bg-[length:24px_24px] opacity-[0.15]" />
        <div className="container-px mx-auto pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              AI-aligned Coaching for Body • Mind • Soul
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Your personal Trinity of Coaches, unified.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
              Transform with a 7/30/90-day program guided by curated AI agents: Body, Mind, and Soul – integrated into one practical coaching experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <Link href="/app" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">Open Dashboard</Link>
              <Link href="/app/coach" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Try Coach</Link>
              <a href="https://skool.com/your-community" target="_blank" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Join Skool</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 -mt-8">
        <Feature icon={<Activity className="text-brand-300" />} title="Body Coach" desc="Training, nutrition, and recovery plans tailored to your baseline." />
        <Feature icon={<BrainCircuit className="text-brand-300" />} title="Mind Coach" desc="Cognition, discipline, habits, and deep work systems that stick." />
        <Feature icon={<HeartHandshake className="text-brand-300" />} title="Soul Guide" desc="Values, mission, and alignment—build a life that feels true." />
        <Feature icon={<ShieldCheck className="text-brand-300" />} title="Accountability" desc="Daily check-ins, weekly reviews, and gentle course correction." />
      </section>

      <section className="container-px mx-auto mt-20 grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Generate your 7/30/90-day plan</h3>
          <p className="mt-3 text-neutral-300">Start fast with thoughtfully structured programs or customize with the coach chat.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/app/plans" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">Create Plan</Link>
            <Link href="/docs" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">How it works</Link>
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Coach chat with Trinity Agents</h3>
          <p className="mt-3 text-neutral-300">Body, Mind, and Soul agents collaborate to give balanced guidance.</p>
          <div className="mt-6">
            <Link href="/app/coach" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Open Coach</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string; }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center border border-white/10">
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-neutral-400">{desc}</div>
        </div>
      </div>
    </div>
  );
}
