import useApi from "../hooks/useApi"

export type announcementInfo = {
    id?: string
    isFavorite?: boolean
    favoriteId?: string
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

export function AnnouncementAPI(url: string) {
    const { res, fetchData } = useApi<IAnnouncement>(`/bookcrossing/announcement/${url}`)

    return {
        res,
        fetchData,
    }
}
