import React from 'react'
import ColorSettings from './Settings/ColorSettings'

const CustomizationPage = ({slideLeft}: {slideLeft: ()=>void}) => {
  return (
    <div className='flex-shrink-0 w-screen text-white flex flex-col'>
        <button onClick={() => slideLeft()} className='text-xl mx-auto my-2'>Return To Settings</button>
        <ColorSettings/>
    </div>
  )
}

export default CustomizationPage