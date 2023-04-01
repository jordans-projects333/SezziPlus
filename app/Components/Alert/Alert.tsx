'use client'

import { useStore } from "@/Zustand/store"

const Alert = () => {
    const {alertMessage, alertActive} = useStore()
    if(alertActive){
        setTimeout(() => {
            useStore.setState(() => ({
                alertActive: false
            }))
        }, 3000)
    }
    return (
        <div className={`${!alertActive && 'pointer-events-none opacity-0'} duration-300 fixed top-[80%] px-8 py-4 left-[50%] bg-black/80 z-50 translate-x-[-50%] whitespace-nowrap text-white rounded`}>
            <h4>{alertMessage}</h4>
        </div>
    )
}

export default Alert