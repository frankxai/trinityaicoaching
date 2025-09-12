import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export default function AgentView({ params }: { params: { id: string } }) {
  const file = resolve(process.cwd(), 'agents', params.id + '.yaml');
  const raw = readFileSync(file, 'utf8');
  return (
    <div className="container-px mx-auto max-w-5xl py-10">
      <div className="glass rounded-2xl p-6">
        <h1 className="text-xl font-semibold">{params.id}</h1>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-neutral-200">{raw}</pre>
      </div>
    </div>
  );
}

