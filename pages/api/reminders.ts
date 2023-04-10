import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "@/lib/prisma"
import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { dateValidation, timeValidation } from '@/utils/Validation/Reminders/serverSide'
import { JWTSession } from '@/typings'

const postSchema = z.object({
    message: z.string().min(1).max(200),
    date: z.string(),
    time: z.string(),
    goal: z.number().min(0).max(1000),
    type: z.string()
})
type PostInput = z.infer<typeof postSchema>

type Data = { 
    reminders: any[]; 
} | null

type Error = {
    error: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    if(req.method === 'POST'){
        const { message, date, time, goal, type} = req.body
        const postInput: PostInput = { message, date, time, goal, type }
        if((!(postSchema.safeParse(postInput)).success))return res.status(500).json({error: 'Server information invalid'})
        if(type === 'text'){
            if(!dateValidation(date, true).success)return res.status(500).json({error: 'Date Input invalid'})
            if(!timeValidation(time, true, date)?.success)return res.status(500).json({error: 'Time Input invalid'})
        }
        if(time !== '' && type !== 'text'){
            if(!timeValidation(time, false, null)?.success)return res.status(500).json({error: 'Time Input invalid'})
        }
        if(date !== '' && type !== 'text'){
            if(!dateValidation(date, false).success)return res.status(500).json({error: 'Date Input invalid'})
        }
        try {
            const session: JWTSession | null = await getServerSession(req, res, authOptions)
            if(!session)return res.status(500).json({error: 'User Token was not found'})
            const newReminder = await prisma.reminder.create({data: {
                type: type,
                message: message,
                date: date.substring(0, 10),
                time: time.substring(0, 5),
                goal: goal
            }})
            // Upstash Server Function here //////////////////////////////////////////////////////////////////////////////////////////////////
            await prisma.user.update({
                where: {
                    id: session.user.id
                }, 
                data: {
                    reminders: 
                    { connect: {
                        id: newReminder.id}}
            }})
        } catch (error) {
            return res.status(500).json({error: 'Internal server error'})
        }
        return res.status(200).end()
    }else if(req.method === 'GET'){
        const session: JWTSession | null = await getServerSession(req, res, authOptions)
        if(!session)return res.status(500).json({error: 'User Token was not found'})
        try {
            const data = await prisma.user.findUnique({ where: {id: session.user!.id}, select : { reminders: true}})
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({error: 'Internal server error'})
        }
    }else if(req.method === 'DELETE'){
        const session = await getServerSession(req, res, authOptions)
        if(session){
            try {
                await prisma.reminder.delete({ where: {id: req.body.id}})
                return res.status(200).end()
            } catch (error) {
                return res.status(500).json({ error: 'Internal server error' })
            }
        }
        return res.status(500).json({ error: 'User Token was not found' })
    }else{
        return res.status(405).json({error: 'Method not allowed'})
    }
    
    
}