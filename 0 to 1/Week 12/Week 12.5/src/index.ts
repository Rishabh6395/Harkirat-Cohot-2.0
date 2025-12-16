import { PrismaClient } from "@prisma/client"
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter });

// const users = await prisma.user.findMany()

const users = await prisma.user.findMany({
    where: {},
});

console.log("hey: ", users)

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log("Response: ", response)
}
insertUser('rishabh@12123', 'lol@1212', 'Rishabh', 'Bhatt')