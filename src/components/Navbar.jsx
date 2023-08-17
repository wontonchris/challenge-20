import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="tabs is-small">
        <ul>
          <li className="is-active"><Link to="home" smooth={true}>Home</Link></li>
          <li><Link to="about" smooth={true}>About Me</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
          <li><Link to="work" smooth={true}>Work</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
