import { useEffect, useState } from "react"
import "../../assets/styles/pages/home.scss"
import { BookCard } from "../../components/BookCard"
import { CustomSearch } from "../../components/CustomSearch"
import { AnnouncementAPI, announcementInfo } from "../../api/announcementApi"
import { Empty } from "antd"
import { CloseOutlined } from "@ant-design/icons"

export const Home = () => {
    const [dataList, setDataList] = useState<announcementInfo[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const { fetchData: fetchAnnouncementData } = AnnouncementAPI("list")

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

    const onSearch = (searchValue: string) => {
        /**
         * @TODO add isPressButton for search value with api
         */
        setSearchValue(searchValue)
    }

    const onFavorite = (isFavorite: boolean, announcementId?: string) => {
        setDataList((dataList) =>
            dataList.map((item) => {
                if (item.id === announcementId) {
                    return {
                        ...item,
                        favorite: isFavorite,
                    }
                }
                return item
            }),
        )
    }

    const searchList = (): announcementInfo[] => {
        if (searchValue.length > 0) {
            return dataList.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }

        return dataList
    }

    const onCloseWin = () => {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ key: "closeWin" }))
        }
    }

    return (
        <div className="home container">
            <div className="home-header">
                <div style={{ flex: 6 }}>
                    <CustomSearch onSearch={onSearch} />
                </div>
                <div className="home-exit-btn" onClick={() => onCloseWin()}>
                    <CloseOutlined className="close-icon" />
                </div>
            </div>

            <div className="book-list">
                {searchList().length ? (
                    searchList().map((item) => <BookCard key={item.id} {...item} onFavorite={onFavorite} />)
                ) : (
                    <Empty className="empty-icon" />
                )}
            </div>
        </div>
    )
}
