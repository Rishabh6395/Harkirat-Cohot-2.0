"use client";

import { ReactNode, useEffect } from "react";

interface AdminProps {
    className?: string;
    Client: string;
}

export const Admin = ({ className, Client }: AdminProps) => {
    useEffect(() => {
        setTimeout(() => {
            alert("Hi there");
        }, 2000);
    }, []);

    return (
        <div
            className={className}
            onClick={() => alert(`Hello from ${Client} app!`)}
        >
            lol from admin component
        </div>
    );
};
