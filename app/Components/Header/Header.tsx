import Navbar from "./Navbar"
import SettingsLink from "./SettingsLink"
import SignInButton from "./SignInButton"
import { getServerSession } from 'next-auth'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
// import getQueryClient from '@/utils/ReactQuery/GetQueryClient'
import { prisma } from '@/lib/prisma'

const Header = async () => {
  const session = await getServerSession(authOptions)
  return (
    <header className='flex flex-col bg-black sticky top-0 z-50'>
        <div className="flex items-center">
            <h1 className='text-white text-3xl ml-2 my-2 font-montserrat'>Sezzi+</h1>
            <div className="ml-auto mr-2 flex">
                <SignInButton user={session?.user}/>
                <SettingsLink/>
            </div>
        </div>
        <Navbar/>
        {/* Black top portion for pwa, covers battery/time */}
        <div className="w-full h-[600%] absolute bg-black bottom-[100%]"></div>
    </header>
  )
}

export default Header as any