"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setLoading(true);
    await signIn("credentials", { email, callbackUrl: "/app" });
  }
  return (
    <div className="container-px mx-auto max-w-sm py-16">
      <div className="glass rounded-2xl p-6">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <p className="text-neutral-400 text-sm mt-1">Use your email to create a workspace. For production, configure OAuth providers.</p>
        <form onSubmit={submit} className="mt-4 grid gap-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="you@example.com" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-600" />
          <button disabled={loading} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-700">{loading? 'Signing in…' : 'Continue'}</button>
        </form>
      </div>
    </div>
  );
}

