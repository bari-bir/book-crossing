import { useState } from "react"
import { BookCard } from "../components/BookCard"
import { Header } from "../components/Header"
import "../assets/styles/pages/favorite.scss";

export const Favorite = () => {
    const [dataList] = useState([{
        title: "Кемел адам",
        category: "Саморазвитие",
        description: "Кемел адам",
        year: 2020,
        url: "https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg",
        isFavorite: true,
    }])

    return (
        <div className="favorite container">
            <Header title="Favorite"/>

            <div className="book-list">
                <BookCard {...dataList[0]} />
                <BookCard {...dataList[0]} />
                <BookCard {...dataList[0]} />
                <BookCard {...dataList[0]} />
                <BookCard {...dataList[0]} />
            </div>
        </div>
    )
}