export type Draw = {
    ctx: CanvasRenderingContext2D,
    currentPoint: Point,
    prevPoint: Point | Null
}

export type Point = {
    x?: number,
    y?: number
}

export type DestructuredReminderData = {
    id: string,
    date: string,
    time: string,
    message: string,
    goal: number,
    type: string
}

export type JWTSession = {
    user: {
        name: string,
        email: string,
        image: string,
        id: string
    }
}