import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseFrontMatter } from "@/lib/md";

type Post = { slug: string; title: string; description: string; date: string };

export default function BlogIndex() {
  const dir = resolve(process.cwd(), 'content', 'blog');
  let posts: Post[] = [];
  try {
    const files = readdirSync(dir).filter(f=>f.endsWith('.md'));
    posts = files.map(f => {
      const raw = readFileSync(resolve(dir, f), 'utf8');
      const { meta } = parseFrontMatter(raw);
      const title = (meta.title || f.replace(/-/g,' ').replace(/\.md$/, '')) as string;
      const description = (meta.description || '') as string;
      const date = (meta.date || '') as string;
      return { slug: f.replace(/\.md$/, ''), title, description, date };
    }).sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  } catch {}
  return (
    <div className="container-px mx-auto max-w-5xl py-10">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <div className="mt-6 grid gap-4">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div className="text-sm text-neutral-400">{p.date}</div>
            <div className="font-medium mt-1">{p.title}</div>
            <div className="text-neutral-300 mt-1 text-sm">{p.description}</div>
          </a>
        ))}
        {posts.length===0 && <div className="text-neutral-400">No posts yet.</div>}
      </div>
    </div>
  );
}
