import { Message } from "../typings"
import redis from "@/lib/redis"
import ChatInput from "./Components/MessagesPage/ChatInput"
import MessageList from "./Components/MessagesPage/Messages/MessageList"

export default async function Home() {
  const messageRes = await redis.hvals('messages')
  const messages : Message[] = messageRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)
  return (
    <>
      <MessageList initialMessages={messages}/>
      <ChatInput/>
    </>
  )
}
