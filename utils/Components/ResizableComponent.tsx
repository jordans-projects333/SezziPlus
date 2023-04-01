'use client'

import useMeasure from "react-use-measure"
import { motion } from "framer-motion"

const ResizableComponent = ({ children }: { children: React.ReactNode }) => {
    let [ref, {height}] = useMeasure()
    return (
        <motion.div animate={{height}}>
            <div ref={ref}>
                {children}
            </div>
        </motion.div>
    )
}

export default ResizableComponent