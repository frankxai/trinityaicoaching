import Link from "next/link";
import { BrainCircuit, HeartHandshake, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";
import { avatarPersonas, learningModules, contributionPrograms, toolIntegrations, automationPlaybooks } from "@/lib/portalData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trinityaicoaching.vercel.app";

const faq = [
  {
    q: "Which APIs do I configure on Vercel?",
    a: "Set `OPENAI_API_KEY` for live conversations now, add `NEXT_PUBLIC_SITE_URL`, and review `/docs/vercel-env` for database, auth, and billing keys as you scale."
  },
  {
    q: "How do AI avatars access workflows?",
    a: "Agent YAML files define capabilities and map to automation playbooks so your bots can call Trinity Command, Hub, and external tools."
  },
  {
    q: "Can I track Body, Mind, Soul outcomes in one place?",
    a: "The Trinity Command dashboard merges Momentum Score, Soul Coherence, and Leverage Index—fed by check-ins, journals, and wearables."
  },
  {
    q: "How does tokenized accountability work?",
    a: "Brotherhood honors and contribution bounties mint rewards through the token treasury, with transparent milestones inside the dashboard."
  },
  {
    q: "Where can my team access the search blueprint?",
    a: "Point strategists and AI operators to `/docs/search-blueprint` and the `/coaches` hub for keywords, interlinking, and launch checklists."
  }
];

const searchSignals = [
  {
    term: "AI coaching platform",
    intent: "Orient",
    route: "Hero and /coaches establish the Trinity Command positioning."
  },
  {
    term: "Trinity command dashboard",
    intent: "Design",
    route: "Deep-link visitors to /app and /docs/portal for capability details."
  },
  {
    term: "AI avatar coach workflows",
    intent: "Scale",
    route: "Connect /agents, /hub, and /docs/search-blueprint to demonstrate automation pods."
  }
];

const searchResources = [
  {
    title: "Coach & AI Search Blueprint",
    description: "Persona-level keyword journeys and interlinking loops for humans and agents.",
    href: "/docs/search-blueprint"
  },
  {
    title: "Vercel Environment Setup",
    description: "Step-by-step instructions for configuring OPENAI_API_KEY and other keys on Vercel.",
    href: "/docs/vercel-env"
  },
  {
    title: "Trinity for Coaches",
    description: "Dedicated hub showing how mentors and AI operators deploy Trinity Command.",
    href: "/coaches"
  }
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TrinityAI Coaching Platform",
  description:
    "AI-augmented coaching portal combining Trinity Command, Coach Hub, avatar guild, automation playbooks, and tokenized Brotherhood incentives.",
  brand: { "@type": "Brand", name: "Trinity AI" },
  url: siteUrl,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "EUR"
  },
  isSimilarTo: ["AI coaching platform", "AI avatar coach", "tokenized accountability"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
};

export const metadata = {
  title: "TrinityAI Coaching Portal | Body, Mind & Soul Command Center",
  description: "Launch AI-augmented coaching with Trinity Command, Coach Hub, avatar guild, automation playbooks, and tokenized Brotherhood incentives.",
  keywords: [
    "AI coaching platform",
    "Trinity command dashboard",
    "coach automation",
    "AI avatar coach",
    "tokenized accountability",
    "body mind soul coaching",
    "brotherhood honors",
    "coach search blueprint",
    "vercel environment setup",
    "coach intake automation"
  ]
};

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="relative">
        <div className="absolute inset-0 bg-grid bg-[length:24px_24px] opacity-[0.15]" />
        <div className="container-px mx-auto max-w-7xl pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              Build strength, clarity, and meaning — together.
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <span className="rounded-sm bg-brand-600/20 text-brand-300 px-1.5 py-0.5">New</span>
              Coach Hub & Agent Library are live.
              <a href="/hub" className="text-brand-300 hover:text-brand-200">Explore</a>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Coaching that balances Body, Mind, and Soul.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
              Trinity blends three expert agents — Body Coach, Mind Coach, Soul Guide — into one supportive experience. Simple daily steps, honest weekly reviews, and kind accountability.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/app" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">Open Dashboard</Link>
              <Link href="/coaches" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Coaches Hub</Link>
              <Link href="/app/coach" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Try Coach</Link>
              <Link href="/app/super-agent" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Super Agent</Link>
              <Link href="/app/get-started" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Get Started</Link>
              <Link href="/docs/search-blueprint" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition">Search Blueprint</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4 -mt-8">
        <Feature icon={<Activity className="text-brand-300" />} title="Body Coach" desc="Training, nutrition, and recovery plans tailored to your baseline." />
        <Feature icon={<BrainCircuit className="text-brand-300" />} title="Mind Coach" desc="Cognition, discipline, habits, and deep work systems that stick." />
        <Feature icon={<HeartHandshake className="text-brand-300" />} title="Soul Guide" desc="Values, mission, and alignment—build a life that feels true." />
        <Feature icon={<ShieldCheck className="text-brand-300" />} title="Accountability" desc="Daily check-ins, weekly reviews, and gentle course correction." />
      </section>

      <section className="container-px mx-auto max-w-7xl mt-20">
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold">Our Principles</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-neutral-300">
            <li><span className="font-medium text-white">Compassion over pressure.</span> We choose kind, sustainable change.</li>
            <li><span className="font-medium text-white">Small steps win.</span> 1–3 actions a day beat perfect plans.</li>
            <li><span className="font-medium text-white">Evidence with context.</span> We prefer what works in real life.</li>
          </ul>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-20 grid gap-8 lg:grid-cols-3">
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

      <section className="container-px mx-auto max-w-7xl mt-20 grid gap-8 lg:grid-cols-2">
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
          <div className="mt-8 text-sm text-neutral-400">
            For coaches: publish your programs and agents, route intake, and run operations with less admin.
            <a className="ml-2 text-brand-300 hover:text-brand-200" href="/coaches/">Learn more</a>.
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24">
        <Surface tone="highlight">
          <SectionHeading
            eyebrow="Avatar Guild"
            title="Meet the Trinity squad"
            description="Five Ahmad avatars cover every mode: Body, Mind, Soul, Integrative, and Operations. Choose the energy you need and let the system do the rest."
            actions={[{ href: "/agents", label: "Browse agent files" }]}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {avatarPersonas.slice(0, 4).map((avatar) => (
              <div key={avatar.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{avatar.name}</div>
                  <Pill>{avatar.archetype}</Pill>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{avatar.tagline}</p>
                <div className="mt-4 text-xs text-neutral-400">
                  Signature moves
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {avatar.signatureMoves.slice(0, 2).map((move) => (
                      <li key={move}>{move}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-neutral-500">Active experiment</div>
                <div className="mt-1 text-xs text-neutral-300">{avatar.activeExperiments[0]}</div>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Coaches + Agents"
            title="Built for human mentors and their AI counterparts"
            description="Give AI architects, avatar ops leads, and ritual keepers a command center that mirrors how they search, decide, and deploy." 
            actions={[{ href: "/docs/portal", label: "Explore portal playbook" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">AI Architect Coaches</div>
              <p className="mt-2 text-xs text-neutral-300">Design triad programs, automate intake, and track body-mind-soul outcomes.</p>
              <BulletList
                items={[
                  { label: "Keyword focus: AI coaching platform", detail: "Outcome-driven positioning" },
                  { label: "Resource: Trinity Command", detail: "Live dashboard tour" },
                  { label: "CTA: Launch 7/30/90 plan", detail: "Rapid program scaffolding" }
                ]}
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">Avatar Operations Leads</div>
              <p className="mt-2 text-xs text-neutral-300">Route briefs to HeyGen, ElevenLabs, and LangGraph automations with confidence.</p>
              <BulletList
                items={[
                  { label: "Keyword focus: AI avatar coach", detail: "Capabilities & workflows" },
                  { label: "Resource: Agent Library", detail: "Ops-ready YAML specs" },
                  { label: "CTA: Deploy automation playbook", detail: "Map flows into pods" }
                ]}
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">Brotherhood Guides</div>
              <p className="mt-2 text-xs text-neutral-300">Align rituals, honors, and token incentives with transparent metrics.</p>
              <BulletList
                items={[
                  { label: "Keyword focus: tokenized accountability", detail: "Treasury + honors" },
                  { label: "Resource: Brotherhood portal", detail: "Milestones & incentives" },
                  { label: "CTA: Download ritual scripts", detail: "Keep ceremonies consistent" }
                ]}
              />
            </div>
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Search Intelligence"
            title="Optimised for how coaches and agents search"
            description="Map high-intent keywords to the right surfaces so mentors, ops leads, and LLM agents land where they can act."
            actions={[
              { href: "/docs/search-blueprint", label: "View blueprint" },
              { href: "/docs/vercel-env", label: "Vercel checklist" }
            ]}
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-3 md:grid-cols-3">
              {searchSignals.map((signal) => {
                const tone: "default" | "success" | "warning" =
                  signal.intent === "Design" ? "success" : signal.intent === "Scale" ? "default" : "warning";
                return (
                  <div key={signal.term} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white">{signal.term}</div>
                    <div className="mt-3">
                      <Pill tone={tone}>{signal.intent}</Pill>
                    </div>
                    <p className="mt-3 text-xs text-neutral-300">{signal.route}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-3">
              {searchResources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="text-sm font-semibold text-white">{resource.title}</div>
                  <p className="mt-2 text-sm text-neutral-300">{resource.description}</p>
                  <span className="mt-3 inline-flex text-xs text-brand-200">Open →</span>
                </Link>
              ))}
            </div>
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24 grid gap-8 xl:grid-cols-[1.3fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Learning OS"
            title="Programs crafted for the Brotherhood"
            description="Every module braids rituals, AI automations, and human check-ins so transformation sticks."
            actions={[{ href: "/learn", label: "See full catalog" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {learningModules.slice(0, 4).map((module) => (
              <div key={module.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{module.title}</div>
                  <Pill tone="warning">{module.duration}</Pill>
                </div>
                <p className="mt-2 text-sm text-neutral-300">{module.outcome}</p>
                <div className="mt-3 text-xs text-neutral-400">Format: {module.format}</div>
                <div className="mt-4 text-xs text-neutral-400">
                  Ritual anchors:
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {module.rituals.slice(0, 3).map((ritual) => (
                      <li key={ritual}>{ritual}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Ecosystem"
            title="Tokens & integrations"
            description="Transparency, incentives, and connective tissue for the decentralized Brotherhood."
            actions={[{ href: "/hub", label: "Open Coach HQ" }]}
          />
          <div className="mt-6 grid gap-4">
            {contributionPrograms.slice(0, 2).map((program) => (
              <div key={program.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{program.title}</div>
                  <Pill tone="warning">{program.reward}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{program.summary}</p>
              </div>
            ))}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Toolchain pulses</div>
              <p className="mt-2 text-xs text-neutral-300">Connect the Trinity OS with creative, biometric, and finance rails.</p>
              <ul className="mt-3 grid gap-2 text-xs text-neutral-300">
                {toolIntegrations.slice(0, 4).map((tool) => (
                  <li key={tool.id} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                    <span className="font-medium text-white">{tool.title}</span>
                    <span className="ml-2 text-neutral-400">{tool.actions[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Automation"
            title="Featured playbooks"
            description="Scale with proven automations for onboarding, content, and ritual reminders."
            actions={[{ href: "/hub", label: "Open Coach Hub" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {automationPlaybooks.map((playbook) => (
              <div key={playbook.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{playbook.title}</div>
                  <Pill>{playbook.ownerAvatar}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{playbook.problem}</p>
                <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-neutral-200">
                  {playbook.flow.slice(0, 4).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-7xl mt-24">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Questions"
            title="FAQ: launching TrinityAI"
            description="Answers to the highest-intent queries coaches and AI agents ask before deployment."
            actions={[{ href: "/docs/deployment", label: "Deployment guide" }]}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">{item.q}</div>
                <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
              </div>
            ))}
          </div>
        </Surface>
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
