'use client'

import { useStore } from "@/Zustand/store"
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
    user?: DefaultSession["user"],
}

const SignInButton = ({user}: Props) => {
    const handleAccountModelToggle = () => {
        useStore.setState(() => ({
            accountModelToggle : true
        }))
    }
    if(!user)return (
        <button className="text-white mr-4 font-openSans font-medium" onClick={() => handleAccountModelToggle()}>Sign in</button>
    )
    return(
        <button onClick={() => signOut()} className="text-white mr-4 font-openSans font-medium">{user?.name}</button>
    )
}

export default SignInButton