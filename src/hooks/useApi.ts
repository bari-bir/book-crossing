import http from "../utils/axios"
import { useState } from "react"
import { useAppDispatch } from "./useStore"
import { setHasLogin, setLoading, setError } from "../redux/features/mainSlice"

interface UseApiResult<T> {
    res: T | null
    fetchData: (body: unknown) => Promise<T>
}

const useApi = <T>(url: string, method: string = "POST"): UseApiResult<T> => {
    const dispatch = useAppDispatch()
    const [res, setRes] = useState<T | null>(null)

    const fetchData = async (body?: unknown): Promise<T> => {
        dispatch(setLoading(true))
        return await http(url, {
            data: body,
            method,
        })
            .then((res) => {
                dispatch(setLoading(false))
                setRes(res.data)
                dispatch(setError(null))
                return res.data
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    console.log("401 error")
                    localStorage.setItem("token", "")
                    dispatch(setHasLogin(false))
                    if (window.ReactNativeWebView) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({ key: "401 error" }))
                    }
                }
                dispatch(setError(err))
                setRes(null)
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
    return { res, fetchData }
}

export default useApi
