import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getPrisma } from "@/lib/db";

const db = getPrisma();

export const authOptions: NextAuthOptions = {
  adapter: db ? (PrismaAdapter(db as any) as any) : undefined,
  session: { strategy: db ? "database" : "jwt" },
  providers: [
    Credentials({
      name: "Email",
      credentials: { email: { label: "Email", type: "email" } },
      async authorize(creds) {
        if (!creds?.email) return null;
        if (!db) return { id: "dev", email: String(creds.email) } as any;
        const user = await db.user.upsert({ where: { email: String(creds.email) }, update: {}, create: { email: String(creds.email) } });
        return { id: user.id, email: user.email } as any;
      }
    }),
  ],
  pages: { signIn: "/sign-in" },
};

