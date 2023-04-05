'use client'

import { useRouter } from "next/navigation"
import { useStore } from "@/Zustand/store"

type Props = {
    link: string,
    children: React.ReactNode
}

const ExitPageTransitionButton = ({link, children}: Props) => {
    const router = useRouter()
    const handleTest = () => {
        router.prefetch(link)
        useStore.setState(() => ({
            pageTransitioning : true,
        }))
        setTimeout(() => {
            router.push(link)
        },100)
    }
    return (
        <button onClick={() => handleTest()}>{children}</button>
    )
}

export default ExitPageTransitionButton