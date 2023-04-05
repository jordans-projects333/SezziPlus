'use client'

import { useState } from "react"
import { useStore } from "@/Zustand/store"

type Props = {
  title: string,
  defaultValue: boolean,
}

const ToggleSetting = ({title, defaultValue}: Props) => {
  const { confirmSettingsModel } = useStore()
  const [active, setActive] = useState(defaultValue)
  const handlePreferenceChange = () => {
    setActive((prev) => !prev)
    if(!confirmSettingsModel){
      useStore.setState(() => ({
        confirmSettingsModel : true
      }))
    }
    
  }
  return (
    <li className='flex'>
        <button className="flex-1 flex" onTouchEnd={() => handlePreferenceChange()}>{title}</button>
        <button onTouchEnd={() => handlePreferenceChange()} className={`flex w-12 h-6 duration-300 transition-all rounded-full ${active ? 'bg-[#B23928]' : 'bg-gray-600'}`}>
          <span className={`bg-white h-6 w-6 rounded-full duration-300 transition-all ${active && 'ml-6'}`}/>
        </button>
    </li>
  )
}

export default ToggleSetting