import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export async function GET() {
  const db = getPrisma();
  return NextResponse.json({ db: !!db });
}

