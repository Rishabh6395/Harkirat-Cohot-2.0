import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Clicker_Script } from "next/font/google"

import { NextRequest, NextResponse } from "next/server"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const client = new PrismaClient({
    adapter
})

export async function GET(res: NextResponse){
    const user = await client.user.findFirst()
    // db logic
    return NextResponse.json({
        username: user?.username,
        password: user?.password
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

// how to get input from body, headers and query params
// export async function POST(req:NextRequest) {
//     // body
//     const body = await req.json()
//     // headers
//     console.log(req.headers.get('authorization'))
//     // query params
//     console.log(req.nextUrl.searchParams.get("name"))

//     // hit the database with username and password
//     return NextResponse.json({
//         message: "You are signed in"
//     })
// }