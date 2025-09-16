import { ReactNode } from "react";
import Link from "next/link";

// Primitive building blocks reused across the upgraded portal experience.

type Action = { label: string; href: string; external?: boolean };

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: Action[];
}) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-neutral-300 sm:text-base">{description}</p>
        )}
      </div>
      {actions && actions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {actions.map((action) =>
            action.external ? (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
              >
                {action.label}
              </a>
            ) : (
              <Link
                key={action.href}
                href={action.href}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
              >
                {action.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}

export function Surface({
  tone = "default",
  className = "",
  children
}: {
  tone?: "default" | "highlight" | "muted";
  className?: string;
  children: ReactNode;
}) {
  const base = "rounded-2xl border border-white/10 p-6 sm:p-8 transition";
  const tones: Record<string, string> = {
    default: "bg-white/5 hover:bg-white/[0.08]",
    highlight: "bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-white/5 border-brand-400/40 hover:from-brand-500/25",
    muted: "bg-white/10 hover:bg-white/20"
  };
  const classes = [base, tones[tone] ?? tones.default, className].filter(Boolean).join(" ");
  return <section className={classes}>{children}</section>;
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "success" | "warning" | "danger" }) {
  const tones: Record<string, string> = {
    default: "bg-white/10 text-white",
    success: "bg-emerald-500/20 text-emerald-200",
    warning: "bg-amber-500/20 text-amber-200",
    danger: "bg-rose-500/20 text-rose-200"
  };
  const classes = ["inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", tones[tone] ?? tones.default].join(" ");
  return <span className={classes}>{children}</span>;
}

export function StatBlock({
  label,
  value,
  delta,
  trend
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "flat" | "down";
}) {
  const trendMap: Record<string, string> = {
    up: "text-emerald-300",
    flat: "text-neutral-300",
    down: "text-rose-300"
  };
  const deltaClass = ["mt-1 text-xs", trend ? trendMap[trend] : "text-neutral-300"].join(" ");
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-neutral-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      {delta && <div className={deltaClass}>{delta}</div>}
    </div>
  );
}

export function BulletList({
  items
}: {
  items: { label: string; detail?: string }[];
}) {
  return (
    <ul className="grid gap-2 text-sm text-neutral-300">
      {items.map((item) => (
        <li key={item.label} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">
          <span className="font-medium text-white">{item.label}</span>
          {item.detail && <span className="block text-xs text-neutral-400">{item.detail}</span>}
        </li>
      ))}
    </ul>
  );
}
