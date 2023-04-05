'use client'

import Link from "next/link"

const CustomisationSettings = () => {
  return (
    <div className='border-y-[2px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
        <h2 className='text-gray-300 text-xl'>Customization</h2>
        <ul className='flex flex-col gap-2 pl-2 py-2'>
            <li className='flex justify-between items-center'>
                <Link href={'/Settings/ChangeColors'}>Change Colors</Link>
                <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </li>
            <li className='flex justify-between items-center'>
                <p>Change Fonts</p>
                <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </li>
        </ul>
    </div>
  )
}

export default CustomisationSettings