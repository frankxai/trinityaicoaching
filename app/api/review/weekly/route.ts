import { NextRequest, NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { checkins = [], journal = [], habits = null } = await req.json();
    const openai = getOpenAI();
    if (openai) {
      const content = `Create a weekly review.
Check-ins: ${JSON.stringify(checkins)}
Journal: ${JSON.stringify(journal)}
Habits: ${JSON.stringify(habits)}

Output concise sections:
- Highlights (3–5 bullets)
- Challenges (2–4 bullets)
- Trends (Body/Mind/Soul)
- Next week: One key focus per domain`;
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a supportive weekly reviewer for holistic coaching." },
          { role: "user", content }
        ],
        temperature: 0.4,
      });
      const summary = completion.choices[0]?.message?.content ?? "";
      return NextResponse.json({ summary });
    }
    // Fallback summary
    const days = checkins.length;
    const summary = `Highlights: consistent effort, some variance in mood.
Challenges: midweek dip; distractions impact deep work.
Trends — Body: steps + training steady. Mind: focus higher mornings. Soul: gratitude improves evenings.
Next week: Body: 3 strength sessions. Mind: 2x 90‑min blocks. Soul: one meaningful conversation.`;
    return NextResponse.json({ summary, days });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "unknown" }, { status: 500 });
  }
}

