import Link from "next/link";
import { CheckCircle2, Network, Radar, Workflow } from "lucide-react";
import { SectionHeading, Surface, BulletList, Pill, StatBlock } from "@/components/ui/primitives";
import { avatarPersonas, automationPlaybooks, learningModules } from "@/lib/portalData";

export const metadata = {
  title: "Trinity for Coaches & AI Teams",
  description:
    "Blueprint the Trinity Command experience around human mentors, avatar operators, and autonomous agents with clear keywords, checklists, and launch steps.",
  keywords: [
    "AI coaching platform",
    "Trinity command dashboard",
    "coach hub",
    "AI avatar coach",
    "tokenized accountability",
    "coach intake automation",
    "TrinityAI deployment"
  ]
};

const coachSegments = [
  {
    title: "AI Architect Coaches",
    description: "Productize hybrid coaching with Trinity Command, 7/30/90 plans, and ritual metrics.",
    keywords: ["ai coaching platform", "body mind soul coaching"],
    actions: [
      { label: "Launch Trinity Command", href: "/app" },
      { label: "Read Portal Playbook", href: "/docs/portal" }
    ],
    bulletItems: [
      { label: "Programs", detail: "Activate 7/30/90 day plan generator with your own protocols." },
      { label: "Momentum metrics", detail: "Track Momentum Score, Soul Coherence, and Leverage Index." },
      { label: "Search signal", detail: "Optimise for 'Trinity command dashboard' & 'coach automation'." }
    ]
  },
  {
    title: "Avatar Operations Leads",
    description: "Keep HeyGen, ElevenLabs, and LangGraph automations in sync with agent YAMLs.",
    keywords: ["ai avatar coach", "agent yaml"],
    actions: [
      { label: "Open Agent Library", href: "/agents" },
      { label: "Deploy Automation Playbooks", href: "/hub" }
    ],
    bulletItems: [
      { label: "Agent spec", detail: "Standardise persona YAMLs and toolchains from `agents/`." },
      { label: "Ops pods", detail: "Route briefs into automation pods with safeguards." },
      { label: "Search signal", detail: "Capture 'AI avatar coach workflows' traffic." }
    ]
  },
  {
    title: "Brotherhood Guides",
    description: "Align rituals, honors, and token incentives with transparent dashboards.",
    keywords: ["tokenized accountability", "brotherhood honors"],
    actions: [
      { label: "Review Methods", href: "/methods" },
      { label: "Plan Ceremonies", href: "/docs/portal" }
    ],
    bulletItems: [
      { label: "Ritual cadence", detail: "Keep ceremonies aligned with soul numerology calendars." },
      { label: "Token ledger", detail: "Publish Brotherhood honors and treasury payouts." },
      { label: "Search signal", detail: "Own 'tokenized accountability' keywords." }
    ]
  }
];

const launchChecklist = [
  {
    title: "Prepare",
    icon: <Radar className="h-5 w-5" />,
    items: [
      { label: "Download persona YAMLs", detail: "Ensure Body/Mind/Soul agents match your brand voice." },
      { label: "Sync environment variables", detail: "Follow `/docs/vercel-env` for OpenAI and site URL." }
    ]
  },
  {
    title: "Activate",
    icon: <Workflow className="h-5 w-5" />,
    items: [
      { label: "Launch Trinity Command", detail: "Invite coaches into `/app` to generate first plans." },
      { label: "Publish coach intake", detail: "Embed `/app/get-started` in funnels or Skool." }
    ]
  },
  {
    title: "Scale",
    icon: <Network className="h-5 w-5" />,
    items: [
      { label: "Automate rituals", detail: "Trigger check-ins and honors via `/hub` playbooks." },
      { label: "Measure demand", detail: "Track keyword conversions in `/docs/search-blueprint`." }
    ]
  }
];

