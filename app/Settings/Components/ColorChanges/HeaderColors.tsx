import React from 'react'
import ColorSetting from '../Setting/ColorSetting'

const HeaderColors = ({slide}: {slide: (number:number)=>void}) => {
    return (
        <>
            <div className="flex items-center pt-4 gap-2 mb-2 border-t-[2px] border-zinc-800">
                <h2 className='text-gray-300 text-xl pl-2'>Header</h2>
            </div>
            <ul className='pl-2 pr-4 text-lg gap-2 flex flex-col pb-2'>
                <ColorSetting title={'Background Color'} bgColor={'bg-red-500'} slide={slide}/>
                <ColorSetting title={'Border Color'} bgColor={'bg-black'} slide={slide}/>
                <ColorSetting title={'Text Color'} bgColor={'bg-red-500'} slide={slide}/>
                <ColorSetting title={'Navbar Items Background Color'} bgColor={'bg-red-500'} slide={slide}/>
                <ColorSetting title={'Navbar Items Active-Background Color'} bgColor={'bg-red-500'} slide={slide}/>
                <ColorSetting title={'Navbar Items Text Color'} bgColor={'bg-red-500'} slide={slide}/>
                <ColorSetting title={'Navbar Items Active-Text Color'} bgColor={'bg-red-500'} slide={slide}/>
            </ul>
        </>
    )
}

export default HeaderColors