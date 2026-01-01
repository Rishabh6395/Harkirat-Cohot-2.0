import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const client = new PrismaClient({
    adapter
})

import { Button } from "./components/Button"


async function getUserDetails()  {
    const user = await client.user.findFirst()
     // db logic
     return {
         username: user?.username,
         password: user?.password
     }
}

export default async function Home() {
 
  const userDetails = await getUserDetails()
  return (
    <div className="justify-center p-12">
      hi
      <Button/>
      <div className="pl-3">
        {userDetails.username}
        <br />
        {userDetails.password}
      </div>
    </div>
  );
}
