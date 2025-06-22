import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
           <img src="./public/logo192.png" alt="Solvira Tech Logo" style={{ height: '40px' }} />
        </div>
        <span className="company-name">Solvira Tech</span>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => isMobile && setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => isMobile && setIsOpen(false)}>Services</a>
        <a href="#about" onClick={() => isMobile && setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => isMobile && setIsOpen(false)}>Contact</a>
      </div>

      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  );
};

export default Navbar;