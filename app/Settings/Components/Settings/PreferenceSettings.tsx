'use client'

import ToggleSetting from "../Setting/ToggleSetting"
import ArraySetting from "../Setting/ArraySetting"

const PreferenceSettings = () => {
  return (
    <div className='border-b-[2px] border-zinc-800 pl-2 pr-4 text-lg pt-4'>
            <h2 className='text-gray-300 text-xl'>Preferences</h2>
            <ul className='flex flex-col gap-2 pl-2 py-2'>
                <ToggleSetting title={'Mute Sound Effects'} defaultValue={false}/>
                <ToggleSetting title={'Ping Texts'} defaultValue={true}/>
                <ArraySetting title={'Messages View'} options={['1x', '0.6x']} defaultValue={0}/>
                <ArraySetting title={'Messages auto delete'} options={['5mins', '1hr', '6hr', '24hr', '3 days', '1 week']} defaultValue={4}/>
            </ul>
        </div>
  )
}

export default PreferenceSettings