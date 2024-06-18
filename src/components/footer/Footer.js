import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Pothanna Pullolla UI Developer</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li> 
          <li>
            <a href="#skills" className="footer_link">
             Skills
            </a>
          </li> 
          <li>
            <a href="#qualification" className="footer_link">
             Qualifications & Experince
            </a>
          </li>
          <li>
            <a href="#testmonial" className="footer_link">
              Testmonials
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.facebook.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Pothanna Pullolla. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
