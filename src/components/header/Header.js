import React, { useState } from "react";
import logo_pothanna from "../../assets/lo.png"

import "./header.css";

const Header = () => {
  //header background change
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  // toggle menu
  const [toggle, showmenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home"); 

  //console.log(activeNav,"act")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          <img src={logo_pothanna} className="logo-pothanna"/>
        </a>
        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list">
            <li className="nav_item grid" >
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav_icon"></i>Skils
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav_link active-link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#services")}
              >
                <i className="uil uil-briefcase nav_icon"></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav_link active-link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav_icon"></i>Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showmenu(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showmenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
