import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Coach & Agent Experience | TrinityAI",
  description: "Blueprint for architecting Trinity surfaces around coaches, avatar operators, and autonomous agents.",
};

export default function ExperienceDoc() {
  return (
    <MarkdownDoc
      file="docs/COACH-AGENT-EXPERIENCE.md"
      eyebrow="Experience Design"
      title="Coach & Agent Experience"
      description="Translate the Trinity journey into surface requirements for human mentors, avatar ops leads, and autonomous agents."
    />
  );
}
