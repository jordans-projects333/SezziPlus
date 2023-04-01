'use client'
//server component
// import getServerSession from next-auth and authOptins from file
// const session = await getServerSession(authoptions)

import { useSession } from 'next-auth/react'

export default function Home() {
  const {data:session} = useSession()
  console.log(session)
  const sendData = async () => {
    
  }
  return (
    <main>
      <button onClick={() => sendData()}></button>
    </main>
  )
}
