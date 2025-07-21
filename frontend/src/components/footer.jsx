import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaDiscord, FaInfoCircle, FaSun, FaMoon } from "react-icons/fa";
import { SiX } from "react-icons/si";
import './footer.css';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };



  return (
    <div className='footer'>
      <div className="footer-links">
        <a href="/about" target="_blank"><FaInfoCircle /></a>
        <a href="https://github.com/mohd-javed7/TypingApp" target="_blank" ><FaGithub /></a>
        <a href="https://discordapp.com/users/628280143760326688" target="_blank"><FaDiscord /></a>
        <a href="https://x.com/Javed35984979" target="_blank"><SiX /></a>
      </div>
      <div className="theme">
        <button
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleTheme}
          className={darkMode ? "dark-mode" : ""}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default Footer;
