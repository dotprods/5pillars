import React, { Component } from "react";
import "../Css/NewHome.css";
import Navbar from "./Navbar";
import mosque from "../assets/mosque.png";
import { Link } from "react-router-dom";

const NewHome = () => {
  return (
    <>
      <div className="background" />
      <div className="home">
        <Navbar />

        <div className="home-content">
          <div className="home-content-text">
            <h1>
              Learn Quran <br /> With Us Online!
            </h1>
            <button>Register Now</button>
          </div>

          <img src={mosque} alt="mosque image" className="palli"></img>

          <div className="course">
            <div className=" coo c1">
              <div className="circle cir1"></div>
              <div className="loader"></div>
              <h3>Quran Recitation</h3>
              <p>
                We have highly qualified tutors who can deliver lessons in Qaida
                and Quran recitation, working with you to achieve your goals.
              </p>
              <Link to="/qaida" style={{ textDecoration: "none" }}>
                <h2 className="learn-btn"> Learn more</h2>
              </Link>
              <hr className="line" />
            </div>
            <div className=" coo c2">
              <div className="circle cir2"></div>
              <div className="loader"></div>
              <h3>Hifdh Lessons</h3>
              <p>
                Our Hifdh program is ideal for students who wish to memorise the
                Quran and our Selected Surahs program is for anyone who wants to
                memorise the important and often recited surahs
              </p>
              <Link to="/hifdh" style={{ textDecoration: "none" }}>
                <h2 className="learn-btn"> Learn more</h2>
              </Link>
              <hr className="line" />
            </div>
            <div className="coo  c3">
              <div className="circle cir3"></div>
              <div className="loader"></div>
              <h3>Islamic Lessons</h3>
              <p>
                Our comprehensive curriculum covers areas such as Hadith, Fiqh,
                Seerah & Islamic History, Aqeedah and contemporary issues
              </p>
              <Link to="/islamicStudies" style={{ textDecoration: "none" }}>
                <h2 className="learn-btn"> Coming Soon</h2>
              </Link>
              <hr className="line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewHome;
