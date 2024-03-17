import useApi from "../hooks/useApi"

export type announcementInfo = {
    title: string
    category: string
    description: string
    year: number
    images: string[]
}

export interface IAnnouncement extends IResponse {
    data: announcementInfo[]
}

export function AnnouncementAPI() {
    const { res, fetchData } = useApi<IAnnouncement>("/bookcrossing/announcement/list")

    return {
        res,
        fetchData,
    }
}
