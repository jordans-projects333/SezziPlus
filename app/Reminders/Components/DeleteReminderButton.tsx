'use client'

import { useRef } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useStore } from "@/Zustand/store"
import { AnimationScope } from "framer-motion"

type Props = {
    id: string | undefined,
    deleteActive: boolean,
    setDeleteActive: React.Dispatch<React.SetStateAction<boolean>>,
    editActive: boolean,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    deleteButtonRef:  React.RefObject<HTMLButtonElement>,
    optionsActive: boolean,
    scope: AnimationScope<any>,
    animate: any,
    setOptionsActive: React.Dispatch<React.SetStateAction<boolean>>,
}

const DeleteReminderButton = ({id, deleteActive, setDeleteActive, editActive, setEditActive, deleteButtonRef, optionsActive, scope, animate, setOptionsActive}:Props) => {
    let deletebuttonClickable = useRef<boolean>(true)
    // const queryClient = useQueryClient()
    // const deleteMutation = useMutation({
    // mutationFn: async () => {
    //     const res = await fetch('/api/reminders', {
    //         method: 'DELETE',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({id: id})
    //     })
    //     if(res.status === 500){
    //         deletebuttonClickable.current = true
    //         useStore.setState(() => ({
    //             errorMessage : 'Error deleting reminder',
    //             errorActive: true
    //         }))
    //     }
    // },
    // onMutate: async () => {
    //     await queryClient.cancelQueries({ queryKey: ['Reminders']})
    //     const previousState: any = queryClient.getQueryData({queryKey: ['Reminders']})
    //     queryClient.setQueryData(['Reminders'], 
    //     previousState.filter((item) => item.id !== currentId.current))
        
    //     return { previousState }
    // },
    // onError: (err, post, context) => {
    //     queryClient.setQueryData(['Reminders'], context.previousState)
    // },
    // onSettled: () => {
    //     queryClient.invalidateQueries({queryKey: ['Reminders']})
    // }
    // })
    const handleDelete = async () => {
        if(!deleteActive){
            setDeleteActive(true)
            if(editActive)setEditActive(false)
        }else{
            if(deletebuttonClickable.current){
                animate(scope.current, { height: 0, opacity: 0, x: 0})
                setOptionsActive(false)
                deletebuttonClickable.current = false
                const res = await fetch('/api/reminders', {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({id: id})
                })
                if(res.status !== 200){
                    deletebuttonClickable.current = true
                    animate(scope.current, { height: 'auto', opacity: 1})
                    useStore.setState(() => ({
                        alertActive: true,
                        alertMessage: 'Failed to delete reminder'
                    }))
                }
            }
        }
    }
    return (
        <button ref={deleteButtonRef} onClick={() => handleDelete()} className={`${!optionsActive ? 'scale-75' : (!deleteActive ? 'scale-[0.85]' : 'scale-95')} duration-300`}><svg className={` ${deleteActive ? 'fill-red-800' : 'fill-black'} duration-200 pointer-events-none h-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
    )
}

export default DeleteReminderButton