'use client'

import AddReminderButton from "./AddReminder/AddReminderButton"
import { useQuery } from "@tanstack/react-query"
import getReminders from "@/utils/ReactQueries/GetReminders"
import TextSection from "./ReminderSection/TextSection"
import DailySection from "./ReminderSection/DailySection"
import WeeklySection from "./ReminderSection/WeeklySection"
import MonthlySection from "./ReminderSection/MonthlySection"
import GeneralSection from "./ReminderSection/GeneralSection"
import YearlySection from "./ReminderSection/YearlySection"

const ReminderSections = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['Reminders'],
        queryFn: getReminders
    }) 
    return (
        <div className="pb-16">
            <TextSection data={data}/>
            <DailySection data={data}/>
            <WeeklySection data={data}/>
            <MonthlySection data={data}/>
            <YearlySection data={data}/>
            <GeneralSection data={data}/>
            {data.length === 0 && 
            <div className="flex w-full mt-20 justify-center items-center">
                <AddReminderButton/>
            </div>}
        </div>
    )
}

export default ReminderSections