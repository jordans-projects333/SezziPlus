'use client'

import AddReminderButton from "./AddReminder/AddReminderButton"
import { useQuery } from "@tanstack/react-query"
import TextSection from "./ReminderSection/TextSection"
import DailySection from "./ReminderSection/DailySection"
import WeeklySection from "./ReminderSection/WeeklySection"
import MonthlySection from "./ReminderSection/MonthlySection"
import GeneralSection from "./ReminderSection/GeneralSection"

const ReminderSections = () => {
    // const {data, isLoading, isError, error} = useQuery({
    //     queryKey: ['Reminders'],
    //     queryFn: async () => {
    //         const res = await fetch('/api/Reminders/getReminders')
    //         const data = await res.json()
    //         return data.data.reminders
    //     }
    // }) 
    const data: string | any[] = []
    return (
        <>
            <TextSection data={data}/>
            <DailySection data={data}/>
            <WeeklySection data={data}/>
            <MonthlySection data={data}/>
            <GeneralSection data={data}/>
            {data.length === 0 && 
            <div className="flex w-full mt-20 justify-center items-center">
                <AddReminderButton/>
            </div>}
        </>
    )
}

export default ReminderSections