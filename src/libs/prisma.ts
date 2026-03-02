import { PrismaClient } from "@prisma/client";

declare global {
	// allow global variable for Prisma Client to persist across module reloads in dev
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;