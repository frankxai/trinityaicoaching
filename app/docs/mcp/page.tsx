import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export default function MCPDoc() {
  const raw = readFileSync(resolve(process.cwd(), "docs/MCP.md"), "utf8");
  return (
    <div className="glass rounded-2xl p-6">
      <h1 className="text-xl font-semibold mb-4">MCP Server</h1>
      <pre className="whitespace-pre-wrap text-sm text-neutral-200">{raw}</pre>
    </div>
  );
}

