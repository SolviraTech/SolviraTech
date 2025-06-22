// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="logo">Solvira Tech</div>
      <ul className={isMobileMenuOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={isMobileMenuOpen ? 'line toggle' : 'line'}></div>
        <div className={isMobileMenuOpen ? 'line toggle' : 'line'}></div>
        <div className={isMobileMenuOpen ? 'line toggle' : 'line'}></div>
      </div>
    </nav>
  );
};

export default Navbar;
