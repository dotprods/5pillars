import React, { Component, useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../Css/Register.css";
import Navbar from "./Navbar";
const Register = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    title: "",
    country: "",
    email: "",
    package: "",

    agree: false,
  });

  const [errors, setErrors] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    title: "",
    country: "",
    email: "",
    package: "",
    agree: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { ...errors };

    // Validation logic
    if (formData.gender === "") {
      formIsValid = false;
      newErrors.gender = "Please select a gender";
    }
    if (formData.firstName.trim() === "") {
      formIsValid = false;
      newErrors.firstName = "Please enter your first name";
    }
    if (formData.lastName.trim() === "") {
      formIsValid = false;
      newErrors.lastName = "Please enter your last name";
    }
    if (formData.dateOfBirth === "") {
      formIsValid = false;
      newErrors.dateOfBirth = "Please enter your date of birth";
    }
    if (formData.title === "") {
      formIsValid = false;
      newErrors.title = "Please select a title";
    }
    if (formData.country === "") {
      formIsValid = false;
      newErrors.country = "Please select a country";
    }
    if (formData.email.trim() === "") {
      formIsValid = false;
      newErrors.email = "Please enter your email address";
    } else if (!isValidEmail(formData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.package === "") {
      formIsValid = false;
      newErrors.package = "Please select a package";
    }
    if (!formData.agree) {
      formIsValid = false;
      newErrors.agree = "Please agree to the terms and conditions";
    }

    if (formIsValid) {
      // Perform form submission logic here
      console.log(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="background" />

      <div className="other-nav">
        <Navbar />
      </div>

      <div className="haa"></div>

      <div className="regi-head ">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="miss">Miss.</option>
              <option value="ms">Ms.</option>
              <option value="dr">Dr.</option>
              <option value="other">Other</option>
            </select>
            {errors.title && <span className="error">{errors.title}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <span className="error">{errors.dateOfBirth}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="country">country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="package">Package:</label>
            <select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Qaida">Qaida</option>
              <option value="Quran Recitation 1">Quran Recitation 1</option>
              <option value="Quran Recitation 2">Quran Recitation 2</option>
              <option value="Selected Surahs Hifdh">
                Selected Surahs Hifdh
              </option>
              <option value="Hifdh1">Hifdh1</option>
              <option value="Hifdh2">Hifdh2</option>
            </select>
            {errors.package && <span className="error">{errors.package}</span>}
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />{" "}
              I agree to the terms and conditions
            </label>
            {errors.agree && <span className="error">{errors.agree}</span>}
            <Link
              to="/condition"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <li>Terms & Conditions</li>
            </Link>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
