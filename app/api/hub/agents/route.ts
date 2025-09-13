import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export async function GET() {
  const db = getPrisma();
  if (!db) return NextResponse.json({ items: [] });
  const items = await db.agent.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return NextResponse.json({ items: items.map((a: any) => ({ id: a.id, name: a.name, yaml: a.yaml })) });
}

export async function POST(req: NextRequest) {
  try {
    const db = getPrisma();
    if (!db) return NextResponse.json({ error: 'Database not configured' }, { status: 400 });
    const { id, name, yaml } = await req.json();
    if (!name || !yaml) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    const org = await db.org.findFirst();
    if (!org) return NextResponse.json({ error: 'No org found. Sign in first.' }, { status: 400 });
    const rec = id
      ? await db.agent.update({ where: { id }, data: { name, yaml } })
      : await db.agent.create({ data: { name, yaml, orgId: org.id } });
    return NextResponse.json({ id: rec.id });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || 'error' }, { status: 500 });
  }
}
