import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialProvider from 'next-auth/providers/credentials'

// export async function GET (req: NextRequest, { params }: { params: Promise<string>}){
//     const resolvedParams = await params;
// //   console.log("param:", resolvedParams); 
//     return NextResponse.json({
//         message: "hello",
        
//     })
// }

const handler = NextAuth({
    providers: [
        CredentialProvider({
            name: 'Email',
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: 'Email'},
                password: {label: 'Password', type: 'password', placeholder: 'Password'}
                
            },
            async authorize(credentials: any){
                console.log("credentials", credentials)
                return {
                    id: "user1",
                    name: "rishabh",
                    email: "rishabh@gmail.com"
                }
            }
        })
    ]
})

export const GET = handler;
export const POST = handler;
