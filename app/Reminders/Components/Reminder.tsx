'use client'

import { motion, useAnimate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useStore } from "@/Zustand/store"

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
    let currentType = useRef(type)
    let currentId = useRef(id)
    let currentDate = useRef(date)
    let currentTime = useRef(time)
    let currentGoal = useRef(goal)
    let currentMessage = useRef(message)
    let optionsRef = useRef(null)
    let editButtonRef = useRef(null)
    let deleteButtonRef = useRef(null)
    let deletebuttonClickable = useRef(true)
    const [horizontalOptions, setHorizontalOptions] = useState(false)
    const [resetPosition, setResetPosition] = useState(false)
    const [optionsActive, setOptionsActive] = useState(false)
    const [deleteActive, setDeleteActive] = useState(false)
    const [editActive, setEditActive] = useState(false)
    const dragOptions = () => {
        if(resetPosition)setResetPosition(false)
    }
    // const dragEndOptions = () => {
    //     const rect = optionsRef.current.getBoundingClientRect()
    //     if(rect.left >= -16){
    //         animate(scope.current, { x: optionsRef.current.offsetWidth })
    //         setOptionsActive(true)
    //         window.addEventListener('touchstart', testb)
    //     }
    // }
    // const testb = (e) => handleTouch(e)
    // useEffect(() => {
    //     if(optionsRef.current.offsetHeight >= (editButtonRef.current.offsetHeight * 2) + 20){
    //         setHorizontalOptions(true)
    //     }
    // },[])
    // const handleTouch = (e) => {
    //     if(editButtonRef.current === null || deleteButtonRef.current === null){
    //         window.removeEventListener('touchstart', testb)
    //         return
    //     }
    //     if(e.target !== editButtonRef.current && e.target !== deleteButtonRef.current){
    //         window.removeEventListener('touchstart', testb)
    //         setOptionsActive(false)
    //         animate(scope.current, { x: 0 })
    //         if(deleteActive)setDeleteActive(false)
    //         if(editActive)setEditActive(false)
    //     }
    // }
    // const queryClient = useQueryClient()
    // const deleteMutation = useMutation({
    // mutationFn: async () => {
    //     const res = await fetch('/api/Reminders/deleteReminder', {
    //         method: 'DELETE',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({id: currentId.current})
    //     })
    //     if(res.status === 500){
    //         deletebuttonClickable.current = true
    //         useStore.setState(() => ({
    //             errorMessage : 'Error deleting reminder',
    //             errorActive: true
    //         }))
    //     }
    // },
    // onMutate: async () => {
    //     await queryClient.cancelQueries({ queryKey: ['Reminders']})
    //     const previousState = await queryClient.getQueryData({queryKey: ['Reminders']})
    //     queryClient.setQueryData(['Reminders'], 
    //     previousState.filter((item) => item.id !== currentId.current))
        
    //     return { previousState }
    // },
    // onError: (err, post, context) => {
    //     queryClient.setQueryData(['Reminders'], context.previousState)
    // },
    // onSettled: () => {
    //     queryClient.invalidateQueries({queryKey: ['Reminders']})
    // }
    // })
    // const handleDelete = () => {
    //     if(!deleteActive){
    //         setDeleteActive(true)
    //         if(editActive)setEditActive(false)
    //     }else{
    //         if(deletebuttonClickable.current){
    //             animate(scope.current, { height: 0, opacity: 0})
    //             deletebuttonClickable.current = false
    //             deleteMutation.mutate()
    //         }
    //     }
    // }
    // const handleEdit = () => {
    //     if(!editActive){
    //         setEditActive(true)
    //         if(deleteActive)setDeleteActive(false)
    //     }else{
    //         animate(scope.current, { x: 0 })
    //         console.log(currentType.current, 'oi')
    //         useStore.setState(() => ({
    //             editReminderModelToggle : true,
    //             editReminderId: currentId.current,
    //             editReminderType: currentType.current,
    //             editReminderMessage: currentMessage.current,
    //             editReminderDate: currentDate.current,
    //             editReminderTime: currentTime.current,
    //             editReminderGoal: currentGoal.current
    //         }))
    //     }
    // }
    // const handleGoalClick = () => {
        
    // }
    return (
        <motion.div drag={'x'}
            dragElastic = {{left: 0, right: 0.4}}
            dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            initial={{ opacity: 0 }}
            exit={{height: 0, opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            ref={scope} className='flex flex-col w-full border-b-2 border-l-2 bg-black border-zinc-900 relative text-white' onTouchMove={() => dragOptions()} onTouchEnd={() => console.log('dragEndOptions')}>
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
            <div ref={optionsRef} className={`absolute right-[100%] flex gap-6 px-4 justify-center items-center h-full ${horizontalOptions && 'flex-col'}`}>
                <div className="absolute right-0 top-0 h-full w-[600%] bg-amber-700 -z-10 border-zinc-900 border-2"></div>
                <button ref={editButtonRef} onClick={() => console.log('handleEdit')} className={`${!optionsActive ? 'scale-75' : (!editActive ? 'scale-[0.85]' : 'scale-95')} duration-300`}><svg className={` ${editActive ? 'fill-red-800' : 'fill-black'} duration-200 pointer-events-none h-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button>
                <button ref={deleteButtonRef} onClick={() => console.log('handleDelete')} className={`${!optionsActive ? 'scale-75' : (!deleteActive ? 'scale-[0.85]' : 'scale-95')} duration-300`}><svg className={` ${deleteActive ? 'fill-red-800' : 'fill-black'} duration-200 pointer-events-none h-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
            </div>
        </motion.div>
    )
}

export default Reminder