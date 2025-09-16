import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Vercel Environment Setup | TrinityAI",
  description: "Step-by-step guide for configuring TrinityAI environment variables and secrets in Vercel.",
};

export default function VercelEnvDoc() {
  return (
    <MarkdownDoc
      file="docs/VERCEL-ENV.md"
      eyebrow="Deployment"
      title="Vercel Environment Setup"
      description="Set the required API keys, secrets, and optional toggles so TrinityAI runs end-to-end on Vercel."
    />
  );
}
