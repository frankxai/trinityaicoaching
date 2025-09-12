import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

async function main() {
  const srcDir = join(process.cwd(), 'public', 'agents');
  const outDir = join(process.cwd(), 'public', 'agents-png');
  if (!existsSync(outDir)) mkdirSync(outDir);
  const files = readdirSync(srcDir).filter(f => f.endsWith('.svg'));
  for (const f of files) {
    const svg = readFileSync(join(srcDir, f));
    const png = await sharp(svg).png().toBuffer();
    const out = join(outDir, basename(f, '.svg') + '.png');
    writeFileSync(out, png);
    console.log('Exported', out);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

