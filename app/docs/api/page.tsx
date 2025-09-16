import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "API Reference | TrinityAI",
  description: "Endpoints, payloads, and usage patterns for TrinityAI chat, plans, and metrics.",
};

export default function APIDoc() {
  return (
    <MarkdownDoc
      file="docs/API.md"
      eyebrow="Developer Docs"
      title="API Reference"
      description="Connect external systems and AI agents to Trinity Command using documented REST endpoints."
    />
  );
}

