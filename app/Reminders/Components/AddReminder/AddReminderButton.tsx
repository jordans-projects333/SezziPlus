'use client'

import { useStore } from "@/Zustand/store"

const AddReminderButton = () => {
    const handleAddReminder = () => {
        useStore.setState(() => ({
            addReminderModelToggle : true
        }))
    }
    return (
        <button className="text-4xl px-2 text-white" onClick={() => handleAddReminder()}>+</button>
    )
}

export default AddReminderButton