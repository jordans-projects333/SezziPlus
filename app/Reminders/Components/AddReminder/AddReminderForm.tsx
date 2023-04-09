'use client'

import { FormEvent, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import ReminderInput from "../ReminderInput"
import { dateValidation, goalValidation, messageValidation, timeValidation } from "@/utils/Validation/ReminderValidation"

type Props = {
    currentReminder: string,
    setReminderSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const AddReminderForm = ({currentReminder, setReminderSelected}: Props) => {
    const [addReminderLoading, setAddReminderLoading] = useState(false)
    const [serverError, setServerError] = useState('')
    const [messageError, setMessageError] = useState('')
    let messageInput = useRef<HTMLInputElement>(null)
    const [dateError, setDateError] = useState('')
    let dateInput = useRef<HTMLTextAreaElement>(null)
    const [timeError, setTimeError] = useState('')
    let timeInput = useRef<HTMLInputElement>(null)
    const [goalError, setGoalError] = useState('')
    let goalInput = useRef<HTMLInputElement>(null)
    const queryClient = useQueryClient()
    const addReminder = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Message Validation
        if(addReminderLoading)return
        const messageValidated = messageValidation(messageInput.current!.value)
        if(!messageValidated.success){
            setMessageError(messageValidated.error)
        }else{
            if(messageError !== '')setMessageError('')
        }
        // Date Validation
        if(currentReminder === 'text'){
            const dateValidated = dateValidation(dateInput.current!.value)
            if(!dateValidated.success){
                setDateError(dateValidated.error)
            }else{
                if(dateError !== '')setDateError('')
            }
        }
        // Time Validation
        if(currentReminder === 'text'){
            const timeValidated = timeValidation(timeInput.current!.value, dateInput.current!.value)
            if(!timeValidated.success){
                setTimeError(timeValidated.error)
            }else{
                if(timeError !== '')setTimeError('')
            }
        }
        // Goal Validation
        if(goalInput.current !== null && goalInput.current?.value !== ''){
            const goalValidated = goalValidation(goalInput.current!.value)
            if(!goalValidated.success){
                setGoalError(goalValidated.error)
            }else{
                if(goalError !== '')setGoalError('')
            }
        }
    }
    return (
        <motion.form onSubmit={(e) => addReminder(e)} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2}}} exit={{opacity: 0}}>
            {/* Inputs */}
            {((currentReminder === 'text' || currentReminder === 'general')) && 
            <>
                <ReminderInput title={"Date"} optional={(currentReminder === 'general')} inputType={'date'} inputRef={dateInput} inputError={dateError}/>
                <ReminderInput title={"Time"} optional={(currentReminder === 'general')} inputType={'time'} inputRef={timeInput} inputError={timeError}/>
            </>}
            {((currentReminder !== 'text' && currentReminder !== 'general')) && 
            <>
                <ReminderInput title={"Goal"} optional={true} inputType={'number'} inputRef={goalInput} inputError={goalError}/>
            </>}        
            {/* Text Area */}
            <ReminderInput title={"Reminder"} optional={false} inputRef={messageInput} inputError={messageError}/>
            {/* Server Error */}
            <p className="text-red-500 text-center mb-1">{serverError}</p>
            {/* Add Reminder Button */}
            <div className="flex w-full">
                <button type="submit" className={`${addReminderLoading && 'scale-90'} bg-[#424242] mx-auto duration-200 text-white text-xl font-medium w-[80%] py-2 mb-4 rounded`}>
                    {addReminderLoading ? 'Loading' : 'Add'}
                </button>
            </div>
        </motion.form>
    )
    }

export default AddReminderForm