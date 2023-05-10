import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
// import Sidebar from "../../components/theme/sidebar/Sidebar";
// import Header from "../../components/theme/header/Header";

const AuthOutlate = () => {
  const navigate = useNavigate();

  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  // if (!localStorage.getItem("token")) return navigate("/");
  return (
    <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <div className="container-fluid app__main bg-chalchitram">{localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" replace />}</div>
      </div>
    </div>
  );
};

export default AuthOutlate;
