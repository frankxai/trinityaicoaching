import { ReactNode } from "react";
import Link from "next/link";
import { Pill, StatBlock, Surface } from "@/components/ui/primitives";
import { momentumMetrics, avatarPersonas, platformSurfaces } from "@/lib/portalData";

const navSections: {
  title: string;
  items: { href: string; label: string; description?: string; badge?: string }[];
}[] = [
  {
    title: "Daily Command",
    items: [
      { href: "/app", label: "Mission Control", description: "Today, rituals, metrics", badge: "Live" },
      { href: "/app/checkin", label: "Triad Check-in", description: "Mood, body, energy sync" },
      { href: "/app/review", label: "Weekly Review", description: "Reset + adjust" }
    ]
  },
  {
    title: "Triad Modules",
    items: [
      { href: "/app/plans", label: "Plans", description: "7/30/90 day blueprints" },
      { href: "/app/habits", label: "Habits", description: "Micro commitments" },
      { href: "/app/journal", label: "Journal", description: "Reflections + voice notes" },
      { href: "/app/intake", label: "Intake", description: "Baselines & numerology" }
    ]
  },
  {
    title: "Agents & Ops",
    items: [
      { href: "/app/coach", label: "Coach Chat", description: "Assigned avatars" },
      { href: "/app/super-agent", label: "Super Agent", description: "Triad orchestration" },
      { href: "/app/agents-chat", label: "Agents Chat", description: "Team pods" },
      { href: "/app/agents-builder", label: "Agent Builder", description: "Design new automations" },
      { href: "/app/settings", label: "Settings", description: "Integrations + tokens" },
      { href: "/app/profile", label: "Profile", description: "Identity + honors" }
    ]
  }
];

const heroMetrics = [
  { label: "Momentum", value: "82", delta: "+4 WoW", trend: "up" as const },
  { label: "Soul Coherence", value: "88", delta: "+2", trend: "up" as const },
  { label: "Leverage", value: "74", delta: "Hold", trend: "flat" as const }
];

const assignedAvatars = avatarPersonas.filter((avatar) => ["ahmad-prime", "ahmad-athlete", "ahmad-sage"].includes(avatar.id));

const surfaces = platformSurfaces.filter((surface) => ["dashboard", "coach-directory", "brotherhood-portal"].includes(surface.id));

export const metadata = { title: "Trinity Command" };

export default function AppLayout({ children }: { children: ReactNode }) {
  const todayLabel = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).format(new Date());

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-brand-500/20 to-transparent blur-3xl" aria-hidden />
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          <aside className="lg:w-[300px] lg:flex-none">
            <Surface tone="muted" className="sticky top-24">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">Today</div>
                  <div className="text-lg font-semibold text-white">{todayLabel}</div>
                </div>
                <Pill tone="success">Momentum Green</Pill>
              </div>
              <div className="mt-6 grid gap-3">
                {navSections.map((section) => (
                  <div key={section.title}>
                    <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">{section.title}</div>
                    <ul className="mt-2 grid gap-1.5">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="group flex flex-col rounded-xl border border-white/5 bg-white/5 px-3 py-2 hover:border-brand-400/60 hover:bg-brand-500/10">
                            <div className="flex items-center justify-between text-sm font-medium text-white">
                              <span>{item.label}</span>
                              {item.badge && <Pill tone="warning">{item.badge}</Pill>}
                            </div>
                            {item.description && (
                              <span className="text-xs text-neutral-400 group-hover:text-neutral-200">{item.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Surface>
          </aside>
          <div className="flex-1 space-y-8">
            <Surface tone="highlight" className="relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-[0.04]" aria-hidden />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <Pill>Trinity Command</Pill>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Mission Control</h1>
                  <p className="mt-3 max-w-2xl text-sm text-neutral-200 sm:text-base">
                    Align body, mind, and soul in one operating system. Review signals, activate avatars, and close the loop with the Brotherhood.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
                    {momentumMetrics.map((metric) => (
                      <span key={metric.id} className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                        {metric.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <StatBlock key={metric.label} label={metric.label} value={metric.value} delta={metric.delta} trend={metric.trend} />
                  ))}
                </div>
              </div>
            </Surface>
            {children}
            <Surface tone="muted" className="border-dashed border-white/20">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Connected surfaces</div>
                  <p className="text-xs text-neutral-400">Every experience pulls from the same truth so clients, coaches, and ops stay synced.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {surfaces.map((surface) => {
                    const targetHref = surface.id === "dashboard" ? "/app" : surface.id === "coach-directory" ? "/coaches" : "/hub";
                    return (
                      <Link
                        key={surface.id}
                        href={targetHref}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:border-brand-400/70 hover:bg-brand-500/10"
                      >
                        {surface.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Surface>
            <Surface tone="default">
              <div className="grid gap-4">
                <div className="text-sm font-medium text-white">Assigned Avatars</div>
                <div className="grid gap-4 md:grid-cols-3">
                  {assignedAvatars.map((avatar) => (
                    <div key={avatar.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white">{avatar.name}</div>
                        <Pill>{avatar.archetype}</Pill>
                      </div>
                      <div className="mt-2 text-xs text-neutral-300">{avatar.tagline}</div>
                      <div className="mt-3 text-xs font-medium text-white">Signature moves</div>
                      <ul className="mt-2 space-y-1 text-xs text-neutral-300">
                        {avatar.signatureMoves.map((move) => (
                          <li key={move} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">{move}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </div>
    </div>
  );
}
