import React, { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { MdAddIcCall } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

import Loader from "./Loader";
import Navbar from "./Navbar";
import "../Css/Contact.css";
import Footer from "./Footer";
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData2, setFormData2] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });
  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); 
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const fieldValue = value;
    setFormData2((prevData) => ({
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
    if (formData2.fullName === "") {
      formIsValid = false;
      newErrors.fullName = true;
    }
    if (formData2.message.trim() === "") {
      formIsValid = false;
      newErrors.message = true;
    }

    if (formData2.email.trim() === "") {
      formIsValid = false;
      newErrors.email = true;
    } else if (!isValidEmail(formData2.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address";
    }

    if (formIsValid) {
      // Perform form submission logic here
      console.log(formData2);
      handleSuccess();
      setFormData2({
        fullName: "",
        email: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          {showSuccessMessage && (
        <div className="success-message">
          Form submitted successfully!
        </div>
      )}
          <div className="contact-container">
            <div className="contact-form">
              <h1>Leave Us A Message</h1>
              <form className="contactForm" onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input
                    type="textfield"
                    id="fullName"
                    name="fullName"
                    value={formData2.fullName}
                    onChange={handleChange}
                    required="required"
                    className={` ${errors.fullName ? "invalid" : ""}`}
                  ></input>
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input
                    type="textfield"
                    required="required"
                    id="email"
                    name="email"
                    value={formData2.email}
                    onChange={handleChange}
                  ></input>
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea
                    id="message"
                    name="message"
                    value={formData2.message}
                    onChange={handleChange}
                    rows={8}
                    cols={60}
                    required
                  />
                  <span className="message-span">Message</span>
                </div>

                <button className="contact-submit" type="submit">
                  <span className="submit-circle-contact" aria-hidden="true">
                    <span className="icon arrow-contact"></span>
                  </span>
                  <span className="button-text">Send</span>
                </button>
              </form>
            </div>
            {/* <div className="loc-map">
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=20-22%20Wenlock%20Road%20,%20London%20N1%207GU+(5Pillars)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a>
              </iframe>
            </div> */}
          </div>
          <div className="social-cont">
            <div className="social-media">
              <SiGmail size={70} />
              <h2>Mail</h2>
              <p>info@5pillarsacademy.com</p>
            </div>
            <div className="social-media">
              <MdAddIcCall size={70} />
              <h2>Call Us</h2>
              <p>+44 7756393994</p>
            </div>
            {/* <div className="social-media">
              <ImLocation2 size={70} />
              <h2>Location</h2>
              <p>20-22 Wenlock Road , London N1 7GU</p>
            </div> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default ContactUs;
