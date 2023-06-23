import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../Css/TutorForm.css";

const TutorForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tutorDtails, setTutorDetails] = useState({
    firstName: "",
    surName: "",
    gender: "",
    dob: "",
    isAalim: "",
    isHifdh: "",
    qualifications: "",
    isTaughtOnline: "",
    available: [],
    experience: "",
    about: "",
  });
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTutorDetails((prevState) => ({
        ...prevState,
        available: [...prevState.available, value],
      }));
    } else {
      setTutorDetails((prevState) => ({
        ...prevState,
        available: prevState.available.filter((day) => day !== value),
      }));
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tutorDtails);
  };
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
          <div className="tutor-form-container">
            <form className="tutor-form" onSubmit={handleSubmit}>
              <div className="tutor-form-group">
                <label htmlFor="email">First Name</label>
                <input type="text"></input>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text"></input>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender">
                  <option value="">select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="date">Date of birth</label>
                <input type="date"></input>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="Aalim">Aalim?</label>
                <select id="Aalim" name="Aalim">
                  <option value="">select </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="hifdth">Hifdth</label>
                <select id="hifdth" name="hifdth">
                  <option value="">select</option>
                  <option value="Complete">Complete</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="textarea">Additional Qualifications</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="6"
                  cols="30"
                  required=""
                ></textarea>
              </div>
              <div className="tutor-form-group">
                <label htmlFor="days">Days Available to teach</label>
                <div className="checkBoxes">
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Monday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Monday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Tuesday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Tuesday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Wednesday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Wednesday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Thursday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Thursday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Friday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Friday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Saturday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Saturday</label>
                  </div>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      value="Sunday"
                      onChange={handleCheckboxChange}
                    />
                    <label className="cb"> Sunday</label>
                  </div>
                </div>
              </div>

              <div className="tutor-form-group">
                <label htmlFor="online">Have taught online</label>
                <select id="online" name="online">
                  <option value="">select </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="tutor-form-group">
                <label htmlFor="experience">Teaching Experience</label>
                <select id="experience" name="experience">
                  <option value="">select </option>
                  <option value="1-3 years">1-3 Years</option>
                  <option value="4-6 years">4-6 Years</option>
                  <option value="7+ years">7+ Years</option>
                </select>
              </div>

              <div className="tutor-form-group">
                <label htmlFor="textarea">About you?</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows="10"
                  cols="50"
                  required=""
                ></textarea>
              </div>
              <button className="tutor-form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default TutorForm;
