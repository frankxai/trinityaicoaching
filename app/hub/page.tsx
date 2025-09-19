import Link from "next/link";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";
import {
  avatarPersonas,
  learningModules,
  automationPlaybooks,
  contributionPrograms,
  toolIntegrations
} from "@/lib/portalData";

const opsAvatars = avatarPersonas.filter((avatar) => avatar.archetype === "Operations" || avatar.archetype === "Integrative");
const buildModules = learningModules;
const playbooks = automationPlaybooks;
const incentives = contributionPrograms;
const integrations = toolIntegrations;

export default function HubHome() {
  return (
    <div className="space-y-8">
      <Surface tone="highlight">
        <SectionHeading
          eyebrow="Coach HQ"
          title="Orchestrate avatars, programs, and incentives"
          description="Launch new experiences, monitor operations, and reward the Brotherhood in one place."
          actions={[
            { href: "/app/agents-builder", label: "Create Agent" },
            { href: "/app/plans", label: "Open Plan Studio" }
          ]}
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">Program Studio</div>
            <p className="mt-2 text-xs text-neutral-300">Design Body, Mind, and Soul modules with avatar delivery, rituals, and metrics in sync.</p>
            <Link href="/hub/programs" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600">Open Studio</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">Agent Library</div>
            <p className="mt-2 text-xs text-neutral-300">Assign avatars, deploy playbooks, and review capability updates in real time.</p>
            <Link href="/hub/agents" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20">Browse Agents</Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">Integrity Console</div>
            <p className="mt-2 text-xs text-neutral-300">Monitor transparency dashboards, token ledgers, and Brotherhood honors.</p>
            <Link href="/hub/transparency" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20">View Console</Link>
          </div>
        </div>
      </Surface>

      <Surface tone="default">
        <SectionHeading
          eyebrow="Module Builder"
          title="Featured programs"
          description="Blend ritual, automation, and human coaching. Duplicate a base or design from scratch."
          actions={[{ href: "https://github.com/frankxai/trinityaicoaching/blob/main/Trinity%20AI%20Knowledgebase.md", label: "Knowledgebase", external: true }]}
        />
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {buildModules.map((module) => (
            <div key={module.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{module.title}</div>
                <Pill>{module.track}</Pill>
              </div>
              <p className="mt-2 text-xs text-neutral-300">{module.outcome}</p>
              <div className="mt-3 text-xs text-neutral-400">Duration: {module.duration} Â· Format: {module.format}</div>
              <div className="mt-3 text-xs text-neutral-400">
                Ritual anchors:
                <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                  {module.rituals.map((ritual) => (
                    <li key={ritual}>{ritual}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Surface>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Avatar Ops"
            title="Operations & guardians"
            description="Keep the avatar squad sharp and ready for new cohorts."
            actions={[{ href: "/agents", label: "Open agent library" }]}
          />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {opsAvatars.map((avatar) => (
              <div key={avatar.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{avatar.name}</span>
                  <Pill>{avatar.archetype}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{avatar.tagline}</p>
                <div className="mt-3 text-xs text-neutral-400">
                  Signature moves:
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {avatar.signatureMoves.map((move) => (
                      <li key={move}>{move}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 text-xs text-neutral-400">Active experiments: {avatar.activeExperiments.join(" | ")}</div>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Incentives"
            title="Contribution bounties"
            description="Reward brothers and coaches who ship improvements." />
          <div className="mt-4 grid gap-3">
            {incentives.map((program) => (
              <div key={program.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{program.title}</span>
                  <Pill tone="warning">{program.reward}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{program.summary}</p>
                <div className="mt-3 text-xs text-neutral-400">
                  Proof:
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {program.proof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Automation"
            title="Operational playbooks"
            description="Deploy AI agents across onboarding, content, and ritual reminders."
            actions={[{ href: "https://github.com/frankxai/trinityaicoaching/blob/main/Agent.md", label: "Agent guide", external: true }]}
          />
          <div className="mt-4 grid gap-3">
            {playbooks.map((playbook) => (
              <div key={playbook.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{playbook.title}</span>
                  <Pill>{playbook.ownerAvatar}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{playbook.problem}</p>
                <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-neutral-200">
                  {playbook.flow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Integrations"
            title="Tool connectors"
            description="Ensure the Trinity stack plugs into every external service."
            actions={[{ href: "https://github.com/frankxai/trinityaicoaching/blob/main/docs/API.md", label: "API reference", external: true }]}
          />
          <div className="mt-4 grid gap-3">
            {integrations.map((tool) => (
              <div key={tool.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{tool.title}</span>
                  <Pill tone="success">{tool.category}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{tool.description}</p>
                <BulletList items={tool.actions.map((action) => ({ label: action, detail: tool.surfacedIn.join(", ") }))} />
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </div>
  );
}

