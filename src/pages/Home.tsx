import { useEffect, useState } from "react"
import "../assets/styles/pages/home.scss"
import { BookCard } from "../components/BookCard"
import { CustomSearch } from "../components/CustomSearch"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { Empty } from "antd"

export const Home = () => {
    const [dataList, setDataList] = useState<announcementInfo[]>([])
    const { fetchData } = AnnouncementAPI('list')

    useEffect(() => {
        fetchData({}).then((res) => {
            if (res.result_code === 0) {
                setDataList(res.data)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="home container">
            <CustomSearch />

            <div className="book-list">{dataList.length ? dataList.map(item => (
                <BookCard  {...item}/>
            )) : <Empty />}</div>
        </div>
    )
}
