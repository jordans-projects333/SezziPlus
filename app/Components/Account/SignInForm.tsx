'use client'

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from "react";
import { validateEmail, validatePassword } from "@/utils/Validation/clientSide";
import { useStore } from "@/Zustand/store";
import InputField from "./InputField";

const SignInForm = () => {
    const router = useRouter()
    const [serverError, setServerError] = useState('')
    const [requestLoading, setRequestLoading] = useState(false)
    const [emailValid, setEmailValid] = useState(true)
    const [emailError, setEmailError] = useState('')
    const [passwordValid, setPasswordValid] = useState(true)
    const [passwordError, setPasswordError] = useState('')
    let passwordInput = useRef<HTMLInputElement>(null)
    let emailInput = useRef<HTMLInputElement>(null)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(requestLoading)return
        // Check email input
        let emailValidated = validateEmail(emailInput.current!.value)
        if(!emailValidated.success){setEmailError(emailValidated.error);setEmailValid(false)}
        // Check password input 
        let passwordValidated = validatePassword(passwordInput.current!.value, 6)
        if(!passwordValidated.success){setPasswordError(passwordValidated.error);setPasswordValid(false)}
        // If all validation is successful
        if(passwordValidated.success && emailValidated.success){
            setRequestLoading(true)
            const res = await signIn('credentials', {
                email: emailInput.current!.value,
                password: passwordInput.current!.value,
                redirect: false,
            })
            if(res!.error === null){
                useStore.setState(() => ({
                    accountModelToggle : false
                }))
                setTimeout(() => {
                    router.refresh()
                }, 300)
            }else{
                setRequestLoading(false)
                setServerError(res!.error!)
            }
        }
    }
    return (
        <motion.form exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} onSubmit={(e) => handleSubmit(e)} className={'flex flex-col w-[85%] mx-auto mt-8'}>
            <div className="flex flex-col gap-8">
                <InputField valid={emailValid} fieldName={'Email'} errorMessage={emailError} fieldRef={emailInput} 
                            setValid={setEmailValid} setError={setEmailError} inputMaxLength={35} inputType={'email'} requestLoading={requestLoading}/>
                <InputField valid={passwordValid} fieldName={'Password'} errorMessage={passwordError} fieldRef={passwordInput} 
                            setValid={setPasswordValid} setError={setPasswordError} inputMaxLength={15} inputType={'password'} requestLoading={requestLoading}/>
            </div>
            <p className="text-red-500 text-center mb-1 mt-2">{serverError}</p>
            <button type='submit' value={'login'} className={`${requestLoading && 'scale-90'} text-white w-[30%] mx-auto mt-2 text-2xl duration-200 hover:text-[1.4rem]`}>
                {requestLoading ? 'loading' : 'Sign in'}
            </button>
        </motion.form>
    )
}


export default SignInForm