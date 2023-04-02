'use client'

import { useStore } from "@/Zustand/store"
import { DefaultSession } from "next-auth";
import Link from "next/link";

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
        <Link href='/Settings' className="text-white mr-4 font-openSans font-medium">{user?.name}</Link>
    )
}

export default SignInButton