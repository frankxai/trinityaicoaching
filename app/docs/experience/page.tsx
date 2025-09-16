import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export const metadata = {
  title: "Coach & Agent Experience | TrinityAI",
  description: "Blueprint for architecting Trinity surfaces around coaches, avatar operators, and autonomous agents."
};

export default function ExperienceDoc() {
  const file = resolve(process.cwd(), "docs", "COACH-AGENT-EXPERIENCE.md");
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
