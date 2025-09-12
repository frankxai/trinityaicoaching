import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://trinity.ai.local';
  const pages = ['/', '/app', '/app/coach', '/app/plans', '/app/journal', '/app/habits', '/app/profile', '/docs'];
  return pages.map(p => ({ url: base + p, lastModified: new Date() }));
}

