'use client'

import { useState } from "react"

type Props = {
  title: string,
  defaultValue: boolean,
}

const ToggleSetting = ({title, defaultValue}: Props) => {
  const [active, setActive] = useState(defaultValue)
  return (
    <li className='flex'>
        <button className="flex-1 flex" onTouchEnd={() => setActive((prev) => !prev)}>{title}</button>
        <button onTouchEnd={() => setActive((prev) => !prev)} className={`flex w-12 h-6 duration-300 transition-all rounded-full ${active ? 'bg-[#B23928]' : 'bg-gray-600'}`}>
          <span className={`bg-white h-6 w-6 rounded-full duration-300 transition-all ${active && 'ml-6'}`}/>
        </button>
    </li>
  )
}

export default ToggleSetting