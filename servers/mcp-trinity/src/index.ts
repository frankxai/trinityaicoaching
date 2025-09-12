import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";

function staticPlan(horizon: number) {
  const intro = (scope: string) => [
    `Set ${scope.toLowerCase()} baselines and track daily`,
    `Define 2-3 measurable goals for ${scope.toLowerCase()}`,
    `Schedule 3 weekly check-ins for ${scope.toLowerCase()}`,
    `Apply 1% improvements daily`,
  ];
  return [
    { title: "Body", items: [
      ...intro("Body"),
      "Walk 8–10k steps/day",
      "Strength train 2–4x/week",
      "Protein target ~1.6–2.2g/kg",
      "Sleep 7–9h with wind-down routine",
    ]},
    { title: "Mind", items: [
      ...intro("Mind"),
      "One 90-minute deep work block/day",
      "Reduce notifications to essentials",
      "Weekly review and plan",
      "Journal 5 minutes/day",
    ]},
    { title: "Soul", items: [
      ...intro("Soul"),
      "Clarify values and mission",
      "Meaningful conversation 2x/week",
      "Gratitude note each evening",
      "1 digital sabbath (half-day) per week",
    ]},
  ];
}

const server = new Server({
  name: "trinity-mcp",
  version: "0.1.0",
}, {
  capabilities: {
    tools: {}
  }
});

server.tool("plan.generate", {
  description: "Generate a Body/Mind/Soul plan (static template)",
  inputSchema: { type: "object", properties: { horizon: { type: "number" } }, required: ["horizon"] }
}, async (input: any) => {
  const horizon = Number(input?.horizon ?? 30);
  return { content: [{ type: "json", data: staticPlan(horizon) }] };
});

server.tool("journal.summarize", {
  description: "Summarize journal entries into insights",
  inputSchema: { type: "object", properties: { entries: { type: "array", items: { type: "string" } } }, required: ["entries"] }
}, async (input: any) => {
  const entries: string[] = input.entries || [];
  const text = entries.join("\n\n");
  const words = text.split(/\s+/).length;
  return { content: [{ type: "text", text: `Read ${entries.length} entries (~${words} words). Themes: energy, focus, alignment. Suggested next step: pick one small daily habit.` }] };
});

server.tool("agents.load", {
  description: "Load an agent YAML by filename from ../../agents",
  inputSchema: { type: "object", properties: { name: { type: "string" } }, required: ["name"] }
}, async (input: any) => {
  const p = resolve(process.cwd(), "../../agents/" + String(input.name));
  const raw = readFileSync(p, "utf8");
  const data = YAML.parse(raw);
  return { content: [{ type: "json", data }] };
});

const transport = new StdioServerTransport();
server.connect(transport);

