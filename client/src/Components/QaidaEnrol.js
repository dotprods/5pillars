import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/QidaEnrol.css";

const QaidaEnrol = () => {
  // const ses1 = document.getElementById("sess1");
  // const ses2 = document.getElementById("sess2");
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
    // setSession2Opacity(isSession2 ? 1 : 0.3);
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
            {/* {isSession1 && (
              <>
                <h1 style={{ margin: "0 " }}>
                  £8/<span>Session</span>
                </h1>
                <p>£84 Billed Monthly (3 sessions P/W))</p>
              </>
            )} */}
            {/* {isSession2 && (
              <>
                <h1 style={{ margin: "0 " }}>
                  £7/<span>Session</span>
                </h1>
                <p>£64 Billed Monthly (2 sessions P/W)</p>
              </>
            )} */}

            <div className="quran-package-buttons">
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
                <p>£84 Billed Monthly (3 sessions P/W)</p>
              </div>
              <div
                className="session2-btn"
                id="sess2"
                onClick={session2}
                style={{ opacity: session2Opacity }}
              >
                {/* <div className="best-value">
                  <h3>Best Value</h3>
                </div> */}
                <h2> Session2</h2>
                <h1>
                  £7/<span>Session</span>
                </h1>
                <p>£64 Billed Monthly (2 sessions P/W)</p>
              </div>
            </div>

            <div className="qaida-package-button qaida-button">
              <button className="btn-enroll">Enrol Now</button>
            </div>
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
