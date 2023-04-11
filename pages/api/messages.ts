import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '@/lib/redis'
import { Message } from '@/typings'
import { serverPusher } from '@/lib/pusher/pusherSetup'

type Data = {
    messages: Message[]
}
type Error = {
    error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
    if(req.method === 'GET'){
        try {
            const messageRes = await redis.hvals('messages')
            const messages : Message[] = messageRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at)
            res.status(200).json({ messages })
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    }else if(req.method === 'POST'){
        const { message } = req.body
        const newMessage = {
            ...message,
            created_at: Date.now()
        }
        try {
            await redis.hset('messages', message.id, JSON.stringify(newMessage))
            serverPusher.trigger('messages', 'new-message', newMessage)
            res.status(200).end()
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' })
        }
    }else{
        res.status(405).json({error: 'Method not allowed'})
        return
    }
}