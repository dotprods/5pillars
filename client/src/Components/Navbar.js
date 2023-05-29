import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo-5.png";
import "../Css/Navbar.css";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 0.4 * window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobile(false);
  }, [location]);

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
      <img className="logo" src={logo} alt="Logo" />
      {/* <h1>Logo</h1> */}
      <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/packages" style={{ textDecoration: "none" }}>
          <li>Package</li>
        </Link>
        <Link to="/aboutUs" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <li>Register</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={handleMobileMenu}>
        {mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
