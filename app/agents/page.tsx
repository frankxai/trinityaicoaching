import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";

export default function AgentsIndex() {
  const dir = resolve(process.cwd(), 'agents');
  const files = readdirSync(dir).filter(f=>f.endsWith('.yaml'));
  const agents = files.map(f => {
    const raw = readFileSync(resolve(dir, f), 'utf8');
    const y = YAML.parse(raw);
    return { file: f, name: y?.name, role: y?.role, description: y?.description };
  });
  return (
    <div className="container-px mx-auto max-w-5xl py-10 grid gap-4">
      <h1 className="text-2xl font-semibold">Agents</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {agents.map(a => (
          <a key={a.file} href={`/agents/${a.file.replace(/\.yaml$/, '')}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div className="font-medium">{a.name}</div>
            <div className="text-sm text-neutral-300">{a.role}</div>
            <div className="text-sm text-neutral-400 mt-2 line-clamp-3">{a.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

