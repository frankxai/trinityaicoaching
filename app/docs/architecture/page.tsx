import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Architecture | TrinityAI",
  description: "System diagram, data flows, and component responsibilities powering TrinityAI.",
};

export default function ArchitectureDoc() {
  return (
    <MarkdownDoc
      file="docs/ARCHITECTURE.md"
      eyebrow="System Design"
      title="Architecture"
      description="Understand how the Trinity Command app, agent services, data stores, and automation pods connect."
    />
  );
}

