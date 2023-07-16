import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/QidaEnrol.css";
import { MdStars } from "react-icons/md";
import Loader from "./Loader";
import {
  Link,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import Medal from "../assets/medal-col.png";

const QaidaEnrol = () => {
  const [packages, setPackage] = useState("Quran Recitation-Session 2");
  const [qaidaPackage, setQaidaPackage] = useState("Qaida-Session 2");
  const [amount, setAmount] = useState(7);
  const [qaidaAmount, setQaidaAmount] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [session2Opacity, setSession2Opacity] = useState(1);
  const [session1Opacity, setSession1Opacity] = useState(0.5);
  const [session3Opacity, setSession3Opacity] = useState(0.5);
  const [session4Opacity, setSession4Opacity] = useState(0.5);
  const [session2QaidaOpacity, setSession2QaidaOpacity] = useState(1);
  const [session1QaidaOpacity, setSession1QaidaOpacity] = useState(0.5);
  const [session3QaidaOpacity, setSession3QaidaOpacity] = useState(0.5);
  const [session4QaidaOpacity, setSessionQaida4Opacity] = useState(0.5);

  const [isSession1, setSession1] = useState(false);
  const [isSession2, setSession2] = useState(true);
  const [isSession3, setSession3] = useState(false);
  const [isSession4, setSession4] = useState(false);
  const [isQaidaSession1, setQaidaSession1] = useState(false);
  const [isQaidaSession2, setQaidaSession2] = useState(true);
  const [isQaidaSession3, setQaidaSession3] = useState(false);
  const [isQaidaSession4, setQaidaSession4] = useState(false);

  const navigate = useNavigate();

  const session1 = () => {
    if (isSession2) {
      setSession2(false);
      // setSession1Opacity(1);
      setSession2Opacity(0.5);
    }

    if (isSession3) {
      setSession3(false);
      // setSession2Opacity(1);
      setSession3Opacity(0.5);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
      setSession4Opacity(0.5);
    }
    setSession1(true);
    setSession1Opacity(1);
    setAmount(8);
    setPackage("Quran Recitation-Session 1");
  };

  const session2 = () => {
    if (isSession1) {
      setSession1(false);
      setSession1Opacity(0.5);
    }
    if (isSession3) {
      setSession3(false);
      setSession3Opacity(0.5);
    }

    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
      setSession4Opacity(0.5);
    }
    setSession2(true);
    // setSession1Opacity(isSession2 ? 1 : 0.3);
    setSession2Opacity(1);
    setAmount(7);
    setPackage("Quran Recitation-Session 2");
  };
  const session3 = () => {
    if (isSession1) {
      setSession1(false);
      setSession1Opacity(0.5);
    }
    if (isSession2) {
      setSession2(false);
      setSession2Opacity(0.5);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
      setSession4Opacity(0.5);
    }
    setSession3(true);
    setSession3Opacity(1);

    setAmount(8);
    setPackage("Quran Recitation-Session 3");
  };
  const session4 = () => {
    if (isSession1) {
      setSession1(false);
      setSession1Opacity(0.5);
    }
    if (isSession2) {
      setSession2(false);
      setSession2Opacity(0.5);
    }
    if (isSession3) {
      setSession3(false);
      // setSession2Opacity(1);
      setSession3Opacity(0.5);
    }
    setSession4(true);
    setSession4Opacity(1);

    setAmount(8);
    setPackage("Quran Recitation-Session 4");
  };
  const Qidasession1 = () => {
    if (isQaidaSession2) {
      setQaidaSession2(false);
      // setSession1Opacity(1);
      setSession2QaidaOpacity(0.5);
    }

    if (isQaidaSession3) {
      setQaidaSession3(false);
      // setSession2Opacity(1);
      setSession3QaidaOpacity(0.5);
    }
    if (isQaidaSession4) {
      setQaidaSession4(false);
      // setSession2Opacity(1);
      setSessionQaida4Opacity(0.5);
    }
    setQaidaSession1(true);
    setSession1QaidaOpacity(1);
    setQaidaAmount(6);
    setQaidaPackage("Qaida-Session 1");
  };

  const Qidasession2 = () => {
    if (isQaidaSession1) {
      setQaidaSession1(false);
      // setSession1Opacity(1);
      setSession1QaidaOpacity(0.5);
    }

    if (isQaidaSession3) {
      setQaidaSession3(false);
      // setSession2Opacity(1);
      setSession3QaidaOpacity(0.5);
    }
    if (isQaidaSession4) {
      setQaidaSession4(false);
      // setSession2Opacity(1);
      setSessionQaida4Opacity(0.5);
    }
    setQaidaSession2(true);
    setSession2QaidaOpacity(1);
    setQaidaAmount(6);
    setQaidaPackage("Qaida-Session 2");
  };
  const Qidasession3 = () => {
    if (isQaidaSession1) {
      setQaidaSession1(false);
      // setSession1Opacity(1);
      setSession1QaidaOpacity(0.5);
    }

    if (isQaidaSession2) {
      setQaidaSession2(false);
      // setSession2Opacity(1);
      setSession2QaidaOpacity(0.5);
    }
    if (isQaidaSession4) {
      setQaidaSession4(false);
      // setSession2Opacity(1);
      setSessionQaida4Opacity(0.5);
    }
    setQaidaSession3(true);
    setSession3QaidaOpacity(1);
    setQaidaAmount(6);
    setQaidaPackage("Qaida-Session 3");
  };
  const Qidasession4 = () => {
    if (isQaidaSession1) {
      setQaidaSession1(false);
      // setSession1Opacity(1);
      setSession1QaidaOpacity(0.5);
    }

    if (isQaidaSession2) {
      setQaidaSession2(false);
      // setSession2Opacity(1);
      setSession2QaidaOpacity(0.5);
    }
    if (isQaidaSession3) {
      setQaidaSession3(false);
      // setSession2Opacity(1);
      setSession3QaidaOpacity(0.5);
    }
    setQaidaSession4(true);
    setSessionQaida4Opacity(1);
    setQaidaAmount(6);
    setQaidaPackage("Qaida-Session 4");
  };

  const QaidaEvent = () => {
    navigate({
      pathname: "/register",
      search: createSearchParams({
        package: qaidaPackage,
        fee: qaidaAmount,
      }).toString(),
    });
  };
  const QuranEvent = () => {
    navigate({
      pathname: "/register",
      search: createSearchParams({
        package: packages,
        fee: amount,
      }).toString(),
    });
    console.log(packages);
    console.log(amount);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="background" />
          <div className="">
            <Navbar />
          </div>
          <div className="blank"></div>
          <div className="qaida-about">
            <h2 className="qaida-heading">Qaida/Quran Recitation </h2>
            <p>
              The Qaida course will provide instruction on the Arabic alphabet
              and Tajweed principles starting from the fundamentals, using
              Qaida, which is a basic Arabic manual. Developing this foundation
              is crucial for reading the Holy Quran with accurate pronunciation
              and rhythm. <br /> <br />
              At 5 Pillars Academy, our tutors follow a gradual approach,
              ensuring that even a 5-year old child can easily apply these
              principles. Our objective is to guide you to a level where you can
              independently read the Quran. <br /> <br /> This Quran Recitation
              course is designed for individuals who already possess basic
              Arabic reading skills and wish to learn Quranic Arabic and
              recitation. We will cover all the Tajweed principles, Tarteel
              (appropriate rhythm), and help you read Quranic Arabic with Qirat
              (recitation) and the correct accent. Each principle will be taught
              in a step-by step manner to ensure a thorough comprehension.
            </p>
          </div>
          <div className="qaida-packages">
            <div className="qaida-package">
              <div className="qaida-package-def">
                <h3>Qaida</h3>
                <div className="quran-package-buttons">
                  <div
                    className="session2-btn"
                    id="sess2"
                    // style={{ opacity: session2Opacity }}
                  >
                    {isQaidaSession1 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 1
                      </h2>
                    )}

                    {isQaidaSession2 && (
                      <div className="star">
                        <h2 style={{ fontWeight: "600", fontSize: "28px" }}>
                          Session 2
                        </h2>
                        <img src={Medal} className="medal"></img>
                      </div>
                    )}
                    {isQaidaSession3 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 3
                      </h2>
                    )}
                    {isQaidaSession4 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 4
                      </h2>
                    )}

                    {isQaidaSession1 && (
                      <h1 className="fff">
                        £6/<span>Session</span>
                      </h1>
                    )}
                    {isQaidaSession2 && (
                      <h1>
                        £6/<span>Session</span>
                      </h1>
                    )}
                    {isQaidaSession3 && (
                      <h1 className="fff">
                        £6/<span>Session</span>
                      </h1>
                    )}
                    {isQaidaSession4 && (
                      <h1>
                        £6/<span>Session</span>
                      </h1>
                    )}
                    {isQaidaSession1 && (
                      <p>£48 Billed Monthly (2 sessions P/W)</p>
                    )}
                    {isQaidaSession2 && (
                      <p>£72 Billed Monthly (3 sessions P/W)</p>
                    )}
                    {isQaidaSession3 && (
                      <p>£96 Billed Monthly (4 sessions P/W)</p>
                    )}
                    {isQaidaSession4 && (
                      <p>£120 Billed Monthly (5 sessions P/W)</p>
                    )}
                  </div>
                </div>
                <p>How Sessions would you like per week ?</p>
                <div className="btn-row">
                  <div className="btn-row1">
                    <button
                      onClick={Qidasession1}
                      className="session1-sub sub-btn"
                      style={{ opacity: session1QaidaOpacity }}
                    >
                      2&nbsp;Sessions
                    </button>
                    <div
                      className="button-s2"
                      style={{ opacity: session2QaidaOpacity }}
                    >
                      {/* <div className="star2">
                        <MdStars size={20} />
                      </div> */}
                      <button
                        onClick={Qidasession2}
                        className="session2-sub sub-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 36 24"
                        >
                          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                        </svg>
                        3&nbsp;Sessions
                      </button>
                    </div>
                  </div>
                  <div className="btn-row2">
                    <button
                      onClick={Qidasession3}
                      className="session3-sub sub-btn"
                      style={{ opacity: session3QaidaOpacity }}
                    >
                      4&nbsp;Sessions
                    </button>
                    <button
                      onClick={Qidasession4}
                      className="session4-sub sub-btn"
                      style={{ opacity: session4QaidaOpacity }}
                    >
                      5&nbsp;Sessions
                    </button>
                  </div>
                </div>

                <div className="qaida-package-button qaida-button">
                  <button className="btn-enrol" onClick={QaidaEvent}>
                    <span className="cir-btn">
                      <span className="arrow-btn"></span>
                    </span>
                    <span className="text-btn">Enrol Now</span>
                  </button>
                </div>
                {/* <h2 className="dropdown-btn" onClick={toggleDropdown}>
                  {isDropdownVisible ? (
                    <IoIosArrowUp size={40} />
                  ) : (
                    <IoIosArrowDown size={40} />
                  )}
                </h2> */}
              </div>
              {isQaidaSession1 && (
                <div className="dropdown-content">
                  <h2>Free Trial Session</h2>
                  <h2>Two sessions per week</h2>
                  <h2>One to One Live sessions</h2>
                  <h2> 30 Mins per session</h2>
                  <h2>Weekly Progress report</h2>
                  <h2>Highly qualified tutors with Ijaza</h2>
                </div>
              )}
              {isQaidaSession2 && (
                <div className="dropdown-content">
                  <h2>Free Trial Session</h2>
                  <h2>Three sessions per week</h2>
                  <h2>One to One Live sessions</h2>
                  <h2> 30 Mins per session</h2>
                  <h2>Weekly Progress report</h2>
                  <h2>Highly qualified tutors with Ijaza</h2>
                </div>
              )}
              {isQaidaSession3 && (
                <div className="dropdown-content">
                  <h2>Free Trial Session</h2>
                  <h2>Four sessions per week</h2>
                  <h2>One to One Live sessions</h2>
                  <h2> 30 Mins per session</h2>
                  <h2>Weekly Progress report</h2>
                  <h2>Highly qualified tutors with Ijaza</h2>
                </div>
              )}
              {isQaidaSession4 && (
                <div className="dropdown-content">
                  <h2>Free Trial Session</h2>
                  <h2>Five sessions per week</h2>
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
                    {isSession1 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 1
                      </h2>
                    )}

                    {isSession2 && (
                      <div className="star">
                        <h2 style={{ fontWeight: "600", fontSize: "28px" }}>
                          Session 2
                        </h2>
                        <img src={Medal} className="medal"></img>
                      </div>
                    )}
                    {isSession3 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 3
                      </h2>
                    )}
                    {isSession4 && (
                      <h2
                        className="other-session"
                        style={{ fontWeight: "600", fontSize: "28px" }}
                      >
                        Session 4
                      </h2>
                    )}

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
                        £7/<span>Session</span>
                      </h1>
                    )}
                    {isSession4 && (
                      <h1>
                        £6/<span>Session</span>
                      </h1>
                    )}
                    {isSession1 && <p>£64 Billed Monthly (2 sessions P/W)</p>}
                    {isSession2 && <p>£84 Billed Monthly (3 sessions P/W)</p>}
                    {isSession3 && <p>£112 Billed Monthly (4 sessions P/W)</p>}
                    {isSession4 && <p>£120 Billed Monthly (5 sessions P/W)</p>}
                  </div>
                </div>
                <p>How Sessions would you like per week ?</p>

                <div className="btn-row">
                  <div className="btn-row1">
                    <button
                      onClick={session1}
                      className="session1-sub sub-btn"
                      style={{ opacity: session1Opacity }}
                    >
                      2&nbsp; Sessions
                    </button>
                    <div
                      className="button-s2"
                      style={{ opacity: session2Opacity }}
                    >
                      {/* <div className="star2">
                        <MdStars size={20} />
                      </div> */}
                      <button
                        onClick={session2}
                        className="session2-sub sub-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 36 24"
                        >
                          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                        </svg>
                        3&nbsp;Sessions
                      </button>
                    </div>
                  </div>
                  <div className="btn-row2">
                    <button
                      onClick={session3}
                      className="session3-sub sub-btn"
                      style={{ opacity: session3Opacity }}
                    >
                      4&nbsp;Sessions
                    </button>
                    <button
                      onClick={session4}
                      className="session4-sub sub-btn"
                      style={{ opacity: session4Opacity }}
                    >
                      5&nbsp;Sessions
                    </button>
                  </div>
                </div>

                <div className="qaida-package-button qaida-button">
                  {/* <Link to="/register" style={{ textDecoration: "none" }}> */}
                  <button className="btn-enrol" onClick={QuranEvent}>
                    <span className="cir-btn">
                      <span className="arrow-btn"></span>
                    </span>
                    <span className="text-btn">Enrol Now</span>
                  </button>
                  {/* </Link> */}
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
                  <h2>Free Trial Session</h2>
                  <h2>Four sessions per week</h2>
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
              {isSession4 && (
                <div className="dropdown-content">
                  <h2>Free Trial Session</h2>
                  <h2>Five sessions per week</h2>
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
      )}
    </>
  );
};
export default QaidaEnrol;