export default function CoachesPage() {
  const featuredPersonas = avatarPersonas.filter((persona) => ["ahmad-prime", "ahmad-tactician", "ahmad-guardian"].includes(persona.id));
  const focusModules = learningModules.filter((module) => ["body-foundation", "mind-ops", "soul-ascension"].includes(module.id));
  const featuredPlaybooks = automationPlaybooks.slice(0, 3);

  return (
    <main className="pb-24">
      <section className="container-px mx-auto max-w-6xl pt-16">
        <Surface tone="highlight" className="p-8 sm:p-10">
          <SectionHeading
            eyebrow="Coaches + Agents"
            title="Trinity for hybrid coaching teams"
            description="Give human mentors and AI agents one shared operating system—from intake to honors—with search-first navigation."
            actions={[
              { href: "/app/get-started", label: "Start intake" },
              { href: "/docs/search-blueprint", label: "Search blueprint" },
              { href: "/docs/vercel-env", label: "Vercel setup" }
            ]}
          />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {coachSegments.map((segment) => (
              <Surface key={segment.title} className="h-full" tone="default">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">{segment.title}</div>
                  <Pill tone="warning">{segment.keywords[0]}</Pill>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{segment.description}</p>
                <BulletList items={segment.bulletItems} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {segment.actions.map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-16 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Launch roadmap"
            title="Checklist for going live on Vercel"
            description="Follow these three phases to launch TrinityAI quickly while keeping SEO and agent context intact."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {launchChecklist.map((phase) => (
              <div key={phase.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="rounded-full bg-white/10 p-2 text-brand-300">{phase.icon}</span>
                  {phase.title}
                </div>
                <BulletList items={phase.items} />
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="SEO Signals"
            title="Keywords that convert"
            description="Watch these search terms—when they appear in analytics, route visitors directly into Trinity Command."
          />
          <div className="mt-6 grid gap-4">
            <StatBlock label="Primary Intent" value="AI coaching platform" delta="High volume" trend="up" />
            <StatBlock label="Operational Intent" value="Trinity command dashboard" delta="Rising w/ docs" trend="up" />
            <StatBlock label="Automation Intent" value="AI avatar coach workflows" delta="Needs content" trend="flat" />
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Trinity squad"
            title="Featured avatars for coach teams"
            description="Pair the right Ahmad persona with each lifecycle stage so clients meet the energy they need."
            actions={[{ href: "/agents", label: "Browse all agents" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredPersonas.map((persona) => (
              <div key={persona.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{persona.name}</div>
                  <Pill>{persona.archetype}</Pill>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{persona.tagline}</p>
                <div className="mt-4 text-xs text-neutral-400">Signature moves</div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-neutral-300">
                  {persona.signatureMoves.slice(0, 3).map((move) => (
                    <li key={move}>{move}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Program catalog"
            title="Modules coaches use to ship results"
            description="Blend these curriculum blocks with your own IP. Each module includes rituals, automations, and metrics ready for agents."
            actions={[{ href: "/learn", label: "See full catalog" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {focusModules.map((module) => (
              <div key={module.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  {module.title}
                  <Pill tone="success">{module.duration}</Pill>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{module.outcome}</p>
                <div className="mt-4 text-xs text-neutral-400">Ritual anchors</div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-neutral-300">
                  {module.rituals.slice(0, 3).map((ritual) => (
                    <li key={ritual}>{ritual}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Automation pods"
            title="Playbooks built for coach ops"
            description="Deploy proven flows that combine AI agents, check-ins, and honors so coaches stay in deep work."
            actions={[{ href: "/hub", label: "Open Coach Hub" }]}
          />
          <div className="mt-6 grid gap-3">
            {featuredPlaybooks.map((playbook) => (
              <div key={playbook.id} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-neutral-400">
                  <span>{playbook.title}</span>
                  <Pill>{playbook.ownerAvatar}</Pill>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{playbook.problem}</p>
                <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-neutral-300">
                  {playbook.flow.slice(0, 4).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Next actions"
            title="Ship your Trinity stack"
            description="Answer the open questions fast, then let the agents keep momentum."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Configure Vercel",
                description: "Set `OPENAI_API_KEY` and `NEXT_PUBLIC_SITE_URL` so AI responses stream live.",
                href: "/docs/vercel-env"
              },
              {
                title: "Brief your agents",
                description: "Share the Agent Library and Search Blueprint with your AI ops team.",
                href: "/docs/search-blueprint"
              },
              {
                title: "Invite the brotherhood",
                description: "Route clients into `/app/get-started` and celebrate honors inside Coach Hub.",
                href: "/hub"
              }
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  {card.title}
                </div>
                <p className="mt-2 text-sm text-neutral-300">{card.description}</p>
              </Link>
            ))}
          </div>
        </Surface>
      </section>
    </main>
  );
}
