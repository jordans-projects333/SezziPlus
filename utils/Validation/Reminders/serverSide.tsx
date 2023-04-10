export  const dateValidation = (dataValue: string, strict: boolean) => {
    const dateInput: string = dataValue.substring(0,10)
    if(strict){
        if(!(/[2]+[0]+[2]+[3-4]+-+[0-1]+[0-9]+-+[0-3]+[0-9]/.test(dateInput)))return{ success: false }
        const currentDate = new Date().setHours(0,0,0,0)
        const inputDate = new Date(dateInput).setHours(0,0,0,0)
        const lastDate = new Date('2025-01-01').setHours(0,0,0,0)
        if(inputDate < currentDate)return{ success: false }
        if(inputDate > lastDate)return{ success: false }
        return{ success: true }
    }
    if(!(/[0-9]+[0-9]+[0-9]+[0-9]+-+[0-9]+[0-9]+-+[0-9]+[0-9]/.test(dateInput)))return{ success: false }
    return{ success: true }
}


export const timeValidation = (timeValue: string, strict: boolean, date: string | null) => {
    const timeInput: string = timeValue.substring(0,5)
    const dateInput: string = timeValue.substring(0,10)
    if(!(/[0-2]+[0-9]+:+[0-9]+[0-9]/.test(timeInput)))return{ success: false }
    if(strict){
        const currentDate = new Date().setHours(0,0,0,0)
        const inputDate = new Date(dateInput).setHours(0,0,0,0)
        const d = new Date(Date.now() + (2 * 60 * 1000))
        const d2 = new Date()
        const hour = String(d.getHours()).padStart(2, '0')
        const min = String(d.getMinutes()).padStart(2, '0')
        const hour2 = String(d2.getHours()).padStart(2, '0')
        const min2 = String(d2.getMinutes()).padStart(2, '0')
        if(timeValue < `${hour2}:${min2}` && inputDate === currentDate)return{ success: false }
        if(timeValue <= `${hour}:${min}` && inputDate === currentDate)return{ success: false }
        return { success: true }
    }
    return { success: true }
}