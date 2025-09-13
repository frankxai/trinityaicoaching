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
          url: 'https://trinityaicoaching.vercel.app',
          sameAs: ['https://github.com/frankxai/trinityaicoaching']
        })}</Script>
        <div className="min-h-screen bg-hero bg-no-repeat bg-top">
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="container-px mx-auto flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img alt="Trinity" src="/brand/icon.svg" className="h-7 w-7" />
                <span className="font-semibold tracking-tight">Trinity AI</span>
              </Link>
              <HeaderNav />
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
              <div className="flex gap-4">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/app" className="hover:text-white">Dashboard</Link>
                <Link href="/app/coach" className="hover:text-white">Coach</Link>
                <Link href="/learn" className="hover:text-white">Learn</Link>
                <Link href="/faq" className="hover:text-white">FAQ</Link>
                <Link href="/legal/safety" className="hover:text-white">Safety</Link>
                <a href="https://github.com/" className="hover:text-white" target="_blank">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
