import { dehydrate } from "@tanstack/query-core"
import getQueryClient from "@/lib/ReactQuery/GetQueryClient"
import Hydrate from "@/lib/ReactQuery/HydrateClient"
import { getServerSession } from 'next-auth'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { prisma } from "@/lib/prisma"
import Reminder from "./Components/Reminder"

const RemindersPage = async () => {
    // const getReminders = async () => {
    //     const session = await getServerSession(authOptions)
    //     const data = await prisma.User.findUnique({ where: {id: session.user.id}, include : { reminders: true}})
    //     return data.reminders
    // }
    const session = await getServerSession(authOptions)
    if(session){
        // const queryClient = getQueryClient()
        // await queryClient.prefetchQuery(['Reminders'], getReminders)
        // const dehydratedState = dehydrate(queryClient)
        return (
            <>
                {/* <AddReminderModel/>
                <EditModel/>
                <Hydrate state={dehydratedState}>
                    <ReminderSection/>
                </Hydrate> */}
            </>
        )}
        return(
            <>
            {/* <AddReminderModel/> */}
                
                <div className="overflow-x-hidden">
                    <div className="w-full flex justify-between items-end mt-20 border-b border-gray-400">
                        <h3 className="ml-1 mb-1 text-2xl text-white">Daily Reminders</h3>
                        {/* <AddButton/> */}
                    </div>
                    <div>
                        <Reminder message={'a message'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message is a gift'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message cant solve yout problems'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message egg egg eggboy egge eggboy eeeeeeeeeeeeg'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message wha wha wha wha wha wha wha wha hwah wah wah wah wwah wah wha wah wah wah wah wha'} date={'10/11/2023'} time={'10:13pm'}/>
                    </div>
                </div>
                <div className="overflow-x-hidden">
                    <div className="w-full flex justify-between items-end mt-20 border-b border-gray-400">
                        <h3 className="ml-1 mb-1 text-2xl text-white">Weekly Reminders</h3>
                        {/* <AddButton/> */}
                    </div>
                    <div>
                        <Reminder message={'a message'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message is a gift'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message cant solve yout problems'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message egg egg eggboy'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message wha wha wha wha wha wha wha wha hwah wah wah wah wwah wah wha wah wah wah wah wha'} date={'10/11/2023'} time={'10:13pm'}/>
                    </div>
                </div>
                <div className="overflow-x-hidden">
                    <div className="w-full flex justify-between items-end mt-20 border-b border-gray-400">
                        <h3 className="ml-1 mb-1 text-2xl text-white">General Reminders</h3>
                        {/* <AddButton/> */}
                    </div>
                    <div>
                        <Reminder message={'a message'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message is a gift'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message cant solve yout problems'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message egg egg eggboy'} date={'10/11/2023'} time={'10:13pm'}/>
                        <Reminder message={'a message wha wha wha wha wha wha wha wha hwah wah wah wah wwah wah wha wah wah wah wah wha'} date={'10/11/2023'} time={'10:13pm'}/>
                    </div>
                </div>
            </>
        )
}

export default RemindersPage