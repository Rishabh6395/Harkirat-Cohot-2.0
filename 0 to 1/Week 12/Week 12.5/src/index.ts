import { PrismaClient }from "./generated/prisma/client.js"

const prisma = new PrismaClient({} as any);

// const users = await prisma.user.findMany()

async function insertUser(username:string, password: string, firstName: string, lastName: string) {
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
insertUser('rishabh@1212', 'lol@1212', 'Rishabh', 'Bhatt')