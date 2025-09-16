import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Agent Library | TrinityAI",
  description: "Persona YAML specs, memory schema, and tooling options for the Trinity squad.",
};

export default function AgentsDoc() {
  return (
    <MarkdownDoc
      file="docs/AGENTS.md"
      eyebrow="Avatar Guild"
      title="Agents"
      description="Download persona YAMLs, learn about memory schemas, and keep AI teammates consistent across experiences."
    />
  );
}

