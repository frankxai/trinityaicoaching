import { NextRequest, NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai";
import { staticPlan } from "@/lib/planTemplates";

export async function POST(req: NextRequest) {
  try {
    const { horizon = 30, profile = null } = await req.json();
    const openai = getOpenAI();

    if (openai) {
      const profileTxt = profile ? `\n\nProfile JSON:\n${JSON.stringify(profile)}` : "";
      const prompt = `Create a ${horizon}-day plan with sections Body, Mind, and Soul. Each section should have 6-10 bullet points with practical, measurable steps. Keep it concise and motivating.${profileTxt}`;
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a structured planning assistant for holistic coaching." },
          { role: "user", content: prompt }
        ],
        temperature: 0.5,
      });
      const text = completion.choices[0]?.message?.content ?? "";
      const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
      const bullets = lines.filter(l => l.startsWith("- ") || l.match(/^\d+\./));
      const take = (arr: string[], start: number, count: number) => arr.slice(start, start + count).map(s => s.replace(/^(-\s|\d+\.\s)/, ""));
      const per = Math.max(6, Math.floor(bullets.length / 3) || 6);
      const plan = [
        { title: "Body", items: take(bullets, 0, per) },
        { title: "Mind", items: take(bullets, per, per) },
        { title: "Soul", items: take(bullets, per * 2, per) },
      ];
      return NextResponse.json({ plan });
    }

    // Fallback static plan
    return NextResponse.json({ plan: staticPlan(horizon) });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "unknown" }, { status: 500 });
  }
}
