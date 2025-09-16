import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export const metadata = {
  title: "SEO Strategy | TrinityAI",
  description: "Keyword map, personas, and search journey for coaches and AI agents using TrinityAI."
};

export default function SeoStrategyDoc() {
  const file = resolve(process.cwd(), "docs", "SEO-STRATEGY.md");
  const raw = readFileSync(file, "utf8");
  const html = marked.parse(raw);

  return (
    <div className="container-px mx-auto max-w-4xl py-12">
      <div className="prose prose-invert max-w-4xl">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

