'use client'

import { signIn } from "next-auth/react";
import { motion } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { validateUsername, validateEmail, validatePassword, validateDuplicatePassword } from '@/utils/Validation/clientSide'
import { useRouter } from 'next/navigation';
import InputField from "./InputField"
import { useStore } from "@/Zustand/store";

function RegisterForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const [requestLoading, setRequestLoading] = useState(false)
  const [usernameValid, setUsernameValid] = useState(true)
  const [usernameError, setUsernameError] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [emailError, setEmailError] = useState('')
  const [passwordValid, setPasswordValid] = useState(true)
  const [passwordError, setPasswordError] = useState('')
  const [passwordValid2, setPasswordValid2] = useState(true)
  const [passwordError2, setPasswordError2] = useState('')
  let passwordInput = useRef<HTMLInputElement>(null)
  let passwordInput2 = useRef<HTMLInputElement>(null)
  let usernameInput = useRef<HTMLInputElement>(null)
  let emailInput = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(requestLoading)return
    // Check username input
    let usernameValidated = validateUsername(usernameInput.current!.value, 5)
    if(!usernameValidated.success){setUsernameError(usernameValidated.error);setUsernameValid(false)}
    // Check email input
    let emailValidated = validateEmail(emailInput.current!.value)
    if(!emailValidated.success){setEmailError(emailValidated.error);setEmailValid(false)}
    // Check password input 
    let passwordValidated = validatePassword(passwordInput.current!.value, 6)
    if(!passwordValidated.success){setPasswordError(passwordValidated.error);setPasswordValid(false)}
    // Check re-entered password
    let duplicatePasswordValidated = validateDuplicatePassword(passwordInput2.current!.value, passwordInput.current!.value )
    if(!duplicatePasswordValidated.success){setPasswordError2(duplicatePasswordValidated.error);setPasswordValid2(false)}
    // If all validation is successful
    if(usernameValidated.success && emailValidated.success && passwordValidated.success && duplicatePasswordValidated.success){
        setRequestLoading(true)
        // Post account information
        const res = await fetch('/api/auth/user', {
          headers: {'Content-Type': 'application/json'},
          method: 'POST',
          body: JSON.stringify({
            username: usernameInput.current!.value,
            email: emailInput.current!.value,
            password: passwordInput.current!.value
          })
        })
        // Sign into account created
        if(res.ok){
          const userSignIn = await signIn('credentials', {
            email: emailInput.current!.value,
            password: passwordInput.current!.value,
            redirect: false,
          })
          if(userSignIn!.error === null){
            useStore.setState(() => ({
              accountModelToggle : false
          }))
          setTimeout(() => {
              router.refresh()
          }, 300)
          }else{
            setServerError('Error occured while signing in')
            setRequestLoading(false)
          }
        }else{
          setServerError((await res.json()).error)
          setRequestLoading(false)
        }
    }
  }
  return (
    <motion.form exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}} onSubmit={(e) => handleSubmit(e)} className={'flex flex-col w-[85%] mx-auto mt-8'}>
      <div className="flex flex-col gap-6">
        <InputField valid={usernameValid} fieldName={'Username'} errorMessage={usernameError} fieldRef={usernameInput} 
                    setValid={setUsernameValid} setError={setUsernameError} inputMaxLength={15} requestLoading={requestLoading}/>
        <InputField valid={emailValid} fieldName={'Email'} errorMessage={emailError} fieldRef={emailInput} 
                    setValid={setEmailValid} setError={setEmailError} inputMaxLength={35} inputType={'email'} requestLoading={requestLoading}/>
        <InputField valid={passwordValid} fieldName={'Password'} errorMessage={passwordError} fieldRef={passwordInput} 
                    setValid={setPasswordValid} setError={setPasswordError} inputMaxLength={15} inputType={'password'} requestLoading={requestLoading}/>
        <InputField valid={passwordValid2} fieldName={'Re-enter password'} errorMessage={passwordError2} fieldRef={passwordInput2} 
                  setValid={setPasswordValid2} setError={setPasswordError2} inputMaxLength={15} inputType={'password'} requestLoading={requestLoading}/>
      </div>
      {/* Error message */}
      <p className="text-red-500 text-center mb-1 mt-2">{serverError}</p>
      {/* Submit button */}
      <button type='submit' value={'login'} className={` ${requestLoading && 'scale-90'} text-white w-[80%] mx-auto text-2xl hover:text-[#B23928] duration-200 hover:text-[1.4rem]`}>
        {requestLoading ? 'Loading' : 'Create Account'}
      </button>
  </motion.form>
  )
}

export default RegisterForm