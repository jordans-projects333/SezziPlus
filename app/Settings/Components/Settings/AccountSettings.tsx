'use client'

import { signOut } from "next-auth/react";
import YesNoSetting from "../Setting/YesNoSetting";
import { useRef, useState } from "react";
import AreYouSureModel from "../AreYouSureModel";
import ChangeAccountData from "../ChangeAccountData";

const AccountSettings = () => {
    const [areYouSureModel, setAreYouSureModel] = useState(false)
    const [areYouSureFunction, setAreYouSureFunction] = useState(() => {})
    const [areYouSureText, setAreYouSureText] = useState('')
    const [changeAccountDataModel, setChangeAccountDataModel] = useState(false)
    const [changeAccountDataTitle, setChangeAccountDataTitle] = useState('')
    const [changeAccountDatLabel, setChangeAccountDatLabel] = useState('')
    let fadedBackground = useRef<HTMLDivElement>(null)
    const cancelAreYouSureModel = () => {
        setAreYouSureModel(false)
    }
    const deleteAccountAreYouSure = () => {
        setAreYouSureModel(true)
        setAreYouSureFunction(() => deleteAccount)
        setAreYouSureText('delete your account?')
    }
    const deleteAccount = () => {
        console.log('delete account bears are cool')
    }
    const changePasswordModelActive = () => {
        setChangeAccountDataModel(true)
        setChangeAccountDataTitle('Change Password')
        setChangeAccountDatLabel('New Password')
    }
    const changeUsernameModelActive = () => {
        setChangeAccountDataModel(true)
        setChangeAccountDataTitle('Change Username')
        setChangeAccountDatLabel('New Username')
    }
    const cancelFunction = () => {
        setChangeAccountDataModel(false)
    }
    return (
        <div className='text-lg pl-2 pr-4'>
            <AreYouSureModel active={areYouSureModel} actionText={areYouSureText} fadedBackgroundRef={fadedBackground} 
                             cancelFunction={cancelAreYouSureModel} sureFunction={areYouSureFunction} passwordRequired={true}/>
            <ChangeAccountData title={changeAccountDataTitle} active={changeAccountDataModel} cancelFunction={cancelFunction} labelText={changeAccountDatLabel}/>
            <h2 className='text-gray-300 text-xl'>Account Settings</h2>
            <ul className='flex flex-col gap-2 py-2 pl-2'>
                <YesNoSetting title="Sign Out" yesFunction={() => signOut}/>
                <YesNoSetting title="Change Username" yesFunction={changeUsernameModelActive}/>
                <YesNoSetting title="Change Password" yesFunction={changePasswordModelActive}/>
                <YesNoSetting title="Delete Account" yesFunction={deleteAccountAreYouSure}/>
            </ul>
        </div>
    )
}

export default AccountSettings