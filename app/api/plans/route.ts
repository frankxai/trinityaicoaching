import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export async function GET() {
  const db = getPrisma();
  if (!db) return NextResponse.json({ items: [] });
  const org = await db.org.findFirst();
  if (!org) return NextResponse.json({ items: [] });
  const items = await db.plan.findMany({ where: { orgId: org.id }, orderBy: { createdAt: 'desc' }, take: 50 });
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  try {
    const db = getPrisma();
    if (!db) return NextResponse.json({ error: 'Database not configured' }, { status: 400 });
    const { name, horizon, plan } = await req.json();
    const org = await db.org.findFirst();
    if (!org) return NextResponse.json({ error: 'No org found. Sign in first.' }, { status: 400 });
    const rec = await db.plan.create({ data: { name, horizon: Number(horizon||30), json: plan, orgId: org.id } });
    return NextResponse.json({ id: rec.id });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || 'error' }, { status: 500 });
  }
}

