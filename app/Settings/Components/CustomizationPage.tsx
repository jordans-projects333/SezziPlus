import React from 'react'
import ColorSettings from './Settings/ColorSettings'

const CustomizationPage = ({slide}: {slide: (number:number)=>void}) => {
  return (
    <div className='flex-shrink-0 w-screen text-white flex flex-col'>
        <div className='relative flex items-center pl-4'>
            <button onClick={() => slide(0)}><svg className='fill-white h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
            <button onClick={() => slide(0)} className='text-xl mx-auto pt-4 pb-4 flex-1 pr-6'>Return To Settings</button>
            <div className='w-full h-8 fadeOutDiv absolute left-0 bottom-[-1.75rem]'></div>
        </div>
        <ColorSettings slide={slide}/>
    </div>
  )
}

export default CustomizationPage