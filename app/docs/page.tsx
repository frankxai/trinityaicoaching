import Link from "next/link";

const links = [
  { href: "/docs/architecture", label: "Architecture" },
  { href: "/docs/agents", label: "Agents" },
  { href: "/docs/api", label: "API" },
  { href: "/docs/deployment", label: "Deployment" },
  { href: "/docs/mcp", label: "MCP Server" },
  { href: "/docs/portal", label: "Portal Playbook" },
  { href: "/docs/seo", label: "SEO Strategy" },
  { href: "/docs/skool", label: "Skool Assets" },
];

export default function DocsPage() {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Documentation</h2>
      <p className="mt-2 text-neutral-300">Read the docs in the repository for deeper details.</p>
      <ul className="mt-4 grid gap-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link className="text-brand-300 hover:text-brand-200" href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-neutral-400">These links point to simple pages; full markdown lives in the <code>docs/</code> folder.</p>
    </div>
  );
}
