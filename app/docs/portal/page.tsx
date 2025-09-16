import { MarkdownDoc } from "@/components/MarkdownDoc";

export const metadata = {
  title: "Portal Playbook | TrinityAI",
  description: "Navigation, shared data contracts, and KPIs for Trinity Command, Coach Hub, and Brotherhood surfaces.",
};

export default function PortalDocs() {
  return (
    <MarkdownDoc
      file="docs/PORTAL.md"
      eyebrow="Experience Ops"
      title="Portal Playbook"
      description="Map the Trinity Command surfaces, shared vocabularies, and the KPIs we optimize for each persona."
    />
  );
}
