import { BookOutlined, HeartOutlined, HomeOutlined, MessageOutlined, PlusCircleOutlined } from "@ant-design/icons"
import "../assets/styles/components/tabbarMenu.scss"
import { NavLink } from "react-router-dom"

export const TabbarMenu = () => {
    return (
        <div className="tabbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <HomeOutlined className="menu-icon" />
            </NavLink>
            <NavLink to="/favorute" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <HeartOutlined className="menu-icon" />
            </NavLink>
            <NavLink to="/create-annoucement" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <PlusCircleOutlined className="menu-icon" />
            </NavLink>
            <NavLink to="/message" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <MessageOutlined className="menu-icon" />
            </NavLink>
            <NavLink to="/request-annoucement" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <BookOutlined className="menu-icon" />
            </NavLink>
        </div>
    )
}
