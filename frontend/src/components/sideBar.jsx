import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";

const Sidebar = () => {

  const { isLoggedIn, logout } = useAuth();

  return (

    <div className="left-box-wrapper">
      <div className="left-box">
        <aside className="sidebar">
          <h2 className="sidebar-title">Typing Test</h2>
          <nav className="sidebar-nav">
            <Link to="/top-200-words">Top 200 words</Link>
            <Link to="/advance-type">Typing Test (Advanced)</Link>
            <Link to="/custom-words">Custom Typing Test</Link>
            <Link to="/normal-mode">Normal Mode</Link>
            <Link to="/hall-of-fame">Hall of Fame</Link>
            <Link to="/top-typers">Top Typers</Link>
            {!isLoggedIn ? (
              <Link to="/login">Login</Link>
            ) : (
              <span className="sideBar-span-logout" onClick={logout}>
                Logout
              </span>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
