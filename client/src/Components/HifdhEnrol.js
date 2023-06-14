import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/HifdhEnrol.css";
import { MdStars } from "react-icons/md";
import Loader from "./Loader";
import {
  Link,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import Medal from "../assets/medal-col.png";

const HifdhEnrol = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackage] = useState("Hidth-Session2");
  const [amount, setAmount] = useState(7);
  const [session2Opacity, setSession2Opacity] = useState(1);
  const [session1Opacity, setSession1Opacity] = useState(0.3);
  const [session3Opacity, setSession3Opacity] = useState(0.3);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [fee, setFee] = useState();
  const [isSession1, setSession1] = useState(false);
  const [isSession2, setSession2] = useState(true);
  const [isSession3, setSession3] = useState(false);
  const [isSession4, setSession4] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };

  const surahEvent = () => {
    navigate({
      pathname: "/register",
      search: createSearchParams({
        package: "Selected Surah Hifdh",
        fee: 7,
      }).toString(),
    });
  };
  const hidthEvent = () => {
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

  const session1 = () => {
    if (isSession2) {
      setSession2(false);
      // setSession1Opacity(1);
      setSession2Opacity(0.3);
    }

    if (isSession3) {
      setSession3(false);
      // setSession2Opacity(1);
      setSession3Opacity(0.3);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession1(true);
    setSession1Opacity(1);
    setPackage("Hifdh-Sesson1");
    setAmount(8);
  };

  const session2 = () => {
    if (isSession1) {
      setSession1(false);
      setSession1Opacity(0.3);
    }
    if (isSession3) {
      setSession3(false);
      setSession3Opacity(0.3);
    }

    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession2(true);
    // setSession1Opacity(isSession2 ? 1 : 0.3);
    setSession2Opacity(1);
    setPackage("Hifdh-Sesson2");
    setAmount(7);
  };
  const session3 = () => {
    if (isSession1) {
      setSession1(false);
      setSession1Opacity(0.3);
    }
    if (isSession2) {
      setSession2(false);
      setSession2Opacity(0.3);
    }
    if (isSession4) {
      setSession4(false);
      // setSession2Opacity(1);
    }
    setSession3(true);
    setSession3Opacity(1);
    setPackage("Hifdh-Sesson3");
    setAmount(8);
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
          <div className="background" />

          <div className="">
            <Navbar />
          </div>
          <div className="blank"></div>
          <div className="hifdh-surah">
            <div className="surah-about">
              <h2 style={{ fontSize: "50px" }}>Selected Surahs </h2>
              <p>
                Our Selected Surahs program is designed to offer you a unique
                opportunity to memorize significant Surahs from the Quran at
                your own pace, ensuring a range of benefits for you. The program
                carefully curates a collection of Surahs that have been chosen
                based on their significance, relevance, and beauty.
              </p>
            </div>
            <div className="hifdh-about">
              <h2 style={{ fontSize: "50px" }}>Hifdh Page </h2>
              <p>
                Our Hifdh program is designed to provide you with comprehensive
                guidance and support as you memorise the Quran, one of the
                greatest acts of devotion in Islam. Our experienced and
                qualified tutors will assist you in memorizing the Quran with
                perfect Thajweed. <br /> <br />
                We follow a structured and personalised approach, tailoring the
                memorisation process to your individual needs and capabilities.
                Whether you are a beginner or have already started your
                memorisation journey, our program offers a nurturing and
                supportive environment to help you succeed.
              </p>
            </div>
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
                  {/* <Link to="/register" style={{ textDecoration: "none" }}> */}
                  <button className="btn-enrol" onClick={surahEvent}>
                    <span className="cir-btn">
                      <span className="arrow-btn"></span>
                    </span>
                    <span className="text-btn">Enrol Now</span>
                  </button>
                  {/* </Link> */}
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
                <p>£64 Billed Monthly (2 sessions P/W)</p>
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

                    {isSession1 && <p>£64 Billed Monthly (2 sessions P/W)</p>}
                    {isSession2 && <p>£84 Billed Monthly (3 sessions P/W)</p>}
                    {isSession3 && <p>£64 Billed Monthly (3 sessions P/W)</p>}
                    {isSession4 && <p>£64 Billed Monthly (3 sessions P/W)</p>}
                  </div>
                </div>
                <div className="btn-row1">
                  <button
                    onClick={session1}
                    className="session1-sub sub-btn"
                    style={{ opacity: session1Opacity }}
                  >
                    Session&nbsp;1
                  </button>
                  <div
                    className="button-s2"
                    style={{ opacity: session2Opacity }}
                  >
                    <div className="star2">
                      <MdStars size={20} />
                    </div>
                    <button onClick={session2} className="session2-sub sub-btn">
                      Session&nbsp;2
                    </button>
                  </div>

                  <button
                    onClick={session3}
                    className="session3-sub sub-btn"
                    style={{ opacity: session3Opacity }}
                  >
                    Session&nbsp;3
                  </button>
                  {/* <button onClick={session4} className="session4-sub sub-btn">
                Session4
              </button> */}
                </div>

                <div className="selected-surah-package-button hifdh-button">
                  {/* <Link to="/register" style={{ textDecoration: "none" }}> */}
                  <button className="btn-enrol" onClick={hidthEvent}>
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
                  <h1 className="save">SAVE £ 144 ANNUALLY</h1>
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
      )}
    </>
  );
};
export default HifdhEnrol;
