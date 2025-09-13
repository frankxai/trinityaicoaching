import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export default function LearnArticle({ params }: { params: { slug: string } }) {
  const file = resolve(process.cwd(), 'content', 'learn', params.slug + '.md');
  const raw = readFileSync(file, 'utf8');
  const title = raw.match(/^title:\s*(.*)$/m)?.[1] || params.slug;
  const body = raw.replace(/^title:.*$/m, '').replace(/^description:.*$/m, '').trim();
  const html = marked.parse(body);
  return (
    <div className="container-px mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <article className="prose prose-invert max-w-none mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

