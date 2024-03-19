import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import "../assets/styles/components/bookCard.scss"
import { CloudImage } from "./CloudImage"
import { FavoriteApi } from "../api/favoriteApi"
import { announcementInfo } from "../api/announcementApi"
import { useNavigate } from "react-router-dom"

interface IBook extends announcementInfo {
    onFavorite: () => void
}

export const BookCard = ({ id, favoriteId, title, category, year, images, isFavorite, onFavorite }: IBook) => {
    const navigate = useNavigate()
    const { fetchData: fetchCreateFavoriteData } = FavoriteApi("create")
    const { fetchData: fetchDeleteFavoriteData } = FavoriteApi("delete")

    const onClickFavorite = (e: KonvaMouseEvent) => {
        e.stopPropagation()
        if (!isFavorite) {
            fetchCreateFavoriteData({
                announcementId: id,
            }).then((res) => {
                if (res.result_code === 0) {
                    onFavorite()
                }
            })
        } else {
            fetchDeleteFavoriteData({
                favoriteId,
            }).then((res) => {
                if (res.result_code === 0) {
                    onFavorite()
                }
            })
        }
    }

    return (
        <div
            className="book"
            onClick={() => {
                navigate(`/book/${id}?isFavorite=${isFavorite ? true : false}`)
            }}>
            {images && (
                <div className="image" onClick={(e) => e.stopPropagation()}>
                    <CloudImage src={images[0]} height={111} width={"100%"} />
                </div>
            )}
            <div className="book-Info">
                <p className="book-title">
                    {title} <span className="book-year">{year}</span>
                </p>
                <p className="category">{category}</p>
                <div className="book-createTime">
                    <p>13.01.2024</p>
                    <p>17:05</p>
                </div>
            </div>

            <div className="favorite">{isFavorite ? <HeartFilled onClick={onClickFavorite} className="icon active" /> : <HeartOutlined onClick={onClickFavorite} className="icon" />}</div>
        </div>
    )
}
