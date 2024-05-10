import { BookOutlined, HeartOutlined, MessageOutlined, PlusOutlined, ReadOutlined } from "@ant-design/icons"
import "../assets/styles/components/tabbarMenu.scss"
import { NavLink, useLocation } from "react-router-dom"

export const TabbarMenu = () => {
    const location = useLocation()
    const routeIndexInfo: { [key: string]: number } = {
        "/": 0,
        "/favorite": 1,
        "/create-announcement/add": 2,
        "/message": 3,
        "/request-annoucement": 4,
    }

    const getTransform = (index: number) => {
        return 8 + index - 1 + (index * window.screen.width) / 5
    }

    return (
        <div className="tabbar" style={{ display: location.pathname.indexOf("book") === -1 ? "flex" : "none" }}>
            <div className="tabbar-animation" style={{ transform: `translateX(${getTransform(routeIndexInfo[location.pathname])}px)` }}></div>
            <NavLink to="/" className={({ isActive }) => (isActive || location.pathname.indexOf("book-exchange") !== -1 ? "active-link" : "")}>
                <div className="tabbar-block">
                    <ReadOutlined className="menu-icon" />
                    <p className="tabbar-text">Books</p>
                </div>
            </NavLink>
            <NavLink to="/favorite" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <HeartOutlined className="menu-icon" />
                    <p className="tabbar-text">Likes</p>
                </div>
            </NavLink>
            <NavLink to="/create-announcement/add" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="tabbar-block">
                    <PlusOutlined className="menu-icon" />
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
                    <p className="tabbar-text">Request</p>
                </div>
            </NavLink>
        </div>
    )
}
