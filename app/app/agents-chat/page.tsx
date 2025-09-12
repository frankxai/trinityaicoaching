import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";
import AgentsChat from "./AgentsChat";

export default function AgentsChatPage() {
  const dir = resolve(process.cwd(), 'agents');
  const files = readdirSync(dir).filter(f=>f.endsWith('.yaml'));
  const agents = files.map(f => {
    const raw = readFileSync(resolve(dir, f), 'utf8');
    const y = YAML.parse(raw);
    return { id: f.replace(/\.yaml$/, ''), name: y?.name || f, role: y?.role || '' };
  });
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-lg font-semibold">Agents Chat</h2>
      <p className="mt-2 text-neutral-300">Chat with a single persona from the Trinity library.</p>
      <div className="mt-4">
        <AgentsChat agents={agents} />
      </div>
    </div>
  );
}

