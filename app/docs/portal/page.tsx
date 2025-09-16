import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { marked } from "marked";

export const metadata = {
  title: "Portal Playbook | TrinityAI",
  description: "Navigation, shared data contracts, and KPIs for Trinity Command, Coach Hub, and Brotherhood surfaces."
};

export default function PortalDocs() {
  const file = resolve(process.cwd(), "docs", "PORTAL.md");
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
