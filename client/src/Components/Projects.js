import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Css/Projects.css";
import { number } from "prop-types";
import Footer from "./Footer";
import Loader from "./Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showProj1, setProj1] = useState(false);
  const [showProj2, setProj2] = useState(false);
  const [showProj3, setProj3] = useState({
    proj: false,
    proj1: false,
    proj2: false,
    proj3: false,
    proj4: false,
    proj5: false,
  });
  const [showProj4, setProj4] = useState({
    proj: false,
    proj1: false,
    proj2: false,
    proj3: false,
    proj4: false,
    proj5: false,
  });
  const [showProj5, setProj5] = useState({
    proj: false,
    proj1: false,
    proj2: false,
    proj3: false,
    proj4: false,
    proj5: false,
  });

  const handleProj1 = () => {
    setProj1(!showProj1);
  };
  const handleProj2 = () => {
    setProj2(!showProj2);
  };
  const handleProj4 = (number) => {
    if (number == 0) {
      setProj4((prevState) => ({
        ...prevState,
        proj: !prevState.proj,
      }));
    }
    if (number == 1) {
      setProj4((prevState) => ({
        ...prevState,
        proj1: !prevState.proj1,
      }));
    }
    if (number == 2) {
      setProj4((prevState) => ({
        ...prevState,
        proj2: !prevState.proj2,
      }));
    }
    if (number == 3) {
      setProj4((prevState) => ({
        ...prevState,
        proj3: !prevState.proj3,
      }));
    }
    if (number == 4) {
      setProj4((prevState) => ({
        ...prevState,
        proj4: !prevState.proj4,
      }));
    }
    if (number == 5) {
      setProj4((prevState) => ({
        ...prevState,
        proj5: !prevState.proj5,
      }));
    }
  };
  const handleProj5 = (number) => {
    if (number == 0) {
      setProj5((prevState) => ({
        ...prevState,
        proj: !prevState.proj,
      }));
    }
    if (number == 1) {
      setProj5((prevState) => ({
        ...prevState,
        proj1: !prevState.proj1,
      }));
    }
    if (number == 2) {
      setProj5((prevState) => ({
        ...prevState,
        proj2: !prevState.proj2,
      }));
    }
    if (number == 3) {
      setProj5((prevState) => ({
        ...prevState,
        proj3: !prevState.proj3,
      }));
    }
    if (number == 4) {
      setProj5((prevState) => ({
        ...prevState,
        proj4: !prevState.proj4,
      }));
    }
    if (number == 5) {
      setProj5((prevState) => ({
        ...prevState,
        proj5: !prevState.proj5,
      }));
    }
  };
  const handleProj3 = (number) => {
    if (number == 1) {
      setProj3((prevState) => ({
        ...prevState,
        proj1: !prevState.proj1,
      }));
    }
    if (number == 2) {
      setProj3((prevState) => ({
        ...prevState,
        proj2: !prevState.proj2,
      }));
    }
    if (number == 3) {
      setProj3((prevState) => ({
        ...prevState,
        proj3: !prevState.proj3,
      }));
    }
    if (number == 4) {
      setProj3((prevState) => ({
        ...prevState,
        proj4: !prevState.proj4,
      }));
    }
    if (number == 5) {
      setProj3((prevState) => ({
        ...prevState,
        proj5: !prevState.proj5,
      }));
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
          {/* <h1>Our milestones</h1> */}
          {/* <div className="milestones">
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
      </div> */}
          <div className="project-about" data-aos="zoom-out-up">
            <h2>Introduction</h2>
            <p>
              5Pillars Academy is an online platform designed to help Muslims
              worldwide learn, connect, and grow. Using technology, we provide a
              range of resources to support personal development and strengthen
              faith. Our mission is to make it easy for you to access the tools
              needed to become a better muslim. <br /> 5Pillars Academy is
              founded on five fundamental pillars, carefully crafted to assist
              you in strengthening your faith and living a purposeful life.
              These pillars have been developed with the guidance and insights
              of distinguished scholars and experts in the field.
            </p>
          </div>
          <div className="project-list">
            <div
              className={`first-project proj ${showProj1 ? "expandProj" : ""}`}
            >
              <h3>The online Quran Learning Project</h3>
              <p>
                The Online Quran Project is led by a team of dedicated
                individuals who are passionate about spreading the teachings of
                the Quran. We understand that in today's fast-paced world,
                finding the time and resources to learn the Quran can be
                challenging. That is why wehave developed an innovative online
                platform that allows you to embark on this journey from the
                comfort of your own home.
              </p>
              {showProj1 && (
                <p>
                  Our project boasts highly experienced and qualified tutors who
                  are ready to guide you through your Quranic learning
                  experience. Whether you are a busy professional, a student
                  with a demanding schedule, or a full-time parent, our flexible
                  online classes can be accessed from anywhere and at any time.
                  What sets us apart is our commitment to providing personalized
                  one-on-one sessions, ensuring that your learning needs are met
                  with utmost attention and care covering Qaida, Quran
                  Recitation & Hifdh programs.
                </p>
              )}
              <button onClick={handleProj1}>
                {showProj1 ? "Read Less" : "Read More"}
              </button>
            </div>
            <div
              className={`second-project proj ${showProj2 ? "expandProj" : ""}`}
            >
              <h3>The Ilm Project</h3>
              <p>
                At the heart of our mission lies the recognition of the
                fundamental role of Islamic education in shaping individuals and
                communities, fostering spiritual growth, and nurturing a deep
                understanding of the rich Islamic heritage. Our Academy offers a
                comprehensive curriculum carefully designed to cater to students
                of all ages and levels of knowledge. We understand that a
                well-rounded Islamic
              </p>
              {showProj2 && (
                <p>
                  education encompasses a wide range of subjects, and as such,
                  we have collated a diverse set of courses to cater to your
                  learning needs. One of the core components of our curriculum
                  is the study of the Arabic language. Arabic is not only the
                  language of the Qur'an, but it is also a gateway to
                  understanding the profound beauty and depth of Islamic texts.
                  Through our Arabic Language courses, students will develop a
                  strong foundation in reading, writing, and speaking Arabic,
                  enabling them to engage with the Qur'an, Hadith, and other
                  Islamic literature with greater fluency and comprehension. In
                  addition to Arabic, we offer in-depth studies in various
                  disciplines such as Fiqh (Islamic Jurisprudence), Thafseer
                  (Qur'anic Exegesis), Hadith (Prophetic Traditions), and
                  Islamic History. Our Fiqh courses provide a comprehensive
                  understanding of the principles and rulings that govern the
                  daily lives of Muslims, empowering students to navigate the
                  complexities of contemporary issues and make informed
                  decisions based on Islamic teachings. The study of Thafseer
                  delves into the profound meanings and interpretations of the
                  Qur'an, unraveling its timeless wisdom and relevance to our
                  lives. Through engaging with the explanations of scholars and
                  reflecting on the Divine message, students gain a deeper
                  appreciation for the spiritual and moral guidance offered by
                  the Qur'an. Our Hadith courses delve into the Prophetic
                  traditions, allowing students to explore the noble character
                  and teachings of the Prophet Muhammad (peace be upon him). By
                  studying authentic narrations and the methodology of Hadith
                  scholars, students develop a comprehensive understanding of
                  the Prophetic tradition and its application in their lives.
                  Furthermore, our curriculum includes courses on Islamic
                  History, which provide a contextual understanding of the
                  development and contributions of Muslims throughout history.
                  By studying the accomplishments and challenges faced by the
                  early Muslim community, students gain insights into the
                  lessons learned and the principles that guide us today.
                </p>
              )}
              <button onClick={handleProj2}>
                {showProj2 ? "Read Less" : "Read More"}
              </button>
            </div>
            <div
              className={`third-project proj ${
                showProj3.proj1 ||
                showProj3.proj2 ||
                showProj3.proj3 ||
                showProj3.proj4 ||
                showProj3.proj5
                  ? "expandProj"
                  : ""
              }`}
            >
              <h3>Islamic Lifestyle Project</h3>

              <p onClick={() => handleProj3(1)} className="list">
                • Empowering Muslims in Today's World
              </p>
              {showProj3.proj1 && (
                <p>
                  The Islamic Lifestyle Project strives to empower Muslims by
                  addressing their unique challenges in the modern world. We
                  offer guidance, support, and resources to help individuals
                  navigate their journey with Islam, strengthen families,
                  nurture young couples, and promote holistic health and
                  well-being.
                </p>
              )}
              <p onClick={() => handleProj3(2)} className="list">
                • Navigating the Modern World with Islam in Their Hearts
              </p>
              {showProj3.proj2 && (
                <>
                  <p>
                    - Youth Challenges and Guidance: Supporting young Muslims in
                    facing the complexities of today's society while remaining
                    steadfast in their faith.
                  </p>
                  <p>
                    - Embracing Islam: Resources and courses tailored for new
                    Muslims, providing them with the necessary tools and support
                    to navigate their journey of embracing Islam
                  </p>
                  <p>
                    - Cultural Integration: Assisting new Muslims in adapting to
                    Islamic practices and fostering connections within Muslim
                    communities.
                  </p>
                  <p>
                    - Premarital Guidance : Educating individuals on managing
                    expectations in married life and their spouse.
                  </p>
                </>
              )}
              <p onClick={() => handleProj3(3)} className="list">
                • Strengthening Families and Overcoming Challenges
              </p>
              {showProj3.proj3 && (
                <>
                  <p>
                    - Building Strong Bonds: Guidance for families to foster
                    positive communication, strengthen relationships, and
                    nurture Islamic values within the household
                  </p>
                  <p>
                    - Parenting with Islamic Principles: Providing resources and
                    advice on raising children in
                  </p>
                  <p>
                    - Conflict Resolution: Tools and strategies to help families
                    navigate conflicts and maintain harmony in the family unit.
                  </p>
                </>
              )}
              <p onClick={() => handleProj3(4)} className="list">
                • Nurturing Young Married Couples in their Journey
              </p>
              {showProj3.proj4 && (
                <>
                  <p>
                    - Newlywed Guidance: Supporting young married couples with
                    resources on effective communication, conflict resolution,
                    and spiritual growth within the context of marriage.
                  </p>
                  <p>
                    - Relationship Building: Promoting a healthy and fulfilling
                    relationship grounded in Islamic principles, fostering love,
                    understanding, and support.
                  </p>
                  <p>
                    - Balancing Life Together: Assisting couples in navigating
                    the challenges of married life while maintaining a strong
                    connection to their faith.
                  </p>
                </>
              )}
              <p onClick={() => handleProj3(5)} className="list">
                • Health and Well-being in an Islamic Lifestyle
              </p>
              {showProj3.proj5 && (
                <>
                  <p>
                    - Holistic Health: Resources and courses that emphasize the
                    importance of physical, mental, and spiritual well-being in
                    leading a balanced Islamic lifestyle.
                  </p>
                  <p>
                    - Mindful Practices: Encouraging the incorporation of
                    reflection and gratitude into daily routines to enhance
                    overall well-being.
                  </p>
                  <p>
                    - Community Support: Creating a supportive community where
                    individuals can connect, share experiences, and find
                    encouragement in their pursuit of health and well-being.
                  </p>
                </>
              )}
            </div>
            <div
              className={`fourth-project proj ${
                showProj4.proj ? "expandProj" : ""
              }`}
            >
              <h3>Counseling & Consultation</h3>
              <p>
                With Islamic Sharia firmly in mind we will offer the following
                services to our community : Fatwa, Life Coaching, Legal Advice,
                Islamic Finance and Career & Academic guidance Weare dedicated
                to providing a range of services to our community, keeping
                Islamic Sharia at the forefront of everything we do. With a deep
                understanding of Islamic principles and teachings, we aim to
                assist individuals in various aspects of their lives. Here are
                the services we offer:
              </p>
              {showProj4.proj && (
                <>
                  <p className="list" onClick={() => handleProj4(1)}>
                    • Fatwa
                  </p>
                  {showProj4.proj1 && (
                    <p>
                      Our team of knowledgeable scholars and experts are
                      available to provide guidance on matters related to
                      Islamic law. We understand the importance of seeking
                      reliable and accurate answers to questions concerning
                      religious practices, rituals, and ethical dilemmas. Our
                      fatwa service ensures that individuals receive
                      well-grounded and reliable answers based on the principles
                      of Islamic Sharia.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj4(2)}>
                    • Life Coaching
                  </p>
                  {showProj4.proj2 && (
                    <p>
                      We recognize the challenges individuals face in their
                      personal and spiritual development. Our life coaching
                      service aims to support individuals in aligning their
                      lives with Islamic values, cultivating personal growth,
                      and enhancing their relationship with Allah. Our
                      experienced life coaches provide guidance, motivation, and
                      strategies to help individuals overcome obstacles, set
                      meaningful goals, and lead a purposeful life.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj4(3)}>
                    • Legal Advice
                  </p>
                  {showProj4.proj3 && (
                    <p>
                      Understanding the intricacies of legal matters can be
                      daunting, especially when trying to navigate them within
                      an Islamic framework. Our legal advisors specialize in
                      providing Islamic perspectives on various legal issues,
                      ensuring compliance with both civil law and Islamic
                      principles. Whether it's family law, contracts,
                      inheritance, or other legal concerns, our experts provide
                      tailored advice while considering the Islamic legal
                      framework.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj4(4)}>
                    • Islamic Finance
                  </p>
                  {showProj4.proj4 && (
                    <p>
                      We offer comprehensive guidance on Islamic financial
                      principles and products. Our team of experts assists
                      individuals in making informed decisions regarding
                      banking, investment, mortgages, and other financial
                      matters, all in accordance with Islamic principles.
                      Whether you are an individual seeking personal financial
                      advice or a business looking to align your operations with
                      Islamic finance, we are here to provide the necessary
                      support and expertise
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj4(5)}>
                    • Career & Academic Guidance
                  </p>
                </>
              )}

              {showProj4.proj5 && (
                <p>
                  Our career and academic guidance service aims to assist
                  individuals in navigating professional and educational choices
                  while remaining true to their Islamic values. We provide
                  career counseling, job search support, resume building,
                  interview preparation, and advice on pursuing education or
                  vocational training. Our guidance combines practical expertise
                  with an understanding of Islamic principles to help
                  individuals make well-informed decisions about their academic
                  and professional paths.
                </p>
              )}
              <button onClick={() => handleProj4(0)}>
                {showProj4.proj ? "Read Less" : "Read More"}
              </button>
            </div>
            <div
              className={`fifth-project proj ${
                showProj5.proj ? "expandProj" : ""
              }`}
            >
              <h3>Giving Back (Charity & Community Work)</h3>
              <p>
                Giving back is at the heart of the founders vision, It
                encompasses various areas such as charity, youth work,
                rehabilitation, education, and healthcare. By actively engaging
                in these endeavors, we not only fulfill our religious and moral
                obligations but also contribute to creating a more compassionate
                and inclusive society
              </p>

              {showProj5.proj && (
                <>
                  <p className="list" onClick={() => handleProj5(1)}>
                    • Charity: Extending a Helping Hand to Those in Need
                  </p>
                  {showProj5.proj1 && (
                    <p>
                      Charity forms a crucial aspect of giving back to the
                      Muslim community. It involves providing financial and
                      material assistance to those in need, such as the poor,
                      orphans, widows, and refugees. The act of giving charity,
                      known as "Sadaqah" in Islam, is highly valued and
                      considered a means of purifying wealth and seeking
                      closeness to Allah. Through our own funding & charitable
                      donations, we aim to make a tangible impact by addressing
                      poverty, hunger, and other pressing social issues
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj5(2)}>
                    • Youth Work: Empowering the Next Generation
                  </p>
                  {showProj5.proj2 && (
                    <p>
                      Youth work is another integral component of us giving
                      back.We recognize the importance of nurturing the younger
                      generation, efforts are made to provide guidance,
                      mentorship, and positive role models to Muslim youth. This
                      can include organizing youth camps, workshops, and
                      educational programs aimed at fostering personal
                      development, character building, leadership skills, and a
                      strong Islamic identity. By empowering young Muslims, we
                      enable them to become active contributors to their
                      communities and agents of positive change.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj5(3)}>
                    • Rehabilitation: Providing Second Chances and Support
                  </p>
                  {showProj5.proj3 && (
                    <p>
                      Rehabilitation is a vital aspect of giving back,
                      especially in contexts where individuals may have faced
                      challenges such as addiction or involvement in criminal
                      activities. Through rehabilitation programs, we will
                      provide support to those seeking to reintegrate into
                      society, offering them a second chance and promoting a
                      path towards spiritual, emotional, and physical
                      well-being. Such initiatives may involve counseling,
                      vocational training, and community support networks,
                      aiming to empower individuals to rebuild their lives.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj5(4)}>
                    • Education: Nurturing Minds and Fostering Growth
                  </p>
                  {showProj5.proj4 && (
                    <p>
                      Education plays a central role in giving back to the
                      Muslim community. It involves ensuring access to quality
                      education for all, regardless of socio-economic
                      backgrounds. We will focus on establishing and supporting
                      educational institutions, scholarship programs, and
                      initiatives that promote literacy and intellectual growth.
                      By investing in education, we aim to equip individuals
                      with the knowledge and skills necessary to contribute
                      meaningfully to society, fostering progress and
                      development.
                    </p>
                  )}
                  <p className="list" onClick={() => handleProj5(5)}>
                    • Healthcare: Promoting Well-being and Preserving Life
                  </p>
                  {showProj5.proj5 && (
                    <p>
                      Healthcare is another vital area of giving back.
                      Accessible and affordable healthcare is crucial for the
                      well-being of individuals and communities. Initiatives may
                      include establishing clinics, hospitals, and healthcare
                      centers that cater to the specific needs of Muslim
                      populations. Our efforts will encompass providing medical
                      aid, conducting health awareness campaigns, and supporting
                      research and development in areas relevant to Muslim
                      health concerns. By prioritizing healthcare, we uphold the
                      Islamic principle of preserving and enhancing life.
                    </p>
                  )}
                </>
              )}

              <button onClick={() => handleProj5(0)}>
                {showProj5.proj ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default Projects;
