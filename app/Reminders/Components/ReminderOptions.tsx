'use client'

import { AnimationScope } from "framer-motion"
import { useState , useEffect} from "react"
import DeleteReminderButton from "./DeleteReminderButton"

type Props = {
    optionsRef: React.RefObject<HTMLDivElement>,
    optionsActive: boolean,
    setOptionsActive: React.Dispatch<React.SetStateAction<boolean>>,
    editButtonRef: React.RefObject<HTMLButtonElement>,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    deleteButtonRef: React.RefObject<HTMLButtonElement>,
    setDeleteActive: React.Dispatch<React.SetStateAction<boolean>>,
    editActive: boolean,
    deleteActive: boolean,
    id: string | undefined,
    scope:  AnimationScope<any>,
    animate: any
}

const ReminderOptions = ({optionsRef, optionsActive, editButtonRef, editActive, setEditActive, deleteActive, 
                          setDeleteActive, deleteButtonRef, id, scope, animate, setOptionsActive}: Props) => {
    const [horizontalOptions, setHorizontalOptions] = useState(false)
    useEffect(() => {
        if(optionsRef.current!.offsetHeight >= (editButtonRef.current!.offsetHeight * 2) + 20){
            setHorizontalOptions(true)
        }
    },[])
    return (
        <div ref={optionsRef} className={`absolute right-[100%] flex gap-6 px-4 justify-center items-center h-full ${horizontalOptions && 'flex-col'}`}>
            <div className="absolute right-0 top-0 h-full w-[600%] bg-amber-700 -z-10 border-zinc-900 border-2"></div>
            <button ref={editButtonRef} onClick={() => console.log('handleEdit')} className={`${!optionsActive ? 'scale-75' : (!editActive ? 'scale-[0.85]' : 'scale-95')} duration-300`}><svg className={` ${editActive ? 'fill-red-800' : 'fill-black'} duration-200 pointer-events-none h-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button>
            <DeleteReminderButton id={id} deleteActive={deleteActive} setDeleteActive={setDeleteActive} editActive={editActive} scope={scope} setOptionsActive={setOptionsActive}
                                  setEditActive={setEditActive} deleteButtonRef={deleteButtonRef} optionsActive={optionsActive} animate={animate}/>
        </div>
    )
}

export default ReminderOptions