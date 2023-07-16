import React, { useState, useEffect } from "react";
import "../Css/NewHome.css";
import Navbar from "./Navbar";
import mosque from "../assets/mosque.png";
import { Link } from "react-router-dom";
import ScrollTigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Habibi from "../assets/vsd.png";
import mosque2 from "../assets/Mosque2.png";
import { BsTriangle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FcFaq } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";
import Typical from "react-typical";
import TypeWriterEffect from "react-typewriter-effect";
import boy from "../assets/Boy.svg";
import girl from "../assets/Girl.svg";
import Loader from "./Loader";
import Footer from "./Footer";
import Arrowup from "../assets/arrowDouble.png";
// import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import HotNews from "./HotNews";

const NewHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counteOn, setCounterOn] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      name: "Zaid",
      course: "Hifdh student",
      feedback:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.",
      imgClass: "feed1",
    },
    {
      name: "aathiq",
      course: "Hifdh student",
      feedback:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.",
      imgClass: "feed1",
    },
    {
      name: "Zaid",
      course: "Hifdh student",
      feedback:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.",
      imgClass: "feed1",
    },
    {
      name: "Zaid",
      course: "Hifdh student",
      feedback:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.",
      imgClass: "feed1",
    },
    {
      name: "Zaid",
      course: "Hifdh student",
      feedback:
        "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at chat.openai.com.",
      imgClass: "feed1",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      // Send the email to the backend using axios
    } else {
      setError("Please enter a valid email address.");
      alert(error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollHeight > screenHeight * 1.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="background" />
          <HotNews />
          <div
            className={`back-to-top-button ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            {/* <IoIosArrowUp size={35} /> */}
            <img src={Arrowup}></img>
          </div>
          {/* <a href="https://wa.me/447756393994">
            <div className="chat"></div>
          </a> */}

          <div className=" floating-container">
            <div className="floating-button">+</div>
            <div className="element-container">
              {/* <a href="google.com">
                <span className="float-element tooltip-left">
                  <FcFaq size={40} />
                </span>
              </a> */}
              <a href="https://wa.me/447756393994">
                <span className="float-element">
                  <SiWhatsapp size={30} />
                </span>
              </a>
              <span className="float-element">
                <FcFaq size={35} />
              </span>
            </div>
          </div>

          <div className="home">
            <Navbar />

            <div className="home-content">
              <div className=" home-content-text">
                {/* <div style={{ display: "flex", alignItems: "center" }}> */}
                <h1 style={{ marginBottom: "-10px" }}>Learn</h1>
                <h1>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Quicksand",
                      color: "#056e13",
                      fontWeight: 600,
                      fontSize: "1.2em",
                    }}
                    startDelay={2000}
                    cursorColor="#056e13"
                    multiText={["Qaida", "Quran", "Hifdh"]}
                    multiTextDelay={1000}
                    typeSpeed={30}
                    multiTextLoop
                  />
                </h1>
                {/* </div> */}
                <h1 style={{ marginTop: "-40px" }}>With Us Online</h1>
                <Link to="/packages" style={{ textDecoration: "none" }}>
                  <button>Register Now</button>
                </Link>
              </div>

              <img src={mosque} alt="mosque image" className="palli"></img>

              <div className=" course" data-aos="fade-down">
                <div className=" coo c1">
                  <div className="circle cir1"></div>
                  <div className="loader"></div>
                  <h3>Quran Recitation</h3>
                  <p>
                    We have highly qualified tutors who can deliver lessons in
                    Qaida and Quran recitation, working with you to achieve your
                    goals.
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
                    Our Hifdh program is ideal for students who wish to memorise
                    the Quran and our Selected Surahs program is for anyone who
                    wants to memorise the important and often recited surahs
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
                    Our comprehensive curriculum covers areas such as Hadith,
                    Fiqh, Seerah & Islamic History, Aqeedah and contemporary
                    issues
                  </p>
                  <Link to="/islamicStudies" style={{ textDecoration: "none" }}>
                    <h2 className="learn-btn"> Coming Soon</h2>
                  </Link>
                  <hr className="line" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="wording-cont"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={girl} alt="girl image" className="word-img girl"></img>
            <div className="wording">
              <h2>
                5 Pillars Academy is an ideal <span>online</span> solution for
                learning <br />
                the Quran & enhancing <span>your</span> Islamic knowledge
              </h2>
              <p>
                We cater to individuals of all ages and levels of learning, and
                our solution is tailored to meet the specific needs and pace of
                each student.
              </p>
            </div>
            <img src={boy} alt="boy image" className="word-img boy"></img>
          </div>
          <ScrollTigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="count" data-aos="fade-up" data-aos-duration="2000">
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={493} duration={2} delay={0} />
                  )}
                  + <br />
                </h3>
                <p> Registered Student</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={76} duration={2} delay={2} />
                  )}
                  + <br />
                </h3>
                <p> Available Tutors</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={2763} duration={2} delay={1} />
                  )}
                  + <br />
                </h3>
                <p> Hours Studied</p>
              </div>
              <div className="count-in">
                <h3>
                  {counteOn && (
                    <CountUp start={0} end={5} duration={2} delay={3} />
                  )}
                  + <br />
                </h3>
                <p> Countries Served</p>
              </div>
            </div>
          </ScrollTigger>
          <div className=" missions">
            <div
              className="mission"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h2>Why Choose us</h2>
              <p>
                At 5Pillars Academy, we are committed to delivering the highest
                quality online learning experience to our students.We carefully
                select our tutors based on their qualifications and track record
                ,ensuring that our students are taught from the best in the
                field.Our tutors are passionate,experienced and dedicated to
                teaching and they are commited to providing our students with
                the knowledge,skills, and guidance needed to succeed
              </p>
              <hr className="line2" />
            </div>

            <div
              className="mission"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h2>What we will do</h2>
              <p>
                We strive to create an environment that is
                inclusive,accessible,and welcoming to all, regardless of their
                backround or level of understanding. Our goal is to provide a
                comprehensive curriculum that covers all aspect of islam
                ,including the Quran,Ijaza programs,Hadith,Arabic Language ,Fiqh
                and Islamic history ,and to deliver it in a way that is engaging
                .interactive ,and meaningful to who seek Ilm
              </p>
            </div>
          </div>

          <div className="tutor" data-aos="flip-left" data-aos-duration="2000">
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
          <div className=" feedback">
            <h1>Student Feedbacks</h1>
            <div className="feedback-items">
              <div
                className="feedback-item item1"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div className="triangle1">
                  <BsTriangle size={12} />
                </div>
                <div className="square"></div>
                <div className="plus">
                  <FiPlus size={14} />
                </div>
                <div className="circle-1"></div>

                <div className="feedback-img feed1"></div>
                <h2 className="name">Umar</h2>
                <h3 className="name-course">Hifdh student</h3>
                <p className="feedback-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                </p>
              </div>
              <div
                className="feedback-item item2 "
                data-aos="flip-down"
                data-aos-duration="2500"
              >
                <div className="triangle1">
                  <BsTriangle size={12} />
                </div>
                <div className="square"></div>
                <div className="plus">
                  <FiPlus size={14} />
                </div>
                <div className="circle-1"></div>
                <div className="feedback-img feed2"></div>
                <h2 className="name">AbuBakkar</h2>
                <h3 className="name-course">Hifdh student</h3>
                <p className="feedback-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                </p>
              </div>
              <div
                className="feedback-item item3"
                data-aos="flip-up"
                data-aos-duration="3000"
              >
                <div className="triangle1">
                  <BsTriangle size={12} />
                </div>
                <div className="square"></div>
                <div className="plus">
                  <FiPlus size={14} />
                </div>
                <div className="circle-1"></div>
                <div className="feedback-img feed3"></div>
                <h2 className="name">Ali</h2>
                <h3 className="name-course">Hifdh student</h3>
                <p className="feedback-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                </p>
              </div>
              <div
                className="feedback-item item1"
                data-aos="flip-down"
                data-aos-duration="3500"
              >
                <div className="triangle1">
                  <BsTriangle size={12} />
                </div>
                <div className="square"></div>
                <div className="plus">
                  <FiPlus size={14} />
                </div>
                <div className="circle-1"></div>

                <div className="feedback-img feed1"></div>
                <h2 className="name">Usman</h2>
                <h3 className="name-course">Hifdh student</h3>
                <p className="feedback-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                </p>
              </div>
            </div>
          </div>

          <div
            className="subscribe"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={mosque2} alt="subscribe-mosque"></img>
            <div className="subscribe-text">
              <h2>subscribe</h2>
              <p>Be the first to hear our latest news</p>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button onClick={handleSubscribe}>subscribe</button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default NewHome;
