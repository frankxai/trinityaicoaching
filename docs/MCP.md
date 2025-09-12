# Trinity MCP Server

Model Context Protocol server exposing Trinity tools to AI clients.

## Tools (initial)
- `plan.generate` – generate Body/Mind/Soul plan
- `journal.summarize` – summarize journal entries
- `research.fetch` – fetch resources (stub)

## Usage
1. `cd servers/mcp-trinity`
2. `npm install`
3. `npm run build && npm start`

Point your MCP‑aware client (e.g., Claude Desktop) at the server URL.

## Why use MCP here?
- Encapsulate your business logic behind a standard protocol
- Reuse tools across your UI, automations, and assistants
- Scope access to data sources (journals, habits, Skool) per session

