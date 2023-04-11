import { Message } from "@/typings"
import { useStore } from "@/Zustand/store"

const getMessages = async () => {
        const res = await fetch('/api/messages')
        if(res.ok){
            const data = await res.json()
            const messages: Message[] = data.messages
            return messages
        }
        useStore.setState(() => ({
            alertActive: true,
            alertMessage: 'Error finding messages'
        }))
        return []
}

export default getMessages