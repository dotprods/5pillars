import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../Css/TutorForm.css";

const TutorForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [tutorError, setError] = useState({
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
  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); 
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { ...tutorError };
    if (tutorDetails.firstName === "") {
      formIsValid = false;
      newErrors.firstName = "Please Enter Name";
    }
    if (tutorDetails.surName === "") {
      formIsValid = false;
      newErrors.surName = "Please Enter Name";
    }
    if (tutorDetails.gender === "") {
      formIsValid = false;
      newErrors.gender = "Please Select the gender";
    }
    if (tutorDetails.dob === "") {
      formIsValid = false;
      newErrors.dob = "Please Enter the dob";
    }
    if (tutorDetails.isAalim === "") {
      formIsValid = false;
      newErrors.isAalim = "Please Select one";
    }
    if (tutorDetails.isHifdh === "") {
      formIsValid = false;
      newErrors.isHifdh = "Please Select One";
    }
    if (tutorDetails.qualifications === "") {
      formIsValid = false;
      newErrors.qualifications = "Please Enter some qualifications";
    }
    if (tutorDetails.available.length == 0) {
      formIsValid = false;
      newErrors.available = "Please Select any option";
    }
    if (tutorDetails.isTaughtOnline === "") {
      formIsValid = false;
      newErrors.isTaughtOnline = "Please Select  the option";
    }
    if (tutorDetails.experience === "") {
      formIsValid = false;
      newErrors.experience = "Please select";
    }
    if (tutorDetails.about === "") {
      formIsValid = false;
      newErrors.about = "Please add some details about you";
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
        console.tutorError(tutorError);
      }
      handleSuccess();
      setTutorDetails({
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
      })
    } else {
      setError(newErrors);
      console.log(tutorDetails);
      console.log("tutorError", tutorError);
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
          {showSuccessMessage && (
        <div className="success-message">
          Form submitted successfully!
        </div>
      )}
        <h1 style={{marginBottom:"30px",marginTop:"0px"}}>Tutor registration</h1>
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
                {tutorError.firstName && (
                  <span className="tutorError">{tutorError.firstName}</span>
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
                {tutorError.surName && (
                  <span className="tutorError">{tutorError.surName}</span>
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
                {tutorError.gender && (
                  <span className="tutorError">{tutorError.gender}</span>
                )}
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
                {tutorError.dob && (
                  <span className="tutorError">{tutorError.dob}</span>
                )}
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
                {tutorError.isAalim && (
                  <span className="tutorError">{tutorError.isAalim}</span>
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
                {tutorError.isHifdh && (
                  <span className="tutorError">{tutorError.isHifdh}</span>
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
                {tutorError.qualifications && (
                  <span className="tutorError">
                    {tutorError.qualifications}
                  </span>
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
                {tutorError.available && (
                  <span className="tutorError">{tutorError.available}</span>
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
                {tutorError.isTaughtOnline && (
                  <span className="tutorError">
                    {tutorError.isTaughtOnline}
                  </span>
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
                {tutorError.experience && (
                  <span className="tutorError">{tutorError.experience}</span>
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
                {tutorError.about && (
                  <span className="tutorError">{tutorError.about}</span>
                )}
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
