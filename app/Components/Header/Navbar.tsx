'use client'
import { usePathname } from 'next/navigation';
import Link from "next/link"
import ExitPageTransitionButton from '@/utils/Components/ExitPageTransitionButton';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className='opacity-1'>
            <ul className='flex mx-2 gap-2 text-white overflow-auto font-openSans font-medium'>
                <li className={`${pathname === '/' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}><ExitPageTransitionButton link='/'>Messages</ExitPageTransitionButton></li>
                <li className={`${pathname === '/Notes' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}><ExitPageTransitionButton link='/Notes'>Notes</ExitPageTransitionButton></li>
                <Link href={'/Reminders'}><li className={`${pathname === '/Reminders' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Reminders</li></Link>
                <Link href={'/DrawPage'}><li className={`${pathname === '/DrawPage' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Draw</li></Link>
                <Link href={'/Calendar'}><li className={`${pathname === '/Calendar' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Calendar</li></Link>
                <Link href={'/Stamps'}><li className={`${pathname === '/Stamps' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Stamps</li></Link>
                <Link href={'/Shopping'}><li className={`${pathname === '/Shopping' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Shopping</li></Link>
                <Link href={'/Choices'}><li className={`${pathname === '/Choices' && 'bg-[#B23928]'} bg-[#424242] px-3 py-[2px] rounded duration-300 flex-shrink-0`}>Choices</li></Link>
            </ul>
        </nav>
  )
}

export default Navbar