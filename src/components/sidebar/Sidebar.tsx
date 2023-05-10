import "./_sidebar.css";
import React from "react";
import { useNavigate } from "react-router";
import { sidebarObject } from "../../Utils/staticObj";

interface SidebarPropsType {
  sidebar: boolean;
  handleToggleSidebar(data: boolean): any;
}
interface sidebarManuType {
  path: string;
  name: String;
  slug: string;
}
const Sidebar = ({ sidebar, handleToggleSidebar }: SidebarPropsType) => {

  const navigate = useNavigate();
  const onClickFunc = (menu: sidebarManuType) => {
    switch (menu?.slug) {
      case "logout":
        // alert("logout");
        localStorage.clear();
        return navigate(`/`);
      // return () => {
      // };
      default:
        return navigate(menu?.path);
    }
  };
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSidebar(false)}>
      {sidebarObject.map((menu: any) => (
        <>
          <>
            {menu.slug === "logout" && <hr />}
            <li onClick={() => onClickFunc(menu)}>
              <span style={{ color: "white" }}>{menu.name}</span>
            </li>
            {menu.slug === "logout" && <hr />}
          </>
        </>
      ))}
    </nav>
  );
};

export default Sidebar;
