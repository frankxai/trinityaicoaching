import Link from "next/link";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";

export const metadata = {
  title: "Trinity Retreat | Immersive Brotherhood Design",
  description: "Experience the three-day Trinity Immersion with curated tracks, rituals, and integration systems that carry momentum home."
};

const experienceMenu = [
  { id: "overview", label: "Overview" },
  { id: "tracks", label: "Immersion Tracks" },
  { id: "rhythm", label: "Daily Rhythm" },
  { id: "logistics", label: "Logistics" },
  { id: "integration", label: "Integration" },
  { id: "faq", label: "FAQ" }
];

const immersionTracks = [
  {
    title: "Body Immersion",
    description: "Adaptive strength, breath, cold, and recovery labs sequenced to circadian rhythms.",
    focus: ["Explosive strength labs", "Breath and cold ceremonies", "Recovery lounge"],
    imageHint: "Portrait orientation, motion blur athlete entering cold plunge, 1400x1750px."
  },
  {
    title: "Mind Lab",
    description: "Strategy councils, leverage mapping, and automation sprints with AI copilots.",
    focus: ["Deep work pods", "Offer architecture clinic", "Automation dojo"],
    imageHint: "Wide shot of founders around holo-table, neon blue highlights, 1600x1200px."
  },
  {
    title: "Soul Assembly",
    description: "Rituals, numerology consults, and honors that anchor identity and mission.",
    focus: ["Destiny mapping", "Brotherhood honors", "Evening fire dialogues"],
    imageHint: "Firelight ceremony with geometric symbols in sky, 1400x1750px."
  }
];

const retreatRhythm = [
  {
    phase: "Day 0",
    title: "Arrival & Calibration",
    details: ["Arrivals + biometrics upload", "Grounding breath sequence", "Welcome council and intent setting"]
  },
  {
    phase: "Day 1",
    title: "Body & Mind Forge",
    details: ["Sunrise mobility + cold plunge", "Command architecture workshop", "Field games and recovery labs", "Night mission planning"]
  },
  {
    phase: "Day 2",
    title: "Soul Integration",
    details: ["Numerology + destiny consults", "Automation pods design sprint", "Honors ceremony and commitment fire"]
  },
  {
    phase: "Day 3",
    title: "Launch & Return",
    details: ["Integration breakfast", "90-day mission sprints", "Closing breath and send-off"]
  }
];

const logisticsBoard = [
  { label: "Location", value: "Private lakeside estate (90 min from Austin)", detail: "Final address shared after deposit." },
  { label: "Timing", value: "Q1 2026 window", detail: "Choose between late February or early March cohorts." },
  { label: "Capacity", value: "24 brothers / 6 guides", detail: "Curated for depth and relational safety." },
  { label: "Investment", value: "$6.8K", detail: "Includes lodging, nourishment, rituals, integration packets." }
];

const packingList = [
  { label: "Training essentials", detail: "Athletic wear, swim gear, recovery tools." },
  { label: "Focus stack", detail: "Laptop/tablet, noise-cancelling headphones, analog journal." },
  { label: "Soul artifacts", detail: "Bring one symbol of who you are becoming for the honors fire." }
];

const assetDropzones = [
  { slot: "Hero", path: "public/retreat/hero.jpg", notes: "Use cinematic portrait. 4:5 ratio. Soft gradients that match site hero." },
  { slot: "Body track", path: "public/retreat/body-immersion.jpg", notes: "High-energy movement shot. 4:5 ratio." },
  { slot: "Mind track", path: "public/retreat/mind-lab.jpg", notes: "Strategic workshop imagery. 4:3 ratio." },
  { slot: "Soul track", path: "public/retreat/soul-assembly.jpg", notes: "Night ritual, warm lighting. 4:5 ratio." },
  { slot: "Venue", path: "public/retreat/venue.jpg", notes: "Lakeside vista with architectural focus. 16:9 ratio." },
  { slot: "Moments reel", path: "public/retreat/gallery-01.jpg", notes: "Use 1200x1200 crops for carousel." }
];

const integrationHighlights = [
  { label: "Signal packets", detail: "Each night, members receive an AI-composed deck with biometrics, insights, and action prompts." },
  { label: "Agent follow-ups", detail: "Retreat commitments sync into Trinity Command so avatars nudge the new rituals." },
  { label: "Brotherhood honors", detail: "On-site honors unlock priority access to future immersions and stewardship councils." },
  { label: "90-day missions", detail: "Launch day three sprint plans blend Body, Mind, Soul metrics so momentum stays alive." }
];

const retreatFaq = [
  {
    question: "Who is this retreat for?",
    answer: "Growth-obsessed founders and creators already inside Trinity Command who want embodied alignment and operational leverage."
  },
  {
    question: "How selective is the cohort?",
    answer: "We review intention forms and biometric baselines to ensure the circle can hold depth. Expect outreach within 72 hours of applying."
  },
  {
    question: "Can I attend without Trinity Command?",
    answer: "The retreat is designed for active members. Apply anyway and we will recommend onboarding steps before confirming a seat."
  },
  {
    question: "What support happens post-retreat?",
    answer: "Guides host weekly integration circles for 30 days, and Trinity agents deliver automated nudges tied to your mission plan."
  }
];

