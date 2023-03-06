import React, { useState, useEffect } from "react";
import "./Nav.css";
import CV from "../CV-2023.pdf";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setIsNavExpanded(false);
    });
  }, []);

  const handleClick = (e) => {
    setIsNavExpanded(!isNavExpanded);
    // This line is needed. It prevents the event bubbling up and calling the document
    e.stopPropagation();
  };

  return (
    <ul className="nav" id="navvy">
      <div className="divvy divvy1">
        <li className="nav-item">
          <a href="#top">
            <img
              src="https://live.staticflickr.com/65535/52723820650_1de1ddef18_o.jpg"
              alt="EYE"
              className="eye"
            />
          </a>
        </li>
      </div>

      <button className="hamburger" onClick={handleClick}>
        <i className="bi bi-list"></i>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <div className="divvy divvy2">
          <li className="nav-item">
            <a className="nav-link nav-links" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-links" href="#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-links" href="#contact">
              Contact
            </a>
          </li>
        </div>
        <div className="divvy divvy3">
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://github.com/anthonyradose"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://www.instagram.com/asradose/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href="https://www.linkedin.com/in/anthony-radose-35a969236/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-links nav-icons"
              href={CV}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-file-person"></i>
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};

export default Nav;
