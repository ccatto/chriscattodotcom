// global prisma client:

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient};

export const prisma = globalForPrisma.prisma || new PrismaClient();

const db = globalForPrisma.prisma || prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;
export default db;