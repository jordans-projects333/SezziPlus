import { useSession } from 'next-auth/react'
import React from 'react'
import { Message } from '@/typings'
import MessageText from './MessageText'

type Props = {
    message: Message
}

function MessageBox({message}: Props) {
  const { data: session} = useSession()
  const isUser = session?.user?.email === message.email
  return (
    <div className={`mb-2 flex items-end text-white ${!isUser ? 'mr-4' : ' flex-row-reverse ml-4'}`}>
      <MessageText isUser={isUser} message={message.message}/>
      <p className={`text-xs ${!isUser ? 'ml-1' : 'ml-auto mr-1'}`}>{new Date(message.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
    </div>
  )
}

export default MessageBox