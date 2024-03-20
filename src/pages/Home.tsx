import { useEffect, useState } from "react"
import "../assets/styles/pages/home.scss"
import { BookCard } from "../components/BookCard"
import { CustomSearch } from "../components/CustomSearch"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { Empty } from "antd"
import { FavoriteApi } from "../api/favoriteApi"

export const Home = () => {
    const [dataList, setDataList] = useState<announcementInfo[]>([])
    const { fetchData: fetchAnnouncementData } = AnnouncementAPI("list")
    const { fetchData: fetchFavoriteData } = FavoriteApi("list")
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const loadData = async () => {
        await fetchAnnouncementData({}).then((res) => {
            if (res.result_code === 0) {
                setDataList(res.data)
            }
        })

        fetchFavoriteData({}).then((res) => {
            if (res.result_code === 0) {
                const favoriteList = res.data
                setDataList((dataList) =>
                    dataList.map((item) => {
                        const favoriteData = favoriteList.find((favorite) => favorite.announcement === item.id)
                        if (favoriteData && favoriteData.id) {
                            return {
                                ...item,
                                favoriteId: favoriteData.id,
                                isFavorite: true,
                            }
                        }
                        return item
                    }),
                )
            }
        })
    }

    useEffect(() => {
        loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFavorite])

    return (
        <div className="home container">
            <CustomSearch />

            <div className="book-list">
                {dataList.length ? (
                    dataList.map((item) => (
                        <BookCard key={item.id} {...item} onFavorite={() => setIsFavorite((favorite) => (favorite = !favorite))} />
                    ))
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}
