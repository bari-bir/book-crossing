import useApi from "../hooks/useApi"

export type announcementInfo = {
    id?: string
    favorite?: boolean
    favoriteId?: string
    createtime?: number
    title: string
    category: string | null
    location: string | null
    description: string
    year: number
    images: string[]
}

export interface IAnnouncement extends IResponse {
    data: announcementInfo[]
}

export function AnnouncementAPI(url: string, method: string = "POST") {
    const { res, fetchData } = useApi<IAnnouncement>(`bookcrossing/announcement/${url}`, method)

    return {
        res,
        fetchData,
    }
}
