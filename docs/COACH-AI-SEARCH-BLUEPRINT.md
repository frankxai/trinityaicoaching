# Coach & AI Search Blueprint

Designing TrinityAI so human coaches and their AI counterparts can *find* the right surface in one or two clicks requires intentional search intelligence. This blueprint captures personas, intents, keyword clusters, and the interlinking model that turns our site into a navigable knowledge graph for humans and machines alike.

## Personas & Search Behaviours

| Persona | Primary Questions | Search Behaviour | Conversion Moment |
| --- | --- | --- | --- |
| **AI Architect Coach** | "How do I productize hybrid coaching with AI?" | Uses Google for "AI coaching platform" and "Trinity command dashboard"; bookmarks deep feature docs. | Books a Trinity Command demo or launches `/app/get-started`.
| **Avatar Operations Lead** | "Which agent files and automations are production ready?" | Searches for "AI avatar coach workflows" and "Trinity agent YAML"; crawls repos via GitHub/`robots`. | Downloads an agent YAML and opens `/hub` automation playbooks.
| **Brotherhood Guide** | "How do we keep rituals, honors, and tokens synced?" | Queries "tokenized accountability" and "Brotherhood honors"; follows internal links from blog to docs. | Activates `/app/checkin` or visits `Knowledgebase → Portal Playbook`.
| **AI Agent (LLM)** | "Where is the canonical schema for plans/check-ins?" | Consumes sitemap + JSON-LD; uses embeddings of docs to plan actions. | Calls `/api/plan` or `/api/chat` with correct payloads.

### Intent Stages

1. **Orient** — Understand category (keywords: AI coaching platform, body mind soul coach, AI coach portal).
2. **Design** — Compare implementation specifics (Trinity command dashboard, AI avatar workflows, tokenized accountability system).
3. **Deploy** — Execute build (TrinityAI Vercel env vars, Trinity API, agent YAML schema).
4. **Scale** — Optimise rituals and automations (Brotherhood honors automation, LangGraph coaching agents, wearable ritual prompts).

## Keyword Clusters & Canonical Pages

| Cluster | Representative Keywords | Canonical Page(s) | Secondary Links |
| --- | --- | --- | --- |
| Platform & Outcomes | AI coaching platform, body mind soul coaching, Trinity command dashboard | `/` hero, `/app`, `/app/plans` | `Knowledgebase → Portal Playbook`, `/blog` vision posts |
| Agent Ops | AI avatar coach, agent YAML, avatar automation pods | `/agents`, `/hub`, `Knowledgebase → Agents Collection` | `/learn/agent-stacks`, `/app/super-agent` |
| Ritual & Community | tokenized accountability, Brotherhood honors, numerology rituals | `/coaches`, `/methods`, `Knowledgebase → Portal Playbook` | `/blog/brotherhood-honors`, `/app/checkin` |
| Deployment & API | TrinityAI Vercel env vars, Trinity API, Trinity coach integration | `Knowledgebase → Environment & Keys`, `Knowledgebase → API Reference`, `Knowledgebase → Deployment Notes` | `Knowledgebase → Search Blueprint`, `Knowledgebase → Architecture`, `Knowledgebase → MCP Server` |
| Automation & Scale | automation playbooks for coaches, leverage operations sprint, wearable integrations | `/hub`, `/learn`, `/app/habits` | `/blog`, `Knowledgebase → Coach & Agent Experience`, `/app/journal` |

## Interlinking Model

- **Primary navigation** keeps `/app`, `/hub`, `/coaches`, `/agents`, `/learn`, `Knowledgebase`, `/pricing`, `/roadmap` on every page.
- **Hero CTA stack**: Home hero links to `/app`, `/app/coach`, `/app/super-agent`, `/app/get-started`, `/blog`, and now `Knowledgebase → Search Blueprint` for SEO-focused visitors.
- **Contextual surfaces**: each section card links to at least one doc + one product surface (e.g. Search Intelligence block → `Knowledgebase → Search Blueprint` + `Knowledgebase → SEO Strategy`).
- **Knowledge loops**: `Knowledgebase → Search Blueprint` references `Knowledgebase → SEO Strategy` and `Knowledgebase → Environment & Keys`; `Knowledgebase → SEO Strategy` links back to blueprint, establishing a loop for AI crawlers.
- **Agent friendly anchors**: use consistent anchor text ("Trinity Command", "Coach Hub", "Agent Library") across hero, cards, and docs so embeddings stay aligned.

## Structured Data & Retrieval

- Maintain `product` and `faq` JSON-LD on `/` (already implemented). Add HowTo structured data to `Knowledgebase → Environment & Keys` when we publish deployment walkthroughs.
- Provide sitemap coverage for `/coaches`, `Knowledgebase → Search Blueprint`, `Knowledgebase → Environment & Keys` plus markdown-driven blog/learn posts.
- Ensure docs render semantic HTML (`<h1>…<h3>`) via Markdown pipeline so RAG embeddings keep heading hierarchy.
- Encourage AI agents to ingest `docs/` Markdown directly—the `MarkdownDoc` component renders identical HTML for parity.

## Content Backlog (Prioritised)

1. **Publish How-To**: "Set up Trinity Command on Vercel" (supports Deploy intent). Lives in `Knowledgebase → Environment & Keys` and `blog/` variant.
2. **Case Study**: Show "Coaches + agents" shipping a 30-day ritual program; link from `/coaches` and `/learn`.
3. **Automation Recipes**: Expand `automationPlaybooks` data for wearable + finance integrations.
4. **Search-optimised FAQ**: Add more questions to `/faq` covering "Is there a Trinity API sandbox?" and "Do agents support LangGraph?".
5. **AI Agent Index**: Build `/agents/index.json` feed for machine ingestion (Phase 2).

## Measurement

- Track click-through from `/` hero CTA to `Knowledgebase → Search Blueprint` and `Knowledgebase → Environment & Keys` (signals high-intent operators).
- Monitor organic sessions landing on `/coaches` + `Knowledgebase` from queries listed above.
- Evaluate dwell time on docs: target >3 minutes for Deploy/Scale personas.
- Review agent usage logs to confirm `/api/plan` and `/api/chat` requests include metadata defined in docs.

Use this blueprint as the north star when shipping copy, navigation, or new program modules. Every new surface should declare which persona, intent stage, and canonical keyword it serves.
