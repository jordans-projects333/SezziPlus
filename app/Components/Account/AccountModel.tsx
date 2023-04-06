'use client'

import ResizableComponent from "@/utils/Components/ResizableComponent"
import RegisterForm from "./RegisterForm"
import SignInForm from "./SignInForm"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import { useStore } from "@/Zustand/store"
import { MouseEvent, useRef, useState } from "react"
import Image from "next/image"
import googleLogo from '@/Images/googleLogo.png'
import RisingFallingModel from "@/utils/Components/RisingFallingModel"

const AccountModel = () => {
    const { accountModelToggle } = useStore()
    const [accountToggle, setAccountToggle] = useState(true)
    let fadedBackground = useRef<HTMLInputElement>(null)
    const handleAccountModelToggle = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if(e.target !== fadedBackground.current)return
        useStore.setState(() => ({
            accountModelToggle : false
        }))
    }
    return (
        <RisingFallingModel active={accountModelToggle} cancelFunction={handleAccountModelToggle} fadedBackgroundRef={fadedBackground}
                            tailwindStyles={'top-[10%] pb-8 accountModel border-zinc-600 border'}>
            <div className="flex mt-4 border-b border-white w-[90%] mx-auto pb-2">
                <button className={`flex-1 duration-200 ${!accountToggle ? 'text-white text-lg hover:text-xl' : 'text-[#B23928] text-2xl'}`} onClick={() => setAccountToggle(true)}>Sign in</button>
                <button className={`flex-1 duration-200 ${accountToggle ? 'text-white text-lg hover:text-xl' : 'text-[#B23928] text-2xl'}`} onClick={() => setAccountToggle(false)}>Register</button>
            </div>
            <ResizableComponent>
                {accountToggle ?
                    <SignInForm/>
                : 
                    <RegisterForm/>
                }
            </ResizableComponent>
            <div className="w-[85%] my-4 mx-auto flex items-center">
                <div className="h-[1px] bg-white flex-1"></div>
                <h4 className="px-4 text-white mb-1">or</h4>
                <div className="h-[1px] bg-white flex-1"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <button className="hover:scale-105 duration-200 bg-white w-[85%] py-2 rounded shadowButton flex justify-center items-center relative" onClick={() => signIn('google', {callbackUrl: '/',})}><Image src={googleLogo} height={28} width={28} alt={'google logo'} className='absolute left-0 ml-2'/>Continue with Google</button>
                <button className="hover:scale-105 duration-200 bg-[#4267B2] flex items-center justify-center text-white w-[85%] py-2 rounded shadowButton relative" onClick={() => signIn('facebook', {callbackUrl: '/',})}> <svg className="absolute left-0 h-5 ml-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>Continue with Facebook</button>
                <button className="hover:scale-105 duration-200 bg-black border border-zinc-600 flex justify-center items-center text-white w-[85%] py-2 rounded shadowButton relative"><svg className="absolute left-0 h-5 ml-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>Continue with Apple</button>
            </div>
        </RisingFallingModel>
    )
}

export default AccountModel