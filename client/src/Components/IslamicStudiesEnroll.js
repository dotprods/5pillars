import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/IslamicStudiesEnrol.css";
import { MdStars } from "react-icons/md";
import Loader from "./Loader";
import {createSearchParams, useNavigate} from "react-router-dom";
import Medal from "../assets/medal-col.png";


const IslamicStudiesEnrol = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [islamicLessonPackage, setIslamicLessonPackage] = useState(
      "Islamic lessons - Full course"
  );
  const [amount, setAmount] = useState(85);
  const [islamicLessonFullOpacity, setIslamicLessonFullOpacity] = useState(1);
  const [islamicLessonMonthlyOpacity, setIslamicLessonMonthlyOpacity] = useState(0.5);
  const [isIslamicLesson1, setSurahSession1] = useState(false);
  const [isIslamicLesson2, setSurahSession2] = useState(true);



  const IslamicLesson1 = () => {
    if (isIslamicLesson2) {
      setSurahSession2(false);
      // setSession1Opacity(1);
      setIslamicLessonFullOpacity(0.5);
    }

    setSurahSession1(true);
    setIslamicLessonMonthlyOpacity(1);
    setAmount(10);
    setIslamicLessonPackage("Islamic lessons - Monthly");
  };

  const IslamicLesson2 = () => {
    if (isIslamicLesson1) {
      setSurahSession1(false);
      // setSession1Opacity(1);
      setIslamicLessonMonthlyOpacity(0.5);
    }

    setSurahSession2(true);
    setIslamicLessonFullOpacity(1);
    setAmount(85);
    setIslamicLessonPackage("Islamic lessons - Full course");
  };


  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const IslamicEvent = () => {
    navigate({
      pathname: "/register-islamic-studies",
      search: createSearchParams({
        package:islamicLessonPackage,
        fee: amount,
      }).toString(),
    });
    console.log(amount);

  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          <>
            <div className="background"/>
            <div className="">
              <Navbar/>
            </div>
            <div className="blank"></div>
            <div className="islamic-about">
              <h2 className="islamic-heading">“Faith Essentials” – Islamic Studies Program </h2>
              <p>
                We are delighted to introduce our new Islamic Studies program, Faith Essentials. This program has been curated to serve as a cornerstone in nurturing the understanding of Islam. We are pleased to offer this educational program to new & existing students.

                Our Islamic studies program has been meticulously designed to impart essential Islamic knowledge, recognising the pivotal role of foundational understanding for Muslims. Tailored to three distinct age groups — 6-9, 10-15, and 16-22 year olds.

                Each category possesses a dedicated syllabus. The curriculum comprehensively covers fundamental aspects such as Akeedah, Fiqh, Hadith, Seerah and Akhlaaq and extends its purview to encompass contemporary issues, student life, family life, and relationships.

              </p>
            </div>
            <div className="islamic-studies">
              <div className="islamic-studies-package">
                <div className="islamic-studies-package-def">
                  <h3>ISLAMIC STUDIES</h3>
                  <div className="islamic-studies-package-button">
                    <div
                        className="session2-btn"
                        id="sess2"
                    >
                      {isIslamicLesson1 && (
                          <h2
                              className="other-session"
                              style={{fontWeight: "600", fontSize: "28px"}}
                          >
                            Monthly
                          </h2>
                      )}

                      {isIslamicLesson2 && (
                          <div className="star">
                            <h2>Full Course</h2>
                            <img src={Medal} className="medal"></img>
                          </div>
                      )}

                      {isIslamicLesson1 && (
                          <h1 className="fff">
                            £10/<span>Month</span>
                          </h1>
                      )}
                      {isIslamicLesson2 && (
                          <h1>
                            £85/<span>Course</span>
                          </h1>
                      )}
                      {isIslamicLesson1 && (
                          <p>£10 Billed Monthly (20 sessions P/M)</p>
                      )}
                      {isIslamicLesson2 && (
                          <p>£85 Billed 10 Months (20 sessions P/M)</p>
                      )}
                    </div>
                  </div>
                  <p style={{color: "white"}}>How many sessions would you like per week ?</p>
                  <div className="btn-row">
                    <div className="btn-row1">
                      <button
                          onClick={IslamicLesson1}
                          className="session1-sub sub-btn"
                          style={{opacity: islamicLessonMonthlyOpacity}}
                      >
                        Monthly
                      </button>
                      <div
                          className="button-s2"
                          style={{opacity: islamicLessonFullOpacity}}
                      >
                        <button
                            onClick={IslamicLesson2}
                            className="session2-sub sub-btn"
                        >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 36 24"
                          >
                            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                          </svg>
                          Full Course
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="islamic-studies-package-button islamic-studies-enrol-button ">
                    <button className="btn-enrol">
                    <span className="cir-btn">
                      <span className="arrow-btn"></span>
                    </span>
                      <span className="text-btn" onClick={IslamicEvent}>Enrol Now</span>
                    </button>
                  </div>
                  {/*<h2 className="dropdown-btn" onClick={toggleDropdown}>*/}
                  {/*  {isDropdownVisible ? (*/}
                  {/*      <IoIosArrowUp size={40}/>*/}
                  {/*  ) : (*/}
                  {/*      <IoIosArrowDown size={40}/>*/}
                  {/*  )}*/}
                  {/*</h2>*/}
                </div>
                {isIslamicLesson1 && (
                    <div className="dropdown-content">
                      <h2> Twenty sessions per month</h2>
                      <h2>45 min sessions</h2>
                      <h2>Set syllabus</h2>
                      <h2> Highly qualified sholars from the UK</h2>
                    </div>
                )}
                {isIslamicLesson2 && (
                    <div className="dropdown-content">
                      <h1 className="save">SAVE £ 15 ANNUALLY</h1>
                      <h2> Twenty sessions per month</h2>
                      <h2>45 min sessions</h2>
                      <h2>Set syllabus</h2>
                      <h2> Highly qualified sholars from the UK</h2>
                    </div>
                )}
              </div>
            </div>
            <Footer/>
          </>
      )}
    </>
  );
};
export default IslamicStudiesEnrol;
