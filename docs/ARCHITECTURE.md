# Architecture

## Overview
- Web app: Next.js 14 (App Router) on Vercel
- API: Next.js Route Handlers (`/api/chat`, `/api/plan`)
- Agents: YAML personas in `agents/` consumed by tools and prompts
- MCP: Optional server in `servers/mcp-trinity` to expose Trinity tools
- Data: Start file-based; later add Supabase/PlanetScale/Prisma (see roadmap)

## Modules
- Marketing: `/` landing page
- SaaS: `/app` dashboard, `/app/coach`, `/app/plans`
- APIs: `/api/chat` (OpenAI if available, fallback otherwise), `/api/plan`
- Agents: `agents/*.yaml` define personality, memory schema, and tools

## Flows
- Chat: Client posts messages → `/api/chat` → OpenAI (if key) with Trinity system prompt → reply
- Plan: Client posts horizon → `/api/plan` → OpenAI structured prompt or static template → plan JSON
- MCP: Tool clients (Claude Desktop, etc.) connect to MCP server → call tools like `plan.generate`

## Why MCP?
- Standard protocol to add your custom tools (journals, habits, Skool data) into AI assistants
- Decouples tools from UI; reuse across Chat, automations, and ops
- Securely scope what’s exposed to the assistant

## Roadmap
- AuthN/AuthZ (Clerk/Auth.js) + multi‑tenant billing
- Persistent plans, journals, habits (Supabase + Prisma)
- Realtime coach sessions and accountability pings
- OAuth to Skool and other platforms
- Multi‑agent orchestration and memory via vector store

