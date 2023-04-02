'use client'

import { useRef, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { signOut } from "next-auth/react";

const varients = {
    active: { x: 16},
    inactive: { x: 0}}

const AccountSettings = () => {
    const [signOutActive, setSignOutActive] = useState(false)
    const blackListedElementRef = useRef<HTMLLIElement>(null)
    const handleSignOut = () => {
        if(!signOutActive){
            setSignOutActive(true)
            window.addEventListener('touchstart', touchEventFunction)
        }else{
            setSignOutActive(false)
        }
    }
    const touchEventFunction = (e: any) => dismiss(e)
    const dismiss = (e: { target: any }) => {
        if(!blackListedElementRef.current!.contains(e.target)){
            setSignOutActive(false)
            window.removeEventListener('touchstart', touchEventFunction)
        }
    }
    return (
        <div className='text-lg pl-2 pr-4'>
            <h2 className='text-gray-300 text-xl'>Account Settings</h2>
            <ul className='flex flex-col gap-2 py-2 pl-2'>
                <li ref={blackListedElementRef} className="flex justify-between items-center w-full">
                    <motion.button onClick={() => handleSignOut()} variants={varients} animate={signOutActive ? 'active' : 'inactive'} 
                            className={`${signOutActive && 'text-[#B23928]'} flex duration-200`}>
                        <h3>Sign Out</h3>
                        <AnimatePresence mode="wait">{signOutActive && <motion.h3 initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.4}}}>?</motion.h3>}</AnimatePresence>
                    </motion.button>
                    <AnimatePresence mode="wait">{signOutActive ? 
                        <motion.div exit={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} initial={{opacity: 0}} className="flex">
                            <button onClick={() => signOut()}>Yes</button>
                            <p className="mx-2">/</p>
                            <button onClick={() => handleSignOut()}>No</button>
                        </motion.div>
                    :
                        <motion.button initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{opacity: 0}} 
                            onClick={() => handleSignOut()}><svg className='h-5 fill-white pointer-events-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></motion.button>
                    }</AnimatePresence>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Change Username</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Change Password</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Delete Account</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
            </ul>
        </div>
    )
}

export default AccountSettings