import NextAuth, { type NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import { z } from 'zod'

const credentialsSchema = z.object({
    email: z.string().min(3).max(35).email(),
    password: z.string().min(6).max(15)
})
type CredentialsInput = z.infer<typeof credentialsSchema>

export const authOptions: NextAuthOptions = {
    pages: {
        error: '/',
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        session: ({ session, token}) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
            }
        },
        // user is only present, first time logged in
        jwt: ({ token, user }) => {
            if(user){
                return {
                    ...token, 
                    id: user.id,
                }
            }
            return token
        }
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        }),
        CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials: any) {
            if(!credentials?.email || !credentials.password){
                throw new Error('Inputs were not valid')
            }
            const credentialsInput: CredentialsInput = { email: credentials.email, password: credentials.password }
            if((!(credentialsSchema.safeParse(credentialsInput)).success)){
                throw new Error('Inputs were not valid')
            }
            const user = await prisma.user.findUnique({ where: { email: credentials.email }})
            if (!user) {
                throw new Error('Email not found')
            }
            const comparePasswords = await compare(credentials!.password!, user!.password!)
            if(!comparePasswords){
                throw new Error('Password is incorrect')
            }
            return {
                id: user.id + '',
                email: credentials.email,
                name: user.name
            }
        }
        })
    ]
}

export default NextAuth(authOptions)