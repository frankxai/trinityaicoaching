import { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { yaml = '', messages = [] } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  const sys = `You are an AI agent defined by the following YAML. Adopt its role, style, and goals as best you can.\n\nYAML:\n${yaml}`;
  if (!apiKey) {
    const out = `No API key set. YAML name: ${(yaml.match(/name:\s*(.*)/)?.[1]||'Unknown')}. You asked: ${(messages[0]?.content||'')}`;
    return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  const openai = new OpenAI({ apiKey });
  const stream = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    stream: true,
    temperature: 0.6,
    messages: [{ role: 'system', content: sys }, ...messages]
  });
  const rs = new ReadableStream({
    async start(controller) {
      const enc = new TextEncoder();
      for await (const part of stream) {
        const delta = part.choices?.[0]?.delta?.content;
        if (delta) controller.enqueue(enc.encode(delta));
      }
      controller.close();
    }
  });
  return new Response(rs, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

