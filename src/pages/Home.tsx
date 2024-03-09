import {ConfigProvider, Input} from "antd";
import {useState} from "react";
import "../assets/styles/pages/home.scss";
import { BookCard } from "../components/BookCard";

const { Search } = Input;
export const Home = () => {
    const [search, setSearch] = useState<string>("")
    const [dataList] = useState([{
        title: "Кемел адам",
        category: "Саморазвитие",
        description: "Кемел адам",
        year: 2020,
        url: "https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg"
    }])

    return (
        <div className="home container">
            <ConfigProvider theme={{
                components: {
                    Input: {
                       ...styles.searchInput
                    }
                }
            }}>
                <Search  placeholder="Поиск в Алматы "  allowClear value={search} onChange={(e) => setSearch(e.target.value)}/>
            </ConfigProvider>
            
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


const styles = {
    searchInput: {
        colorBgContainer: "#D9D9D9",
        activeBorderColor: "#00000066",
        addonBg: "#D9D9D9",
        paddingBlock: 11,
        hoverBorderColor: "transparent",
        activeShadow: "transparent",
    }
}