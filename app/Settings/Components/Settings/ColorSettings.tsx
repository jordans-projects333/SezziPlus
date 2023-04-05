import React from 'react'
import HeaderColors from '../ColorChanges/HeaderColors'
import MainColors from '../ColorChanges/MainColors'
import MessagesColors from '../ColorChanges/MessagesColors'
import YesNoSetting from '../Setting/YesNoSetting'

const ColorSettings = ({slide}: {slide: (number:number)=>void}) => {
  return (
    <div className='h-full overflow-auto'>
        <div className="flex items-center pt-4 gap-2 mb-2">
            <h2 className='text-gray-300 text-xl pl-2'>Reset</h2>
        </div>
        <ul className='ml-2 mr-4 text-lg mb-2'>
            <YesNoSetting title='Reset Colors To Default' yesFunction={()=> console.log('hi')}/>
        </ul>
        <HeaderColors slide={slide}/>
        <MainColors slide={slide}/>
        <MessagesColors slide={slide}/>
        <HeaderColors slide={slide}/>
        <HeaderColors slide={slide}/>
        <HeaderColors slide={slide}/>
    </div>
  )
}

export default ColorSettings