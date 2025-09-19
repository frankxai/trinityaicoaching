import Link from "next/link";

const navItems = [
  { href: "/hub", label: "Overview" },
  { href: "/hub/programs", label: "Program Studio" },
  { href: "/hub/agents", label: "Agent Library" },
  { href: "/hub/transparency", label: "Transparency" }
];

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-px mx-auto max-w-6xl py-10">
      <h1 className="text-2xl font-semibold">Coach Hub</h1>
      <p className="mt-2 text-neutral-400">Programs, agents, transparency</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <aside className="glass rounded-2xl p-6 lg:col-span-1">
          <nav className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="lg:col-span-2">{children}</main>
      </div>
    </div>
  );
}
