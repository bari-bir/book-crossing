import { ConfigProvider, Input } from "antd"
import { useState } from "react"
import "../assets/styles/components/search.scss"

type propsInfo = {
    placeholder?: string
    onSearch: (value: string, isPressEnter?: boolean) => void
}

const { Search } = Input

export const CustomSearch = ({ placeholder = "Поиск в Алматы", onSearch }: propsInfo) => {
    const [search, setSearch] = useState<string>("")

    const onChangeSearch = (value: string) => {
        onSearch(value)
        setSearch(value)
    }

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
                <Search
                    placeholder={placeholder}
                    allowClear
                    value={search}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    onPressEnter={() => onSearch(search, true)}
                />
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
