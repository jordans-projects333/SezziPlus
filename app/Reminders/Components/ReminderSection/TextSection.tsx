import { motion } from "framer-motion"
import ResizableComponent from "@/utils/Components/ResizableComponent"
import Reminder from "../Reminder"
import { DestructuredReminderData } from "@/typings"
import AddReminderButton from "../AddReminder/AddReminderButton"

type Props = {
    data: DestructuredReminderData[]
}

const TextSection = ({data}: Props) => {
    const textReminders = data.filter((item: { type: string }) => {
        return item.type === 'text'
    })
    return (
        <>
            {textReminders.length !== 0 &&
            <motion.div className="overflow-x-hidden" initial={{ opacity: 0 }} whileInView={{opacity: 1}} viewport={{ once: true }}>
                <div className="w-full flex justify-between items-end mt-4 border-b border-gray-400">
                    <h3 className="ml-1 mb-1 text-2xl text-white">Text Reminders</h3>
                    <AddReminderButton/>
                </div>
                <ResizableComponent>
                    {textReminders.map(({id, date, time, message, type}) => (
                        <Reminder key={id} id={id} message={message} date={date} time={time} type={type}/>
                    ))}
                </ResizableComponent>
            </motion.div>}
        </>
    )
}

export default TextSection