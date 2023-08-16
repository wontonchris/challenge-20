import React from "react";

function Navbar() {
    return(
        <nav className="navbar-central">
            <a className="navbar-buttons" href="/">Home</a>
            <a className="navbar-buttons" href="/aboutme">About Me</a>
            <a className="navbar-buttons" href="/portfolio">Portfolio</a>
            <a className="navbar-buttons" href="/contact">Contact</a>
            <a className="navbar-buttons" href="/work">Work</a>
        </nav>
    )
}

export default Navbar;