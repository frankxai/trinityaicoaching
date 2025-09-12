import Link from "next/link";
import { BrainCircuit, HeartHandshake, Activity, ShieldCheck, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="relative">
        <div className="absolute inset-0 bg-grid bg-[length:24px_24px] opacity-[0.15]" />
        <div className="container-px mx-auto pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              Build strength, clarity, and meaning — together.
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Coaching that balances Body, Mind, and Soul.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
              Trinity blends three expert agents — Body Coach, Mind Coach, Soul Guide — into one supportive experience. Simple daily steps, honest weekly reviews, and kind accountability.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/app" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">Open Dashboard</Link>
              <Link href="/app/coach" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Try Coach</Link>
              <Link href="/app/super-agent" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Super Agent</Link>
              <Link href="/blog" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Read the vision</Link>
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

      <section className="container-px mx-auto mt-20 grid gap-8 lg:grid-cols-3">
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Programs that fit real life</h3>
          <p className="mt-3 text-neutral-300">Generate 7/30/90‑day plans and adapt weekly. Keep streaks visible and wins small but steady.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/app/plans" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">Create Plan</Link>
            <Link href="/roadmap" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Roadmap</Link>
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Coach chat, now streaming</h3>
          <p className="mt-3 text-neutral-300">Triad orchestration streams answers token‑by‑token for a smoother session.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/app/coach" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Open Coach</Link>
            <Link href="/app/super-agent" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Super Agent</Link>
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">For coaches and teams</h3>
          <p className="mt-3 text-neutral-300">Build agents, publish programs, route client intake safely, and run ops with less admin.</p>
          <div className="mt-6 flex gap-3">
            <a href="/coaches/" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Coaches</a>
            <Link href="/agents" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Agents</Link>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto mt-20 grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">How Trinity works</h3>
          <ul className="mt-3 text-neutral-300 text-sm list-disc pl-5 space-y-1">
            <li>Step 1 — Intake: set baselines and goals (5 min)</li>
            <li>Step 2 — Plan: 7/30/90‑day program with 1–3 daily actions</li>
            <li>Step 3 — Daily: check‑ins + streaks keep momentum</li>
            <li>Step 4 — Weekly: review and adjust with kindness</li>
          </ul>
          <div className="mt-6">
            <Link href="/docs" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Read the docs</Link>
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">From the blog</h3>
          <p className="mt-3 text-neutral-300">Why we built a coach‑first AI platform and how it scales humans, not just content.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/blog/trinity-ai-super-agent" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Read article</Link>
            <Link href="/blog" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">More posts</Link>
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
