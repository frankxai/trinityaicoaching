# Coach & Agent Experience Blueprint

## Audience Modes
- **Lead Coach (AI Architect)** – Owns client results, designs 7/30/90 plans, and evaluates ROI. Needs clarity on rituals, metrics, billing, and accountability loops.
- **Avatar Operator** – Translates coach IP into AI avatars (HeyGen/ElevenLabs), automates workflows, and monitors agent performance.
- **Brotherhood Steward** – Runs community rituals, honors, and token incentives. Prioritises transparency and ease of minting rewards.
- **Autonomous Agent** – Software agents ingesting Trinity data to trigger check-ins, nudge rituals, or sync wearables.

## Information Architecture Principles
1. **Mission → Modules → Actions** – Every page begins with mission framing, follows with structured modules, then action CTAs.
2. **Shared Data Contracts** – UI reads from lib/portalData.ts to keep copy, tags, and metrics identical for humans and bots.
3. **Contextual Surfaces** – Portal routes mirror the daily workflow: Command (today), Hub (build), Docs (integrate), Learn (expand).
4. **Automation-first CTAs** – Buttons labelled with verbs (Launch, Deploy, Generate) so agents map to workflows.
5. **Telemetry Loop** – Momentum Score, Soul Coherence, and Leverage Index appear across surfaces to reinforce outcomes.

## Search-to-Activation Flow
1. Discover: SEO landing sections answer "what is TrinityAI" and highlight body-mind-soul integration.
2. Assess: Avatar guild, module catalog, and automation playbooks show depth for coaches and ops.
3. Deploy: Docs + Deployment page detail environment variables, APIs, and agent YAML structures.
4. Scale: Hub surfaces advanced playbooks, token incentives, and experiments to keep teams engaged.

## Experience Checklist
- Landing page (Home) links to Command, Hub, Docs, Learn, Agent Library, Pricing, and Roadmap.
- Trinity Command summarises daily rituals, assigned avatars, milestones, automation, and contribution missions.
- Coach Hub exposes program templates, avatar ops, bounties, automations, and integration connectors.
- Docs include architecture overview, portal playbook, SEO strategy, and deployment guidance with env variables.
- Sitemap + robots reference canonical NEXT_PUBLIC_SITE_URL for consistent indexing.
- JSON-LD structured data (Organization, FAQ, Product) help search & AI agents parse offerings.

## KPI Targets
- 50% of landing visitors view Trinity Command or Hub within session.
- 30% of doc visitors engage structured action (copy env var, view API, download template).
- <5% bounce on Coach Hub for logged-in coaches (indicates relevant program surfaces).
- 60% AI agent tasks successfully triggered via portal-defined playbooks.

## Future Enhancements
- Personalised portal dashboards per persona (Coach vs. Avatar Ops) using the same portalData schema.
- API Playground with interactive agent tasks for testing automations.
- Internal search weighting keywords from SEO strategy to guide coaches directly to modules.
