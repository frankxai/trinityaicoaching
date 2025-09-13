import fs from 'node:fs';

export type FrontMatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  author?: string;
};

export function parseFrontMatter(raw: string): { meta: FrontMatter; body: string } {
  const fmMatch = raw.match(/^---[\r\n]([\s\S]*?)\n---[\r\n]?/);
  if (!fmMatch) {
    const simple = {
      title: raw.match(/^title:\s*(.*)$/m)?.[1],
      description: raw.match(/^description:\s*(.*)$/m)?.[1],
      date: raw.match(/^date:\s*(.*)$/m)?.[1],
    } as FrontMatter;
    const body = raw.replace(/^title:.*$/m, '').replace(/^description:.*$/m, '').replace(/^date:.*$/m, '').trim();
    return { meta: simple, body };
  }
  const yaml = fmMatch[1];
  const meta: FrontMatter = {};
  yaml.split(/\r?\n/).forEach(line => {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!m) return;
    const key = m[1];
    let val: any = m[2];
    if (key === 'tags') val = val.split(',').map((s: string)=>s.trim()).filter(Boolean);
    (meta as any)[key] = val;
  });
  const body = raw.slice(fmMatch[0].length).trim();
  return { meta, body };
}

export function listMarkdown(dir: string): { slug: string; raw: string }[] {
  try {
    const files = fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
    return files.map(f => ({ slug: f.replace(/\.md$/, ''), raw: fs.readFileSync(dir + '/' + f, 'utf8') }));
  } catch { return []; }
}

