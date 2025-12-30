"use client"
import { useRouter } from "next/navigation";

export function Button(){
     const router = useRouter()
    return <div>
        <button onClick={() => router.push('/signup')} className="bg-red-400 rounded-4xl p-2 ">Sign up</button>
    </div>
}