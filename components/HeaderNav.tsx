"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/app", label: "Command" },
  { href: "/hub", label: "Hub" },
  { href: "/retreat", label: "Retreat" },
  { href: "/coaches", label: "Coaches" },
  { href: "/agents", label: "Agents" },
  { href: "/learn", label: "Learn" },
  { href: "/pricing", label: "Pricing" }
];

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-5 text-[15px] text-neutral-300">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
        const base = "px-2 py-1 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600";
        const cls = isActive ? `text-white bg-white/10 ${base}` : `hover:text-white ${base}`;
        return (
          <Link key={item.href} href={item.href} className={cls}>
            {item.label}
          </Link>
        );
      })}
      <div className="ml-2 hidden sm:flex items-center gap-2">
        <Link href="/app" className="rounded-md bg-brand-600 hover:bg-brand-700 px-3 py-1.5 text-sm font-medium text-white">Open App</Link>
        <Link href="/app/coach" className="rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm font-medium text-white">Try Coach</Link>
      </div>
    </nav>
  );
}

