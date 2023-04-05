'use client'
//server component
// import getServerSession from next-auth and authOptins from file
// const session = await getServerSession(authoptions)

import { useSession } from 'next-auth/react'

export default function Home() {
  const {data:session} = useSession()
  return (
    <main>
      <h3 className='text-white text-3xl fadeIntro'>Hello</h3>
    </main>
  )
}
