"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getLocal, setLocal } from "@/lib/clientStore";

type PlanSection = { title: string; items: string[] };
type SavedPlan = {
  id: string;
  name: string;
  horizon: number;
  createdAt: number;
  plan: PlanSection[];
};

type Props = { params: { id: string } };

export default function PlanDetailPage({ params }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const collection = getLocal<SavedPlan[]>("plans.saved", []);
    setSavedPlans(collection);
    setActiveId(getLocal<string | null>("plans.active", null));
    setLoading(false);
  }, []);

  const plan = useMemo(() => savedPlans.find((entry) => entry.id === params.id) || null, [savedPlans, params.id]);

  function markActive() {
    if (!plan) return;
    setLocal("plans.active", plan.id);
    setActiveId(plan.id);
  }

  function openPlanner() {
    router.push("/app/plans");
  }

  function exportMarkdown() {
    if (!plan) return;
    const lines: string[] = [`# ${plan.name}`, "", `Horizon: ${plan.horizon} days`];
    for (const section of plan.plan) {
      lines.push("", `## ${section.title}`);
      for (const item of section.items) {
        lines.push(`- ${item}`);
      }
    }
    downloadBlob(lines.join("\n"), `${plan.name.replace(/\s+/g, "-").toLowerCase()}-${plan.horizon}d.md`, "text/markdown");
  }

  function exportJSON() {
    if (!plan) return;
    downloadBlob(JSON.stringify(plan, null, 2), `${plan.name.replace(/\s+/g, "-").toLowerCase()}.json`, "application/json");
  }

  function exportICS() {
    if (!plan) return;
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 0, 0);
    const lines: string[] = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Trinity AI//Plan Detail//EN"];
    for (let day = 0; day < plan.horizon; day++) {
      const date = new Date(start.getTime());
      date.setDate(start.getDate() + day);
      const stamp = formatICS(date);
      const end = formatICS(new Date(date.getTime() + 60 * 60 * 1000));
      const summary = `${plan.name} - Day ${day + 1}`;
      const items = plan.plan
        .flatMap((section) => section.items.slice(0, 1).map((item) => `${section.title}: ${item}`))
        .slice(0, 3);
      const description = items.join("\\n");
      lines.push("BEGIN:VEVENT");
      lines.push(`UID:plan-${plan.id}-${day}@trinity.ai`);
      lines.push(`DTSTAMP:${stamp}`);
      lines.push(`DTSTART:${stamp}`);
      lines.push(`DTEND:${end}`);
      lines.push(`SUMMARY:${summary}`);
      if (description) lines.push(`DESCRIPTION:${description}`);
      lines.push("END:VEVENT");
    }
    lines.push("END:VCALENDAR");
    downloadBlob(lines.join("\r\n"), `${plan.name.replace(/\s+/g, "-").toLowerCase()}-${plan.horizon}d.ics`, "text/calendar");
  }

  if (loading) {
    return (
      <div className="glass rounded-2xl p-6">
        <div className="text-sm text-neutral-400">Loading plan...</div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="glass rounded-2xl p-6">
        <div className="text-lg font-semibold">Plan not found</div>
        <p className="mt-2 text-sm text-neutral-300">
          We could not locate that saved plan. It may have been removed or is stored on another device.
        </p>
        <Link
          href="/app/plans"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Return to Plan Studio
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">Saved plan</div>
            <h1 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h1>
            <p className="mt-2 text-sm text-neutral-300">
              {plan.horizon}-day horizon · Saved {new Date(plan.createdAt).toLocaleString()}
            </p>
            {activeId === plan.id ? (
              <p className="mt-1 text-xs text-brand-300">Active plan · powering Check-in and Review flows</p>
            ) : (
              <button
                onClick={markActive}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700"
              >
                Set as active
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button onClick={exportMarkdown} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
              Export Markdown
            </button>
            <button onClick={exportJSON} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
              Export JSON
            </button>
            <button onClick={exportICS} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
              Export ICS
            </button>
            <button onClick={openPlanner} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
              Open planner
            </button>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="text-sm font-semibold text-white">Plan structure</div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {plan.plan.map((section) => (
            <div key={section.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-medium text-white">{section.title}</div>
              <ul className="mt-2 grid gap-1 text-sm text-neutral-300 list-disc pl-5">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function downloadBlob(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function formatICS(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
