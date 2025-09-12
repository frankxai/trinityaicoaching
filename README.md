# Trinity AI Coaching Platform

Transform body, mind, and soul with AI‑aligned coaching. This repo ships:

- Next.js 14 app (marketing + SaaS dashboard)
- Chat Coach powered by Trinity agents (Body/Mind/Soul)
- Plan Generator (7/30/90 days) with OpenAI or static fallback
- Saved plans with Active plan selection; export to Markdown
- Daily Check‑ins and Weekly Review (journal + habits + checkins)
- Journal with summaries; Habits with streaks and CSV export
- Agent persona YAMLs for reuse in apps/workflows
- MCP server scaffold to expose Trinity tools to AI clients
- Docs and Skool assets to launch quickly

## Quick Start

1. Install deps: `npm install`
2. Run dev: `npm run dev`
3. Open: http://localhost:3000

Optional: set `OPENAI_API_KEY` to enable AI responses.

## Deploy

- Vercel: connect this repo, default settings work. See `docs/DEPLOYMENT.md`.

## Structure

- `app/` – Next.js App Router
- `app/api/` – API routes (`/api/chat`, `/api/plan`)
- `app/app/` – SaaS pages: dashboard, coach, plans, journal, habits, profile, check‑in, review
- `agents/` – YAML persona definitions
- `lib/` – shared helpers
- `public/brand/` – logos and assets
- `servers/mcp-trinity/` – MCP server scaffold (optional)
- `docs/` – architecture, agents, deployment, Skool

## What’s Included

- Polished UI with Tailwind, gradients, and glassmorphism
- Minimal dependencies, OpenAI optional
- Docs for architecture, MCP, and Skool launch assets
- Scripts: `npm run export-png` (export agent SVGs to PNG)

## License

Private to your org (add a license if you want it public).
