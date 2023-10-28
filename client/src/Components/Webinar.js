import React, { useState, useEffect } from "react";import Navbar from "./Navbar";
import Loader from "./Loader";

const Webinar=()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        if (formData.firstName.trim() === '') {
          newErrors.firstName = 'First name is required';
          isValid = false;
        }
    
        if (formData.lastName.trim() === '') {
          newErrors.lastName = 'Last name is required';
          isValid = false;
        }
    
        if (formData.email.trim() === '') {
          newErrors.email = 'Email is required';
          isValid = false;
        }
    
        if (formData.phone.trim() === '') {
          newErrors.phone = 'Phone number is required';
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          fetch('YOUR_BACKEND_URL', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              if (response.status === 200) {
                setSubmitted(true);
              } else {
                // Handle other status codes or error responses from the server
                console.error('Failed to submit the form');
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      };

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return(
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
      {submitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
        </>
      )}
        </>
    )
}

export default  Webinar;