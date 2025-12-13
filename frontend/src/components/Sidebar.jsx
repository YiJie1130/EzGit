import { NavLink, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();
  const username = localStorage.getItem("USERNAME");

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    navigate("/login");
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={closeSidebar}>
        ✖
      </button>

      <NavLink to="/" className="sidebar-link" onClick={closeSidebar}>
        Home
      </NavLink>

      <NavLink
        to={`/profile/${username}`}
        className="sidebar-link"
        onClick={closeSidebar}
      >
        Profile
      </NavLink>

      <button onClick={handleLogout} className="sign-out">
        Sign out
      </button>
    </div>
  );
}

export default Sidebar;
