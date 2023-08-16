import React from "react";

function Navbar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/aboutme">
            About Me
          </a>
          <a className="navbar-item" href="/portfolio">
            Portfolio
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
          <a className="navbar-item" href="/work">
            Work
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
