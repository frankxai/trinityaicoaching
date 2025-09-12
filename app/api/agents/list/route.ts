import { NextResponse } from "next/server";
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";

export async function GET() {
  const dir = resolve(process.cwd(), 'agents');
  const files = readdirSync(dir).filter(f=>f.endsWith('.yaml'));
  const items = files.map(f => {
    try {
      const raw = readFileSync(resolve(dir, f), 'utf8');
      const y = YAML.parse(raw);
      return { id: f.replace(/\.yaml$/, ''), name: y?.name, role: y?.role };
    } catch {
      return { id: f.replace(/\.yaml$/, ''), name: f, role: '' };
    }
  });
  return NextResponse.json({ items });
}

