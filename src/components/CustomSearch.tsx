import { ConfigProvider, Input } from "antd"
import { useState } from "react"
import "../assets/styles/components/search.scss";

const { Search } = Input

export const CustomSearch = () => {
    const [search, setSearch] = useState<string>("")

    return (
        <div className="search">
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            ...styles.searchInput,
                        },
                    },
                }}>
                <Search placeholder="Поиск в Алматы " allowClear value={search} onChange={(e) => setSearch(e.target.value)} />
            </ConfigProvider>
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
    },
}
