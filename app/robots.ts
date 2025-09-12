import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://trinity.ai.local';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: base + '/sitemap.xml'
  };
}

