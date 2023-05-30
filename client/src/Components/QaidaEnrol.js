import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/QidaEnrol.css";

const QaidaEnrol = () => {
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
    if (isSession2 === true) {
      setSession2(!isSession2);
    }
    setSession1(!isSession1);
  };
  const session2 = () => {
    if (isSession1 === true) {
      setSession1(!isSession1);
    }
    setSession2(!isSession2);
  };

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>

      <div className="qaida-packages">
        <div className="qaida-package">
          <div className="qaida-package-def">
            <h3>QAIDA</h3>
            <h1>
              £6/<span>Session</span>
            </h1>
            <p>£48 Billed Monthly (2 sessions P/W)</p>
            <div className="qaida-package-button">
              <button className="btn-enroll">Enrol Now</button>
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
              <h2>Free Trial Session</h2>
              <h2>Two sessions per week</h2>
              <h2>One to One Live sessions</h2>
              <h2> 30 Mins per session</h2>
              <h2>Weekly Progress report</h2>
              <h2>Highly qualified tutors with Ijaza</h2>
            </div>
          )}
        </div>
        <div className="quran-package">
          <div className="quran-package-def  ">
            <h3>Quran Recitation</h3>
            {isSession1 && (
              <>
                <h1 style={{ margin: "0 " }}>
                  £8/<span>Session</span>
                </h1>
                <p>£84 Billed Monthly (3 sessions P/W))</p>
              </>
            )}
            {isSession2 && (
              <>
                <h1 style={{ margin: "0 " }}>
                  £7/<span>Session</span>
                </h1>
                <p>£64 Billed Monthly (2 sessions P/W)</p>
              </>
            )}

            <div className="quran-package-buttons">
              <button className="btn-enrol" onClick={session1}>
                Session1 <span>£8</span>
              </button>
            </div>
            <div className="quran-package-buttons" onClick={session2}>
              <button className="btn-enrol">
                Session2 <span>£7</span>
              </button>
            </div>

            {/* <h2 className="dropdown-btn" onClick={toggleDropdown1}>
              {isDropdownVisible1 ? (
                <IoIosArrowUp size={35} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </h2> */}
          </div>
          {isSession1 && (
            <div className="dropdown-content">
              <h2>Free Trial Session</h2>
              <h2>Two sessions per week</h2>
              <h2>Reading</h2>
              <h2>Thajweed</h2>
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
export default QaidaEnrol;
