import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="text-neutral-400 mt-3">The page you’re looking for doesn’t exist. Try the dashboard or homepage.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium" href="/">Home</Link>
        <Link className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium" href="/app">Dashboard</Link>
      </div>
    </div>
  );
}

