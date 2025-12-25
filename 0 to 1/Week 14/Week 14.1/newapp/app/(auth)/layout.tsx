import React from "react"

export default function signIn({children}: {
    children: React.ReactNode
}){
    return <div>
        <div className="boder-b text-center">
            20% off for the next 3 days
        </div>
        {children}
    </div>
}