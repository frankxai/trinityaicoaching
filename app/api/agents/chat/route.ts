import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import YAML from "yaml";
import { getOpenAI } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { agent, messages = [] } = await req.json();
    const file = resolve(process.cwd(), 'agents', String(agent) + '.yaml');
    const raw = readFileSync(file, 'utf8');
    const y = YAML.parse(raw);
    const system = y?.prompts?.system || `You are ${y?.name || agent}. ${y?.description || ''}`;
    const openai = getOpenAI();
    if (openai) {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [{ role: 'system', content: system }, ...messages],
        temperature: 0.6,
      });
      const reply = completion.choices[0]?.message?.content ?? '';
      return NextResponse.json({ reply });
    }
    return NextResponse.json({ reply: `(${y?.name || agent}) ${messages.filter((m:any)=>m.role==='user').slice(-1)[0]?.content || ''}` });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'error' }, { status: 500 });
  }
}

