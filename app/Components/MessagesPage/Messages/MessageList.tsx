'use client'

import { Message } from '@/typings'
import MessageBox from './MessageBox'
import getMessages from '@/utils/ReactQueries/GetMessages'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect } from 'react'
import { clientPusher } from '@/lib/pusher/clientPusherSetup'
import { useStore } from '@/Zustand/store'

type Props = {
  initialMessages: Message[]
}

function MessageList({initialMessages}: Props) {
  const { editToggle }: any = useStore()
  const queryClient = useQueryClient()
  const {data:messages, isLoading, isError, error} = useQuery({
    queryKey: ['Messages'],
    queryFn: getMessages
  }) 
  useEffect(() => {
    const channel = clientPusher.subscribe('messages')
    channel.bind('new-message', async (data : Message) => {
      if(messages?.find((message) => message.id === data.id))return
      await queryClient.cancelQueries({ queryKey: ['Messages']})
      const previousState: any = queryClient.getQueryData(['Reminders'])
      queryClient.setQueryData(['Reminders'], [data, ...previousState])
      queryClient.invalidateQueries({queryKey: ['Reminders']})
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages, clientPusher])
  const cancelEdit = () => {
    useStore.setState((state: { editToggle: boolean }) => ({
      editToggle: state.editToggle = !state.editToggle
    }))
  }
  return (
    <div className='pt-4 overflow-y-auto bg-primary min-h-screen'>
      <div className={`fixed top-0 w-screen z-10 left-0 h-full backdrop-blur-[3px] duration-500 ${editToggle ? 'opacity-1' : 'opacity-0 pointer-events-none'}`} onClick={() => cancelEdit()}></div>
      {(messages || initialMessages).map(message => (
        <MessageBox message={message} key={message.id}/>
    ))}
    </div>
  )
}

export default MessageList