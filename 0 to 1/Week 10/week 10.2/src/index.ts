import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({} as any);

// async function insertUser(email: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.upsert({
//         where: { email },
//         update: {},
//         create: {
//             email,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// insertUser('rishabh1@gmail.com', 'rishabh123', 'Rishabh', 'Bhatt')


interface UpdateParams {
    firstName: string
    lastName: string
}

async function updateUser(email:string, {
    firstName,
    lastName
}: UpdateParams){
    const res = await prisma.user.update({
        where: {email: email},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
} 
updateUser('rishabh1@gmail.com',{
    firstName: "rishu",
    lastName: "lol"
})