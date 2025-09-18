# Agent Operations Guide

## Mission
- Uphold Trinity AI's coaching vision by shipping features that keep Body, Mind, and Soul surfaces in sync.
- Treat this workspace as the source of truth for marketing, member app, and coach hub experiences.
- Move quickly without sacrificing clarity: every change should strengthen the triad journey and coach operations.

## Repository Map
- app/ holds the Next.js App Router routes: landing, docs, marketing touchpoints, /app member experience, and /hub coach console.
- lib/ centralises shared data (portalData), templates (plans/programs), date utilities, OpenAI helpers, and client storage helpers.
- components/ contains reusable UI primitives (SectionHeading, Surface, Pill, StatBlock, BulletList) used across surfaces.
- agents/ stores YAML persona definitions that power marketing copy, Agent Library, and chat endpoints.
- content/ and docs/ host Markdown sources for blog posts, learn lessons, and internal documentation.
- app/api/ exposes route handlers for plan generation, journal summaries, weekly reviews, agent chat/test, hub agent management, and health checks.

## Execution Workflow
1. Align with docs/PORTAL_SPEC.md before planning significant work; it describes each surface and data dependency.
2. Scope tasks using small, testable slices. Update or create specs when adding new UX surfaces or data contracts.
3. Log progress in ../local-roadmap.html (kept outside deploy scope) so the core team can track shipped vs planned work without leaking to production.
4. Prefer editing shared data in lib/portalData.ts so marketing, app, and hub stay consistent.
5. When touching /app features, respect localStorage namespaces (profile, plans.saved, plans.active, checkins.map, habits.items, journal.entries, settings). Persistence will move to Prisma soon.
6. For coach-facing work under /hub, reuse primitives and check navigation links. Hide or implement dead routes before shipping.
7. Use /app/settings defaults (triad orchestration, model overrides) when adjusting chat endpoints.
8. Keep persona naming aligned with Trinity Prime, Athlete, Sage, Tactician, and Guardian branding.

## Data & Integrations
- OpenAI usage is optional; route handlers fall back to templates when OPENAI_API_KEY is missing. Always guard network calls and surface graceful messaging.
- Markdown pages (content/, docs/) are parsed via marked and helper utilities in lib/md.ts.
- Upcoming persistence will rely on the Prisma schema under prisma/schema.prisma; design new data structures to slot cleanly into that model.
- MCP server scaffolding lives in servers/mcp-trinity; align automation or agent orchestration changes with that service.

## Quality & Safety Checklist
- Run npm run dev locally when possible to verify Next.js builds; run npm run type-check before delivering TypeScript-heavy changes.
- Avoid regressions where navigation points to missing routes (for example /app/plans/{id} or /hub/transparency). Hide or implement before merging.
- Maintain accessibility: provide focus states, descriptive labels, and responsive layouts for tables (habits, programs).
- Document new capabilities inside docs/ and update the spec when behaviour changes.
- Keep copy consistent with Trinity's tone: compassionate, direct, triad-oriented.

## Collaboration Notes
- Follow the planning tool workflow: outline steps for any medium or large task and update progress as milestones complete.
- Leave concise code comments only when the intent is not obvious.
- When introducing agents or automation, sync persona metadata between YAML files and portalData to avoid drift.

