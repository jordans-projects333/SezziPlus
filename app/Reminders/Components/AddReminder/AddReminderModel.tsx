'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useStore } from "@/Zustand/store"
import { SetStateAction, useRef, useState } from "react"
import AddReminderForm from "./AddReminderForm"
import RisingFallingModel from "@/utils/Components/RisingFallingModel"
import ResizableComponent from "@/utils/Components/ResizableComponent"

const AddReminderModel = () => {
    let fadedBackground = useRef(null)
    const [reminderSelected, setReminderSelected] = useState(false)
    const [currentReminder, setCurrentReminder] = useState('')
    const { addReminderModelToggle } = useStore()
    const handleRemoveModel = (e: { target: null }) => {
        if(e.target !== fadedBackground.current)return
        setReminderSelected(false)
        useStore.setState(() => ({
            addReminderModelToggle : false
        }))
    }
    const handleReminderType = (currentReminder: SetStateAction<string>) => {
        setCurrentReminder(currentReminder)
        setReminderSelected(true)
    }
    return (
        <RisingFallingModel active={addReminderModelToggle} cancelFunction={handleRemoveModel} 
            fadedBackgroundRef={fadedBackground} tailwindStyles={'top-[15%] accountModel border-white border'}>
            <div className="w-[100%] border-b border-white mx-auto mb-2 flex items-center justify-center relative">
                {reminderSelected && <button onClick={() => setReminderSelected(false)} className="absolute left-0 top-[50%] translate-y-[-50%] fill-[#B23928] ml-4"><svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>}
                <h3 className="text-[#B23928] text-2xl pt-2 pb-3">Add Reminder</h3>
            </div>
            <ResizableComponent>
                {!reminderSelected ? 
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex flex-col text-white font-medium text-2xl bg-black">
                        <button onClick={() => handleReminderType('text')} className=" border-b-2 border-zinc-900 pb-2"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">Text +</h3></button>
                        <button onClick={() => handleReminderType('daily')} className=" border-b-2 border-zinc-900 pb-2"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">Daily +</h3></button>
                        <button onClick={() => handleReminderType('weekly')} className=" border-b-2 border-zinc-900 pb-2"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">Weekly +</h3></button>
                        <button onClick={() => handleReminderType('monthly')} className=" border-b-2 border-zinc-900 pb-2"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">Monthly +</h3></button>
                        <button onClick={() => handleReminderType('yearly')} className=" border-b-2 border-zinc-900 pb-2"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">Yearly +</h3></button>
                        <button onClick={() => handleReminderType('general')} className="pb-2 pt-1"><h3 className="hover:scale-95 duration-200 hover:text-gray-400">General +</h3></button>
                    </motion.div>
                : 
                <AddReminderForm currentReminder={currentReminder} setReminderSelected={setReminderSelected}/>
                }
            </ResizableComponent>
        </RisingFallingModel>
    )
}

export default AddReminderModel