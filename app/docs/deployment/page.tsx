import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Deployment | TrinityAI",
  description: "Steps for launching TrinityAI locally and on Vercel with the correct environment variables.",
};

export default function DeploymentDoc() {
  return (
    <MarkdownDoc
      file="docs/DEPLOYMENT.md"
      eyebrow="Launch Guide"
      title="Deployment"
      description="Follow the Vercel, local, and GitHub deployment steps plus environment variable requirements."
    />
  );
}

