import React, { useState } from "react";
import Navbar from "./Navbar";
import "../Css/Projects.css";
const Projects = () => {
  const [showProj1, setProj1] = useState(false);
  const [showProj2, setProj2] = useState(false);
  return (
    <>
      <div className="background" />

      <div className="other-nav">
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
      <div className="project-about">
        <h2>Introduction</h2>
        <p>
          5Pillars Academy is an online platform designed to help Muslims
          worldwide learn, connect, and grow. Using technology, we provide a
          range of resources to support personal development and strengthen
          faith. Our mission is to make it easy for you to access the tools
          needed to become a better muslim. <br /> 5Pillars Academy is founded
          on five fundamental pillars, carefully crafted to assist you in
          strengthening your faith and living a purposeful life. These pillars
          have been developed with the guidance and insights of distinguished
          scholars and experts in the field.
        </p>
      </div>
      <div className="project-list">
        <div className="first-project proj">
          <h3>The online Quran Learning Project</h3>
          <p>
            The Online Quran Project is led by a team of dedicated individuals
            who are passionate about spreading the teachings of the Quran. We
            understand that in today's fast-paced world, finding the time and
            resources to learn the Quran can be challenging. That is why wehave
            developed an innovative online platform that allows you to embark on
            this journey from the comfort of your own home.
          </p>
          {showProj1 && (
            <p>
              Our project boasts highly experienced and qualified tutors who are
              ready to guide you through your Quranic learning experience.
              Whether you are a busy professional, a student with a demanding
              schedule, or a full-time parent, our flexible online classes can
              be accessed from anywhere and at any time. What sets us apart is
              our commitment to providing personalized one-on-one sessions,
              ensuring that your learning needs are met with utmost attention
              and care covering Qaida, Quran Recitation & Hifdh programs.
            </p>
          )}
          <button>{showProj1 ? "Read Less" : "Read More"}</button>
        </div>
        <div className="second-project proj">
          <h3>The Ilm Project</h3>
          <p>
            At the heart of our mission lies the recognition of the fundamental
            role of Islamic education in shaping individuals and communities,
            fostering spiritual growth, and nurturing a deep understanding of
            the rich Islamic heritage. Our Academy offers a comprehensive
            curriculum carefully designed to cater to students of all ages and
            levels of knowledge. We understand that a well-rounded Islamic
          </p>
          {showProj2 && (
            <p>
              education encompasses a wide range of subjects, and as such, we
              have collated a diverse set of courses to cater to your learning
              needs. One of the core components of our curriculum is the study
              of the Arabic language. Arabic is not only the language of the
              Qur'an, but it is also a gateway to understanding the profound
              beauty and depth of Islamic texts. Through our Arabic Language
              courses, students will develop a strong foundation in reading,
              writing, and speaking Arabic, enabling them to engage with the
              Qur'an, Hadith, and other Islamic literature with greater fluency
              and comprehension. In addition to Arabic, we offer in-depth
              studies in various disciplines such as Fiqh (Islamic
              Jurisprudence), Thafseer (Qur'anic Exegesis), Hadith (Prophetic
              Traditions), and Islamic History. Our Fiqh courses provide a
              comprehensive understanding of the principles and rulings that
              govern the daily lives of Muslims, empowering students to navigate
              the complexities of contemporary issues and make informed
              decisions based on Islamic teachings. The study of Thafseer delves
              into the profound meanings and interpretations of the Qur'an,
              unraveling its timeless wisdom and relevance to our lives. Through
              engaging with the explanations of scholars and reflecting on the
              Divine message, students gain a deeper appreciation for the
              spiritual and moral guidance offered by the Qur'an. Our Hadith
              courses delve into the Prophetic traditions, allowing students to
              explore the noble character and teachings of the Prophet Muhammad
              (peace be upon him). By studying authentic narrations and the
              methodology of Hadith scholars, students develop a comprehensive
              understanding of the Prophetic tradition and its application in
              their lives. Furthermore, our curriculum includes courses on
              Islamic History, which provide a contextual understanding of the
              development and contributions of Muslims throughout history. By
              studying the accomplishments and challenges faced by the early
              Muslim community, students gain insights into the lessons learned
              and the principles that guide us today.
            </p>
          )}
          <button>{showProj2 ? "Read Less" : "Read More"}</button>
        </div>
        <div className="third-project proj">
          <h3>Islamic Lifestyle Project</h3>

          <p>• Empowering Muslims in Today's World</p>
          <p>• Navigating the Modern World with Islam in Their Hearts</p>
          <p>• Strengthening Families and Overcoming Challenges</p>
          <p>• Nurturing Young Married Couples in their Journey</p>
          <p>• Health and Well-being in an Islamic Lifestyle</p>
        </div>
        <div className="fourth-project proj">
          <h3>Counseling & Consultation</h3>
          <p>
            With Islamic Sharia firmly in mind we will offer the following
            services to our community : Fatwa, Life Coaching, Legal Advice,
            Islamic Finance and Career & Academic guidance Weare dedicated to
            providing a range of services to our community, keeping Islamic
            Sharia at the forefront of everything we do. With a deep
            understanding of Islamic principles and teachings, we aim to assist
            individuals in various aspects of their lives. Here are the services
            we offer:
          </p>
        </div>
        <div className="fifth-project proj">
          <h3>Giving Back (Charity & Community Work)</h3>
          <p>
            Giving back is at the heart of the founders vision, It encompasses
            various areas such as charity, youth work, rehabilitation,
            education, and healthcare. By actively engaging in these endeavors,
            we not only fulfill our religious and moral obligations but also
            contribute to creating a more compassionate and inclusive society
          </p>
        </div>
      </div>
    </>
  );
};
export default Projects;
