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
        <h2 className='text-gray-300 text-xl'>Clear Data</h2>
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