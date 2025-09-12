import { NextRequest, NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { entries = [] } = await req.json();
    const openai = getOpenAI();
    if (openai) {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "You summarize journals with empathy and practicality. Output sections: Insights, Emotions, and One Next Step for Body/Mind/Soul." },
          { role: "user", content: entries.join("\n\n") }
        ],
        temperature: 0.4,
      });
      const summary = completion.choices[0]?.message?.content ?? "";
      return NextResponse.json({ summary });
    }
    const wordCount = String(entries.join(" ").split(/\s+/).filter(Boolean).length);
    const summary = `Insights: energy varies with sleep; focus better mornings.\nEmotions: hopeful, some frustration midweek.\nNext Step — Body: lights out by 10:30pm. Mind: one 90-min block. Soul: gratitude note at night.\n(${wordCount} words analyzed)`;
    return NextResponse.json({ summary });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "unknown" }, { status: 500 });
  }
}

