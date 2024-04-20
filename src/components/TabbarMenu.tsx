import { BookOutlined, HeartOutlined, MessageOutlined, PlusOutlined, ReadOutlined } from "@ant-design/icons"
import "../assets/styles/components/tabbarMenu.scss"
import { NavLink, useLocation } from "react-router-dom"
import { useRef } from "react"

export const TabbarMenu = () => {
    const location = useLocation()
    const transformAnimation = useRef<number>(8)

    const onChangeNavLink = (index: number) => {
        transformAnimation.current = 8 + index - 1 + (index * window.screen.width) / 5
    }

    return (
        <div className="tabbar">
            <div className="tabbar-animation" style={{ transform: `translateX(${transformAnimation.current}px)` }}></div>
            <NavLink
                to="/"
                onClick={() => onChangeNavLink(0)}
                className={({ isActive }) => (isActive || location.pathname.indexOf("book-exchange") !== -1 ? "active-link" : "")}>
                <div className="tabbar-block">
                    <ReadOutlined className="menu-icon" />
                    <p className="tabbar-text">Books</p>
                </div>
            </NavLink>
            <NavLink to="/favorite" onClick={() => onChangeNavLink(1)} className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <HeartOutlined className="menu-icon" />
                    <p className="tabbar-text">Likes</p>
                </div>
            </NavLink>
            <NavLink to="/create-announcement/add" onClick={() => onChangeNavLink(2)} className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <PlusOutlined className="menu-icon" />
                    <p className="tabbar-text">Create</p>
                </div>
            </NavLink>
            <NavLink to="/message" onClick={() => onChangeNavLink(3)} className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <MessageOutlined className="menu-icon" />
                    <p className="tabbar-text">Messages</p>
                </div>
            </NavLink>
            <NavLink to="/request-annoucement" onClick={() => onChangeNavLink(4)} className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <BookOutlined className="menu-icon" />
                    <p className="tabbar-text">Reques</p>
                </div>
            </NavLink>
        </div>
    )
}
