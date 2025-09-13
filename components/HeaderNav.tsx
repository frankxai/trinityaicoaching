"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/app", label: "App" },
  { href: "/app/coach", label: "Coach" },
  { href: "/app/super-agent", label: "Super Agent" },
  { href: "/app/plans", label: "Plans" },
  { href: "/app/journal", label: "Journal" },
  { href: "/app/habits", label: "Habits" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/agents", label: "Agents" },
  { href: "/coaches/", label: "Coaches" },
  { href: "/pricing", label: "Pricing" }
];

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-5 text-[15px] text-neutral-300">
      {items.map((i) => {
        const active = pathname === i.href || (i.href.endsWith("/") && pathname?.startsWith(i.href.replace(/\/$/, "")));
        const base = "px-2 py-1 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600";
        const cls = active ? `text-white bg-white/10 ${base}` : `hover:text-white ${base}`;
        if (i.href.startsWith("/coaches")) return <a key={i.href} href={i.href} className={cls}>{i.label}</a>;
        return <Link key={i.href} href={i.href} className={cls}>{i.label}</Link>;
      })}
      <div className="ml-2 hidden sm:flex items-center gap-2">
        <Link href="/app" className="rounded-md bg-brand-600 hover:bg-brand-700 px-3 py-1.5 text-sm font-medium text-white">Open App</Link>
        <Link href="/app/coach" className="rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm font-medium text-white">Try Coach</Link>
      </div>
    </nav>
  );
}
