import { ConfigProvider, Input } from "antd"
import { useState } from "react"
import "../assets/styles/components/search.scss"
import { SearchOutlined } from "@ant-design/icons"

type propsInfo = {
    placeholder?: string
    onSearch: (value: string, isPressEnter?: boolean) => void
}

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
                <Input
                    placeholder={placeholder}
                    allowClear
                    value={search}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    onPressEnter={() => onSearch(search, true)}
                    addonBefore={<SearchOutlined className="search-icon after" />}
                />
            </ConfigProvider>
        </div>
    )
}

const styles = {
    searchInput: {
        colorBgContainer: "#fff",
        activeBorderColor: "transparent",
        addonBg: "#fff",
        paddingBlock: 9,
        paddingInline: 10,
        hoverBorderColor: "transparent",
        activeShadow: "box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.03), 0px 0px 2px 0px rgba(0, 0, 0, 0.06);",
    },
}
