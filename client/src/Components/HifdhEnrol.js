import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/HifdhEnrol.css";
import { MdStars } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const HifdhEnrol = () => {
  const [session2Opacity, setSession2Opacity] = useState(1);
  const [session1Opacity, setSession1Opacity] = useState(1);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [fee, setFee] = useState();
  const [isSession1, setSession1] = useState(false);
  const [isSession2, setSession2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };

  const session1 = () => {
    if (isSession2) {
      setSession2(false);
      setSession1Opacity(1);
    }
    setSession1(!isSession1);
    setSession2Opacity(isSession1 ? 1 : 0.3);
  };

  const session2 = () => {
    if (isSession1) {
      setSession1(false);
      setSession2Opacity(1);
    }
    setSession2(!isSession2);
    setSession1Opacity(isSession2 ? 1 : 0.3);
  };

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>

      <div className="hifdh-packages">
        <div className="selected-surah-package">
          <div className="selected-surah-package-def">
            <h3>SELECTED SURAHS HIFDH</h3>
            <h1>
              £7/<span>Session</span>
            </h1>
            <p>£64 Billed Monthly (2 sessions P/W)</p>
            <div className="selected-surah-package-button">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="btn-enroll">Enrol Now</button>
              </Link>
            </div>
            <h2 className="dropdown-btn" onClick={toggleDropdown}>
              {isDropdownVisible ? (
                <IoIosArrowUp size={35} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </h2>
          </div>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <h2> Two sessions per week</h2>
              <h2>Perfect for adults</h2>
              <h2>Selected surahs for memorisation</h2>
              <h2> Reading</h2>
              <h2> Thajweed</h2>
              <h2> Bi-Weekly Feedback</h2>
              <h2>One to One Live sessions</h2>
              <h2>45 Mins per session</h2>
              <h2> Weekly Progress report</h2>
              <h2> Highly qualified tutors with Ijaza</h2>
            </div>
          )}
        </div>
        <div className="hifdh-package">
          <div className="hifdh-package-def  ">
            <h3>HIFDH</h3>

            <div className="hifdh-package-buttons">
              <div
                className="session1-btn"
                id="sess1"
                onClick={session1}
                style={{ opacity: session1Opacity }}
              >
                <h2> Session1 </h2>
                <h1>
                  £8/<span>Session</span>
                </h1>
                <p>£64 Billed Monthly (2 sessions P/W)</p>
              </div>
              <div
                className="session2-btn"
                id="sess2"
                onClick={session2}
                style={{ opacity: session2Opacity }}
              >
                <div className="star">
                  <h2> Session2</h2>
                  <MdStars size={25} />
                </div>

                <h1>
                  £7/<span>Session</span>
                </h1>
                <p>£84 Billed Monthly (3 sessions P/W)</p>
              </div>
            </div>

            <div className="selected-surah-package-button hifdh-button">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="btn-enroll">Enrol Now</button>
              </Link>
            </div>
            {isSession2 && <h1 className="save">SAVE £ 144 ANNUALLY</h1>}
          </div>
          {isSession1 && (
            <div className="dropdown-content">
              <h2>Free Trial Session</h2>
              <h2>Two sessions per week</h2>
              <h2>Reading</h2>
              <h2>Thajweed</h2>
              <h2>Two Islamic Studies session per month</h2>
              <h2>Bi-Weekly Feedback</h2>
              <h2>One to One Live sessions</h2>
              <h2>45 Mins per session</h2>
              <h2>Weekly Progress report</h2>
              <h2> Highly qualified tutors with Ijaza</h2>
            </div>
          )}
          {isSession2 && (
            <div className="dropdown-content">
              <h2>Free Trial Session</h2>
              <h2>Three sessions per week</h2>
              <h2>Reading</h2>
              <h2>Thajweed</h2>
              <h2>Two Islamic Studies session per month</h2>
              <h2>Bi-Weekly Feedback</h2>
              <h2>One to One Live sessions</h2>
              <h2>45 Mins per session</h2>
              <h2>Weekly Progress report</h2>
              <h2> Highly qualified tutors with Ijaza</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HifdhEnrol;
