export type Draw = {
    ctx: CanvasRenderingContext2D,
    currentPoint: Point,
    prevPoint: Point | Null
}

export type Point = {
    x?: number,
    y?: number
}