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

    const timeText = (time: number) => {
        if (time < 10) {
            return `0${time}`
        } else {
            return time
        }
    }

    const createTimeText = (createTime?: number) => {
        const hour = dayjs(createTime).get("hour")
        const minnute = dayjs(createTime).get("minute")
        return `${timeText(hour)}:${timeText(minnute)}`
    }

    return (
        <div
            className="book"
            onClick={() => {
                navigate(`/book/${id}`)
            }}>
            {images && (
                <div className="image" onClick={(e) => e.stopPropagation()}>
                    <CloudImage src={images[0]} height={141} width={"100%"} />
                </div>
            )}
            <div className="book-Info">
                <p className="book-title">
                    {title} <span className="book-year">{year}</span>
                </p>
                <p className="category">{category}</p>
                <div className="book-createTime">
                    <p>{dayjs(createtime).format("DD.MM.YYYY")}</p>
                    <p>{createTimeText(createtime)}</p>
                </div>
            </div>

            <LikeAndDislike favoriteId={favoriteId} onClickFavorite={onFavorite} announcementId={id} isFavorite={favorite ? true : false} />
        </div>
    )
}