export default function RetreatPage() {
  return (
    <main className="pb-24">
      <section id="overview" className="container-px mx-auto max-w-6xl pt-16">
        <Surface tone="highlight" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,99,255,0.25),transparent_60%)]" aria-hidden />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <Pill tone="success">Retreat</Pill>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Trinity Immersion Retreat</h1>
              <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                Three days to forge Body, Mind, and Soul alignment with the Brotherhood. Strategy councils, breath ceremonies,
                automation labs, and honors rituals co-create a container that stays alive the moment you return home.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/app/get-started" className="rounded-md bg-brand-500 px-4 py-2.5 font-medium text-white hover:bg-brand-600 transition">Reserve interest</Link>
                <Link href="/contact" className="rounded-md bg-white/10 px-4 py-2.5 font-medium text-white hover:bg-white/20 transition">Talk to a guide</Link>
              </div>
            </div>
            <div className="relative lg:w-[320px]">
              <div className="aspect-[4/5] w-full rounded-3xl border border-dashed border-white/20 bg-white/5 p-4 text-center text-sm text-neutral-400 flex items-center justify-center">
                Drop retreat hero image at <code className="bg-white/10 px-1.5 py-0.5 rounded">public/retreat/hero.jpg</code>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Tip: Aim for 1400x1750px imagery with soft gradients so it melts into the dark background.
              </p>
            </div>
          </div>
        </Surface>
      </section>

      <section className="container-px mx-auto max-w-6xl mt-10">
        <Surface tone="default" className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Retreat Navigator</div>
          <div className="flex flex-wrap gap-2">
            {experienceMenu.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                {item.label}
              </a>
            ))}
          </div>
        </Surface>
      </section>

      <section id="tracks" className="container-px mx-auto max-w-6xl mt-16 grid gap-6 lg:grid-cols-3">
        {immersionTracks.map((track) => (
          <Surface key={track.title} tone="default" className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white">{track.title}</div>
              <Pill tone="warning">Track</Pill>
            </div>
            <p className="mt-3 text-sm text-neutral-300">{track.description}</p>
            <div className="mt-4 text-xs text-neutral-400">Highlights</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-neutral-300">
              {track.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-dashed border-white/10 bg-white/5 p-3 text-xs text-neutral-400">
              Image cue: {track.imageHint}
            </div>
          </Surface>
        ))}
      </section>

      <section id="rhythm" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Cadence"
            title="Retreat rhythm"
            description="Every day blends embodied work, strategic design, and soul alignment so momentum sticks."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {retreatRhythm.map((block) => (
              <div key={block.phase} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-neutral-400">
                  <span>{block.phase}</span>
                  <Pill tone="default">{block.title}</Pill>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-300">
                  {block.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Surface>
      </section>

      <section id="logistics" className="container-px mx-auto max-w-6xl mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Operations"
            title="Logistics at a glance"
            description="Everything you need to prepare, plus the internal cues for creative assets."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {logisticsBoard.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{item.label}</div>
                <div className="mt-2 text-white font-semibold">{item.value}</div>
                <p className="mt-2 text-xs text-neutral-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Asset dropzones"
            title="Where imagery lives"
            description="Keep files in /public/retreat so Next.js can ship optimized assets."
          />
          <ul className="mt-4 space-y-3 text-xs text-neutral-300">
            {assetDropzones.map((asset) => (
              <li key={asset.slot} className="rounded-xl border border-dashed border-white/10 bg-white/5 p-3">
                <div className="text-sm font-semibold text-white">{asset.slot}</div>
                <div className="mt-1 text-neutral-400">{asset.path}</div>
                <div className="mt-1 text-neutral-500">{asset.notes}</div>
              </li>
            ))}
          </ul>
        </Surface>
      </section>

      <section id="integration" className="container-px mx-auto max-w-6xl mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Integration"
            title="Flow from immersion to execution"
            description="Guided reflections, AI recap packets, and 90-day missions keep the retreat alive once everyone is home."
          />
          <BulletList items={integrationHighlights} />
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="What to bring"
            title="Pack light, arrive ready"
          />
          <BulletList items={packingList} />
          <div className="mt-6 text-xs text-neutral-400">
            Use public/retreat/checklist.pdf if you want a printable pack list for members.
          </div>
        </Surface>
      </section>

      <section id="faq" className="container-px mx-auto max-w-6xl mt-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Questions"
            title="Retreat FAQ"
            description="Still deciding? Here is what most brothers want to know before committing."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {retreatFaq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">{item.question}</div>
                <p className="mt-2 text-sm text-neutral-300">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/contact" className="rounded-md bg-brand-500 px-4 py-2.5 font-medium text-white hover:bg-brand-600 transition">Contact the team</Link>
            <Link href="/app/get-started" className="rounded-md bg-white/10 px-4 py-2.5 font-medium text-white hover:bg-white/20 transition">Start your intake</Link>
          </div>
        </Surface>
      </section>
    </main>
  );
}



