import React from 'react'

const ColorPicker = ({slide}: {slide: (number:number)=>void}) => {
  return (
    <div className='flex-shrink-0 w-screen text-white max-h-screen overflow-hidden flex flex-col'>
        <div className='relative flex items-center pl-4'>
            <button onClick={() => slide(window.innerWidth)}><svg className='fill-white h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
            <button onClick={() => slide(window.innerWidth)} className='text-xl mx-auto pt-4 pb-4 flex-1 pr-6'>Return To Color Settings</button>
            <div className='w-full h-8 fadeOutDiv absolute left-0 bottom-[-1.75rem]'></div>
        </div>
        <div className="parent row">
            <section>
                <div className='h-[25%] bg-black'></div>
                <div className='h-[25%] bg-gray-800'></div>
                <div className='h-[25%] bg-gray-500'></div>
                <div className='h-[25%] bg-gray-300'></div>
            </section>
            <section>
                <div className='h-[25%] bg-red-400'></div>
                <div className='h-[25%] bg-red-500'></div>
                <div className='h-[25%] bg-red-600'></div>
                <div className='h-[25%] bg-red-800'></div>
            </section>
            <section>
                <div className='h-[25%] bg-blue-400'></div>
                <div className='h-[25%] bg-blue-500'></div>
                <div className='h-[25%] bg-blue-600'></div>
                <div className='h-[25%] bg-blue-800'></div>
            </section>
            <section>
                <div className='h-[25%] bg-green-800'></div>
                <div className='h-[25%] bg-green-600'></div>
                <div className='h-[25%] bg-green-500'></div>
                <div className='h-[25%] bg-green-400'></div>
            </section>
            <section>
                <div className='h-[25%] bg-yellow-400'></div>
                <div className='h-[25%] bg-yellow-500'></div>
                <div className='h-[25%] bg-yellow-600'></div>
                <div className='h-[25%] bg-yellow-800'></div>
            </section>
            <section>
                <div className='h-[25%] bg-orange-800'></div>
                <div className='h-[25%] bg-orange-600'></div>
                <div className='h-[25%] bg-orange-500'></div>
                <div className='h-[25%] bg-orange-400'></div>
            </section>
            <section>
                <div className='h-[25%] bg-black'></div>
                <div className='h-[25%] bg-gray-800'></div>
                <div className='h-[25%] bg-gray-500'></div>
                <div className='h-[25%] bg-gray-300'></div>
            </section>
            <section>
                <div className='h-[25%] bg-red-400'></div>
                <div className='h-[25%] bg-red-500'></div>
                <div className='h-[25%] bg-red-600'></div>
                <div className='h-[25%] bg-red-800'></div>
            </section>
            <section>
                <div className='h-[25%] bg-blue-400'></div>
                <div className='h-[25%] bg-blue-500'></div>
                <div className='h-[25%] bg-blue-600'></div>
                <div className='h-[25%] bg-blue-800'></div>
            </section>
        </div>
    </div>
  )
}

export default ColorPicker