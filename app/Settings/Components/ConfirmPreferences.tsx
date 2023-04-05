'use client'

import { motion } from "framer-motion"
import { useStore } from "@/Zustand/store"

const varients = {
    active: { bottom: 0, transition: { type: 'tween', damping: 15}},
    inactive: { bottom: '-100%'},
}

const ConfirmPreferences = () => {
    const { confirmSettingsModel } = useStore()
    const handleConfirm = () => {
        useStore.setState(() => ({
            confirmSettingsModel : false
        }))
    }
    return (
        <motion.div variants={varients} animate={confirmSettingsModel ? 'active' : 'inactive'} className='fixed bottom-[-100%] w-full bg-black z-30 pb-12 pt-8 flex px-8 border-t border-white rounded-t-2xl'>
            <button onClick={() => handleConfirm()} className='bg-[#B23928] text-white rounded-lg flex-1 py-4 mx-auto px-4 font-medium text-xl'>Confirm Preferences?</button>
        </motion.div>
    )
}

export default ConfirmPreferences