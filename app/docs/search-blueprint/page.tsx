import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Coach & AI Search Blueprint | TrinityAI",
  description: "Persona-level keyword journeys, crawlable data, and interlinking plans tuned for Trinity coaches and their agents.",
};

export default function SearchBlueprintDoc() {
  return (
    <MarkdownDoc
      file="docs/COACH-AI-SEARCH-BLUEPRINT.md"
      eyebrow="Search Intelligence"
      title="Coach & AI Search Blueprint"
      description="Translate intent data into navigation, internal links, and structured content that human mentors and AI agents both understand."
    />
  );
}
