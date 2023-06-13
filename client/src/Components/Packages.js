import React, { useState } from "react";
import Navbar from "./Navbar";
import "../Css/Packages.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";

const Packages = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };
  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
  };

  return (
    <>
      <div className="background" />

      <div className="">
        <Navbar />
      </div>
      <div className="blank"></div>
      <h1 className="package-heading">Packages</h1>

      <div className="packages">
        <div className="package">
          <div className="package-def">
            <h3>QURAN RECITATION/QAIDA</h3>
            <h1>
              £6/<span>Session</span>
            </h1>
            <p>Billed monthly</p>
            <div className="package-button">
              <Link to="/qaida" style={{ textDecoration: "none" }}>
                <button className="btn-learnmore">
                  <span className="cir-btn">
                    <span className="arrow-btn"></span>
                  </span>
                  <span className="text-btn">Learn more</span>
                </button>
              </Link>
            </div>
            <h2 className="dropdown-btn" onClick={toggleDropdown}>
              {isDropdownVisible ? (
                <IoIosArrowUp size={40} />
              ) : (
                <IoIosArrowDown size={40} />
              )}
            </h2>
          </div>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <h2>Free Trial Session</h2>
              <h2>Two to three sessions per week</h2>
              <h2>Two Islamic Studies session per month</h2>
              <h2>Bi-Weekly Feedback</h2>
              <h2>One to One Live sessions</h2>
              <h2>45 Mins per session</h2>
              <h2>Weekly Progress report</h2>
            </div>
          )}
        </div>
        <div className="package">
          <div className="package-def">
            <h3>HIFDH</h3>
            <h1>
              £7/<span>Session</span>
            </h1>
            <p>Billed monthly</p>
            <div className="package-button">
              <Link to="/hifdh" style={{ textDecoration: "none" }}>
                <button className="btn-learnmore">
                  <span className="cir-btn">
                    <span className="arrow-btn"></span>
                  </span>
                  <span className="text-btn">Learn more</span>
                </button>
              </Link>
            </div>
            <h2 className="dropdown-btn" onClick={toggleDropdown1}>
              {isDropdownVisible1 ? (
                <IoIosArrowUp size={40} />
              ) : (
                <IoIosArrowDown size={40} />
              )}
            </h2>
          </div>
          {isDropdownVisible1 && (
            <div className="dropdown-content">
              <h2>Free Trial Session</h2>
              <h2>Two to three sessions per week</h2>
              <h2>Two Islamic Studies session per month</h2>
              <h2>Bi-Weekly Feedback</h2>
              <h2>One to One Live sessions</h2>
              <h2>45 Mins per session</h2>
              <h2>Weekly Progress report</h2>
            </div>
          )}
        </div>
        <div className="package">
          <div className="package-def">
            <h3>ISLAMIC STUDIES</h3>
            <h1>
              £5/<span>Session</span>
            </h1>
            <p>Billed monthly</p>
            <div className="package-button">
              <Link to="/islamicStudies" style={{ textDecoration: "none" }}>
                <button className="btn-learnmore">
                  <span className="cir-btn">
                    <span className="arrow-btn"></span>
                  </span>
                  <span className="text-btn">Coming Soon</span>
                </button>
              </Link>
            </div>

            <h2 className="dropdown-btn" onClick={toggleDropdown2}>
              {isDropdownVisible2 ? (
                <IoIosArrowUp size={40} />
              ) : (
                <IoIosArrowDown size={40} />
              )}
            </h2>
          </div>
          {isDropdownVisible2 && (
            <div className="dropdown-content">
              <h2>Two sessions per month</h2>
              <h2>45 Mins sessions</h2>
              <h2> Set syllabus</h2>
              <h2>Highly qualified sholars from the UK</h2>

              <h3>Coming Soon June 2023</h3>
            </div>
          )}
        </div>
      </div>
      <div className="three-steps">
        <div className="circle-steps1"></div>
        <div className="arrow1"></div>
        <div className="circle-steps2"></div>
        <div className="arrow2"></div>
        <div className="circle-steps3"></div>
      </div>

      <Footer />
    </>
  );
};

export default Packages;
