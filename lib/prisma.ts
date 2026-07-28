/**
 * Prisma client stub.
 * TODO: conectar quando houver DATABASE_URL (Supabase Postgres) e `prisma generate`.
 *
 * Uso futuro:
 *   import { prisma } from "@/lib/prisma";
 *   await prisma.lead.create({ data: { ... } });
 */

// import { PrismaClient } from "@prisma/client";
//
// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
// export const prisma = globalForPrisma.prisma ?? new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const prisma = null as unknown as {
  lead: { create: (args: unknown) => Promise<unknown> };
};

export const isPrismaReady = false;
