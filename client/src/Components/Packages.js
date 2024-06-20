import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Css/Packages.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Loader from "./Loader";
import Footer from "./Footer";
import { BsTriangle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Packages = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                  <h2>2 to 5 sessions per week</h2>
                  <h2>2 Islamic Studies session per month</h2>
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
                  <h2>2 to 5 sessions per week</h2>
                  <h2>2 Islamic Studies session per month</h2>
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
                      <span className="text-btn">Learn more</span>
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
                  <h2>4 sessions per month</h2>
                  <h2>45 Mins sessions</h2>
                  <h2>20 Sessions over 6 months will cover :</h2>
                  <ul>
                    <li>Aqeeda</li>
                    <li>Hadith</li>
                    <li>Seerah</li>
                    <li>Fiqh</li>
                    <li>Akhlaaq</li>
                    <li>& Many more topics</li>
                  </ul>
                  <h2>Highly qualified scholars </h2>
                </div>
              )}
            </div>
          </div>
          <div className="three-steps">
            <div className="first-step steps">
              <div className="trianglee1">
                <BsTriangle size={12} />
              </div>
              <div className="squaree"></div>
              <div className="pluss">
                <FiPlus size={14} />
              </div>
              <div className="circlee-1"></div>
              <div className="circle-steps1"></div>
              <h2>Enrol</h2>
              <p>
                Register on our website with all your details and select a
                package that suits you.
              </p>
              <div className="arrow dotted"></div>
            </div>

            <div className="second-step steps">
              <div className="trianglee1">
                <BsTriangle size={12} />
              </div>
              <div className="squaree"></div>
              <div className="pluss">
                <FiPlus size={14} />
              </div>
              <div className="circlee-1"></div>
              <div className="circle-steps2"></div>
              <h2>Free Trial</h2>
              <p>
                We will arrange the assessment and trial session with you to
                determine your level of learning and confirm the timing of your
                lessons
              </p>
              <div className="arrow dotted"></div>
            </div>

            <div className="third-step steps">
              <div className="trianglee1">
                <BsTriangle size={12} />
              </div>
              <div className="squaree"></div>
              <div className="pluss">
                <FiPlus size={14} />
              </div>
              <div className="circlee-1"></div>
              <div className="circle-steps3"></div>
              <h2>Tutor Allocated</h2>
              <p>
                Within 48 Hours you will be allocated a tutor and you will
                recieve the profile of the tutor and the link to their online
                class via email.
              </p>
            </div>
            {/* <div className="arrow1"></div> */}
            {/* <div className="circle-steps2"></div> */}
            {/* <div className="arrow2"></div> */}
            {/* <div className="circle-steps3"></div> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Packages;
