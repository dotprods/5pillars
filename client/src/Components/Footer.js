import React, { Component } from "react";
import "../Css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-head">
          <div className="first-head">
            <p>5 Pillars Academy</p>
            <div className="lnk">
              <a href="https://instagram.com/5pillars.academy?igshid=NTc4MTIwNjQ2YQ==">
                <FaInstagram size={25} />
              </a>
              <p>Insta: 5pillars.Academy</p>
            </div>

            <div className="lnk">
              <a href="https://www.facebook.com/profile.php?id=100090319573405&mibextid=ZbWKwL">
                <FaFacebook size={25} />
              </a>
              <p>Facebook: 5pillars.Academy</p>
            </div>

            <div className="lnk">
              <a href="https://youtube.com/@5pillars.Academy">
                <FaYoutube size={25} />
              </a>
              <p> Youtube: 5pillars.Academy</p>
            </div>
          </div>
          <div className="second-head">
            <p>Contact Info</p>
            <div className="lnk">
              <a>
                <FaHome size={25} />
              </a>
              <p>20-22 Wenlock Road , London N1 7GU</p>
            </div>

            <div className="lnk">
              <a href="https://wa.me/447756393994">
                <FaPhone size={25} />
              </a>
              <p> +44 7756393994</p>
            </div>

            <div className="lnk">
              <a href="mailto:example@mail.com">
                <SiGmail size={25} />
              </a>
              <p> info@5pillarsacademy.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h4>© 2023 5 Pillars Academy All Rights Reserved</h4>
        </div>
      </footer>
    </>
  );
};
export default Footer;
