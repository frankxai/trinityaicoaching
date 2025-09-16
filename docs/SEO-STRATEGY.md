# TrinityAI Coach & Agent Experience Strategy

## Primary Personas
- AI Architect Coach – runs multi-disciplinary coaching practices, searches for scalable frameworks, automation, and accountability systems. Needs proof of outcomes, operational clarity, and ways to productize expertise.
- Avatar Ops Lead – technical operator building AI avatars and automations for each coach. Optimizes prompts, workflows, and integration reliability.
- Brotherhood Guide – community steward focused on ritual facilitation, honors, and token incentives. Looks for mission language, ceremony structure, and trust signals.
- AI Agent Assistant – autonomous or semi-autonomous bot consuming structured data, APIs, and documentation to orchestrate tasks for the coach. Requires predictable endpoints, ontologies, and schema consistency.

## Search Intent & Journey
1. Discover (Problem aware)
   - Queries: "AI coaching platform", "body mind soul coaching system", "automation for coaching business", "AI avatar coach".
   - Needs: Category definition, credibility, differentiators, ROI.
2. Design (Solution aware)
   - Queries: "build AI avatars for coaching", "tokenized accountability community", "triad coaching rituals", "coach hub dashboard".
   - Needs: Detailed feature pages, module breakdowns, examples, visuals, integration guides.
3. Deploy (Product aware)
   - Queries: "TrinityAI setup", "Trinity command dashboard", "Trinity token ledger", "TrinityAI API".
   - Needs: Docs, environment variables, integration steps, pricing, roadmap.
4. Scale (Expansion)
   - Queries: "Brotherhood honors automation", "AI agent library", "Trinity momentum metrics", "cohort automation workflows".
   - Needs: Automation playbooks, community incentives, advanced analytics.

## Keyword & Content Clusters
- Core Platform: Trinity AI coaching, triad coaching system, AI coaching portal, Trinity command dashboard, coach hub.
- Avatar & Agent Ops: AI avatar coach, coach automation pods, agent library, avatar operations, ElevenLabs HeyGen workflows.
- Ritual & Community: Brotherhood honors, numerology rituals, soul alignment program, decentralized brotherhood, tokenized accountability.
- Automation & Integrations: workflow automation for coaches, AI coaching SOPs, wearable integration coaching, token treasury dashboard, LangGraph coaching agents.
- Business Outcomes: scale coaching practice with AI, automate client onboarding, AI powered check-ins, hybrid coaching programs.

### Long-tail Opportunities
- How to tokenize coaching community contributions
- Designing 7/30/90 day AI coaching plans
- Embodied strength AI program template
- Setting up TrinityAI on Vercel
- Automating ritual reminders with wearables

## Experience Principles
- Single source of truth – Product and marketing pull from lib/portalData.ts to give agents and coaches identical terminology.
- Deep interlinking – Every module card links to docs, hub tools, and activation flows. Breadcrumbs aid AI agents crawling content.
- Structured data – Maintain JSON-LD for organization plus future product schema; expose key properties for AI ingestion.
- Actionable CTAs for agents – Include command verbs such as Generate, Deploy, Mint so coach automations can map actions easily.
- Token and ritual transparency – Surface quantifiable metrics (Momentum Score, Soul Coherence) above the fold for trust.
- Experience alignment – Mirror the personas and flows documented in COACH-AGENT-EXPERIENCE.md so messaging and IA stay in sync.

## Navigation & Sitemap Enhancements
- Primary nav anchors: Home, App (Trinity Command), Hub, Agents, Learn, Docs, Pricing, Roadmap.
- Secondary quick links in footer: Token Treasury, Brotherhood Portal, API Reference, Coach Intake, Support.
- Sitemap ensures canonical URLs across core routes (/, /app, /app/coach, /app/plans, /app/get-started, /hub, /agents, /learn, /learn/[slug], /docs, /docs/[slug], /blog, /blog/[slug], /roadmap, /pricing, /faq, /methods, /contact, /coaches, /sign-in).

## Content Recommendations
- Landing Page Sections: Avatar guild, module catalog, token incentives, automation playbooks, testimonials, and FAQ anchored around keywords above.
- Coach Hub: Provide template download buttons, API references, and integration quick-start to serve technical searches.
- Docs: Create clustered entries for Avatar Ops, Token Ledger, Automation Pods, Momentum Metrics.
- Blog / Learn: Publish long-form guides on automation, ritual design, and AI ethics for coaching.

## Vercel Environment Requirements
Set these variables in Vercel Project Settings → Environment Variables:
- NEXT_PUBLIC_SITE_URL – Canonical base URL used in sitemap/robots and meta tags.
- OPENAI_API_KEY – Required for real OpenAI responses.
- OPENAI_MODEL – Optional override (default gpt-4o-mini).
- DATABASE_URL – Required once Prisma/Supabase integration is enabled. Without it, DB-backed features stay in fallback mode.
- NEXTAUTH_SECRET – Generate once auth flows go live (Phase 2).
- STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET – Needed when billing launches.
- SUPABASE_SERVICE_ROLE_KEY / NEXT_PUBLIC_SUPABASE_URL – For Supabase persistence (Phase 2+).

## KPI Targets
- 40%+ of landing traffic enters Trinity Command or Hub demo flows.
- 25% of docs traffic originates from organic long-tail keywords.
- Average session greater than four minutes for coaches exploring module catalog (indicates depth engagement).
- 50% automated check-ins triggered by AI agents using documented endpoints.

## Next Experiments
1. Launch schema.org Product markup for Trinity Command and Coach Hub pages.
2. Add search-optimized FAQ and How-to guides with HowTo structured data.
3. Build AI Agent Playground page exposing API endpoints for testing.
4. Ship dynamic sitemap builder reading from portalData and filesystem.
5. Implement internal search with keyword weighting for coaches and agent bots.
