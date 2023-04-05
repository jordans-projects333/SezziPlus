'use client'

import AccountSettings from './Components/Settings/AccountSettings'
import CustomisationSettings from './Components/Settings/CustomisationSettings'
import DataSettings from './Components/Settings/DataSettings'
import PreferenceSettings from './Components/Settings/PreferenceSettings'
import ExitPageTransitions from '@/utils/Components/ExitPageTransition'

const SettingsPage = () => {
  return (
    
        <div className={`text-white mt-2 duration-300 fadeIntro`}>
            <AccountSettings/>
            <CustomisationSettings/>
            <PreferenceSettings/>
            <DataSettings/>
        </div>
    
  )
}

export default SettingsPage