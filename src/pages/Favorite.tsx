import { useEffect, useState } from "react"
import { BookCard } from "../components/BookCard"
import { Header } from "../components/Header"
import "../assets/styles/pages/favorite.scss"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { FavoriteApi, favoriteInfo } from "../api/favoriteApi"
import { Empty } from "antd"

export const Favorite = () => {
    const { fetchData: fetchAnnouncementData } = AnnouncementAPI("list")
    const { fetchData: fetchFavoriteData } = FavoriteApi("list")
    const [dataList, setDataList] = useState<announcementInfo[]>([])
    const [isFavorite, setIsFavorite] = useState<boolean>(true)

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFavorite])

    const loadData = async () => {
        await fetchFavoriteData({}).then((res) => {
            if (res.result_code === 0) {
                setAnnoucement(res.data)
            }
        })
    }

    const setAnnoucement = (favoriteRes: favoriteInfo[]) => {
        fetchAnnouncementData({}).then((res) => {
            if (res.result_code === 0) {
                const announcementList: announcementInfo[] = []
                res.data.forEach((item) => {
                    const favoriteData = favoriteRes.find((favorite) => favorite.announcement === item.id)
                    if (favoriteData && favoriteData.id) {
                        announcementList.push({
                            ...item,
                            favoriteId: favoriteData.id,
                        })
                    }
                })
                setDataList(announcementList)
            }
        })
    }

    return (
        <div className="favorite container">
            <Header title="Favorite" />

            <div className="book-list">{dataList.length ? dataList.map((item) => <BookCard key={item.id} {...item}  isFavorite={true} onFavorite={(e: boolean) => setIsFavorite(e)} />) : <Empty />}</div>
        </div>
    )
}
