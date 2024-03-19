import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"

interface ApiResponse<T> {
    data: T
}

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
})

instance.interceptors.request.use(
    async (config) => {
        const authToken = localStorage.getItem("token")
        const token = authToken ? JSON.parse(authToken).token : null;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    (response: AxiosResponse<ApiResponse<unknown>>) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    },
)

export default instance
