'use client'

import { FormEvent, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import ReminderInput from "../ReminderInput"
import { reminderValidation } from "@/utils/Validation/Reminders/clientSide"
import { useStore } from "@/Zustand/store"
import { v4 as uuidv4 } from 'uuid';

type Props = {
    currentReminder: string,
    setReminderSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const AddReminderForm = ({currentReminder, setReminderSelected}: Props) => {
    const [addReminderLoading, setAddReminderLoading] = useState(false)
    const [messageError, setMessageError] = useState('')
    let messageInput = useRef<HTMLInputElement>(null)
    const [dateError, setDateError] = useState('')
    let dateInput = useRef<HTMLTextAreaElement>(null)
    const [timeError, setTimeError] = useState('')
    let timeInput = useRef<HTMLInputElement>(null)
    const [goalError, setGoalError] = useState('')
    let goalInput = useRef<HTMLInputElement>(null)
    const queryClient = useQueryClient()

    const addMutation = useMutation({
        mutationFn: async () => {
            const res = await fetch('/api/reminders', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({
                    message: messageInput.current!.value,
                    date: (dateInput.current === null) ? '' : dateInput.current.value,
                    time: (timeInput.current === null) ? '' : timeInput.current.value,
                    goal: (goalInput.current === null || goalInput.current.value === '') ? 0 : parseInt(goalInput.current.value),
                    type: currentReminder
                })
            })
            if(res.status !== 200){
                const errorMessage = (await res.json()).error
                useStore.setState(() => ({
                    alertActive: true,
                    alertMessage: errorMessage
                }))
            }
            setAddReminderLoading(false)
        },
        onMutate: async () => {
            // cancel outgoing fetches
            await queryClient.cancelQueries({ queryKey: ['Reminders']})
            // get snapshot
            const previousState: any = queryClient.getQueryData(['Reminders'])
            queryClient.setQueryData(['Reminders'], 
            [...previousState, {
                id: uuidv4(),
                message: messageInput.current!.value,
                date: (dateInput.current === null) ? '' : dateInput.current.value,
                time: (timeInput.current === null) ? '' : timeInput.current.value,
                goal: (goalInput.current === null || goalInput.current.value === '') ? 0 : parseInt(goalInput.current.value),
                type: currentReminder}]
            )
            return { previousState }
        },
        onError: (err, post, context) => {
            queryClient.setQueryData(['Reminders'], context?.previousState)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['Reminders']})
        }
    })
    const addReminder = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const successfulValidation = reminderValidation(addReminderLoading, 
            currentReminder, messageInput.current!.value, messageError, setMessageError,
             dateError, setDateError, timeError, setTimeError,
            goalInput.current, goalError, setGoalError, dateInput.current?.value, timeInput.current?.value, goalInput.current?.value)
        if(successfulValidation){
            setAddReminderLoading(true)
            useStore.setState(() => ({
                addReminderModelToggle : false
            }))
            addMutation.mutate()
        }
    }
    return (
        <motion.form onSubmit={(e) => addReminder(e)} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.2}}} exit={{opacity: 0}}>
            {/* Inputs */}
            {((currentReminder === 'text' || currentReminder === 'general')) && 
            <>
                <ReminderInput title={"Date"} optional={(currentReminder === 'general')} inputType={'date'} inputRef={dateInput} inputError={dateError} setInputError={setDateError}/>
                <ReminderInput title={"Time"} optional={(currentReminder === 'general')} inputType={'time'} inputRef={timeInput} inputError={timeError} setInputError={setTimeError}/>
            </>}
            {((currentReminder !== 'text' && currentReminder !== 'general')) && 
            <>
                <ReminderInput title={"Goal"} optional={true} inputType={'number'} inputRef={goalInput} inputError={goalError} setInputError={setGoalError}/>
            </>}        
            {/* Text Area */}
            <ReminderInput title={"Reminder"} optional={false} inputRef={messageInput} inputError={messageError} setInputError={setMessageError}/>
            {/* Add Reminder Button */}
            <div className="flex w-full">
                <button type="submit" className={`${addReminderLoading && 'scale-90'} bg-[#424242] mx-auto duration-200 text-white text-xl font-medium w-[80%] py-2 mb-4 rounded`}>
                    {addReminderLoading ? 'Loading Last Request' : 'Add'}
                </button>
            </div>
        </motion.form>
    )
    }

export default AddReminderForm