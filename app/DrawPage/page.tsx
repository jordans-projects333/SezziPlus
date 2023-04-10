'use client'

import { Draw } from '@/typings'
// import { ser } from "@/pusherSetup"
// import { clientPusher } from "@/lib/clientPusherSetup"

import { useDraw } from '@/utils/DrawPage/useDraw'
import { useEffect, useRef, useState } from "react"

const DrawPage = () => {
    const { canvasRef, onMouseDown, clear } = useDraw(drawLine)
    let canvasContainerRef = useRef<HTMLDivElement>(null)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasWeight, setCanvasWeight] = useState(0)
    useEffect(() => {
        setCanvasHeight(canvasContainerRef.current!.clientHeight)
        setCanvasWeight(canvasContainerRef.current!.clientWidth)
    },[])
    // useEffect(() => {
    //     const channel = clientPusher.subscribe('draw')
    //     channel.bind('new-line', async (data) => {
    //         console.log('yek', data.id)
    //     })
    // }, [clientPusher])
    function drawLine({prevPoint, currentPoint, ctx}: Draw){
        const {x: currX, y: currY } = currentPoint
        const lineColor = '#000'
        const lineWidth = 5
        let startPoint = prevPoint ?? currentPoint
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        ctx.moveTo(startPoint.x, startPoint.y)
        ctx.lineTo(currX!, currY!)
        ctx.stroke()
        ctx.fillStyle = lineColor
        ctx.beginPath()
        ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
        ctx.fill()
    }
    return (
        <div className=' overflow-hidden'>
            <div ref={canvasContainerRef} className="w-[95%] aspect-[3/2] mt-4 mx-auto border border-black bg-white">
                <canvas ref={canvasRef} onMouseDown={onMouseDown} onTouchMove={(e) => e.preventDefault()} onTouchStart={onMouseDown} height={canvasHeight} width={canvasWeight} className='border border-black'/>
            </div>
            <div className="flex w-full mt-2 text-white">
                <button className="ml-2 flex-1"><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/></svg></button>
                <button className="flex-1"><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M84.6 9.4C72.1-3.1 51.9-3.1 39.4 9.4s-12.5 32.8 0 45.3L120.7 136 28.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L146.1 481.4c37.5 37.5 98.3 37.5 135.8 0L472.3 290.9c28.1-28.1 28.1-73.7 0-101.8L320.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L166 90.7 84.6 9.4zM166 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L211.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L427.1 234.3c3.1 3.1 3.1 8.2 0 11.3L384.7 288H65.5c1.4-5.4 4.2-10.4 8.4-14.6L166 181.3z"/></svg></button>
                <button className="flex-1"><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256 406.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg></button>
                <button className="flex-1"><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg></button>
                <div className="ml-auto flex mr-2 gap-2">
                    <button type="button" onClick={clear} className='bg-[#424242] px-4 rounded'>clear</button>
                    <button type="button" onClick={() => console.log('save')} className='bg-[#424242] px-4 rounded'>Save</button>
                </div>
            </div>
            <ul className='flex ml-2 mt-2 gap-8 text-white overflow-auto font-medium'>
                <li className="text-red-500 flex-shrink-0">Red</li>
                <li className="text-orange-500 flex-shrink-0">Orange</li>
                <li className="text-yellow-500 flex-shrink-0">Yellow</li>
                <li className="text-green-500 flex-shrink-0">Green</li>
                <li className="text-blue-500 flex-shrink-0">Blue</li>
                <li className="text-purple-500 flex-shrink-0">Purple</li>
                <li className="text-pink-500 flex-shrink-0">Pink</li>
            </ul>
            <div className="w-full flex justify-center items-center flex-col mt-4">
                <input type="range" min="1" max="100" defaultValue={50} className={'w-[90%] h-[4px] mb-2 accent-white bg-gray-200 rounded-lg appearance-none cursor-pointer'}></input>
                <h3 className="text-white">Brightness</h3>
            </div>
            <div className="w-full flex justify-center items-center flex-col mt-8">
                <input type="range" min="1" max="100" defaultValue={50} className={'w-[90%] h-[4px] mb-2 accent-white bg-gray-200 rounded-lg appearance-none cursor-pointer'}></input>
                <h3 className="text-white">Stroke size</h3>
            </div>
        </div>
    )
}

export default DrawPage