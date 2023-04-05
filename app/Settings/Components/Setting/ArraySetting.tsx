'use client'

import { useState } from "react"

type Props = {
    title: string,
    options: string[],
    defaultValue: number
}

const ArraySetting = ({title, options, defaultValue}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(defaultValue)
    const handleClick = () => {
        setCurrentIndex((prev) => ((prev+1)%options.length))
        
    }
    return (
        <li className='flex justify-between items-center'>
            <p>{title}</p>
            <button onClick={() => handleClick()}>{options[currentIndex]}</button>
        </li>
    )
}

export default ArraySetting