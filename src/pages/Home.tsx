import {Input} from "antd";
import {useState} from "react";


const { Search } = Input;
export const Home = () => {
    const [search, setSearch] = useState<string>("")

    return (
        <div>
            <Search placeholder="Поиск в Алматы " allowClear value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

