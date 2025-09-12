import { NextRequest } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `You are Trinity Coach: a collaborative triad of specialists.
- Body Coach: training, nutrition, recovery.
- Mind Coach: focus, discipline, habits.
- Soul Guide: values, meaning, alignment.
Respond in concise sections with 1–3 next actions.`;

export async function POST(req: NextRequest) {
  const { messages = [], orchestrate = false } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const fallback = `Body: 10-minute walk and hydrate.\nMind: One 45-min focus block.\nSoul: Gratitude note tonight.`;
    return new Response(fallback, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  const openai = new OpenAI({ apiKey });

  if (!orchestrate) {
    const stream = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      stream: true,
      temperature: 0.6,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages]
    });
    const rs = new ReadableStream({
      async start(controller) {
        const enc = new TextEncoder();
        try {
          for await (const part of stream) {
            const delta = part.choices?.[0]?.delta?.content;
            if (delta) controller.enqueue(enc.encode(delta));
          }
        } finally { controller.close(); }
      }
    });
    return new Response(rs, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  // Orchestrated synthesis: get three short notes, then stream synthesis
  const userOnly = messages.filter((m: any) => m.role !== "system");
  const agents = [
    { name: 'Body', sys: 'You are Body Coach. Training, nutrition, recovery. Be precise and measurable.' },
    { name: 'Mind', sys: 'You are Mind Coach. Focus, habits, systems. Be clear and practical.' },
    { name: 'Soul', sys: 'You are Soul Guide. Values, alignment, meaning. Be grounded and kind.' }
  ];
  const notes = await Promise.all(agents.map(a => openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [{ role: 'system', content: a.sys }, ...userOnly],
    temperature: 0.5,
    max_tokens: 300,
  })));
  const sections = notes.map((r, i) => `## ${agents[i].name}\n${r.choices[0]?.message?.content ?? ''}`).join('\n\n');
  const synthStream = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    stream: true,
    temperature: 0.5,
    messages: [
      { role: 'system', content: 'You synthesize expert notes into a single plan with Body/Mind/Soul sections and 1–3 next actions each. Be concise.' },
      { role: 'user', content: sections }
    ]
  });
  const rs = new ReadableStream({
    async start(controller) {
      const enc = new TextEncoder();
      try {
        for await (const part of synthStream) {
          const delta = part.choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(enc.encode(delta));
        }
      } finally { controller.close(); }
    }
  });
  return new Response(rs, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

