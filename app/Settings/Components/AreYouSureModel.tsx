'use client'

import RisingFallingModel from "@/utils/Components/RisingFallingModel"
import { useState } from "react"
import CheckPassword from "./CheckPassword"

type Props = {
    active: boolean,
    actionText: string,
    fadedBackgroundRef: React.RefObject<HTMLDivElement>,
    cancelFunction: () => void,
    sureFunction: any,
    passwordRequired: boolean
}

const AreYouSureModel = ({active, actionText, fadedBackgroundRef, cancelFunction, sureFunction, passwordRequired }: Props) => {
    const [passwordForm, setPasswordForm] = useState(false)
    const cancelModel = (e: any) => {
        if(e.target !== fadedBackgroundRef.current)return
        if(passwordForm)setPasswordForm(false)
        cancelFunction()
    }
    const handleSureClick = () => {
        passwordRequired ? setPasswordForm(true) : sureFunction()
    }
    const PasswordFormCancel = () => {
        setPasswordForm(false)
        cancelFunction()
    }
    return (
        <RisingFallingModel active={active} cancelFunction={cancelModel} fadedBackgroundRef={fadedBackgroundRef}
                            tailwindStyles={'top-[20%] py-4 flex flex-col px-4 bg-black border border-white w-[80%]'}>
            {passwordForm ? 
                <CheckPassword sureFunction={sureFunction} cancelPressed={PasswordFormCancel}/>
            :
                <>
                    <h3 className="text-center text-2xl">{'Are you sure you want to ' + actionText}</h3>
                    <div className="mt-8 flex w-full justify-between gap-6">
                        <button onClick={() => cancelFunction()} className="bg-[#424242] rounded-lg flex-1 py-2">Cancel</button>
                        <button onClick={() => handleSureClick()} className="bg-[#B23928] rounded-lg flex-1 py-2">Yes</button>
                    </div>
                </>
            }
            
        </RisingFallingModel>
    )
}

export default AreYouSureModel