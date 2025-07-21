import React, { useState, useContext } from "react";
import logo0 from '../assets/logo2.png';
import { Link } from "react-router-dom";
import "./navBar.css";
import { AuthContext } from "../authContext";
import { useAuth } from "../authContext";



const Navbar = () => {

  const { isLoggedIn, username } = useContext(AuthContext);
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo"> <Link to="/">
          <img src={logo0} alt="Typer" />
        </Link></div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/normal-mode">Typing Test</Link>
          <Link to="/hall-of-fame" title="Hall of Fame">HOF</Link>
          {!isLoggedIn ?(<Link to="/login">Login</Link>):(<Link to="/">{username}</Link>)}
          {isOpen && isLoggedIn ? <span className="sideBar-span-logout" onClick={logout}>
                Logout
              </span>: ''}
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default Navbar;
