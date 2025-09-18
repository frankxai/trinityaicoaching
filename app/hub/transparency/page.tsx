import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";
import { momentumMetrics, journeyMilestones, contributionPrograms, automationPlaybooks } from "@/lib/portalData";

export default function TransparencyPage() {
  return (
    <div className="space-y-6">
      <Surface tone="highlight">
        <SectionHeading
          eyebrow="Integrity"
          title="Transparency Console"
          description="Monitor program health, milestone celebrations, and incentive flow so Trinity stays accountable."
          actions={[{ href: "/docs/portal", label: "Portal playbook" }]}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {momentumMetrics.map((metric) => (
            <div key={metric.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{metric.title}</div>
                <Pill tone="default">{metric.cadence}</Pill>
              </div>
              <p className="mt-2 text-xs text-neutral-300">{metric.description}</p>
              <BulletList items={metric.inputs.map((input) => ({ label: input }))} />
            </div>
          ))}
        </div>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Milestones"
            title="Brotherhood checkpoint feed"
            description="Track who is crossing key thresholds and who is celebrating with them."
          />
          <div className="mt-4 grid gap-3">
            {journeyMilestones.map((milestone) => (
              <div key={milestone.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{milestone.title}</div>
                  <Pill tone="success">Signals: {milestone.signals.length}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{milestone.description}</p>
                <div className="mt-3 text-xs text-neutral-400">
                  Celebrants: {milestone.celebrants.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface tone="default">
          <SectionHeading
            eyebrow="Incentives"
            title="Contribution programs"
            description="Rewards flowing to brothers, coaches, and builders for improving the OS."
          />
          <div className="mt-4 grid gap-3">
            {contributionPrograms.map((program) => (
              <div key={program.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{program.title}</div>
                  <Pill tone="warning">{program.reward}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{program.summary}</p>
                <BulletList items={program.proof.map((item) => ({ label: item }))} />
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <Surface tone="default">
        <SectionHeading
          eyebrow="Automation"
          title="Guardian playbooks"
          description="See which automations are in-flight and who is responsible for their integrity checks."
        />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {automationPlaybooks.map((playbook) => (
            <div key={playbook.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{playbook.title}</div>
                <Pill>{playbook.ownerAvatar}</Pill>
              </div>
              <p className="mt-2 text-xs text-neutral-300">{playbook.problem}</p>
              <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-neutral-200">
                {playbook.flow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="mt-3 text-xs text-neutral-400">Tools: {playbook.tools.join(", ")}</div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
