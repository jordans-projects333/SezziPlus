'use client'
import { useStore } from "@/Zustand/store"
import { useEffect, useRef, useState } from "react"
// import audioTest from '@/app/audio/avadaa.mp3'

type Props = {
    isUser: boolean,
    message: string
}

const MessageText = ({isUser, message}: Props) => {
    // const [held, setHeld] = useState(false)
    let messageElement = useRef<HTMLDivElement>(null)
    const timerRef = useRef<any>(null);
    const { editToggle }: any = useStore()
    // const messageTouchStart = (e: any) => {
    //     timerRef.current = setTimeout(()=>{
    //         useStore.setState((state: { editToggle: boolean }) => ({
    //             editToggle: state.editToggle = !state.editToggle
    //         }))
    //         useStore.setState((state: { editInitialText: string }) => ({
    //             editInitialText: message.message
    //         }))
    //         messageElement.current.style.scale = 1.2
    //         // e.target.closest('.messageBox').style.zIndex = 20
    //         messageElement.current.style.zIndex = 20
    //     },1500);
    // }
    // const messageTouchEnd = () => {
    //     clearTimeout(timerRef.current)
    //     new Audio(audioTest).play()
    //     // var audio = new Audio('http://soundfxcenter.com/movies/the-lord-of-the-rings/8d82b5_LOTR_Gollum_My_Precious_Sound_Effect.mp3');
    // }
    // useEffect(() => {
    //     if(messageElement.current.style.scale == 1.2 && editToggle === false){
    //         messageElement.current.style.scale = 1
    //         messageElement.current.style.zIndex = 0
    //     }
    // }, [editToggle])
    return (
        <div ref={messageElement} className={`messageBox duration-500 relative`}>
            {/* <audio src="http://soundfxcenter.com/movies/the-lord-of-the-rings/8d82b5_LOTR_Gollum_My_Precious_Sound_Effect.mp3" controls/> */}
            <p className={`rounded-md select-none z-10 px-4 py-1 ${!isUser ? 'ml-2 bg-[#424242]' : 'mr-2 bg-[#B23928]'}`}>{message}</p>
        </div>
    )
}

export default MessageText