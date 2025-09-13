import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export default function LearnIndex() {
  const dir = resolve(process.cwd(), 'content', 'learn');
  let posts: { slug: string; title: string; description: string }[] = [];
  try {
    const files = readdirSync(dir).filter(f=>f.endsWith('.md'));
    posts = files.map(f => {
      const raw = readFileSync(resolve(dir, f), 'utf8');
      const title = raw.match(/^title:\s*(.*)$/m)?.[1] || f.replace(/\.md$/, '');
      const description = raw.match(/^description:\s*(.*)$/m)?.[1] || '';
      return { slug: f.replace(/\.md$/, ''), title, description };
    });
  } catch {}
  return (
    <div className="container-px mx-auto max-w-5xl py-10">
      <h1 className="text-2xl font-semibold">Learn</h1>
      <p className="mt-2 text-neutral-400">Foundations for Body, Mind, and Soul — practical, compassionate, evidence‑aligned.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map(p => (
          <a key={p.slug} href={`/learn/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div className="font-medium">{p.title}</div>
            <div className="text-neutral-300 text-sm mt-1">{p.description}</div>
          </a>
        ))}
        {posts.length===0 && <div className="text-neutral-400">Content coming soon.</div>}
      </div>
    </div>
  );
}

