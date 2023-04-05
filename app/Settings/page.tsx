'use client'

import AccountSettings from './Components/Settings/AccountSettings'
import CustomisationSettings from './Components/Settings/CustomisationSettings'
import DataSettings from './Components/Settings/DataSettings'
import PreferenceSettings from './Components/Settings/PreferenceSettings'
import ConfirmPreferences from './Components/ConfirmPreferences'
import CustomizationPage from './Components/CustomizationPage'
import ColorPicker from './Components/ColorPicker'
import { useRef } from 'react'
import { useStore } from '@/Zustand/store'

const SettingsPage = () => {
  let pageElement = useRef<HTMLDivElement>(null)
  const { confirmSettingsModel } = useStore()
  const slide = (slideTo: number) => {
      pageElement.current!.scrollTo({ left: slideTo, behavior: 'smooth' })
      if(confirmSettingsModel){
        useStore.setState(() => ({
          confirmSettingsModel : false
        }))
      }
  }
  return (
    <div ref={pageElement} className='flex w-[100vw] overflow-hidden max-h-screen border-t-[2px] border-zinc-800 mt-2'>
        <div className={`text-white mt-2 duration-300 fadeIntro flex-shrink-0 w-screen`}>
            <AccountSettings/>
            <CustomisationSettings slide={slide}/>
            <PreferenceSettings/>
            <DataSettings/>
        </div>
        <ConfirmPreferences/>
        <CustomizationPage slide={slide}/>
        <ColorPicker slide={slide}/>
    </div>
  )
}

export default SettingsPage