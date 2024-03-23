import { useEffect, useState } from "react"
import { BookCard } from "../components/BookCard"
import { Header } from "../components/Header"
import "../assets/styles/pages/favorite.scss"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { Empty } from "antd"

export const Favorite = () => {
    const { fetchData: fetchAnnouncementData } = AnnouncementAPI("favorites")
    const [dataList, setDataList] = useState<announcementInfo[]>([])

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        await fetchAnnouncementData({}).then((res) => {
            if (res.result_code === 0) {
                setDataList(res.data)
            }
        })
    }

    const onFavorite = (_: boolean, announcementId?: string) => {
        setDataList((dataList) => dataList.filter((item) => item.id !== announcementId))
    }

    return (
        <div className="favorite container">
            <Header title="Favorite" />

            <div className="book-list">
                {dataList.length ? (
                    dataList.map((item) => <BookCard key={item.id} {...item} onFavorite={onFavorite} />)
                ) : (
                    <Empty className="empty-icon" />
                )}
            </div>
        </div>
    )
}
