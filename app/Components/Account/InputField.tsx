'use client'

import { useState } from "react"

type Props = {
    valid: boolean,
    fieldName: string,
    errorMessage: string,
    fieldRef: any,
    setValid: any,
    setError: any,
    inputType?: string,
    inputMaxLength?: number,
    inputMin?: number,
    inputMax?: number,
    requestLoading?: boolean
} 

const InputField = ({valid, fieldName, errorMessage, fieldRef, setValid, setError, inputType, inputMaxLength, inputMax, inputMin, requestLoading}: Props) => {
    const [focus, setFocus] = useState(false)
    return (
        // Outline bottom, left, right
        <div className={`relative group border-x duration-200 border-b
                ${valid && !focus && 'border-white hover:border-[#B23928]'}
                ${focus && 'border-[#B23928]'}
                ${!valid && 'scale-[98%] border-[red]'} `}>
            {/* Outline top */}
            <div className="absolute top-0 w-full flex pointer-events-none">
                {/* Outline top-left */}
                <div className={`h-[1px] w-[5%] duration-200
                        ${valid && !focus && 'bg-white group-hover:bg-[#B23928]'}
                        ${focus && 'bg-[#B23928]'} 
                        ${!valid && 'bg-[red]'}`}></div>
                {/* Field title */}
                <h4 className={`text-sm duration-200 translate-y-[-50%] mx-2
                        ${valid && !focus && 'text-white group-hover:text-[#B23928]'}
                        ${focus && 'text-[#B23928]'}
                        ${!valid && 'text-[red]'}`}>
                    {fieldName}
                </h4>
                {/* Outline top-right */}
                <div className={`h-[1px] flex-1 duration-200
                        ${valid && !focus && 'bg-white group-hover:bg-[#B23928]'}
                        ${focus && 'bg-[#B23928]'} 
                        ${!valid && 'bg-[red]'}`}>
                </div>
            </div>
            {/* Input */}
            <input  ref={fieldRef} type={inputType || 'text'} maxLength={inputMaxLength} 
                    min={inputMin} max={inputMax} disabled={requestLoading}
                    className={`py-1 pl-2 bg-transparent w-full text-white focus:outline-none`} 
                    onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} 
                    onChange={(e) => {if(!valid){setValid(true); setError('')}}}/>
            {/* Error message */}
            <p className="absolute text-xs bottom-[100%] right-0 text-red-500 mb-1">{errorMessage}</p>
        </div>
    )
}

export default InputField