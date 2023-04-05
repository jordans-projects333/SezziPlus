'use client'

import { motion } from "framer-motion"

const varients = {
    active: { y: 0, x: '-50%', transition: { type: 'spring', damping: 15}},
    inactive: { y: '100vh', x: '-50%'},
    visible: {opacity: 1, },
    invisible: {opacity: 0}
}

type Props = {
    children: React.ReactNode,
    active: boolean,
    cancelFunction: (e: any) => void,
    fadedBackgroundRef: React.RefObject<HTMLDivElement>,
    tailwindStyles: string
}

const RisingFallingModel = ({children, active, cancelFunction, fadedBackgroundRef, tailwindStyles}: Props) => {
    return (
        <motion.div ref={fadedBackgroundRef} className={`fixed z-50 w-[100%] h-[100lvh] bg-black/70 backdrop-blur-[2px] left-0 top-0 ${!active && ' pointer-events-none'} opacity-0`}
                    variants={varients} animate={active ? 'visible' : 'invisible'} onClick={(e) => cancelFunction(e)}>
            <motion.div variants={varients} animate={active ? 'active' : 'inactive'} 
                    className={'absolute left-[50%] translate-x-[-50%] translate-y-[100vh] ' + tailwindStyles}>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default RisingFallingModel