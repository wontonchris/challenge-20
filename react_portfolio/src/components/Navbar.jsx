import React from "react";

function Navbar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item button is-info" href="/">
            Home
          </a>
          <a className="navbar-item button is-info" href="/aboutme">
            About Me
          </a>
          <a className="navbar-item button is-info" href="/portfolio">
            Portfolio
          </a>
          <a className="navbar-item button is-info" href="/contact">
            Contact
          </a>
          <a className="navbar-item button is-info" href="/work">
            Work
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
