import React, { useState, useEffect } from "react";
import StaffMember from "./Staffmember";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/Staffmember.css";
import Loader from "./Loader";
import Hisham from "../assets/members/Hisham-N.png";
import Salman from "../assets/members/Salman-N.png";
import Wafiq from "../assets/members/Wafiq-N.png";
import Wazeer from "../assets/members/Shuhail-N.png";
import Ammar from "../assets/members/Ammar-N.png";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const staffMembers = [
    {
      name: "Hisham Mohamed",
      position: "Director/Co-Founder",
      photo: Hisham,
    },
    {
      name: "Sheikh Salman Siddiq",
      position: "Director/Co-Founder",
      photo: Salman,
    },
    {
      name: "Hafidh Wafik Mohamed",
      position: "Director/Co-Founder",
      photo: Wafiq,
    },
    {
      name: "Sheikh Suhail Wazeer",
      position: "Director/Co-Founder",
      photo: Wazeer,
    },
    {
      name: "Sheikh Ammar Cader",
      position: "Tutor/Co-ordinator",
      photo: Ammar,
    },

    // Add more staff members here...
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
          <div className="about">
            <h1 className="aboutus-heading">Our Vision</h1>
            <p>
              Our vision at 5 Pillars Academy, is to be the leading online
              Islamic learning platform that connects individuals with tutors
              who have authentic Islamic knowledge and practices, empowering
              them to grow in their faith and become better Muslims. We strive
              to create an environment that is inclusive, accessible, and
              welcoming to all - regardless of their background or level of
              understanding. Our goal is to provide a comprehensive curriculum
              that covers all aspects of Islam. Including the Quran, Ijaza
              programs, Hadith, Arabic Language, Fiqh and Islamic history, and
              to deliver it in a way that is engaging, interactive, and
              meaningful to who seek Ilm. Furthermore, our vision expands into
              creating an all-inclusive online platform for Muslims, which
              covers areas such as support for new reverts, dawah services,
              online counselling, Islamic life coaching, Islamic financial
              guidance, blogging, forum for community discussion, and fatwa
              services.
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
      )}
    </>
  );
};

export default AboutUs;
