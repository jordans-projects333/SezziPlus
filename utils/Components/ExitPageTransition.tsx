'use client'

import { useStore } from "@/Zustand/store"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';

const ExitPageTransitions = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const { pageTransitioning } = useStore()
    useEffect(() => {
        useStore.setState(() => ({
            pageTransitioning : false,
        }))
    }, [pathname])
    return (
        <div className={`${pageTransitioning ? 'opacity-0' : 'opacity-1'} duration-300`}>
            {children}
        </div>
    )
}

export default ExitPageTransitions