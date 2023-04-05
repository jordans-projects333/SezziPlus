'use client'

import YesNoSetting from '../Setting/YesNoSetting'
import AreYouSureModel from '../AreYouSureModel'
import { useRef, useState } from 'react'

const DataSettings = () => {
  const [areYouSureModel, setAreYouSureModel] = useState(false)
  const [areYouSureFunction, setAreYouSureFunction] = useState(() => {})
  const [areYouSureText, setAreYouSureText] = useState('')
  let fadedBackground = useRef<HTMLDivElement>(null)
  const cancelAreYouSureModel = () => {
      setAreYouSureModel(false)
  }
  const deleteMessagesAreYouSure = () => {
      setAreYouSureModel(true)
      setAreYouSureFunction(() => deleteMessages)
      setAreYouSureText('delete all your messages?')
  }
  const deleteNotesAreYouSure = () => {
    setAreYouSureModel(true)
    setAreYouSureFunction(() => deleteNotes)
    setAreYouSureText('delete all your notes?')
  }
  const deleteRemindersAreYouSure = () => {
    setAreYouSureModel(true)
    setAreYouSureFunction(() => deleteReminders)
    setAreYouSureText('delete all your reminders?')
  }
  const deleteHallOfFameAreYouSure = () => {
    setAreYouSureModel(true)
    setAreYouSureFunction(() => deleteHalleOfFame)
    setAreYouSureText('delete hall of fame?')
  }
  const deleteMessages = () => {
      console.log('delete messages bears are cool')
  }
  const deleteNotes = () => {
    console.log('delete notes bears are cool')
  }
  const deleteReminders = () => {
    console.log('delete reminders bears are cool')
  }
  const deleteHalleOfFame = () => {
    console.log('delete hall of fame bears are cool')
  }
  return (
    <div className='border-b-[2px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
      <AreYouSureModel active={areYouSureModel} actionText={areYouSureText} fadedBackgroundRef={fadedBackground} 
                             cancelFunction={cancelAreYouSureModel} sureFunction={areYouSureFunction} passwordRequired={false}/>
        <div className="flex items-center gap-2">
            <svg className="h-5 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            <h2 className='text-gray-300 text-xl'>Clear data</h2>
        </div>
        <ul className='flex flex-col gap-2 pl-2 py-2'>
            <YesNoSetting title='All Messages' yesFunction={deleteMessagesAreYouSure}/>
            <YesNoSetting title='All Notes' yesFunction={deleteNotesAreYouSure}/>
            <YesNoSetting title='All Reminders' yesFunction={deleteRemindersAreYouSure}/>
            <YesNoSetting title='Hall of fame' yesFunction={deleteHallOfFameAreYouSure}/>
        </ul>
    </div>
  )
}

export default DataSettings