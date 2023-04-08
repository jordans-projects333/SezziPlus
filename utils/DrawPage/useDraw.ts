import { Draw, Point} from "@/typings"
import { useEffect, useRef, useState } from "react"

export const useDraw = (onDraw: ({ctx, currentPoint, prevPoint}: Draw) => void) => {
    const [mouseDown, setMouseDown] = useState(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const prevPoint = useRef<null | Point>(null)

    const onMouseDown = () => {
        setMouseDown(true)
    }

    const clear = () => {
        const canvas = canvasRef.current
        if(!canvas) return
        const ctx = canvas.getContext('2d')
        if(!ctx)return
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }

    useEffect(() => {
        if(!mouseDown)return
        const handler = (e: any) => {
            const currentPoint = computePointInCanvas(e)
            const ctx = canvasRef.current?.getContext('2d')
            if(!ctx || !currentPoint)return
            // fetch('/api/draw/sendDrawData', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({ctx, currentPoint, prevPoint: prevPoint.current})
            // })
            // fetch('/api/feting to api to then serverPusher.trigger('draw', 'new-line', ctx)')
            onDraw({ctx, currentPoint, prevPoint: prevPoint.current})
            prevPoint.current = currentPoint
        }

        const computePointInCanvas = (e: any) => {
            const canvas = canvasRef.current
            if(!canvas)return
            const rect = canvas.getBoundingClientRect()
            let x
            let y
            // console.log(rect)
            if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
                var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
                var touch = evt.touches[0] || evt.changedTouches[0];
                x = touch.pageX  - rect.left
                y = touch.pageY - rect.top
            } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                x = e.clientX - rect.left
                y = e.clientY - rect.top
            }
            return {x, y}
        }
        const mouseUpHandler = () => {
            setMouseDown(false)
            prevPoint.current = null
        }
        canvasRef.current?.addEventListener('mousemove', handler)
        canvasRef.current?.addEventListener('touchmove', handler)
        window.addEventListener('mouseup', mouseUpHandler)
        window.addEventListener('touchend', mouseUpHandler)
        return () => {
            canvasRef.current?.removeEventListener('mousemove', handler)
            canvasRef.current?.removeEventListener('touchmove', handler)
            window.removeEventListener('mouseup', mouseUpHandler)
            window.removeEventListener('touchend', mouseUpHandler)
        }
    }, [onDraw])
    return{canvasRef, onMouseDown, clear}
}