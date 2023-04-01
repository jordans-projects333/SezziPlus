import { PrismaClient } from "@prisma/client";

const gobalForPrisma = global as unknown as { prisma: PrismaClient}

export const prisma = gobalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') gobalForPrisma.prisma