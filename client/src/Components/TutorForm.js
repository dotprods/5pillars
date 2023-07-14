import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../Css/TutorForm.css";

const TutorForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    firstName: "",
    surName: "",
    gender: "",
    dob: "",
    isAalim: "",
    isHifdh: "",
    qualifications: "",
    isTaughtOnline: "",
    available: "",
    experience: "",
    about: "",
  });
  const [tutorDetails, setTutorDetails] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { ...error };
    if (tutorDetails.firstName === "") {
      formIsValid = false;
      error.firstName = "Please Enter Name";
    }
    if (tutorDetails.surName === "") {
      formIsValid = false;
      error.surName = "Please Enter Name";
    }
    if (tutorDetails.gender === "") {
      formIsValid = false;
      error.gender = "Please Select the gender";
    }
    if (tutorDetails.dob === "") {
      formIsValid = false;
      error.dob = "Please Enter the dob";
    }
    if (tutorDetails.isAalim === "") {
      formIsValid = false;
      error.isAalim = "Please Select one";
    }
    if (tutorDetails.isHifdh === "") {
      formIsValid = false;
      error.isHifdh = "Please Select One";
    }
    if (tutorDetails.qualifications === "") {
      formIsValid = false;
      error.qualifications = "Please Enter some qualifications";
    }
    if (tutorDetails.available.length == 0) {
      formIsValid = false;
      error.available = "Please Select any option";
    }
    if (tutorDetails.isTaughtOnline === "") {
      formIsValid = false;
      error.isTaughtOnline = "Please Select  the option";
    }
    if (tutorDetails.experience === "") {
      formIsValid = false;
      error.experience = "Please select";
    }
    if (tutorDetails.about === "") {
      formIsValid = false;
      error.about = "Please add some details about you";
    }
    // If the form is valid, submit it
    if (formIsValid) {
      console.log(tutorDetails);
      try {
        fetch("https://www.5pillarsacademy.com/api/addTutor.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tutorDetails),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(tutorDetails);
      console.log("error", error);
    }
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = value;
    setTutorDetails({ ...tutorDetails, [name]: fieldValue });
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
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
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={tutorDetails.firstName}
                  onChange={(e) => handleFormChange(e)}
                ></input>
                {error.firstName && (
                  <span className="error">{error.firstName}</span>
                )}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="surName"
                  name="surName"
                  value={tutorDetails.surName}
                  onChange={(e) => handleFormChange(e)}
                ></input>
                {error.surName && (
                  <span className="error">{error.surName}</span>
                )}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={tutorDetails.gender}
                  onChange={(e) => handleFormChange(e)}
                >
                  <option value="">select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {error.gender && <span className="error">{error.gender}</span>}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="date">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={tutorDetails.dob}
                  onChange={(e) => handleFormChange(e)}
                ></input>
                {error.dob && <span className="error">{error.dob}</span>}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="Aalim">Aalim?</label>
                <select
                  id="isAalim"
                  name="isAalim"
                  value={tutorDetails.isAalim}
                  onChange={(e) => handleFormChange(e)}
                >
                  <option value="">select </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {error.isAalim && (
                  <span className="error">{error.isAalim}</span>
                )}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="hifdth">Hifdth</label>
                <select
                  id="isHifdh"
                  name="isHifdh"
                  value={tutorDetails.isHifdh}
                  onChange={(e) => handleFormChange(e)}
                >
                  <option value="">select</option>
                  <option value="Complete">Complete</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="no">No</option>
                </select>
                {error.isHifdh && (
                  <span className="error">{error.isHifdh}</span>
                )}
              </div>
              <div className="tutor-form-group">
                <label htmlFor="textarea">Additional Qualifications</label>
                <textarea
                  name="qualifications"
                  id="qualifications"
                  rows="6"
                  cols="30"
                  required=""
                  value={tutorDetails.qualifications}
                  onChange={(e) => handleFormChange(e)}
                ></textarea>
                {error.qualifications && (
                  <span className="error">{error.qualifications}</span>
                )}
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
                {error.available && (
                  <span className="error">{error.available}</span>
                )}
              </div>

              <div className="tutor-form-group">
                <label htmlFor="online">Have taught online</label>
                <select
                  id="isTaughtOnline"
                  name="isTaughtOnline"
                  value={tutorDetails.isTaughtOnline}
                  onChange={(e) => handleFormChange(e)}
                >
                  <option value="">select </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {error.isTaughtOnline && (
                  <span className="error">{error.isTaughtOnline}</span>
                )}
              </div>

              <div className="tutor-form-group">
                <label htmlFor="experience">Teaching Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={tutorDetails.experience}
                  onChange={(e) => handleFormChange(e)}
                >
                  <option value="">select </option>
                  <option value="1-3 years">1-3 Years</option>
                  <option value="4-6 years">4-6 Years</option>
                  <option value="7+ years">7+ Years</option>
                </select>
                {error.experience && (
                  <span className="error">{error.experience}</span>
                )}
              </div>

              <div className="tutor-form-group">
                <label htmlFor="textarea">About you?</label>
                <textarea
                  name="about"
                  id="about"
                  rows="10"
                  cols="50"
                  required=""
                  value={tutorDetails.about}
                  onChange={(e) => handleFormChange(e)}
                ></textarea>
                {error.about && <span className="error">{error.about}</span>}
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
