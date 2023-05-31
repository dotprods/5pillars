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
          <li>Packages</li>
        </Link>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <li>About Us</li>
        </Link>
        <Link to="/tutors" style={{ textDecoration: "none" }}>
          <li>Tutors</li>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <li>Projects</li>
        </Link>
        <Link to="/contactUs" style={{ textDecoration: "none" }}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={handleMobileMenu}>
        {mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
