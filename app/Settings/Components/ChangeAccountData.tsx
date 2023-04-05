'use client'

import RisingFallingModel from "@/utils/Components/RisingFallingModel"
import { useRef, useState } from "react"
import CheckPassword from "./CheckPassword"

type Props = {
    title: string,
    active: boolean,
    cancelFunction: ()=>void,
    labelText: string
}

const ChangeAccountData = ({title, active, cancelFunction, labelText}: Props) => {
    const [passwordForm, setPasswordForm] = useState(false)
    let fadedBackgroundRef = useRef<HTMLDivElement>(null)
    const cancelModel = (e: any) => {
        if(e.target !== fadedBackgroundRef.current)return
        if(passwordForm)setPasswordForm(false)
        cancelFunction()
    }
    const cancelPasswordForm = () => {
        if(passwordForm)setPasswordForm(false)
        cancelFunction()
    }
    const handleChange = () => {
        setPasswordForm(true)
    }
    return (
        <RisingFallingModel active={active} cancelFunction={cancelModel} fadedBackgroundRef={fadedBackgroundRef}
                            tailwindStyles={'top-[20%] py-4 flex flex-col px-4 bg-black border border-white w-[80%]'}>
            {passwordForm ? 
                <CheckPassword sureFunction={() => console.log('eggfart')} cancelPressed={cancelPasswordForm}/>
            :
                <>
                    <h3>{title}</h3>
                    <label>{labelText}</label>
                    <input type={'text'}/>
                    <div className="mt-8 flex w-full justify-between gap-6">
                        <button onClick={() => cancelFunction()} className="bg-[#424242] rounded-lg flex-1 py-2">Cancel</button>
                        <button onClick={() => handleChange()} className="bg-[#B23928] rounded-lg flex-1 py-2">Change</button>
                    </div>
                </>
            }
        </RisingFallingModel>
    )
}

export default ChangeAccountData