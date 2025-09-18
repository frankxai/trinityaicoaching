# Trinity AI Coaching Platform - Functional Specification

## 1. Product Context
- **Vision**: Deliver an AI-augmented coaching portal that unifies Body, Mind, and Soul guidance with operations and incentives so members feel supported every day.
- **Audiences**: Prospective members (marketing site), active members (Trinity Command at /app), coaches/operators (Coach Hub at /hub), and internal agents powered by YAML definitions under agents/.
- **Tech Stack**: Next.js 14 App Router (TypeScript), Tailwind CSS, Lucide icons, OpenAI SDK, Prisma (planned), client-side persistence via local storage, Markdown content in content/, structured data in lib/portalData.ts.

## 2. Shared System Modules
- **Data Contracts**: lib/portalData.ts holds canonical avatars, modules, playbooks, incentives, metrics, and surfaces. Exported collections feed marketing, app, and hub views.
- **Templates**: lib/planTemplates.ts and lib/programTemplates.ts provide fallback structures when AI calls fail. lib/md.ts parses Markdown front matter, lib/date.ts exposes helpers such as todayISO and lastNDays.
- **Client Persistence**: lib/clientStore.ts wraps localStorage reads and writes. Plans, profile, habits, check-ins, and settings persist locally until database integration lands.
- **External Services**: lib/openai.ts conditionally instantiates an OpenAI client. Without OPENAI_API_KEY, route handlers return template data so the UI stays usable.
- **UI Primitives**: components/ui/primitives.tsx defines SectionHeading, Surface, Pill, StatBlock, and BulletList for consistent layout across surfaces.

## 3. Public and Marketing Surfaces (App Router root)
- **/ Landing** (app/page.tsx): Hero positioning plus sections for features, Trinity avatars, learning modules, incentives, automation playbooks, and FAQ. Injects Product + FAQ JSON-LD for SEO.
- **/about** (app/about/page.tsx): Story and guiding principles explaining Trinity's compassionate approach.
- **/methods** (app/methods/page.tsx): Explains triad orchestration, adherence engine, and safety and consent policies.
- **/pricing** (app/pricing/page.tsx): Two-tier pricing (Starter vs Pro) with CTAs to /app and the external Skool community.
- **/changelog** (app/changelog/page.tsx): Renders docs/CHANGELOG.md inside a glass card.
- **/faq** (app/faq/page.tsx): High-level FAQ covering scope, AI keys, personalization, agent builder, and privacy.
- **/contact** (app/contact/page.tsx): Links for email and GitHub issue tracking.
- **/legal/safety** (app/legal/safety/page.tsx): Educational disclaimers and consent framing.
- **/sign-in** (app/sign-in/page.tsx): Credentials form wired to NextAuth credentials provider; awaits production OAuth providers.
- **/learn** + **/learn/[slug]** (app/learn/page.tsx, app/learn/[slug]/page.tsx): Lists lessons sourced from content/learn/*.md and renders Markdown via marked.
- **/blog** + **/blog/[slug]** (app/blog/page.tsx, app/blog/[slug]/page.tsx): Blog index and article renderer with metadata and JSON-LD microdata.
- **/agents** + **/agents/[id]** (app/agents/page.tsx, app/agents/[id]/page.tsx): Filesystem-backed gallery of YAML agents with raw detail views.
- **/retreat** (app/retreat/page.tsx): Immersive retreat journey with hero promise, immersion tracks, rhythm timeline, logistics board, and clear image drop zones for hero + track assets.
- **/roadmap** (retired): Previous marketing roadmap view has been replaced by the local HTML tracker and should remain out of production builds.
- **Internal snapshots** (internal/roadmap.html, internal/docs-inventory.html, ../local-roadmap.html): Roadmap + docs inventory stay offline; local HTML tracker lives outside the Next app so Vercel never ships it.
- **/docs** (retired): Static doc viewer was removed from production; access operator playbooks via GitHub or local HTML snapshots instead.

