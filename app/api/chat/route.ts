import { NextRequest, NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai";

type Message = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are Trinity Coach: a collaborative triad of specialists.
- Body Coach: training, nutrition, recovery.
- Mind Coach: focus, discipline, habits.
- Soul Guide: values, meaning, alignment.

Respond concisely with balanced, practical steps.
Where helpful, section your answer under Body / Mind / Soul.`;

export async function POST(req: NextRequest) {
  try {
    const { messages = [], orchestrate = false } = await req.json();
    const openai = getOpenAI();

    if (openai) {
      if (orchestrate) {
        // Run Body, Mind, Soul prompts separately and synthesize
        const agents = [
          { name: 'Body', sys: 'You are Body Coach. Training, nutrition, recovery. Be precise and measurable.' },
          { name: 'Mind', sys: 'You are Mind Coach. Focus, habits, systems. Be clear and practical.' },
          { name: 'Soul', sys: 'You are Soul Guide. Values, alignment, meaning. Be grounded and kind.' }
        ];
        const userOnly = messages.filter((m:any) => m.role !== 'system');
        const results = await Promise.all(agents.map(a => openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [{ role: 'system', content: a.sys }, ...userOnly],
          temperature: 0.6,
        })));
        const sections = results.map((r, i) => `## ${agents[i].name}\n${r.choices[0]?.message?.content ?? ''}`);
        const synthesis = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You synthesize multiple expert notes into one concise plan with Body/Mind/Soul sections and 3-5 steps each.' },
            { role: 'user', content: sections.join('\n\n') }
          ],
          temperature: 0.5,
        });
        const reply = synthesis.choices[0]?.message?.content ?? sections.join('\n\n');
        return NextResponse.json({ reply });
      } else {
        const completion = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.7,
        });
        const reply = completion.choices[0]?.message?.content ?? "I couldn't generate a response.";
        return NextResponse.json({ reply });
      }
    }

    // Fallback deterministic coach reply if no API key
    const last = (messages as Message[]).filter(m => m.role === "user").slice(-1)[0]?.content || "";
    const reply = `Body: Take a 10-minute walk and hydrate.\nMind: Define one important task and timebox 45 minutes.\nSoul: Note one thing you’re grateful for.\n\nYou asked: "${last}"`;
    return NextResponse.json({ reply });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "unknown" }, { status: 500 });
  }
}
