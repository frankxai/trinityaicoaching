import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "MCP Server | TrinityAI",
  description: "Expose Trinity tools to external AI clients through the Model Context Protocol server scaffold.",
};

export default function MCPDoc() {
  return (
    <MarkdownDoc
      file="docs/MCP.md"
      eyebrow="Automation Layer"
      title="MCP Server"
      description="Wire the Trinity toolkit into MCP compatible assistants and orchestrators."
    />
  );
}

