"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SectionHeading, Surface, Pill, BulletList } from "@/components/ui/primitives";
import { getLocal, setLocal } from "@/lib/clientStore";

type PlanSection = { title: string; items: string[] };

type SavedPlan = {
  id: string;
  name: string;
  horizon: number;
  createdAt: number;
  plan: PlanSection[];
};

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function exportMarkdown(entry: SavedPlan) {
  if (!entry.plan.length) return;
  const lines: string[] = [
    `# ${entry.name}`,
    "",
    `Horizon: ${entry.horizon} days`,
    `Created: ${new Date(entry.createdAt).toLocaleString()}`,
    "",
  ];
  entry.plan.forEach((section) => {
    lines.push(`## ${section.title}`);
    section.items.forEach((item) => lines.push(`- ${item}`));
    lines.push("");
  });
  downloadBlob(new Blob([lines.join("\n")], { type: "text/markdown" }), `${entry.name.replace(/\s+/g, '-')}.md`);
}

function exportJSON(entry: SavedPlan) {
  if (!entry.plan.length) return;
  const payload = { horizon: entry.horizon, name: entry.name, plan: entry.plan };
  downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }), `${entry.name.replace(/\s+/g, '-')}.json`);
}

function exportICS(entry: SavedPlan) {
  if (!entry.plan.length) return;
  const start = new Date();
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Trinity AI//Plan Detail//EN",
  ];
  entry.plan.forEach((section, index) => {
    const dt = new Date(start.getTime() + index * 24 * 60 * 60 * 1000);
    const startISO = dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const endISO = new Date(dt.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:plan-${entry.id}-${index}@trinity`);
    lines.push(`DTSTAMP:${startISO}`);
    lines.push(`DTSTART:${startISO}`);
    lines.push(`DTEND:${endISO}`);
    lines.push(`SUMMARY:${section.title}`);
    lines.push(`DESCRIPTION:${section.items.join("; ")}`);
    lines.push("END:VEVENT");
  });
  lines.push("END:VCALENDAR");
  downloadBlob(new Blob([lines.join("\r\n")], { type: "text/calendar" }), `trinity-plan-${entry.horizon}d.ics`);
}

export function PlanDetailClient({ id }: { id: string }) {
  const router = useRouter();
  const [entry, setEntry] = useState<SavedPlan | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = getLocal<SavedPlan[]>("plans.saved", []);
    const active = getLocal<string | null>("plans.active", null);
    setActiveId(active);
    setEntry(saved.find((plan) => plan.id === id) ?? null);
    setLoaded(true);
  }, [id]);

  const isActive = entry && activeId === entry.id;
  const createdLabel = useMemo(() => {
    if (!entry) return null;
    try {
      return new Date(entry.createdAt).toLocaleString();
    } catch {
      return null;
    }
  }, [entry]);

  function handleSetActive() {
    if (!entry) return;
    setLocal("plans.active", entry.id);
    setActiveId(entry.id);
  }

  function handleDelete() {
    if (!entry) return;
    const saved = getLocal<SavedPlan[]>("plans.saved", []);
    const remaining = saved.filter((plan) => plan.id !== entry.id);
    setLocal("plans.saved", remaining);
    if (activeId === entry.id) {
      const fallback = remaining.length ? remaining[0].id : null;
      setLocal("plans.active", fallback);
      setActiveId(fallback);
    }
    setEntry(null);
    router.push("/app/plans");
  }

  if (!loaded) {
    return (
      <main className="container-px mx-auto max-w-6xl py-16">
        <Surface tone="default">
          <p className="text-sm text-neutral-300">Loading plan...</p>
        </Surface>
      </main>
    );
  }

  if (!entry) {
    return (
      <main className="container-px mx-auto max-w-6xl py-16">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Plans"
            title="Plan not found"
            description="This plan is no longer saved locally."
          />
          <div className="mt-6">
            <Link href="/app/plans" className="rounded-md bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition">
              Back to plans
            </Link>
          </div>
        </Surface>
      </main>
    );
  }

  return (
    <main className="container-px mx-auto max-w-6xl py-16 space-y-8">
      <Surface tone="highlight">
        <SectionHeading
          eyebrow="Plans"
          title={entry.name}
          description="Review the saved mission blueprint, export formats, or set it as your active plan."
        />
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-neutral-300">
            Horizon: {entry.horizon} days
          </span>
          {createdLabel && (
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-neutral-300">
              Saved {createdLabel}
            </span>
          )}
          {isActive ? (
            <Pill tone="success">Active plan</Pill>
          ) : (
            <button
              onClick={handleSetActive}
              className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition"
            >
              Set as active
            </button>
          )}
          <Link href="/app/plans" className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
            Back to planner
          </Link>
          <button
            onClick={handleDelete}
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            Delete plan
          </button>
        </div>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
        <Surface tone="default">
          <SectionHeading
            eyebrow="Mission"
            title="Plan structure"
            description="Each section carries the rituals and actions your avatars reinforce."
          />
          <div className="mt-6 grid gap-4">
            {entry.plan.map((section) => (
              <div key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  <span>{section.title}</span>
                  <Pill tone="warning">{section.items.length} steps</Pill>
                </div>
                <BulletList items={section.items.map((item) => ({ label: item }))} />
              </div>
            ))}
          </div>
        </Surface>
        <Surface tone="default">
          <SectionHeading
            eyebrow="Exports"
            title="Take it anywhere"
            description="Download formats that plug into docs, databases, or calendar rituals."
          />
          <div className="mt-6 grid gap-3">
            <button onClick={() => exportMarkdown(entry)} className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
              Export Markdown
            </button>
            <button onClick={() => exportJSON(entry)} className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
              Export JSON
            </button>
            <button onClick={() => exportICS(entry)} className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
              Export Calendar (.ics)
            </button>
          </div>
        </Surface>
      </div>
    </main>
  );
}
