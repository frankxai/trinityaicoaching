import { MetadataRoute } from 'next';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://trinity.ai.local';
  const pages = ['/', '/app', '/app/coach', '/app/plans', '/app/journal', '/app/habits', '/app/profile', '/docs', '/blog', '/learn', '/roadmap', '/pricing'];
  const out: MetadataRoute.Sitemap = pages.map(p => ({ url: base + p, lastModified: new Date() }));
  try {
    const blogDir = resolve(process.cwd(), 'content', 'blog');
    const posts = readdirSync(blogDir).filter(f=>f.endsWith('.md'));
    posts.forEach(f => out.push({ url: base + '/blog/' + f.replace(/\.md$/, ''), lastModified: new Date() }));
  } catch {}
  return out;
}
