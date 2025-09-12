import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container-px mx-auto max-w-5xl py-16">
      <h1 className="text-3xl font-semibold text-center">Pricing</h1>
      <p className="mt-3 text-neutral-300 text-center">Start with momentum, then level up with accountability.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-neutral-300">Plan generator + Coach chat</p>
          <ul className="mt-4 text-sm text-neutral-300 list-disc pl-5 grid gap-1">
            <li>7/30/90-day plans</li>
            <li>Coach chat (Body/Mind/Soul)</li>
            <li>Journal + summaries</li>
            <li>Local habit tracking</li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-semibold">$0</div>
            <Link className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium" href="/app">Open App</Link>
          </div>
        </div>
        <div className="glass rounded-2xl p-6 border border-brand-500/40">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-neutral-300">Accountability + saved data + integrations</p>
          <ul className="mt-4 text-sm text-neutral-300 list-disc pl-5 grid gap-1">
            <li>Saved plans and journals</li>
            <li>Reminders and weekly reviews</li>
            <li>Skool/community access</li>
            <li>Priority support</li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-semibold">$29/mo</div>
            <a className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20" href="https://skool.com/your-community" target="_blank">Join Skool</a>
          </div>
        </div>
      </div>
    </div>
  );
}

