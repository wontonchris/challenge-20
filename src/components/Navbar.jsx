import React from "react";

function Navbar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      {<div class="tabs is-small">
  <ul>
    <li class="is-active"><a>Home</a></li>
    <li><a>About Me</a></li>
    <li><a>Portfolio</a></li>
    <li><a>Contact</a></li>
    <li><a>Work</a></li>
  </ul>
</div>/* <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item " href="/">
            Home
          </a>
          <a className="navbar-item " href="/aboutme">
            About Me
          </a>
          <a className="navbar-item " href="/portfolio">
            Portfolio
          </a>
          <a className="navbar-item " href="/contact">
            Contact
          </a>
          <a className="navbar-item " href="/work">
            Work
          </a>
        </div> */}
      
    </nav>
  );
}

export default Navbar;
