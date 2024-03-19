import useApi from "../hooks/useApi"

export type requestInfo = {
    id: string
    creator: string
    message: string
    attachments: null
    createtime: number
    announcement: string
    announcementCreator: string
    status: string
}

interface IRequest extends IResponse {
    data: requestInfo[]
}

export function RequestAPI(url: string, method: string = "POST") {
    const { res, fetchData } = useApi<IRequest>(`bookcrossing/request/${url}`, method)

    return {
        res,
        fetchData,
    }
}
