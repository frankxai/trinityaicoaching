export const metadata = {
  title: "Trinity AI Coaching Platform",
  description: "Transform body, mind, and soul with AI-aligned coaching.",
  metadataBase: new URL("https://trinity.ai.local"),
  openGraph: {
    title: "Trinity AI Coaching Platform",
    description: "Transform body, mind, and soul with AI-aligned coaching.",
    url: "https://trinity.ai.local",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Trinity AI" }
    ],
  },
  icons: {
    icon: "/favicon.svg"
  }
};

import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-hero bg-no-repeat bg-top">
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="container-px mx-auto flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img alt="Trinity" src="/brand/icon.svg" className="h-7 w-7" />
                <span className="font-semibold tracking-tight">Trinity AI</span>
              </Link>
              <nav className="flex items-center gap-4 text-sm text-neutral-300">
                <Link href="/app" className="hover:text-white">App</Link>
                <Link href="/app/coach" className="hover:text-white">Coach</Link>
                <Link href="/app/plans" className="hover:text-white">Plans</Link>
                <Link href="/app/journal" className="hover:text-white">Journal</Link>
                <Link href="/app/habits" className="hover:text-white">Habits</Link>
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <Link href="/roadmap" className="hover:text-white">Roadmap</Link>
                <Link href="/agents" className="hover:text-white">Agents</Link>
                <a href="/coaches/" className="hover:text-white">Coaches</a>
                <Link href="/pricing" className="hover:text-white">Pricing</Link>
                <a href="https://vercel.com/" className="hover:text-white" target="_blank">Deploy</a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-white/10 mt-24">
            <div className="container-px mx-auto py-12 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img alt="Trinity" src="/brand/icon.svg" className="h-5 w-5" />
                <span>© {new Date().getFullYear()} Trinity AI</span>
              </div>
              <div className="flex gap-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/app" className="hover:text-white">Dashboard</Link>
                <Link href="/app/coach" className="hover:text-white">Coach</Link>
                <a href="https://github.com/" className="hover:text-white" target="_blank">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
