import "../Css/EnrolForm.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import {
  Link,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

const EnrolForm = () => {
  const [searchparams] = useSearchParams();
  const [showTerms, setShowTerms] = useState(false);
  const [sChecked, setSChecked] = useState(false);
  const [pChecked, setPChecked] = useState(false);
  const prevPackage = searchparams.get("package");
  const prevAmount = searchparams.get("fee");
  const [isLoading, setIsLoading] = useState(true);
  const [isParent, setIsParent] = useState(true);
  const [amount, setAmount] = useState(7);
  const [packages, setPackage] = useState("Qaida");
  const sessionURLs = {
    "Qaida-Session 1": "https://buy.stripe.com/test_8wM8xL3mU83X1zi28b",
    "Qaida-Session 2": "https://buy.stripe.com/test_aEU15j1eMac5fq800i",
    "Qaida-Session 3": "https://buy.stripe.com/test_14k15j4qY3NH2Dm3ct",
    "Qaida-Session 4": "https://buy.stripe.com/test_aEU5lzaPm2JDfq87sI",
    "Quran Recitation-Session 1":
      "https://buy.stripe.com/test_4gw15jaPm6ZT5PyfZd",
    "Quran Recitation-Session 2":
      "https://buy.stripe.com/test_6oE8xLbTq2JD6TC9AO",
    "Quran Recitation-Session 3":
      "https://buy.stripe.com/test_eVadS58Hefwpfq86oB",
    "Quran Recitation-Session 4":
      "https://buy.stripe.com/test_6oEcO1cXu981fq83co",
    "Selected Surah Hifdh-Session 1":
      "https://buy.stripe.com/test_fZeeW96z6fwp2Dm3ck",
    "Selected Surah Hifdh-Session 2":
      "https://buy.stripe.com/test_00g29n7DaeslgucdQZ",
    "Selected Surah Hifdh-Session 3":
      "https://buy.stripe.com/test_cN26pDcXu6ZTa5O6oy",
    "Selected Surah Hifdh-Session 4":
      "https://buy.stripe.com/test_fZe01f0aIesl6TC4gr",
    "Hifdh-Sesson 1": "https://buy.stripe.com/4gw8xL1eMesl5Py3cj",
    "Hidth-Session 2": "https://buy.stripe.com/test_28oeW92iQ0Bv91K14a",
    "Hifdh-Session 3": "https://buy.stripe.com/test_fZeaFT3mU83X91K3ch",
    "Hidth-Session 4": "https://buy.stripe.com/test_8wMdS5bTqfwp1zi3cg",
  };
  const [pErrors, setPErrors] = useState({
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
  });
  const [sErrors, setSErrors] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    country: "",
  });

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
  });
  const [studentData, setStudentData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    country: "",
  });
  useEffect(() => {
    setAmount(prevAmount);
    setPackage(prevPackage);
    console.log(packages);
  }, [prevAmount, prevPackage]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleSTermsAndCondition = () => {
    setSChecked(true);
    console.log("Student: ", sChecked);
    setShowTerms(!showTerms);
  };
  const handlePTermsAndCondition = () => {
    setPChecked(true);
    console.log("parent: ", pChecked);
  };
  const handleShowTerms = () => {
    setShowTerms(!showTerms);
  };

  const handleFormChange = (e, formType) => {
    const { name, value } = e.target;
    const fieldValue = value;
    if (formType === "parent") {
      setParentData({ ...parentData, [name]: fieldValue });
      setPErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } else {
      setStudentData({ ...studentData, [name]: fieldValue });
      setSErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmitParent = async(e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { ...pErrors };
    // Store the data in the database or perform any other desired action
    if (!sChecked) {
      formIsValid = false;
      setShowTerms(true);
    }

    if (parentData.parentFName === "") {
      formIsValid = false;
      newErrors.parentFName = "Please Enter Name";
    }
    if (parentData.parentLName === "") {
      formIsValid = false;
      newErrors.parentLName = "Please Enter Name";
    }
    if (parentData.phone === "") {
      formIsValid = false;
      newErrors.phone = "Please Enter Phone Number";
    }
    if (parentData.email.trim() === "") {
      formIsValid = false;
      newErrors.email = "Please Enter Email";
    } else if (!isValidEmail(parentData.email)) {
      formIsValid = false;
      newErrors.email = "please Enter Valid email";
    }
    if (parentData.country === "") {
      formIsValid = false;
      newErrors.country = "Please Select Your Country";
    }
    if (parentData.relationship === "") {
      formIsValid = false;
      newErrors.relationship = "Please Enter Your relationship";
    }
    if (parentData.firstName === "") {
      formIsValid = false;
      newErrors.firstName = "Please Enter Your child's  Name";
    }
    if (parentData.surname === "") {
      formIsValid = false;
      newErrors.surname = "Please Enter Your child's  SurName";
    }
    if (parentData.gender === "") {
      formIsValid = false;
      newErrors.gender = "Please Enter Your child's  gender";
    }
    if (parentData.dob === "") {
      formIsValid = false;
      newErrors.dob = "Please Enter Your child's  dob";
    }
    if (formIsValid && sChecked) {
      // Perform form submission logic here
      console.log(parentData);
      console.log("Package is: ", packages);
      console.log("Amount is: ", amount);
      const packageURL = sessionURLs[packages];
      console.log("Package URL is: ", packageURL);
      try {
        fetch('https://www.5pillarsacademy.com/api/addParentStudent.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(parentData)
      })
      .then(response => response.json())
      .then(data => console.log(data));
      } catch (error) {
        console.error(error);
      }
      if (packageURL) {
        window.location.href = packageURL;
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
        });
      } else {
        console.error("Invalid package: ", packages);
      }
    } else {
      setPErrors(newErrors);
    }
  };
  const handleSubmitStudent = async(e) => {
    e.preventDefault();
    // Store the data in the database or perform any other desired action
    let formIsValid = true;
    const newErrors = { ...sErrors };

    if (!sChecked) {
      formIsValid = false;
      setShowTerms(true);
    }
    if (studentData.firstName === "") {
      formIsValid = false;
      newErrors.firstName = "Please Enter Name";
    }
    if (studentData.surname === "") {
      formIsValid = false;
      newErrors.surname = "Please Enter Name";
    }
    if (studentData.gender === "") {
      formIsValid = false;
      newErrors.gender = "Please select your gender";
    }
    if (studentData.dob === "") {
      formIsValid = false;
      newErrors.dob = "Please enter your dob";
    }
    if (studentData.phone === "") {
      formIsValid = false;
      newErrors.phone = "Please enter your phone number";
    }
    if (studentData.email.trim() === "") {
      formIsValid = false;
      newErrors.email = "Please enter your email";
    } else if (!isValidEmail(studentData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter valid email";
    }
    if (studentData.country === "") {
      formIsValid = false;
      newErrors.country = "Please select your country";
    }

    if (formIsValid && sChecked) {
      // Perform form submission logic here
      console.log(studentData);
      console.log("Package is: ", packages);
      console.log("Amount is: ", amount);
      const packageURL = sessionURLs[packages];
      console.log("Package URL is: ", packageURL);
      try {
        fetch('https://www.5pillarsacademy.com/api/addStudent.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        })
        .then(response => response.json())
        .then(data => console.log(data));

      } catch (error) {
        console.error(error);
      }
      if (packageURL) {
        window.location.href = packageURL;
      } else {
        console.error("Invalid package: ", packages);
      }
      // Reset the form fields
      setStudentData({
        firstName: "",
        surname: "",
        gender: "",
        dob: "",
        phone: "",
        email: "",
        country: "",
      });
    } else {
      setSErrors(newErrors);
    }
  };

  const toggleForm = (isParent) => {
    setIsParent(isParent);
    setSChecked(false);
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          <div className="form-page">
            {/* <div className="amount-card">
          <h2 style={{ fontSize: "26px" }}>{packages}</h2>
          <h1 style={{ fontSize: "35px" }}>£{amount}/Session</h1>
        </div> */}
            <div className="amount-card">
              <div className="amount-circle"></div>
              <div className="amount-circle"></div>
              <div className="card-inner">
                <h2 style={{ fontSize: "26px" }}>{packages}</h2>
                <h1 style={{ fontSize: "35px" }}>£{amount}/Session</h1>
                <Link to="/packages" style={{ textDecoration: "none" }}>
                  <button className="pack">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>packages</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="form-container">
              <div className="form-toggle">
                <button
                  className={`toggle-button1 ${isParent ? "active" : ""}`}
                  onClick={() => toggleForm(true)}
                >
                  As a Parent
                </button>
                <button
                  className={`toggle-button2 ${isParent ? "" : "active"}`}
                  onClick={() => toggleForm(false)}
                >
                  As a Student
                </button>
              </div>

              <div className={`form-wrapper ${isParent ? "show" : ""}`}>
                <form className="parent-form" onSubmit={handleSubmitParent}>
                  <div className="parent-details">
                    <h1>Your details (parent/Guardian)</h1>

                    <div className="form-group">
                      <label htmlFor="parentFName">First Name:</label>
                      {/* {!pErrors.parentFName && ( */}
                      <input
                        type="text"
                        id="parentFName"
                        name="parentFName"
                        value={parentData.parentFName}
                        onChange={(e) => handleFormChange(e, "parent")}
                      />
                      {/* )} */}

                      {pErrors.parentFName && (
                        <span className="error">{pErrors.parentFName}</span>
                      )}
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
                      {pErrors.parentLName && (
                        <span className="error">{pErrors.parentLName}</span>
                      )}
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
                      {pErrors.phone && (
                        <span className="error">{pErrors.phone}</span>
                      )}
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
                      {pErrors.email && (
                        <span className="error">{pErrors.email}</span>
                      )}
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="confirmEmail">
                        Confirm Email Address:
                      </label>
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                      />
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="country"> Country of Residnce:</label>
                      <select
                        id="country"
                        name="country"
                        value={parentData.country}
                        onChange={(e) => handleFormChange(e, "parent")}
                      >
                        <option value="">select country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Aland Islands">Aland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and BarbudaG">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Sint Eustatius and Saba">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value=" Congo, Democratic Republic of the Congo">
                          Congo, Democratic Republic of the Congo
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curacao">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value=" Korea, Democratic People's Republic of">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Latvia">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value=" Macedonia, the Former Yugoslav Republic of">
                          Macedonia, the Former Yugoslav Republic of
                        </option>
                        <option value="Macedonia, the Former Yugoslav Republic of">
                          Macedonia, the Former Yugoslav Republic of
                        </option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="MMauritiusU">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Barthelemy">
                          Saint Barthelemy
                        </option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Serbia and Montenegro">
                          Serbia and Montenegro
                        </option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.s.">
                          Virgin Islands, U.s.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value=">Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                      {pErrors.country && (
                        <span className="error">{pErrors.country}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="relationship">
                        Relationship to student:
                      </label>
                      <input
                        type="text"
                        id="relationship"
                        name="relationship"
                        value={parentData.relationship}
                        onChange={(e) => handleFormChange(e, "parent")}
                      />
                      {pErrors.relationship && (
                        <span className="error">{pErrors.relationship}</span>
                      )}
                    </div>
                  </div>

                  <div className="student-details">
                    <h1>Your Child's details</h1>
                    <div className="form-group">
                      <label htmlFor="relationship">
                        Your Child's firstName:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={parentData.firstName}
                        onChange={(e) => handleFormChange(e, "parent")}
                      />
                      {pErrors.firstName && (
                        <span className="error">{pErrors.firstName}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="relationship">
                        Your Child's surname:
                      </label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={parentData.surname}
                        onChange={(e) => handleFormChange(e, "parent")}
                      />
                      {pErrors.surname && (
                        <span className="error">{pErrors.surname}</span>
                      )}
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
                      {pErrors.gender && (
                        <span className="error">{pErrors.gender}</span>
                      )}
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
                      {pErrors.dob && (
                        <span className="error">{pErrors.dob}</span>
                      )}
                    </div>
                    <div className="form-group ">
                      <p className="terms" onClick={handleShowTerms}>
                        Terms and conditions
                      </p>
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
                <form className="student-form" onSubmit={handleSubmitStudent}>
                  <h1>Your details</h1>

                  <div className="form-group">
                    <label htmlFor="firstName">Your firstName:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={studentData.firstName}
                      onChange={(e) => handleFormChange(e, "student")}
                    />
                    {sErrors.firstName && (
                      <span className="error">{sErrors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Your surname:</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={studentData.surname}
                      onChange={(e) => handleFormChange(e, "student")}
                    />
                    {sErrors.surname && (
                      <span className="error">{sErrors.surname}</span>
                    )}
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
                    {sErrors.gender && (
                      <span className="error">{sErrors.gender}</span>
                    )}
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
                    {sErrors.dob && (
                      <span className="error">{sErrors.dob}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      Mobile Number (with Country Code):
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={studentData.phone}
                      onChange={(e) => handleFormChange(e, "student")}
                    />
                    {sErrors.phone && (
                      <span className="error">{sErrors.phone}</span>
                    )}
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
                    {sErrors.email && (
                      <span className="error">{sErrors.email}</span>
                    )}
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="confirmEmail">
                      Confirm Email Address:
                    </label>
                    <input
                      type="email"
                      id="confirmEmail"
                      name="confirmEmail"
                      // value={formData.email}
                    />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="country"> Country of Residnce:</label>
                    <select
                      id="country"
                      name="country"
                      value={studentData.country}
                      onChange={(e) => handleFormChange(e, "student")}
                    >
                      <option value="">select country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Aland Islands">Aland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and BarbudaG">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire, Sint Eustatius and Saba">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value=" Congo, Democratic Republic of the Congo">
                        Congo, Democratic Republic of the Congo
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curacao">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value=" Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kosovo">Kosovo</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Latvia">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value=" Macedonia, the Former Yugoslav Republic of">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="Macedonia, the Former Yugoslav Republic of">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="MMauritiusU">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Barthelemy">Saint Barthelemy</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Martin">Saint Martin</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Serbia and Montenegro">
                        Serbia and Montenegro
                      </option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sint Maarten">Sint Maarten</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan, Province of China">
                        Taiwan, Province of China
                      </option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.s.">
                        Virgin Islands, U.s.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value=">Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    {sErrors.country && (
                      <span className="error">{sErrors.country}</span>
                    )}
                  </div>
                  <div className="form-group ">
                    <p className="terms" onClick={handleShowTerms}>
                      Terms and conditions
                    </p>

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
            {showTerms && (
              <div className="trems-container">
                <div className="terms-content">
                  <h1>Terms And Conditions</h1>
                  <h3>General</h3>
                  <ul style={{ listStyle: "bullets" }}>
                    <li>
                      Students are required to be logged in and ready 5 minutes
                      prior to session starting.
                    </li>
                    <li>
                      If a student is late to a session, there is no guarantee
                      that the tutor may be able to flifil the session time at
                      the end as an extension.
                    </li>
                    <li>
                      Each session may vary from 30 minutes to 45 minutes,
                      depending on package.
                    </li>
                    <li>
                      Students must inform the tutor/admin in advance if they
                      wish to reschedlie (atleast 2 hours) prior to the session
                      starting, the tutor/admin will provide alternative
                      date/time to student.
                    </li>
                    <li>
                      Student must reschedule the missed session within four
                      weeks, as the tutor will be paid for the session at
                      original scheduled time & date.
                    </li>
                    <li>
                      If a student is absent without prior notice, it’s at the
                      tutor’s discretion to arrange a reschedlied session.
                    </li>
                    <li>
                      If a student wishes to take a short break (e.g. two weeks)
                      they must inform the Admin via info@5pillarsacademy.com at
                      least two weeks prior. Their subscription can be paused
                      for that period.
                    </li>
                    <li>
                      If a student is not satisfied with their tutor, they must
                      inform management via info@5pillarsacademy.com or by
                      calling us on +44775 639 3994.
                    </li>
                    <li>Terms & Conditions are subject to change. </li>
                  </ul>
                  <h3>Payment</h3>
                  <ul>
                    <li>
                      Payments are collected in advance of each month via a
                      subscription’s payment method.
                    </li>
                    <li>
                      The student will automatically be charged each month based
                      on their start date for a period of four weeks.
                    </li>
                    <li>
                      f we fail to collect payment for any reason, they sessions
                      will be suspended until the arrears are brought up to
                      date.
                    </li>
                    <li>
                      Students must ensure they always provide updated card
                      details.
                    </li>
                  </ul>
                  <h3>Coupons & Discounts </h3>
                  <ul>
                    <li>
                      Only one coupon maybe applied to each subscription at any
                      given time and reserve the right to withdraw any code at
                      any time.
                    </li>
                    <li>
                      Family discount can only be applied to immediate
                      siblings/parents.
                    </li>
                    <li>
                      Family discount is subject to change and withdrawal at any
                      time.
                    </li>
                  </ul>
                  <h3>Refunds </h3>
                  <p>
                    At 5pillars Academy, we are committed to providing a
                    high-quality online learning experience for our students.
                    However, we understand that there may be instances where a
                    refund is requested. Our refund policy is as follows:
                  </p>
                  <ul>
                    <li>
                      If a student has not taken their first online class, they
                      are eligible for a refund of their fee minus £10 admin
                      charge.
                    </li>
                    <li>
                      If a student has taken 50% or less than their scheduled
                      classes for that month, then they will be refunded on a
                      pro-rata basis.
                    </li>
                  </ul>
                  <p>
                    To request a refund or cancel your subscription, please
                    contact our customer support team at
                    <span> refunds@5pillarsacademy.com</span>. We will process
                    your request as quickly as possible. Please note that any
                    refunds will be issued using the same payment method that
                    was used for the original transaction. Refunds may take up
                    to 7 -10 working days to process.
                  </p>
                  <h3>Exceptions:</h3>
                  <p>
                    In some cases, we may make exceptions to our refund policy.
                    For example, if there are extenuating circumstances that
                    prevented a student from attending classes or if there was a
                    technical issue with our platform that prevented a student
                    from accessing course materials. In such cases, we will
                    review the request on a case-by-case basis and determine
                    whether a refund is appropriate.
                  </p>
                  <h3>Cancellation: </h3>
                  <p>
                    If a student wishes to cancel their enrolment at 5pillars
                    Academy, they can do so at any time by contacting our
                    customer support team. If the cancellation request is
                    received before the start of the month, the fee for that
                    month will not be charged. If the cancellation request is
                    received after the start of the month, the fee for that
                    month will not be refunded.
                  </p>
                  <h3>Privacy Policy </h3>
                  <p>
                    At 5pillars Academy Ltd, we take the privacy of our
                    customers and users seriously and are committed to
                    protecting their personal data in accordance with the
                    General Data Protection Regulation (GDPR). This privacy
                    policy outlines how we collect, process, and use personal
                    data.
                  </p>
                  <h4>What data we collect:</h4>
                  <p>
                    We may collect personal data such as name, address, email
                    address, phone number, and payment information from our
                    customers and users. We may also collect non-personal data
                    such as website usage information.
                  </p>
                  <h4>How we use the data: </h4>
                  <p>
                    We will only use personal data for internal purposes such as
                    providing our products and services, processing payments,
                    and communicating with our customers and users. We may also
                    use personal data to send marketing communications about our
                    products and services, but only if the individual has given
                    their explicit consent. We will not share personal data with
                    any third party without the individual's explicit consent,
                    except where required by law.
                  </p>
                  <h4>How we protect the data: </h4>
                  <p>
                    We take appropriate technical and organizational measures to
                    protect personal data from unauthorized access, accidental
                    loss, or destruction. We ensure that our employees,
                    contractors, and service providers who have access to
                    personal data are bound by appropriate confidentiality
                    obligations.
                  </p>
                  <h4>Data retention: </h4>
                  <p>
                    We will only retain personal data for as long as necessary
                    to fulfill the purposes for which it was collected,
                    including any legal or accounting requirements.
                  </p>
                  <h4>Individual rights: </h4>
                  <p>
                    Individuals have the right to request access to,
                    rectification, erasure, or restriction of their personal
                    data. They also have the right to object to the processing
                    of their personal data or to withdraw their consent at any
                    time. Individuals have the right to lodge a complaint with a
                    supervisory authority if they believe that their data has
                    been processed in violation of GDPR.
                  </p>
                  <h3>Contact us: </h3>
                  <p>
                    If you have any questions or concerns about our use of
                    personal data or would like to exercise your individual
                    rights, please contact us at{" "}
                    <span>info@5pillarsacademy.com</span> or call us on{" "}
                    <span>+44775 639 3994.</span>
                  </p>
                  <div className="terms-btn">
                    <button onClick={handleShowTerms}>Close</button>
                    <button onClick={handleSTermsAndCondition}>Accept</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {sChecked && <p>Valid</p>}
        </>
      )}
    </>
  );
};

export default EnrolForm;
