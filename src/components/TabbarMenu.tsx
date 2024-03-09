import {
  BookOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "../assets/styles/components/tabbarMenu.scss";
import { NavLink } from "react-router-dom";

export const TabbarMenu = () => {
  return (
    <div className="tabbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <HomeOutlined className="menu-icon" />
      </NavLink>
      <NavLink
        to="/favorute"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <HeartOutlined className="menu-icon" />
      </NavLink>
      <PlusCircleOutlined className="menu-icon" />
      <MessageOutlined className="menu-icon" />
      <BookOutlined className="menu-icon" />
    </div>
  );
};
