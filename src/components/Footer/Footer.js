import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer-text">
          <h6>RAMCHA EST LA SOLUTION</h6>
          <br />
          <h4>Demander Plus D'informations</h4>
          <br />
          <h5>
            L'application RAMCHA est une entreprise de logistique qui développe
            une solution unique.
          </h5>
        </div>
        <br />
        <div className="btns">
          <button className="footer-btn"  onClick={scrollToTop}>
            <Link to="/Contact">Contactez-nous</Link>
          </button>
          <div className="footer-login">
            <button className="footer-btn"  onClick={scrollToTop}>
              <Link to="/sincrire">S'inscrire</Link>
            </button>
            <button className="footer-btn"  onClick={scrollToTop}>
              <Link to="/connecte">Se connecter</Link>
            </button>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-logo">
            <img className="f-logo" src="./Footer-logo.svg" alt="logo" />
          </div>
          <div className="f-links">
            <Link to="/" className="f-link"  onClick={scrollToTop}>
              Accueil
            </Link>
            <Link to="/Apropos" className="f-link"  onClick={scrollToTop}>
              A'Propos
            </Link>
            <Link to="/services" className="f-link"  onClick={scrollToTop}>
              Services
            </Link>
            <Link to="/confidentialité" className="f-link"  onClick={scrollToTop}>
              confidentialité
            </Link>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ramcha-app-641028284/"
              target="_blank"
            >
              <BiLogoLinkedin className="f-icon" />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100095040094978"
              target="_blank"
            >
              <BiLogoFacebook className="f-icon" />
            </a>
            <a href="https://www.instagram.com/ramchaapp/" target="_blank">
              <AiOutlineInstagram className="f-icon" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
