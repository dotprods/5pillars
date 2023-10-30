import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import "../Css/Webinar.css";
import Footer from "./Footer";

const Webinar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmEmail") {
      setConfirmEmail(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (formData.email !== confirmEmail) {
      newErrors.email = "Emails do not match";
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 

    if (validateForm()) {
      console.log(formData)
      console.log(confirmEmail)
      fetch('"https://www.5pillarsacademy.com/api/addWebinar.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status === 200) {
            setSubmitted(true);
          } else {
            console.error("Failed to submit the form");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
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
          <div>
            {/* {submitted ? (
              <div>Form submitted successfully!</div>
            ) : ( */}
            <div className="webinar-about">
              <h2> Limited places Available </h2>
              <p>
                5 Pillars Academy presents “Parenting with Purpose” a seminar for
                parents, focused on the importance of nurturing and guiding our
                children in the light of Islamic teachings in this modern age.
                <br />  <br /> 
                Teaching our children empathy, kindness, and respect is
                essential. As parents, we are their first and most important role
                models. <br />  <br /> 
                Join us on the 12th & 19th November for a two-part online
                seminar lead by renowned specialist <span>Sheikh Ruzaik Ismath</span> <br /> <br />
                Sign up below! <br />  <br /> 
                Keep an eye out for the confirmation email.
               
              </p>
            </div>
            <div class="form-container-webinar">
            <form onSubmit={handleSubmit} className="form-webinar">
              <div className="form-group-webinar">
                <label className="lable">First Name</label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <div className="error">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group-webinar">
                <label className="lable">Last Name</label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <div className="error">{errors.lastName}</div>
                )}
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
              <div className="form-group-webinar">
                <label className="lable">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
              <div className="form-group-webinar">
                <label className="lable">Confirm Email</label>
                <input
                  className="input"
                  type="email"
                  name="confirmEmail"
                  value={confirmEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group-webinar">
                <label className="lable">Phone</label>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
                <div className="topline"></div>
                <div className="underline"></div>
              </div>
              <button type="submit" className="webinar-Subbtn">Submit</button>
            </form>
            </div>
            {/* )} */}
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default Webinar;
