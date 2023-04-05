'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from "react"

const varients = {
    active: { x: 16},
    inactive: { x: 0}}

type Props = {
    title: string,
    yesFunction: ()=>void,
}

const YesNoSetting = ({title, yesFunction}: Props) => {
    const [active, setActive] = useState(false)
    const blackListedElementRef = useRef<HTMLLIElement>(null)
    const handleToggle = () => {
        if(!active){
            setActive(true)
            window.addEventListener('touchstart', touchEventFunction)
        }else{
            setActive(false)
        }
    }
    const touchEventFunction = (e: any) => dismiss(e)
    const dismiss = (e: { target: any }) => {
        if(!blackListedElementRef.current!.contains(e.target)){
            setActive(false)
            window.removeEventListener('touchstart', touchEventFunction)
        }
    }
    return (
        <li ref={blackListedElementRef} className="flex justify-between items-center w-full">
            <motion.button onClick={() => handleToggle()} variants={varients} animate={active ? 'active' : 'inactive'} 
                    className={`${active && 'text-[#B23928]'} flex duration-200`}>
                <h3>{title}</h3>
                <AnimatePresence mode="wait">{active && <motion.h3 initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.4}}}>?</motion.h3>}</AnimatePresence>
            </motion.button>
            <AnimatePresence mode="wait">{active ? 
                <motion.div exit={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} initial={{opacity: 0}} className="flex">
                    <button onClick={() => yesFunction()}>Yes</button>
                    <p className="mx-2">/</p>
                    <button onClick={() => handleToggle()}>No</button>
                </motion.div>
            :
                <motion.button initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{opacity: 0}} 
                    onClick={() => handleToggle()}><svg className='h-5 fill-white pointer-events-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></motion.button>
            }</AnimatePresence>
        </li>
    )
}

export default YesNoSetting