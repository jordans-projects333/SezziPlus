export  const dateValidation = (dataValue: string) => {
        const currentDate = new Date().setHours(0,0,0,0)
        const inputDate = new Date(dataValue).setHours(0,0,0,0)
        const lastDate = new Date('2025-01-01').setHours(0,0,0,0)
        if(dataValue === '')return{ success: false, error: 'Required' }
        if(inputDate < currentDate)return{ success: false, error: 'Date cannot be in the past' }
        if(inputDate > lastDate)return{ success: false, error: 'Date cannot be futher than 2024' }
        return{ success: true, error: '' }
    }
    
export const messageValidation = (message: string) => {
        if(message === '')return{ success: false, error: 'Required' }
        return { success: true, error: '' }
    }

export const goalValidation = (goalValue: number) => {
        if(goalValue < 0)return{ success: false, error: 'Cannot be less than 0' }
        if(goalValue > 1000)return{ success: false, error: 'Cannot be more than 1000' }
        return { success: true, error: '' }
    }
export const timeValidation = (timeValue: any, dateValue: any) => {
        const currentDate = new Date().setHours(0,0,0,0)
        const inputDate = new Date(dateValue).setHours(0,0,0,0)
        const d = new Date(Date.now() + (5 * 60 * 1000))
        const d2 = new Date()
        const hour = String(d.getHours()).padStart(2, '0')
        const min = String(d.getMinutes()).padStart(2, '0')
        const hour2 = String(d2.getHours()).padStart(2, '0')
        const min2 = String(d2.getMinutes()).padStart(2, '0')
        if(timeValue === '')return{ success: false, error: 'Required' }
        if(dateValue === '')return{ success: false, error: 'Date Required' }
        if(timeValue < `${hour2}:${min2}` && inputDate === currentDate)return{ success: false, error: 'Text cannot be in the past' }
        if(timeValue <= `${hour}:${min}` && inputDate === currentDate)return{ success: false, error: 'Text cannot be set under 5 mins' }
        return { success: true, error: '' }
    }

export const reminderValidation = (
        loading: boolean, 
        currentReminder: string,
        message: string, 
        messageError: string,
        setMessageError: React.Dispatch<React.SetStateAction<string>>,
        
        dateError: string,
        setDateError: React.Dispatch<React.SetStateAction<string>>,
       
        timeError: string,
        setTimeError: React.Dispatch<React.SetStateAction<string>>,
        goalCurrent: HTMLInputElement | null,
        
        goalError: string,
        setGoalError: React.Dispatch<React.SetStateAction<string>>,
        date?: any, 
        time?: any, 
        goal?: any, 
    ) => {
    let successfulValidation = true
    // Message Validation
    if(loading)return
    const messageValidated = messageValidation(message)
    if(!messageValidated.success){
        setMessageError(messageValidated.error)
        successfulValidation = false
    }else{
        if(messageError !== '')setMessageError('')
    }
    // Date Validation
    if(currentReminder === 'text'){
        const dateValidated = dateValidation(date)
        if(!dateValidated.success){
            setDateError(dateValidated.error)
            successfulValidation = false
        }else{
            if(dateError !== '')setDateError('')
        }
    }
    // Time Validation
    if(currentReminder === 'text'){
        const timeValidated = timeValidation(time, date)
        if(!timeValidated.success){
            setTimeError(timeValidated.error)
            successfulValidation = false
        }else{
            if(timeError !== '')setTimeError('')
        }
    }
    // Goal Validation
    if(goalCurrent !== null){
        const goalValidated = goalValidation(goal)
        if(!goalValidated.success){
            setGoalError(goalValidated.error)
            successfulValidation = false
        }else{
            if(goalError !== '')setGoalError('')
        }
    }
    return successfulValidation
}