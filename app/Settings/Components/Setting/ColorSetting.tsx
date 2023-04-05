'use client'

type Props = {
    title: string,
    bgColor: string,
    slide: (number:number)=>void
}

const ColorSetting = ({title, bgColor, slide}: Props) => {
  return (
    <li className='flex justify-between items-center'>
        <div className="flex items-center gap-2 flex-1">
            <button onClick={() => slide(window.innerWidth * 2)}><div className={"border-2 border-zinc-800 h-4 w-4 rounded-md "+bgColor}></div></button>
            <button onClick={() => slide(window.innerWidth * 2)} className="flex flex-1">{title}</button>
        </div>
        <button onClick={() => slide(window.innerWidth * 2)}><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
    </li>
  )
}

export default ColorSetting