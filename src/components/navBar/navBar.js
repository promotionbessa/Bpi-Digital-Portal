import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#explication">Explication</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
