'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ChangeColorsPage = () => {
  return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 6, ease: 'easeInOut'}} 
                  className={'h-screen w-full bg-zinc-800'}>
          <Link href={'/Settings'} className='text-white h-[60vh] w-full bg-zinc-800'>ChangeColorsPage</Link>
      </motion.div>
  )
}

export default ChangeColorsPage