'use client'

import Image from "next/image";
import homeImage from '@/Images/homeImage.jpg'
import { motion } from "framer-motion"
import { useRef, useState } from "react";

const varients = {
    positionTop: { top: ['90%','135%','135%','-90%','-35%'], left: ['-45%','-70%','135%','90%','70%'], rotate: 5, transition: {duration: 1, times: [0, .5,0,0, 1]}},
    positionMiddle: { top: '25%', left: '20%', rotate: 10, transition: {duration: 1}},
    positionBottom: { top: '90%', left: '-45%', rotate: 15, transition: {duration: 1}}
}
const Home = () => {
  const photos = useRef(['positionTop', 'positionMiddle', 'positionBottom'])
  const [imageIndex, setImageIndex] = useState(1)
  return (
    <>
      <div className="flex-1">
        <button onClick={() => setImageIndex((prev) => (prev+1)%photos.current.length)} className={'text-white'}>Trigger</button>
        <motion.div className="w-[80%] aspect-[3/4] absolute left-[20%] top-[25%] rotate-[10deg]"
                    variants={varients} animate={photos.current[imageIndex]}>
          <Image src={homeImage} fill alt="Casey Bennet taking a photo"/>
        </motion.div>
        {/* Top */}
        <motion.div className="w-[80%] aspect-[3/4] absolute left-[70%] top-[-35%] rotate-[5deg]"
                    variants={varients} animate={photos.current[(imageIndex+2)%photos.current.length]}>
          <Image src={homeImage} fill alt="Casey Bennet taking a photo"/>
        </motion.div>
        <motion.div className="w-[80%] aspect-[3/4] absolute left-[-45%] top-[90%] rotate-[15deg]"
                    variants={varients} animate={photos.current[(imageIndex+1)%photos.current.length]}>
          <Image src={homeImage} fill alt="Casey Bennet taking a photo"/>
        </motion.div>
        {/* <motion.div className="w-[80%] aspect-[3/4] absolute left-[-45%] top-[90%] rotate-[15deg]"
                    variants={varients} animate={photos.current[(imageIndex+3)%photos.current.length]}>
          <Image src={homeImage} fill alt="Casey Bennet taking a photo"/>
        </motion.div> */}
      </div>
    </>
  )
}

export default Home