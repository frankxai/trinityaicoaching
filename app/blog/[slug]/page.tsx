import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";
import Script from "next/script";
import type { Metadata } from "next";
import { parseFrontMatter } from "@/lib/md";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const file = resolve(process.cwd(), 'content', 'blog', params.slug + '.md');
  const raw = readFileSync(file, 'utf8');
  const { meta } = parseFrontMatter(raw);
  const title = meta.title || params.slug;
  const description = meta.description || 'Trinity AI blog';
  const url = `https://trinityaicoaching.vercel.app/blog/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const file = resolve(process.cwd(), 'content', 'blog', params.slug + '.md');
  const raw = readFileSync(file, 'utf8');
  const { meta, body } = parseFrontMatter(raw);
  const html = marked.parse(body);
  const title = meta.title || params.slug;
  const date = meta.date || '';
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {date && <div className="text-neutral-400 mt-1 text-sm">{date}</div>}
      <Script type="application/ld+json" id="ld-article" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        datePublished: date || undefined,
        description: meta.description || undefined,
        author: meta.author || 'Trinity AI',
        url: `https://trinityaicoaching.vercel.app/blog/${params.slug}`
      }) }} />
      <article className="prose prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
