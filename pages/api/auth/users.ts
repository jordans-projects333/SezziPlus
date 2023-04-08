import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'
import { prisma } from "@/lib/prisma"
import { z } from 'zod'

const postSchema = z.object({
    username: z.string().min(5).max(15),
    email: z.string().min(3).max(35).email(),
    password: z.string().min(6).max(15)
})
type PostInput = z.infer<typeof postSchema>

type Data = {
    error: string
}
type Error = {
    body: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data | Error>) {
    const { username, email, password } = req.body
    const postInput: PostInput = { username, email, password }
    if((!(postSchema.safeParse(postInput)).success)){
        return res.status(500).json({ error: 'Input not valid' })
    }
    const hashed = await hash(password, 12)
    try {
        const emailExists = await prisma.user.findUnique({ where: { email }})
        if(emailExists !== null)return res.status(500).json({ error: 'Email already registered' })
        
    } catch (error) {
        return res.status(500).json({ error: 'Unknown server error' })
    }
    try {
        await prisma.user.create({ data: {
            name: username,
            email,
            password: hashed,
        }})
    } catch (error) {
        return res.status(500).json({ error: 'Unknown server error' })
    }
    return res.status(200).end()
}