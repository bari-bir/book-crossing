import "../assets/styles/components/bookCard.scss"
import { CloudImage } from "./CloudImage"
import { LikeAndDislike } from "./LikeAndDislike"
import { announcementInfo } from "../api/announcementApi"
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"

interface IBook extends announcementInfo {
    onFavorite: (e: boolean, annoucementId?: string) => void
}

export const BookCard = ({ id, favoriteId, title, category, year, images, favorite, createtime, onFavorite }: IBook) => {
    const navigate = useNavigate()

    return (
        <div
            className="book"
            onClick={() => {
                navigate(`/book/${id}`)
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
                    <p>{dayjs(createtime).format("DD.MM.YYYY")}</p>
                    <p>
                        {dayjs(createtime).get("hour")}:{dayjs(createtime).get("minute")}
                    </p>
                </div>
            </div>

            <LikeAndDislike favoriteId={favoriteId} onClickFavorite={onFavorite} announcementId={id} isFavorite={favorite ? true : false} />
        </div>
    )
}
