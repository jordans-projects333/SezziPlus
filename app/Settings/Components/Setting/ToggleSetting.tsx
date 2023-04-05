'use client'

import { useState } from "react"

type Props = {
  title: string,
  defaultValue: boolean,
}

const ToggleSetting = ({title, defaultValue}: Props) => {
  const [active, setActive] = useState(defaultValue)
  return (
    <li className='flex justify-between items-center'>
        <p>{title}</p>
        <button onClick={() => setActive((prev) => !prev)} className={`flex w-8 h-4 duration-300 transition-all rounded-full ${active ? 'bg-[#B23928]' : 'bg-gray-600'}`}>
          <span className={`bg-white h-4 w-4 rounded-full duration-300 transition-all ${active && 'ml-4'}`}/>
        </button>
    </li>
  )
}

export default ToggleSetting