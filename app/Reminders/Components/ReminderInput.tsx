'use client'

import { useState } from "react"

type Props = {
    title: string,
    optional: boolean,
    inputRef: any,
    inputError: string,
    inputType?: string,
    setInputError: React.Dispatch<React.SetStateAction<string>>
}

const ReminderInput = ({title, optional, inputRef, inputError, inputType, setInputError }: Props) => {
    const [focus, setFocus] = useState(false)
    return (
        <div className={`relative group mt-8`}>
            <div className="absolute top-0 w-full flex pointer-events-none">
                <div className={`h-[1px] w-[5%] duration-200 ${!focus ? 'bg-white group-hover:bg-[#B23928]' : 'bg-[#B23928]'}`}></div>
                <h4 className={`text-sm duration-200 translate-y-[-50%] mx-2 ${!focus ? 'text-white group-hover:text-[#B23928]' : 'text-[#B23928]'}`}>
                    {title} {optional && '( Optional )'}
                </h4>
                <div className={`h-[1px] flex-1 duration-200 ${!focus ? 'bg-white group-hover:bg-[#B23928]' : 'bg-[#B23928]'}`}></div>
            </div>
            <p className="absolute text-xs bottom-[100%] right-0 text-red-500 mb-1 mr-4">{inputError}</p>
            {(title === 'Reminder') ? 
                <textarea ref={inputRef} maxLength={200}
                          className={`py-2 pl-2 px-4 h-[20vh] bg-transparent text-lg w-full text-white focus:outline-none`} 
                          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={() => {if(inputError !== '')setInputError('')}}/>
            :
                <input ref={inputRef} type={inputType} className={`py-2 pl-2 px-4 bg-transparent w-full text-white focus:outline-none`} 
                       onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} defaultValue={(title === 'Goal') ? 1 : ''} onChange={() => {if(inputError !== '')setInputError('')}}/>
            }
        </div>
    )
}

export default ReminderInput