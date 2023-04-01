import { NextResponse } from "next/server"
import { hash } from 'bcrypt'
import { prisma } from "@/lib/prisma"
import { z } from 'zod'

const postSchema = z.object({
    username: z.string().min(5).max(15),
    email: z.string().min(3).max(35).email(),
    password: z.string().min(6).max(15)
})
type PostInput = z.infer<typeof postSchema>

export async function POST(req: Request) {
    const { username, email, password } = await req.json()
    const postInput: PostInput = { username, email, password }
    if((!(postSchema.safeParse(postInput)).success)){
        return new NextResponse(JSON.stringify({error: 'Input not valid'}), { status: 500 })
    }
    const hashed = await hash(password, 12)
    try {
        const emailExists = await prisma.user.findUnique({ where: { email }})
        if(emailExists !== null)return new NextResponse(JSON.stringify({error: 'Email already registered'}), { status: 500 })
    } catch (error) {
        return new NextResponse(JSON.stringify({error: 'Unknown server error'}), { status: 500 })
    }
    try {
        await prisma.user.create({ data: {
            name: username,
            email,
            password: hashed,
        }})
    } catch (error) {
        return new NextResponse(JSON.stringify({error: 'Unknown server error'}), { status: 500 })
    }
    return new NextResponse(JSON.stringify({}), { status: 200 })
}