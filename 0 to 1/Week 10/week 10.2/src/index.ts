import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({} as any);

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res)
}
insertUser('rishabh@gmail.com', 'rishabh123', 'Rishabh', 'Bhatt')
