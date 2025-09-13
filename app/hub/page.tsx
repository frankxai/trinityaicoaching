import Link from "next/link";

export default function HubHome() {
  return (
    <div className="grid gap-6">
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Welcome to Coach Hub</h2>
        <p className="text-neutral-300 mt-2">Design programs, manage agents, and onboard members. Connect a database and billing to save your workspaces.</p>
        <div className="mt-4 flex gap-2">
          <Link href="/hub/programs" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">Open Program Studio</Link>
          <Link href="/hub/agents" className="rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Agent Library</Link>
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h3 className="text-base font-semibold">Setup checklist</h3>
        <ul className="mt-3 text-sm text-neutral-300 list-disc pl-5">
          <li>Add DATABASE_URL on Vercel and run Prisma migrations</li>
          <li>Configure NEXTAUTH_SECRET and providers (or use credentials for dev)</li>
          <li>Set STRIPE_SECRET_KEY and product price to enable billing</li>
        </ul>
      </section>
    </div>
  );
}

