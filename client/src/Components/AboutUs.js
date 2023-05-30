import React, { useState, useEffect } from "react";
import StaffMember from "./Staffmember";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/Staffmember.css";

const AboutUs = () => {
  const staffMembers = [
    {
      name: "Hisham Mohamed",
      position: "Director/Co-Founder",
      photo: "",
    },
    {
      name: "Sheikh Salman Siddiq",
      position: "Director/Co-Founder",
      photo: "",
    },
    {
      name: "Hafidh Wafik Mohamed",
      position: "Director/Co-Founder",
      photo: "",
    },
    {
      name: "Sheikh Suhail Wazeer",
      position: "Director/Co-Founder",
      photo: "",
    },
    {
      name: "Sheikh Ammar Cader",
      position: "Tutor/Co-ordinator",
    },
    {
      name: "Azim Mendheria",
      position: "Web Developer",
    },
    {
      name: "Mohammed Ali",
      position: "Web Developer",
    },

    // Add more staff members here...
  ];

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>

      <div className="about">
        <h1>About Us</h1>
        <p>
          Our vision at 5 Pillars Academy, is to be the leading online Islamic
          learning platform that connects individuals with tutors who have
          authentic Islamic knowledge and practices, empowering them to grow in
          their faith and become better Muslims. We strive to create an
          environment that is inclusive, accessible, and welcoming to all -
          regardless of their background or level of understanding. Our goal is
          to provide a comprehensive curriculum that covers all aspects of
          Islam. Including the Quran, Ijaza programs, Hadith, Arabic Language,
          Fiqh and Islamic history, and to deliver it in a way that is engaging,
          interactive, and meaningful to who seek Ilm. Furthermore, our vision
          expands into creating an all-inclusive online platform for Muslims,
          which covers areas such as support for new reverts, dawah services,
          online counselling, Islamic life coaching, Islamic financial guidance,
          blogging, forum for community discussion, and fatwa services.
        </p>
      </div>
      <h2 className="team">Our Team</h2>
      <div className="container-aboutUs">
        <hr className="line" />
      </div>
      <div className="staff-list">
        {staffMembers.map((staff, index) => (
          <StaffMember
            key={index}
            name={staff.name}
            position={staff.position}
            photo={staff.photo}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
