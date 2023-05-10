import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import logo from "../../assets/images/mainlogoo.png";
import "./header.css";
interface HeaderProps {
  handleToggleSidebar(data?: boolean): any;
}
const Header = ({ handleToggleSidebar }: HeaderProps) => {
  return (
    <div className=" header">
      <img src={logo} alt="" className="header__logo" onClick={() => handleToggleSidebar()} />
      {/* <button className="header__menu" size={26} onClick={() => handleToggleSidebar()} ></button */}
      {/* <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form> */}
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="assets/images/logo512.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
