"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { SectionHeading, Surface, Pill, BulletList, StatBlock } from "@/components/ui/primitives";
import { getLocal, setLocal } from "@/lib/clientStore";
import { todayISO } from "@/lib/date";
import {
  dashboardCards,
  learningModules,
  toolIntegrations,
  contributionPrograms,
  journeyMilestones,
  automationPlaybooks
} from "@/lib/portalData";

export default function DashboardPage() {
  const [activePlan, setActivePlan] = useState<any | null>(null);
  useEffect(() => {
    const saved = getLocal<any[]>("plans.saved", []);
    const id = getLocal<string | null>("plans.active", null);
    const ap = saved.find((p) => p.id === id) || null;
    setActivePlan(ap);
  }, []);

  const today = todayISO();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const topTasks = useMemo(() => {
    const p = activePlan?.plan as { title: string; items: string[] }[] | undefined;
    if (!p) return [] as string[];
    const items = p.flatMap((section) => section.items.map((item) => section.title + ": " + item));
    return items.slice(0, 3);
  }, [activePlan]);

  useEffect(() => {
    const map = getLocal<Record<string, any>>("checkins.map", {});
    const tasks = map[today]?.tasks || [];
    const selection: Record<string, boolean> = {};
    tasks.forEach((task: string) => {
      selection[task] = true;
    });
    setChecked(selection);
  }, [today]);

  function toggleTask(task: string) {
    setChecked((prev) => ({ ...prev, [task]: !prev[task] }));
    const map = getLocal<Record<string, any>>("checkins.map", {});
    const entry = map[today] || { date: today, tasks: [], mood: 3, energy: 3 };
    const exists = new Set(entry.tasks || []);
    if (exists.has(task)) {
      exists.delete(task);
    } else {
      exists.add(task);
    }
    entry.tasks = Array.from(exists);
    map[today] = entry;
    setLocal("checkins.map", map);
  }

  const defaultTasks = [
    "Body: 10-minute mobility + nasal breathing",
    "Mind: 90-minute focus block without notifications",
    "Soul: Evening reflection with gratitude + lesson"
  ];

  const activeModules = learningModules.slice(0, 3);
  const featuredAutomations = automationPlaybooks.slice(0, 2);
  const featuredTools = toolIntegrations.slice(0, 3);
  const honors = journeyMilestones.slice(0, 3);

  return (
    <div className="space-y-8">
      <Surface tone="default">
        <SectionHeading
          eyebrow="Daily Command"
          title="Triad Ritual Stack"
          description="Check your anchors for today, log momentum, and route updates to your coach team."
          actions={[
            { href: "/app/checkin", label: "Open Check-in" },
            { href: "/app/review", label: "Weekly Review" }
          ]}
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">Top actions</div>
            <div className="mt-3 grid gap-2 text-sm text-neutral-200">
              {(topTasks.length > 0 ? topTasks : defaultTasks).map((task) => (
                <label key={task} className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                  <input
                    type="checkbox"
                    checked={!!checked[task]}
                    onChange={() => toggleTask(task)}
                    className="mt-1 h-4 w-4 rounded border border-white/20 bg-neutral-950"
                  />
                  <span>{task}</span>
                </label>
              ))}
            </div>
            <div className="mt-4 text-xs text-neutral-400">
              Generated from your current plan. Update actions in the <Link href="/app/plans" className="text-brand-300 hover:text-brand-200">Plan Studio</Link>.
            </div>
          </div>
          <div className="grid gap-3">
            <StatBlock label="Check-in streak" value="7 days" delta="+1" trend="up" />
            <StatBlock label="Brotherhood tokens" value="145" delta="3 pending honors" trend="flat" />
            <StatBlock label="Focus energy" value="82%" delta="Wearable sync good" trend="up" />
          </div>
        </div>
      </Surface>

      <Surface tone="default">
        <SectionHeading
          eyebrow="Mission Threads"
          title="Command Cards"
          description="Each card is a control surface orchestrated by your avatar team."
          actions={[{ href: "/app/super-agent", label: "Launch Super Agent" }]}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map((card) => (
            <div key={card.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{card.label}</div>
                <Pill tone="default">{card.relatedTo.join(" · ")}</Pill>
              </div>
              <p className="mt-3 text-sm text-neutral-300">{card.description}</p>
              <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                {card.actions.map((action) => (
                  <li key={action} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Surface>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Learning Modules"
            title="Active growth cycles"
            description="Sustain momentum with guided tracks blending human coaching and avatar delivery."
            actions={[{ href: "/learn", label: "View Curriculum" }]}
          />
          <div className="mt-6 grid gap-4">
            {activeModules.map((module) => (
              <div key={module.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-white">{module.title}</div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Pill>{module.track}</Pill>
                    <Pill tone="warning">{module.duration}</Pill>
                    <span>{module.format}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{module.outcome}</p>
                <div className="mt-4 grid gap-2 text-xs text-neutral-200">
                  <div className="font-medium text-white">Rituals</div>
                  <div className="flex flex-wrap gap-2">
                    {module.rituals.map((ritual) => (
                      <span key={ritual} className="rounded-full border border-white/10 bg-white/10 px-3 py-1">{ritual}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-400">
                  North star: {module.metrics.northStar}
                </div>
              </div>
            ))}
          </div>
        </Surface>
        <div className="grid gap-6">
          <Surface tone="default">
            <SectionHeading
              eyebrow="Automation"
              title="Agent playbooks"
              description="Automate repetitive loops so coaches stay in deep work and presence."
            />
            <div className="mt-4 grid gap-3">
              {featuredAutomations.map((flow) => (
                <div key={flow.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span>{flow.title}</span>
                    <Pill>{flow.ownerAvatar}</Pill>
                  </div>
                  <p className="mt-2 text-xs text-neutral-300">{flow.problem}</p>
                  <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-neutral-200">
                    {flow.flow.map((step) => (
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
              title="Toolchain pulses"
              description="Where the portal meets the outside stack."
            />
            <div className="mt-4 grid gap-3">
              {featuredTools.map((tool) => (
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

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Brotherhood Honors"
            title="Milestones & rituals"
            description="Celebrate thresholds and keep the tribe accountable." />
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {honors.map((milestone) => (
              <div key={milestone.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-white">{milestone.title}</div>
                <p className="mt-2 text-xs text-neutral-300">{milestone.description}</p>
                <div className="mt-3 text-xs text-neutral-400">
                  Signals:
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {milestone.signals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 text-xs text-neutral-400">
                  Celebrants: {milestone.celebrants.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Contribution"
            title="Token missions"
            description="Earn Trinity tokens by building the ecosystem."
          />
          <div className="mt-4 grid gap-3">
            {contributionPrograms.map((program) => (
              <div key={program.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{program.title}</span>
                  <Pill tone="warning">{program.reward}</Pill>
                </div>
                <p className="mt-2 text-xs text-neutral-300">{program.summary}</p>
                <div className="mt-3 text-xs text-neutral-400">
                  Proof required:
                  <ul className="mt-1 list-disc pl-4 space-y-1 text-neutral-300">
                    {program.proof.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 text-xs text-neutral-400">Owned by {program.owner}</div>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </div>
  );
}
