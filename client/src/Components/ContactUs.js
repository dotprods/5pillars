import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import "../Css/Contact.css";
import Footer from "./Footer";
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="background" />
          <div className="">
            <Navbar />
          </div>
          <div className="blank"></div>
          <div className="contact-container">
            <div className="contact-form">
              <h1>Leave Us A Message</h1>
              <form className="contactForm">
                <div className="inputBox">
                  <input
                    type="textfield"
                    required="required"
                    className="in"
                  ></input>
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="textfield" required="required"></input>
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <input
                    className="bigOne"
                    type="textfield"
                    required="required"
                  ></input>
                  <span>Message</span>
                </div>

                <button className="contact-submit">
                  <span className="submit-circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Send</span>
                </button>
              </form>
            </div>
            <div className="loc-map">
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
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default ContactUs;
