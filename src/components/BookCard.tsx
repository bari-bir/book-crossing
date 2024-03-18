import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import "../assets/styles/components/bookCard.scss"

interface IBook {
    title: string
    category: string | null
    description: string
    year: number
    images: string[]
    isFavorite?: boolean
}

export const BookCard = ({ title, category, year, images, isFavorite }: IBook) => {
    return (
        <div className="book">
            {images && (
                <div className="image">
                    <img src={images[0]} alt="book" />
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

            <div className="favorite">{isFavorite ? <HeartFilled className="icon active" /> : <HeartOutlined className="icon" />}</div>
        </div>
    )
}
