import { useStore } from "@/Zustand/store"

const getReminders = async () => {
        const res = await fetch('/api/reminders')
        if(res.ok){
            const data = await res.json()
            return data.reminders
        }
        useStore.setState(() => ({
            alertActive: true,
            alertMessage: 'Error finding reminders'
        }))
        return []
}

export default getReminders