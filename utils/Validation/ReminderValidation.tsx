export  const dateValidation = (dataValue: string) => {
        const currentDate = new Date().setHours(0,0,0,0)
        const inputDate = new Date(dataValue).setHours(0,0,0,0)
        if(dataValue === '')return{ success: false, error: 'Required' }
        if(inputDate < currentDate)return{ success: false, error: 'Date cannot be in the past' }
        return{ success: true, error: '' }
    }
export const messageValidation = (message: string) => {
        if(message === '')return{ success: false, error: 'Required' }
        return { success: true, error: '' }
    }

export const goalValidation = (goalValue: any) => {
        if(goalValue < 1)return{ success: false, error: 'Cannot be less than 1' }
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
        if(timeValue < `${hour2}:${min2}` && inputDate === currentDate)return{ success: false, error: 'Time cannot be in the past' }
        if(timeValue <= `${hour}:${min}` && inputDate === currentDate)return{ success: false, error: 'Time cannot be shorter than 5 mins' }
        return { success: true, error: '' }
    }