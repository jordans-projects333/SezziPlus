'use client'

import AccountSettings from './Components/Settings/AccountSettings'
import CustomisationSettings from './Components/Settings/CustomisationSettings'
import DataSettings from './Components/Settings/DataSettings'
import PreferenceSettings from './Components/Settings/PreferenceSettings'
import ConfirmPreferences from './Components/ConfirmPreferences'
import CustomizationPage from './Components/CustomizationPage'
import { useRef } from 'react'
import { useStore } from '@/Zustand/store'

const SettingsPage = () => {
  let pageElement = useRef<HTMLDivElement>(null)
  const { confirmSettingsModel } = useStore()
  const slideRight = () => {
    pageElement.current!.scrollTo({ left: window.innerWidth, behavior: 'smooth' })
    if(confirmSettingsModel){
      useStore.setState(() => ({
        confirmSettingsModel : false
      }))
    }
  }
  const SlideLeft = () => {
    pageElement.current!.scrollTo({ left: 0, behavior: 'smooth' })
  }
  return (
    <div ref={pageElement} className='flex w-[100vw] overflow-hidden'>
        <div className={`text-white mt-2 duration-300 fadeIntro flex-shrink-0 w-screen`}>
            <AccountSettings/>
            <CustomisationSettings slideRight={slideRight}/>
            <PreferenceSettings/>
            <DataSettings/>
        </div>
        <ConfirmPreferences/>
        <CustomizationPage slideLeft={SlideLeft}/>
    </div>
  )
}

export default SettingsPage