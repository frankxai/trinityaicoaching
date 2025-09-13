export default function HubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-px mx-auto max-w-6xl py-10">
      <h1 className="text-2xl font-semibold">Coach Hub</h1>
      <p className="mt-2 text-neutral-400">Programs, Agents, Members, Intake</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <aside className="glass rounded-2xl p-6 lg:col-span-1">
          <nav className="grid gap-2 text-sm">
            <a href="/hub" className="hover:text-white">Overview</a>
            <a href="/hub/programs" className="hover:text-white">Program Studio</a>
            <a href="/hub/agents" className="hover:text-white">Agent Library</a>
            <a href="/hub/members" className="hover:text-white">Members</a>
            <a href="/hub/intake" className="hover:text-white">Intake</a>
            <a href="/billing" className="hover:text-white">Billing</a>
          </nav>
        </aside>
        <main className="lg:col-span-2">{children}</main>
      </div>
    </div>
  );
}

