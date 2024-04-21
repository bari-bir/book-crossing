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
    avatar: string
    lastLogin: number
}

interface IUser extends IResponse {
    data: userInfo
}

export function UserApi(url: string, method: string = "POST") {
    const { res, fetchData } = useApi<IUser>(`user/${url}`, method)

    return {
        res,
        fetchData,
    }
}
