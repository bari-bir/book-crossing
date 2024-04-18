import { BookOutlined, HeartOutlined, MessageOutlined, PlusCircleOutlined, ReadOutlined } from "@ant-design/icons"
import "../assets/styles/components/tabbarMenu.scss"
import { NavLink, useLocation } from "react-router-dom"

export const TabbarMenu = () => {
    const location = useLocation()
    return (
        <div className="tabbar">
            <div className="tabbar-animation"></div>
            <NavLink to="/" className={({ isActive }) => (isActive || location.pathname.indexOf("book-exchange") !== -1 ? "active-link" : "")}>
                <div className="tabbar-block">
                    <ReadOutlined className="menu-icon" />
                    <p className="tabbar-text">Books</p>
                </div>
            </NavLink>
            <NavLink to="/favorute" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <HeartOutlined className="menu-icon" />
                    <p className="tabbar-text">Likes</p>
                </div>
            </NavLink>
            <NavLink to="/create-announcement/add" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <PlusCircleOutlined className="menu-icon" />
                    <p className="tabbar-text">Create</p>
                </div>
            </NavLink>
            <NavLink to="/message" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <MessageOutlined className="menu-icon" />
                    <p className="tabbar-text">Messages</p>
                </div>
            </NavLink>
            <NavLink to="/request-annoucement" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <BookOutlined className="menu-icon" />
                    <p className="tabbar-text">Reques</p>
                </div>
            </NavLink>
        </div>
    )
}
