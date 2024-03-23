import useApi from "../hooks/useApi"
import { genre } from "./genreApi"

export type userInfo = {
    email: string
    phone: string
    fullName: string
    birth: number
    gender: string
    genres: genre[]
    createtime: number
    refreshToken: string
    lastLogin: number
}

export type notificationInfo = {
    id: string
    content: string
    userId: string
    fromUser: userInfo
    createtime: number
    type: string
}

interface INotification extends IResponse {
    data: notificationInfo[]
}

export function NotificationApi(url: string, method: string = "POST") {
    const { res, fetchData } = useApi<INotification>(`notification/${url}`, method)

    return {
        res,
        fetchData,
    }
}
