export const metadata = { title: "Trinity App" };

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-px mx-auto max-w-6xl py-10">
      <h1 className="text-2xl font-semibold">Trinity Dashboard</h1>
      <p className="mt-2 text-neutral-400">Welcome back. Build momentum today.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <aside className="glass rounded-2xl p-6 lg:col-span-1">
            <nav className="grid gap-2 text-sm">
              <a href="/app/get-started" className="hover:text-white">Get Started</a>
              <a href="/app" className="hover:text-white">Overview</a>
              <a href="/app/coach" className="hover:text-white">Coach Chat</a>
              <a href="/app/super-agent" className="hover:text-white">Super Agent</a>
              <a href="/app/agents-chat" className="hover:text-white">Agents Chat</a>
              <a href="/app/agents-builder" className="hover:text-white">Agent Builder</a>
              <a href="/app/plans" className="hover:text-white">Plans</a>
              <a href="/app/intake" className="hover:text-white">Intake</a>
              <a href="/app/journal" className="hover:text-white">Journal</a>
              <a href="/app/habits" className="hover:text-white">Habits</a>
              <a href="/app/profile" className="hover:text-white">Profile</a>
              <a href="/app/checkin" className="hover:text-white">Check‑in</a>
              <a href="/app/review" className="hover:text-white">Weekly Review</a>
            </nav>
        </aside>
        <main className="lg:col-span-2">
          {children}
        </main>
      </div>
    </div>
  );
}
