import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

export function getPrisma(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null;
  if (!prisma) prisma = new PrismaClient();
  return prisma;
}

export async function getOrCreateUserOrg(email: string) {
  const db = getPrisma();
  if (!db) return null;
  const user = await db.user.upsert({
    where: { email },
    update: {},
    create: { email },
  });
  let membership = await db.membership.findFirst({ where: { userId: user.id } });
  if (!membership) {
    const slug = email.split('@')[0] + "-workspace";
    const org = await db.org.create({ data: { name: `${email} Workspace`, slug } });
    membership = await db.membership.create({ data: { userId: user.id, orgId: org.id, role: "owner" } });
  }
  return { user, membership };
}

