import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Layout.css";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); /* sidebar hidden initially */
  const location = useLocation();
  const username = localStorage.getItem("USERNAME");

  const titles = {
    "/": "Dashboard",
  };

  const currentTitle =
    location.pathname.startsWith("/profile") && username
      ? username
      : titles[location.pathname] || "EzGit";

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <button className="menu-button" onClick={() => setIsSidebarOpen(true)}>
          ☰
        </button>
        <h1>{currentTitle}</h1>
      </div>

      {/* Side Bar */}
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
