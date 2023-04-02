import React from 'react'
import AccountSettings from './Components/AccountSettings/AccountSettings'

const SettingsPage = () => {
  return (
    <div className='text-white mt-2'>
        <AccountSettings/>
        <div className='border-y-[3px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
            <h2 className='text-gray-300 text-xl'>Customization</h2>
            <ul className='flex flex-col gap-2 pl-2 py-2'>
                <li className='flex justify-between items-center'>
                    <p>Change Colors</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Change Fonts</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
            </ul>
        </div>
        <div className='border-b-[3px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
            <h2 className='text-gray-300 text-xl'>Preferences</h2>
            <ul className='flex flex-col gap-2 pl-2 py-2'>
                <li className='flex justify-between items-center'>
                    <p>Mute Sounds Effects</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Ping Text</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Messages view</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>Messages auto delete</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
            </ul>
        </div>
        <div className='border-b-[3px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
            <h2 className='text-gray-300 text-xl'>Clear Data</h2>
            <ul className='flex flex-col gap-2 pl-2 py-2'>
                <li className='flex justify-between items-center'>
                    <p>All Messages</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>All Notes</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
                <li className='flex justify-between items-center'>
                    <p>All Reminders</p>
                    <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SettingsPage