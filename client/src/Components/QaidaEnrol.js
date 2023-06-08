import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/QidaEnrol.css";
import { MdStars } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Medal from "../assets/medal-col.png";

const QaidaEnrol = () => {
  // const ses1 = document.getElementById("sess1");
  // const ses2 = document.getElementById("sess2");
  // const [session2Opacity, setSession2Opacity] = useState(1);
  // const [session1Opacity, setSession1Opacity] = useState(1);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [fee, setFee] = useState();
  const [isSession1, setSession1] = useState(false);
  const [isSession2, setSession2] = useState(true);
  const [isSession3, setSession3] = useState(false);
  const [isSession4, setSession4] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };

  const session1 = () => {
    if (isSession2) {
      setSession2(false);
      // setSession1Opacity(1);
    }

    if (isSession3) {
      setSession3(false);
      // setSession2Opacity(1);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession1(true);
    // setSession2Opacity(isSession1 ? 1 : 0.3);
  };

  const session2 = () => {
    if (isSession1) {
      setSession1(false);
      // setSession2Opacity(1);
    }
    if (isSession3) {
      setSession3(false);
      // setSession2Opacity(1);
    }

    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession2(true);
    // setSession1Opacity(isSession2 ? 1 : 0.3);
    // setSession2Opacity(isSession2 ? 1 : 0.3);
  };
  const session3 = () => {
    if (isSession1) {
      setSession1(false);
      // setSession2Opacity(1);
    }
    if (isSession2) {
      setSession2(false);
      // setSession2Opacity(1);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession3(true);

    console.log(isSession3);
  };

  // const session4 = () => {
  //   if (isSession1) {
  //     setSession1(false);
  //     // setSession2Opacity(1);
  //   }
  //   if (isSession2) {
  //     setSession2(false);
  //     // setSession2Opacity(1);
  //   }
  //   if (isSession3) {
  //     setSession3(false);
  //     // setSession2Opacity(1);
  //   }
  //   setSession4(true);

  //   console.log(isSession3);
  // };

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>
      <div className="qaida-about">
        <h2>Qaida/Quran Recitation </h2>
        <p>
          The Qaida course will provide instruction on the Arabic alphabet and
          Tajweed principles starting from the fundamentals, using Qaida, which
          is a basic Arabic manual. Developing this foundation is crucial for
          reading the Holy Quran with accurate pronunciation and rhythm. <br />{" "}
          <br />
          At 5 Pillars Academy, our tutors follow a gradual approach, ensuring
          that even a 5-year old child can easily apply these principles. Our
          objective is to guide you to a level where you can independently read
          the Quran. <br /> <br /> This Quran Recitation course is designed for
          individuals who already possess basic Arabic reading skills and wish
          to learn Quranic Arabic and recitation. We will cover all the Tajweed
          principles, Tarteel (appropriate rhythm), and help you read Quranic
          Arabic with Qirat (recitation) and the correct accent. Each principle
          will be taught in a step-by step manner to ensure a thorough
          comprehension.
        </p>
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
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="btn-enroll">Enrol Now</button>
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

            <div className="quran-package-buttons">
              {/* <div
                className="session1-btn"
                id="sess1"
                onClick={session1}
                style={{ opacity: session1Opacity }}
              >
                <h2> Session1 </h2>
                <h1>
                  £8/<span>Session</span>
                </h1>
                <p>£64 Billed Monthly (3 sessions P/W)</p>
              </div> */}
              <div
                className="session2-btn"
                id="sess2"
                // style={{ opacity: session2Opacity }}
              >
                {isSession1 && <h2 className="other-session"> Session1</h2>}

                {isSession2 && (
                  <div className="star">
                    <h2> Session2</h2>
                    <img src={Medal} className="medal"></img>
                  </div>
                )}
                {isSession3 && <h2 className="other-session"> Session3</h2>}
                {isSession4 && <h2 className="other-session"> Session4</h2>}

                {isSession1 && (
                  <h1 className="fff">
                    £8/<span>Session</span>
                  </h1>
                )}
                {isSession2 && (
                  <h1>
                    £7/<span>Session</span>
                  </h1>
                )}
                {isSession3 && (
                  <h1 className="fff">
                    £8/<span>Session</span>
                  </h1>
                )}
                {isSession4 && (
                  <h1>
                    £8/<span>Session</span>
                  </h1>
                )}
                {isSession1 && <p>£64 Billed Monthly (3 sessions P/W)</p>}
                {isSession2 && <p>£84 Billed Monthly (2 sessions P/W)</p>}
                {isSession3 && <p>£64 Billed Monthly (3 sessions P/W)</p>}
                {isSession4 && <p>£64 Billed Monthly (3 sessions P/W)</p>}
              </div>
            </div>
            <div className="btn-row1">
              <button onClick={session1} className="session1-sub sub-btn">
                Session&nbsp;1
              </button>
              <div className="button-s2">
                <div className="star2">
                  <MdStars size={20} />
                </div>
                <button onClick={session2} className="session2-sub sub-btn">
                  Session&nbsp;2
                </button>
              </div>

              <button onClick={session3} className="session3-sub sub-btn">
                Session&nbsp;3
              </button>
              {/* <button onClick={session4} className="session4-sub sub-btn">
                Session4
              </button> */}
            </div>

            <div className="qaida-package-button qaida-button">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="btn-enroll">Enrol Now</button>
              </Link>
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
              {isSession2 && <h1 className="save">SAVE £ 144 ANNUALLY</h1>}
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
          {isSession3 && (
            <div className="dropdown-content">
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
              <h2>---------------</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default QaidaEnrol;
