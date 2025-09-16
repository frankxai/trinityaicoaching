const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trinityaicoaching.vercel.app";

export const metadata = {
  title: "Trinity AI Coaching Platform",
  description: "Transform body, mind, and soul with AI-aligned coaching.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Trinity AI Coaching Platform",
    description: "Transform body, mind, and soul with AI-aligned coaching.",
    url: siteUrl,
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Trinity AI" }
    ],
  },
  twitter: { card: 'summary_large_image', title: 'Trinity AI Coaching Platform', description: 'Transform body, mind, and soul with AI‑aligned coaching.' },
  icons: {
    icon: "/favicon.svg"
  }
};

import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import HeaderNav from "@/components/HeaderNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Trinity AI',
          url: siteUrl,
          sameAs: ['https://github.com/frankxai/trinityaicoaching']
        })}</Script>
        <div className="min-h-screen bg-hero bg-no-repeat bg-top">
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
            <div className="container-px mx-auto max-w-7xl flex h-[68px] items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img alt="Trinity" src="/brand/icon.svg" className="h-8 w-8" />
                <span className="font-semibold tracking-tight text-[15px]">Trinity AI</span>
              </Link>
              <HeaderNav />
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Link href="/hub" className="hover:text-white">Hub</Link>
                <Link href="/sign-in" className="hover:text-white">Sign In</Link>
              </div>
            </div>
          </header>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-white/10 px-3 py-1 rounded">Skip to content</a>
          <main id="main">{children}</main>
          <footer className="border-t border-white/10 mt-24">
            <div className="container-px mx-auto py-12 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img alt="Trinity" src="/brand/icon.svg" className="h-5 w-5" />
                <span>© {new Date().getFullYear()} Trinity AI</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/app" className="hover:text-white">Trinity Command</Link>
                <Link href="/hub" className="hover:text-white">Coach Hub</Link>
                <Link href="/docs/portal" className="hover:text-white">Portal Playbook</Link>
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <Link href="/learn" className="hover:text-white">Learn</Link>
                <Link href="/faq" className="hover:text-white">FAQ</Link>
                <Link href="/roadmap" className="hover:text-white">Roadmap</Link>
                <a href="https://github.com/frankxai/trinityaicoaching" className="hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
