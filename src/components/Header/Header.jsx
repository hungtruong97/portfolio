import React from "react";
import "../../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span>TQH</span>
      </div>
      <nav className="buttons">
        <a className="button" href="#work">
          Work
        </a>

        <a className="button" href="#about">
          About
        </a>

        <a className="button" href="#contact">
          Hello
        </a>
      </nav>
    </div>
  );
}

export default Header;
