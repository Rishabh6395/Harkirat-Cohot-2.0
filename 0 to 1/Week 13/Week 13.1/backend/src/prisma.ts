import { PrismaClient } from '@prisma/client/edge'
import { PrismaNeon } from '@prisma/adapter-neon'

let prisma: PrismaClient | undefined

export function getPrisma(databaseUrl: string) {
  if (!prisma) {
    prisma = new PrismaClient({
      adapter: new PrismaNeon({
        connectionString: databaseUrl,
      }),
    })
  }

  return prisma
}
