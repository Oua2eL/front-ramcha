import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./LOGO.png" alt="logo" />
      </div>

      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link" onClick={closeMenu}>
          Accueil
        </Link>
        <Link to="/Apropos" className="link" onClick={closeMenu}>
          A-Propos
        </Link>
        <Link to="/services" className="link" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/contact" className="link" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      <div className="buttons">
        <button className="button">
          <Link to="/sincrire">S'inscrire</Link>
        </button>
        <button className="button">
          <Link to="/connecte">Se Connecter</Link>
        </button>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
