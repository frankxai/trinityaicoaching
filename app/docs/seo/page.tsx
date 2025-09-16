import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "SEO Strategy | TrinityAI",
  description: "Keyword map, personas, and search journey for coaches and AI agents using TrinityAI.",
};

export default function SeoStrategyDoc() {
  return (
    <MarkdownDoc
      file="docs/SEO-STRATEGY.md"
      eyebrow="Growth"
      title="SEO Strategy"
      description="Target the right keywords, intent stages, and interlinking plans for coaches, avatar operators, and their agents."
    />
  );
}
