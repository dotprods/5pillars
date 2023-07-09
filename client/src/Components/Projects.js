import React, { Component } from "react";
import Navbar from "./Navbar";
import "../Css/Projects.css";
const Projects = () => {
  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>
      <div className="blank"></div>
      <h1>Our milestones</h1>
      <div className="milestones">
        <div className="milestone-container">
          <div className="milestone low1">
            <div className="in-low">
              <h1>2023</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>Spring - Launch 5Pillars Academy in the UK. </h3>
            <h3>Spring - Launch Online Quran project </h3>
            <h3>Summer - Launch Ilm Project </h3>
            <h3>Summer - Launch Islamic Lifestyle Project</h3>
            <h3>Autumn - Launch Online portal for students </h3>
            <h3>Winter - 500 students & 150 Tutors </h3>
            <h3>Winter - Launch group online Quran Class </h3>
          </div>
        </div>
        <div className="milestone-container">
          <div className="milestone high1">
            <div className="in-high">
              <h1>2024</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>Spring - Launch Online Fatwa Services </h3>
            <h3>Spring - Launch New Muslim Outreach project</h3>
            <h3>Summer - Launch Giving Back (Charity Arm) </h3>
            <h3>Summer - Launch Counseling & Consultation Project </h3>
            <h3>Summer - Launch Ijaza programmes</h3>
            <h3>Winter - 1500 students & 450 tutors</h3>
          </div>
        </div>
        <div className="milestone-container">
          <div className="milestone low2">
            <div className="in-low">
              <h1>2025</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>Winter 3000 students & 900 Tutors </h3>
          </div>
        </div>
        <div className="milestone-container">
          <div className="milestone high2">
            <div className="in-high">
              <h1>2026</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>Summer - Launch Complete Online Aalimya Programme </h3>
            <h3>Winter - 6000 students & 1800 tutors </h3>
          </div>
        </div>
        <div className="milestone-container">
          <div className="milestone low3">
            <div className="in-low">
              <h1>2027</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>8000 students & 2200 tutors </h3>
          </div>
        </div>
        <div className="milestone-container">
          <div className="milestone high3">
            <div className="in-high">
              <h1>2028</h1>
            </div>
          </div>
          <div className="milestone-cont">
            <h3>10000 students & 3000 tutors </h3>
            <h3>£10 Million Revenue</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
