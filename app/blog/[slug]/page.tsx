import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const file = resolve(process.cwd(), 'content', 'blog', params.slug + '.md');
  const raw = readFileSync(file, 'utf8');
  const body = raw.replace(/^title:.*$/m, '').replace(/^description:.*$/m, '').replace(/^date:.*$/m, '').trim();
  const html = marked.parse(body);
  const title = raw.match(/^title:\s*(.*)$/m)?.[1] || params.slug;
  const date = raw.match(/^date:\s*(.*)$/m)?.[1] || '';
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {date && <div className="text-neutral-400 mt-1 text-sm">{date}</div>}
      <article className="prose prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

