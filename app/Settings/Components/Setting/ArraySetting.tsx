'use client'

import { useState } from "react"
import { useStore } from "@/Zustand/store"

type Props = {
    title: string,
    options: string[],
    defaultValue: number
}

const ArraySetting = ({title, options, defaultValue}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(defaultValue)
    const { confirmSettingsModel } = useStore()
    const handleClick = () => {
        if(!confirmSettingsModel){
            useStore.setState(() => ({
              confirmSettingsModel : true
            }))
          }
        setCurrentIndex((prev) => ((prev+1)%options.length))
        
    }
    return (
        <li className='flex'>
            <button className="flex flex-1" onClick={()=> handleClick()}>{title}</button>
            <button onClick={() => handleClick()}>{options[currentIndex]}</button>
        </li>
    )
}

export default ArraySetting