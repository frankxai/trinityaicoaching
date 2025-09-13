import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const db = getPrisma();
    if (!db) return NextResponse.json({ error: 'Database not configured' }, { status: 400 });
    const { name, description, horizon, plan } = await req.json();
    // naive: for now, attach to first org the user owns; real app would use session
    const org = await db.org.findFirst();
    if (!org) return NextResponse.json({ error: 'No org found. Sign in first.' }, { status: 400 });
    const rec = await db.programTemplate.create({ data: { name, description, horizon: Number(horizon||30), plan, orgId: org.id } });
    return NextResponse.json({ id: rec.id });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || 'error' }, { status: 500 });
  }
}

