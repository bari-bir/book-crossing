import { useState } from "react"
import "../assets/styles/pages/home.scss"
import { BookCard } from "../components/BookCard"
import { CustomSearch } from "../components/CustomSearch"

export const Home = () => {
    const [dataList] = useState([
        {
            title: "Кемел адам",
            category: "Саморазвитие",
            description: "Кемел адам",
            year: 2020,
            url: "https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg",
        },
    ])

    return (
        <div className="home container">
            <CustomSearch />

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
