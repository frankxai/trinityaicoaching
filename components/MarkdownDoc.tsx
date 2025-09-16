import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export function MarkdownDoc({
  file,
  eyebrow,
  title,
  description
}: {
  file: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const raw = readFileSync(resolve(process.cwd(), file), "utf8");
  const html = marked.parse(raw);

  return (
    <div className="container-px mx-auto max-w-4xl py-12">
      {(eyebrow || title || description) && (
        <header className="mb-8 flex flex-col gap-3">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-400">
              {eyebrow}
            </span>
          )}
          {title && <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>}
          {description && <p className="max-w-2xl text-sm text-neutral-300">{description}</p>}
        </header>
      )}
      <article className="prose prose-invert max-w-4xl">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}
