import "../Css/EnrolForm.css";
import React, { useState } from "react";
import Navbar from "./Navbar";

const EnrolForm = () => {
  const [isParent, setIsParent] = useState(true);
  const [parentData, setParentData] = useState({
    parentFName: "",
    parentLName: "",
    phone: "",
    email: "",
    country: "",
    relationship: "",
    firstName: "",
    surname: "",
    gender: "",
    dob: "",
    agree: false,
  });
  const [studentData, setStudentData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    country: "",
    agree: false,
  });

  const handleFormChange = (e, formType) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    if (formType === "parent") {
      setParentData({ ...parentData, [name]: fieldValue });
    } else {
      setStudentData({ ...studentData, [name]: fieldValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data in the database or perform any other desired action
    console.log("Parent Data:", parentData);
    console.log("Student Data:", studentData);
    // Reset the form fields
    setParentData({
      parentFName: "",
      parentLName: "",
      phone: "",
      email: "",
      country: "",
      relationship: "",
      firstName: "",
      surname: "",
      gender: "",
      dob: "",
      agree: false,
    });
    setStudentData({
      firstName: "",
      surname: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
      country: "",
      agree: false,
    });
  };

  const toggleForm = (isParent) => {
    setIsParent(isParent);
  };

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={`toggle-button ${isParent ? "active" : ""}`}
            onClick={() => toggleForm(true)}
          >
            As a Parent
          </button>
          <button
            className={`toggle-button ${isParent ? "" : "active"}`}
            onClick={() => toggleForm(false)}
          >
            As a Student
          </button>
        </div>

        <div className={`form-wrapper ${isParent ? "show" : ""}`}>
          <form className="parent-form" onSubmit={handleSubmit}>
            <div className="parent-details">
              <h1>Your details (parent/Guardian)</h1>

              <div className="form-group">
                <label htmlFor="parentFName">First Name:</label>
                <input
                  type="text"
                  id="parentFName"
                  name="parentFName"
                  value={parentData.parentFName}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="parentLName">Last Name:</label>
                <input
                  type="text"
                  id="parentLName"
                  name="parentLName"
                  value={parentData.parentLName}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Mobile Number (with Country Code):
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={parentData.phone}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={parentData.email}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmEmail"> Confirm Email Address:</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  // value={formData.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country"> Country of Residnce:</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={parentData.country}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="relationship">Relationship to student:</label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={parentData.relationship}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
            </div>

            <div className="student-details">
              <h1>Your Child's details</h1>
              <div className="form-group">
                <label htmlFor="relationship">Your Child's firstName:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={parentData.firstName}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="relationship">Your Child's surname:</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={parentData.surname}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  value={parentData.gender}
                  onChange={(e) => handleFormChange(e, "parent")}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dob">Your Child's DOB:</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={parentData.dob}
                  onChange={(e) => handleFormChange(e, "parent")}
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={parentData.agree}
                    onChange={(e) => handleFormChange(e, "parent")}
                  />
                  I agree to the terms and conditions
                </label>
                {/* {errors.agree && <span className="error">{errors.agree}</span>}
              <Link
                to="/condition"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <li>Terms & Conditions</li>
              </Link> */}
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={`form-wrapper ${!isParent ? "show" : ""}`}>
          <form className="student-form" onSubmit={handleSubmit}>
            <h1>Your details</h1>

            <div className="form-group">
              <label htmlFor="relationship">Your firstName:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={studentData.firstName}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="relationship">Your surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={studentData.surname}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={studentData.gender}
                onChange={(e) => handleFormChange(e, "student")}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Your DOB:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={studentData.dob}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number (with Country Code):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={studentData.phone}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={studentData.email}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmEmail"> Confirm Email Address:</label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                // value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country"> Country of Residnce:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={studentData.country}
                onChange={(e) => handleFormChange(e, "student")}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={studentData.agree}
                  onChange={(e) => handleFormChange(e, "student")}
                />
                I agree to the terms and conditions
              </label>
              {/* {errors.agree && <span className="error">{errors.agree}</span>}
              <Link
                to="/condition"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <li>Terms & Conditions</li>
              </Link> */}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnrolForm;