## 4. Member Application - Trinity Command (/app)
- **Layout** (app/app/layout.tsx): Provides command sidebar, hero metrics (Momentum, Soul Coherence, Leverage), assigned avatar cards (Trinity Prime, Athlete, Sage), and connected surface quick links.
- **Dashboard /app** (app/app/page.tsx): Mission Control view reusing portalData to surface momentum metrics, featured rituals, programs, incentives, tool integrations, automation playbooks, and FAQ.
- **/app/get-started**: Progress checklist pulling from local storage (profile, saved plans, habits, journal entries, check-in usage) with completion bar.
- **/app/profile**: Baseline collection form storing physical, lifestyle, and mission fields. Supports JSON export/import via file upload.
- **/app/intake**: Three-step wizard (Body, Mind, Soul) that writes into the same profile structure with guided progression pills.
- **/app/plans** (app/app/plans/page.tsx): Plan generator calling /api/plan for 7/30/90 day outputs; offers template quick-loads, Markdown/JSON/ICS export, saved plan persistence, and active plan selection.\n- **/app/plans/[id]** (app/app/plans/[id]/page.tsx): Client-side plan detail view that pulls from local storage, re-exports in multiple formats, and lets members re-activate or delete saved plans.
- **/app/checkin**: Daily ritual pulling tasks from the active plan, mood/energy sliders, note field, and local save keyed by ISO date.
- **/app/habits**: Seven-day habit tracker with streak counter and CSV export of completion log.
- **/app/journal**: Local journal with timestamped entries, delete controls, JSON export, and /api/journal/summarize integration to produce AI summaries.
- **/app/review**: Weekly review generator calling /api/review/weekly with check-ins, journal entries, and habits from the past seven days; Markdown export available.
- **/app/coach**: Streaming triad chat powered by /api/stream/coach; triad orchestration toggle and model override respect /app/settings values.
- **/app/super-agent**: Variant chat with a stronger system prompt that always synthesizes actionable steps; uses the same streaming endpoint.
- **/app/agents-chat**: Renders available YAML personas and proxies single-agent chat via /api/agents/chat.
- **/app/agents-builder**: Client-side YAML generator exporting persona files for reuse.
- **/app/settings**: Stores chat preferences (model name, triad default) in local storage.

## 5. Coach and Ops Hub (/hub)
- **Layout** (app/hub/layout.tsx): Coach Hub frame with overview plus nav links. Only /hub, /hub/programs, and /hub/agents exist today; /hub/members, /hub/intake, and /billing still need implementation or conditional hiding.
- **/hub** (app/hub/page.tsx): Overview clustering program studio, agent library, integrity console prompt, avatar ops cards, contribution bounties, automation playbooks, and integrations sourced from portalData.
- **/hub/programs** (app/hub/programs/page.tsx): Program builder that lists learningModules, allows duplication/edit/export (Markdown & JSON), and filters by archetype/duration.
- **/hub/agents** (app/hub/agents/page.tsx): CRUD over stored YAML personas using /api/hub/agents plus streaming agent test harness via /api/agents/test.

## 6. API Layer (selected route handlers)
- **Agents**: /api/agents/list, /api/agents/chat, and /api/agents/test expose discovery, chat, and streaming validation for YAML personas.
- **Planning and Reviews**: /api/plan, /api/plans, /api/journal/summarize, /api/review/weekly orchestrate plan generation, plan persistence placeholder, journal summarization, and weekly review synthesis.
- **Coach Streams**: /api/stream/coach multiplexes Body/Mind/Soul responses; the orchestrate flag toggles triad mode.
- **Hub**: /api/hub/agents manages agent records; /api/programs supports module editing workflow.
- **Utility**: /api/chat, /api/health, /api/db/*, and /api/plan scaffolding prepare for future persistence and integrations.

## 7. Content, Docs, and Agent Assets
- **agents/**: YAML personas (Trinity Prime, Athlete, Sage, Tactician, Guardian, plus others) leveraged by marketing copy and runtime chat features.
- **content/blog & content/learn**: Markdown sources with front matter consumed by their respective route groups; ensure future posts include title, description, and for blog entries date.
- **docs/**: Markdown playbooks remain in the repo for operators (access via GitHub or internal/docs-inventory.html).
- **servers/mcp-trinity**: MCP server scaffold backing future automation flows; align agent specs with these capabilities.

## 8. Data Flow and Agent Collaboration
- Marketing, member app, and hub all draw from portalData.ts to prevent copy drift across surfaces.
- Client-only persistence (profile, plans, habits, check-ins, journal, settings) relies on local storage for now. The Prisma schema in prisma/schema.prisma outlines future database tables.
- OpenAI-powered endpoints degrade gracefully when keys are absent but should rehydrate once environment variables are configured.

## 9. Gaps and Follow-ups
- Implement or hide sidebar links for /hub/members, /hub/intake, and /billing to avoid 404s.
- Lock down /app and /hub behind authentication once NextAuth + Prisma integration is completed.
- Replace local storage with persistent services (Supabase/Postgres) for multi-device continuity.
- Harden accessibility: add focus states, aria labels for sliders, and responsive handling for wide tables.
- Remove marketing links to internal docs/roadmap; house operational updates in local HTML trackers.
- Maintain Trinity-branded persona names everywhere to prevent regression to legacy labels.




