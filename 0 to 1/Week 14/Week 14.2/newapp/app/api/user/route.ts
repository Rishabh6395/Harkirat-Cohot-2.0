import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

import { NextRequest } from "next/server"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const client = new PrismaClient({
    adapter
})

export function GET(){
    // db logic
    return Response.json({
        email: "rishabh.bhatt@gmail.com",
        name: "rishabh"
    })
}
export async function POST(req: NextRequest){
    // db logic
    const body = await req.json()
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
        email: "rishabh.bhatt@gmail.com",
        name: "rishabh",
        message: "You are logged in!"
    })
}