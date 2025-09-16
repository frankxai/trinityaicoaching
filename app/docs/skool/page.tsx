import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Skool Assets | TrinityAI",
  description: "Assets and messaging to launch TrinityAI alongside your Skool community hub.",
};

export default function SkoolDoc() {
  return (
    <MarkdownDoc
      file="docs/SKOOL.md"
      eyebrow="Community Launch"
      title="Skool Assets"
      description="Ship Trinity messaging, visuals, and nurture flows tailored to Skool-powered communities."
    />
  );
}

