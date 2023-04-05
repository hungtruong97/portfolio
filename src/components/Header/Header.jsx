import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
