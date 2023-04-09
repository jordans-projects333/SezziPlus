import { motion } from "framer-motion"
import ResizableComponent from "@/utils/Components/ResizableComponent"
import Reminder from "../Reminder"
import { DestructuredReminderData } from "@/typings"
import AddReminderButton from "../AddReminder/AddReminderButton"

type Props = {
    data: DestructuredReminderData[]
}

const MonthlySection = ({data}: Props) => {
    const monthlyReminders = data.filter((item: { type: string }) => {
        return item.type === 'monthly'
    })
    return (
        <>
            {monthlyReminders.length !== 0 &&
            <motion.div className="overflow-x-hidden" initial={{ opacity: 0 }} whileInView={{opacity: 1}} viewport={{ once: true }}>
                <div className="w-full flex justify-between items-end mt-12 border-b border-gray-400">
                    <h3 className="ml-1 mb-1 text-2xl text-white">Weekly Reminders</h3>
                    <AddReminderButton/>
                </div>
                <ResizableComponent>
                    {monthlyReminders.map(({id, message, type, goal}) => (
                        <Reminder key={id} id={id} message={message} type={type}  goal={goal}/>
                    ))}
                </ResizableComponent>
            </motion.div>}
        </>
    )
}

export default MonthlySection