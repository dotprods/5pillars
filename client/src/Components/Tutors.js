import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
// import NewNavbar from "./NewNav";
import { BsTriangle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import "../Css/Tutors.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Habibi from "../assets/vsd.png";
const testimonials = [
  {
    name: "Sheikh Usaidh ",
    thoughts:
      "It's been a profound experience working at 5 pillars academy where tutors across the globe are able to enlighten and guide the students of Quran about the methodology of recitation. The tutors and students are given the freedom to choose the timing as per their need.Moreover, the students are guided and encouraged through one-on -one sessions where the love and dedication for the holy book is witnessed.All in all, 5 Pillars Academy imparts knowledge of the holy book empowering and motivating both student and tutor. ",
  },
  {
    name: "Sheikh Bilal  ",
    thoughts:
      "I chose to be an Ustadh for 5pillars academy because their online classes allow greater flexibility in planning our day and working around with family and work especially with our busy schedule. The management is very helpful and supportive in creating a great virtual community. We have the advantage of focusing and giving individual attention to students letting them learn at their own pace with no external pressure of curriculum from the Academy Management.",
  },
  {
    name: "Sheikh Abdullah Izzath ",
    thoughts:
      "Alhamdulillah and Jazakumullah khair for accepting me as a tutor at 5pillars academy,  I have been privileged to work with this dedicated team in imparting Quran and Islamic Knowledge, and I ask Allah to accept this great service from all who are contributing to this Academy and keep me a part of this blessed journey, Aameen.",
  },
  {
    name: "Sheikh Ammar  ",
    thoughts:
      "I highly recommend 5pillars Academy for their exceptional management, Everyone on the team is well-organized, effective, and constantly available to address any inquiries. They go above and beyond to create a conducive learning atmosphere because they genuinely care about their students' academic performance. Overall, is fantastic experience. I'm delighted to be working here.",
  },
];
const tutors = [
  {
    name: "Usaidh Fazlur Rahman",
    image: require("../assets/mUser.png"),
    hoursTaught: "Hours Taught: 1050+",
    qualification: " Hafidh",
    numberOfStudents: "Number of students : 30+",
    experience: "Experience: 5+ Years",
    aboutMe:
      "Experienced Quran tutor with a certificate in Qur’anic studies from Darul Uloom Zakariya-South Africa. Motivated and dedicated to enlightening students on their journey to learning the Quran in an exemplary manner.I prioritize the students of Quran in achieving the ultimate coordination in recitation, memorization, and tajweed. I strongly believe in establishing a close relationship with my students in order to motivate and guide them in their journey.",
  },
  {
    name: "Abdullah Izzath",
    image: require("../assets/mUser.png"),
    hoursTaught: "Hours Taught: 1000+",
    qualification: " Alim ",
    numberOfStudents: "Number of students : 100+",
    experience: "Experience: 4+ Years",
    aboutMe:
      "Experienced Quran tutor with a degree in Islamic Studies. Passionate about guiding students on their Quranic journey. Creates a supportive and engaging learning environment. I emphasize a holistic approach to Quranic education, incorporating recitation, memorization, and  tajweed.I firmly believe in the power of building strong teacher-student relationships. I actively engage with my students, understanding their unique goals, strengths, and areas for improvement",
  },
  {
    name: "Hajara Ibrahim",
    image: require("../assets/wUser.png"),
    hoursTaught: "Hours Taught: 4000+",
    qualification: "Alima",
    numberOfStudents: "Number of students : 250+",
    experience: "Experience: 12+ Years",
    aboutMe:
      "I’m a dedicated Quran , Arabic and Islamic Studies educator on the journey of enabling my students to achieve their best.In this world that we live in I believe spirituality is the common saviour for all, it is my duty as an educator of the religious studies to facilitate this path and make it accessible and easy upon my students.May Allah guide us and keep us steadfast in His path. Aameen",
  }
];
const Tutors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedTutorIndex, setExpandedTutorIndex] = useState(null);

  const handleToggleAboutMe = (index) => {
    if (expandedTutorIndex === index) {
      setExpandedTutorIndex(null); // Close the expanded tutor
    } else {
      setExpandedTutorIndex(index); // Expand the clicked tutor
    }
  };
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
          <div className="tutor-about">
            <h1 className="tutors-heading">Our Tutors</h1>
            <p>
              At 5Pillars Academy, We take great pride in our rigorous vetting
              process, ensuring that only the most highly qualified tutors make
              it onto our team, we not only prioritize the qualifications and
              expertise of our online Quran tutors but also emphasize their
              ability to adapt to your individual needs. We understand that
              every student has a unique learning style, level of understanding,
              and potential. Our tutors are adept at recognizing and catering to
              these differences, ensuring that your learning experience is
              tailored to suit you. They are flexible in their teaching
              approach, providing personalized guidance and support to help you
              progress at a pace that is comfortable for you. Whether you are a
              beginner or an advanced learner, our tutors will meet you where
              you are and help unlock your full learning potential.
            </p>
          </div>
          <div className="tutor">
            <div className="tutor-register">
              <div className="tutor-text">
                <h1>
                  Become a Tutor <br /> with 5 Pillars
                </h1>
                <Link to="/tutorForm" style={{ textDecoration: "none" }}>
                  <button className="tutor-btn">Register</button>
                </Link>
                <p>As a Tutor</p>
              </div>
              <div className="tutor-image">
                <img className="habibi" src={Habibi} alt="Habibi"></img>
              </div>
            </div>
          </div>

          <div className="tutors-page">
            <div className="tutors-container">
              {tutors.map((tutor, index) => (
                <div
                  key={index}
                  className={`tutor-card ${
                    expandedTutorIndex === index ? "expanded" : ""
                  }`}
                >
                  <h1>{tutor.name}</h1>
                  <img src={tutor.image} alt={tutor.name} />
                  <h3>{tutor.qualification}</h3>
                  <p className="info">{tutor.experience}</p>
                  <p className="info">{tutor.hoursTaught}</p>
                  <p className="info info3">{tutor.numberOfStudents}</p>

                  {expandedTutorIndex === index && (
                    <ul className="aboutme">
                      {tutor.aboutMe.split("\n").map((item, i) => (
                        <li key={i} style={{ marginBottom: "0.5em" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    className="about-btn"
                    onClick={() => handleToggleAboutMe(index)}
                  >
                    {expandedTutorIndex === index ? "Close This" : "About Me"}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <h1
            className="testimonials-head"
            style={{ textAlign: "center", marginTop: "120px" }}
          >
            Testimonials From Tutors
          </h1>
          <div className="testimonials-items">
            {testimonials.map((testimonials, index) => (
              <div className="testimonials-item " key={index}>
                <div className="triangle1">
                  <BsTriangle size={12} />
                </div>
                <div className="square"></div>
                <div className="plus">
                  <FiPlus size={14} />
                </div>
                <div className="circle--1"></div>

                <div className="testimonials-img feed1"></div>
                <h2 className="name">{testimonials.name}</h2>
                <p className="feedback-text">{testimonials.thoughts}</p>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default Tutors;
