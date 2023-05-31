import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./Footer";
import "../Css/IslamicStudiesEnrol.css";
import { MdStars } from "react-icons/md";

const IslamicStudiesEnrol = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
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
            <h3>ISLAMIC STUDIES</h3>
            <h1>
              £5/<span>Session</span>
            </h1>
            <p>Billed Monthly</p>
            <div className="selected-surah-package-button">
              <button className="btn-enroll">Coming Soon</button>
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
              <h2>45 min sessions</h2>
              <h2>Set syllabus</h2>
              <h2> Highly qualified sholars from the UK</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default IslamicStudiesEnrol;
