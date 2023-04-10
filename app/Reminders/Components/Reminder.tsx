'use client'

import { motion, useAnimate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { useStore } from "@/Zustand/store"
import DeleteReminderButton from "./DeleteReminderButton"
import ReminderOptions from "./ReminderOptions"

type Props = {
    message: string,
    date?: string,
    time?: string,
    type?: string,
    goal?: number,
    id?: string
}

const Reminder = ({message, date, time, type, goal, id}: Props) => {
    const [scope, animate] = useAnimate()
    const [resetPosition, setResetPosition] = useState(false)
    const [deleteActive, setDeleteActive] = useState(false)
    const [editActive, setEditActive] = useState(false)
    const [optionsActive, setOptionsActive] = useState(false)
    let optionsRef = useRef<HTMLDivElement>(null)
    let editButtonRef = useRef<HTMLButtonElement>(null)
    let deleteButtonRef = useRef<HTMLButtonElement>(null)
    const resetReminderPosition = () => {
        if(resetPosition)setResetPosition(false)
    }
    const dragEndOptions = () => {
        const rect = scope.current!.getBoundingClientRect()
        if(rect.left >= optionsRef.current!.offsetWidth - 16){
            animate(scope.current, { x: optionsRef.current!.offsetWidth })
            setOptionsActive(true)
            window.addEventListener('touchstart', touchEventFunction)
        }
    }
    const touchEventFunction = (e: any) => dismiss(e)
    const dismiss = (e: { target: HTMLButtonElement }) => {
        if(editButtonRef.current === null || deleteButtonRef.current === null){
            window.removeEventListener('touchstart', touchEventFunction)
            return
        }
        if(e.target !== editButtonRef.current && e.target !== deleteButtonRef.current){
            window.removeEventListener('touchstart', touchEventFunction)
            setOptionsActive(false)
            animate(scope.current, { x: 0 })
            if(deleteActive)setDeleteActive(false)
            if(editActive)setEditActive(false)
        }
    }
    return (
        <motion.div drag={'x'}
            dragElastic = {{left: 0, right: 0.4}}
            dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            // initial={{ opacity: 0 }}
            // exit={{height: 0, opacity: 0}}
            // whileInView={{opacity: 1}}
            // viewport={{ once: true }}
            ref={scope} className='flex flex-col w-full border-b-2 border-l-2 bg-black border-zinc-900 relative text-white' 
                        onTouchMove={() => resetReminderPosition()} onTouchEnd={() => dragEndOptions()}>
            <div className="flex">
                <div className="flex items-center mt-2">
                    {type === 'text' && 
                        <svg className='h-6 mb-2 ml-2 mr-4 fill-[#B23928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>}
                    {type !== 'general' && type !== 'text' &&
                        <button onClick={() => console.log('handleGoalClick')}><svg className='h-6 mb-2 ml-2 mr-4 fill-[#B23928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></button>}
                    {type === 'general' &&
                        <svg className='h-6 mb-2 ml-2 mr-4 fill-[#B23928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"/></svg>}
                </div>
                <p className='pr-2 mt-2 mb-[10px]'>{message}</p>
            </div>
            {(date || time) && 
            <div className="flex items-end justify-end">
                <p className="mr-2 text-xs mb-1">{time}</p>
                <p className="mr-2 text-xs mb-1">{date}</p>
            </div>}
            {(type !== 'general' && type !== 'text' && goal !== 1) &&
            <div>
                {/* <p>This is the goal section</p> */}
            </div>}
            <ReminderOptions optionsRef={optionsRef} optionsActive={optionsActive} editButtonRef={editButtonRef} deleteButtonRef={deleteButtonRef}
                             setEditActive={setEditActive} setDeleteActive={setDeleteActive} editActive={editActive} deleteActive={deleteActive} 
                             id={id} scope={scope} animate={animate} setOptionsActive={setOptionsActive}/>
        </motion.div>
    )
}

export default Reminder