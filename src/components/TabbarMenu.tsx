import { BookOutlined, HeartOutlined, HomeOutlined, MessageOutlined, PlusCircleOutlined } from "@ant-design/icons"
import "../assets/styles/components/tabbarMenu.scss";

export const TabbarMenu = () => {
    return (
        <div className="tabbar container">
            <HomeOutlined className="menu-icon active" />
            <HeartOutlined className="menu-icon" />
            <PlusCircleOutlined className="menu-icon" />
            <MessageOutlined className="menu-icon" />
            <BookOutlined className="menu-icon" />
        </div>
    )
}