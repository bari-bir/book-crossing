import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { FavoriteApi, favoriteInfo } from "../api/favoriteApi"
import "../assets/styles/components/likeAndDislike.scss"
import { useState } from "react"

type propsInfo = {
    isFavorite?: boolean
    onClickFavorite: (e: boolean, annoucementId?: string) => void
    announcementId?: string
    favoriteId?: string
}

export const LikeAndDislike = ({ isFavorite, onClickFavorite, announcementId, favoriteId }: propsInfo) => {
    const { fetchData: fetchCreateFavoriteData } = FavoriteApi("create")
    const { fetchData: fetchDeleteFavoriteData } = FavoriteApi("delete")
    const [favoriteInfo, setFavoriteInfo] = useState<favoriteInfo>({
        id: "",
        announcement: "",
        creator: "",
    })

    const onFavorite = (e: KonvaMouseEvent) => {
        e.stopPropagation()
        if (!isFavorite) {
            fetchCreateFavoriteData({
                announcementId,
            }).then((res) => {
                if (res.result_code === 0) {
                    const info: favoriteInfo = JSON.parse(JSON.stringify(res.data))
                    setFavoriteInfo(info)
                    onClickFavorite(true, announcementId)
                }
            })
        } else {
            fetchDeleteFavoriteData({
                favoriteId: favoriteInfo.id.length ? favoriteInfo.id : favoriteId,
            }).then((res) => {
                if (res.result_code === 0) {
                    onClickFavorite(false, announcementId)
                }
            })
        }
    }

    return (
        <div className="favorite-icon">
            {isFavorite ? <HeartFilled onClick={onFavorite} className="icon active" /> : <HeartOutlined onClick={onFavorite} className="icon" />}
        </div>
    )
}
