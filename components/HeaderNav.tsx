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
    <nav className="flex items-center gap-4 text-sm text-neutral-300">
      {items.map((i) => {
        const active = pathname === i.href || (i.href.endsWith("/") && pathname?.startsWith(i.href.replace(/\/$/, "")));
        const cls = active ? "text-white" : "hover:text-white";
        if (i.href.startsWith("/coaches")) return <a key={i.href} href={i.href} className={cls}>{i.label}</a>;
        return <Link key={i.href} href={i.href} className={cls}>{i.label}</Link>;
      })}
    </nav>
  );
}

