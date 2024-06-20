import "../Css/EnrolForm.css";
import React, { useState, useEffect } from  "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import {
    Link,
    useSearchParams,
} from "react-router-dom";

const IslamicRegister = () => {
    const [searchparams] = useSearchParams();
    const [showTerms, setShowTerms] = useState(false);
    const [sChecked, setSChecked] = useState(false);
    const [pChecked, setPChecked] = useState(false);
    const prevPackage = searchparams.get("package");
    const prevAmount = searchparams.get("fee");
    const [isLoading, setIsLoading] = useState(true);
    const [isParent, setIsParent] = useState(true);
    const [amount, setAmount] = useState(7);
    const [packages, setPackage] = useState("");
    const sessionURLs = {
        "Islamic lessons - Monthly": "https://buy.stripe.com/fZe03SeZSfpy2Ry4gN",
        "Islamic lessons - Full course": "https://buy.stripe.com/3cs5oc7xq5OYak0dRg",
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
        ageGroup:"",
        dob: "",
        error:""
    });
    const [sErrors, setSErrors] = useState({
        firstName: "",
        surname: "",
        gender: "",
        ageGroup:"",
        dob: "",
        phone: "",
        email: "",
        country: "",
        error:""

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
        ageGroup:"",
        dob: "",
    });
    const [studentData, setStudentData] = useState({
        firstName: "",
        surname: "",
        gender: "",
        ageGroup:"",
        dob: "",
        phone: "",
        email: "",
        country: "",
    });
    useEffect(() => {
        setAmount(prevAmount);
        setPackage(prevPackage);
        console.log("packages",packages,prevAmount);
    }, [prevAmount, prevPackage]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    const handleSTermsAndCondition = () => {
        if (!sChecked){
            sErrors.error=""
        }
        setSChecked(!sChecked);

        console.log("Student: ", sChecked);
    };
    const handlePTermsAndCondition = () => {
        if (!pChecked){
            pErrors.error=""
        }
        setPChecked(!pChecked);

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

    const handleSubmitParent = async (e) => {
        e.preventDefault();

        let formIsValid = true;
        const newErrors = { ...pErrors };

        if (!pChecked) {
            formIsValid = false;
            // setShowTerms(true);
        }
        if (parentData.parentFName === "") {
            formIsValid = false;
            newErrors.parentFName = "Please Enter Name";
        }
        if (parentData.parentLName === "") {
            formIsValid = false;
            newErrors.parentLName = "Please Enter Name";
        }
        if (parentData.gender === "") {
            formIsValid = false;
            newErrors.gender = "Please select your gender";
        }
        if (parentData.ageGroup === "") {
            formIsValid = false;
            newErrors.ageGroup = "Please select your age group";
        }
        if (parentData.dob === "") {
            formIsValid = false;
            newErrors.dob = "Please enter your dob";
        }
        if (parentData.phone === "") {
            formIsValid = false;
            newErrors.phone = "Please enter your phone number";
        }
        if (parentData.email.trim() === "") {
            formIsValid = false;
            newErrors.email = "Please enter your email";
        } else if (!isValidEmail(parentData.email)) {
            formIsValid = false;
            newErrors.email = "Please enter valid email";
        }
        if (parentData.country === "") {
            formIsValid = false;
            newErrors.country = "Please select your country";
        }
        if (parentData.relationship === "") {
            formIsValid = false;
            newErrors.relationship = "Please enter the relationship";
        }
        if (parentData.firstName === "") {
            formIsValid = false;
            newErrors.firstName = "Please enter the first name";
        }
        if (parentData.surname === "") {
            formIsValid = false;
            newErrors.surname = "Please enter the sur name";
        }

        if (pChecked === false) {
            formIsValid = false;
            newErrors.error = "Please accept the terms and condition ";
        }

        // Validate packages and amount
        if (packages === "") {
            formIsValid = false;
            newErrors.packages = "Please select a package";
        }
        if (amount === "") {
            formIsValid = false;
            newErrors.amount = "Please enter the amount";
        }

        console.log("isValid",formIsValid,sChecked)

        if (formIsValid && pChecked) {
            console.log(parentData);
            console.log("Package is: ", packages);
            console.log("Amount is: ", amount);
            const packageURL = sessionURLs[packages];
            console.log("Package URL is: ", packageURL);

            const dataToSend = {
                ...parentData,
                package: packages,
                amount: amount,
            };

            console.log(JSON.stringify(dataToSend));

            try {
                fetch("https://www.5pillarsacademy.com/api/addParentStudentIslamicLessons.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (
                            data.db === "New record created successfully" &&
                            data.email === "Email sent successfully"
                        ) {
                            if (packageURL) {
                                window.location.href = packageURL;
                            } else {
                                console.error("Invalid package: ", packages);
                                newErrors.packages = "Invalid package selected";
                            }
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
                                ageGroup: "",
                                dob: "",
                                package: "",
                                amount: "",
                            });
                        } else {
                            console.error("Server error:", data);
                        }
                    })
                    .catch((error) => console.error("Fetch error:", error));
            } catch (error) {
                console.error(error);
            }
        } else {
            setPErrors(newErrors);
        }
    };

    const handleSubmitStudent = async (e) => {
        e.preventDefault();
        // Store the data in the database or perform any other desired action
        let formIsValid = true;
        const newErrors = { ...sErrors };

        if (!sChecked) {
            formIsValid = false;
            // setShowTerms(true);
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
        if (studentData.ageGroup === "") {
            formIsValid = false;
            newErrors.ageGroup = "Please select your age group";
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
        if (sChecked === false) {
            formIsValid = false;
            newErrors.error = "Please accept the terms and condition ";
        }
        // Validate packages and amount
        if (packages === "") {
            formIsValid = false;
            newErrors.packages = "Please select a package";
        }
        if (amount === "") {
            formIsValid = false;
            newErrors.amount = "Please enter the amount";
        }
        console.log("isValid",formIsValid,sChecked)

        if (formIsValid && sChecked) {
            // Perform form submission logic here
            console.log(studentData);
            console.log("Package is: ", packages);
            console.log("Amount is: ", amount);
            const packageURL = sessionURLs[packages];
            console.log("Package URL is: ", packageURL);

            const dataToSend = {
                ...studentData,
                package: packages,
                amount: amount,
            };

            console.log(JSON.stringify(dataToSend));

            try {
                fetch("https://www.5pillarsacademy.com/api/addStudentIslamicLessons.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (
                            data.db === "New record created successfully" &&
                            data.email === "Email sent successfully"
                        ) {
                            // Reset the form fields
                            if (packageURL) {
                                window.location.href = packageURL;
                            } else {
                                console.error("Invalid package: ", packages);
                                newErrors.packages = "Invalid package selected";
                            }
                            setStudentData({
                                firstName: "",
                                surname: "",
                                gender: "",
                                ageGroup: "",
                                dob: "",
                                phone: "",
                                email: "",
                                country: "",
                                package: "",
                                amount: "",
                            });
                        } else {
                            console.error("Server error:", data);
                        }
                    })
                    .catch((error) => console.error("Fetch error:", error));
            } catch (error) {
                console.error(error);
            }
        } else {
            setSErrors(newErrors);
        }
    };

    const toggleForm = (isParent) => {
        setIsParent(isParent);
        setSChecked(false);
    };

    const isValidEmail = (email) => {
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
                        <div className="amount-card">
                            <div className="amount-circle"></div>
                            <div className="amount-circle"></div>
                            <div className="card-inner">
                                <h2 style={{ fontSize: "26px" }}>{packages}</h2>
                                {packages === "Islamic lessons - Monthly" &&
                                    <h1 style={{fontSize: "35px"}}>£{amount}/Month</h1>
                                }
                                {packages === "Islamic lessons - Full course" &&
                                    <h1 style={{fontSize: "35px"}}>£{amount}</h1>
                                }
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
                                        <div className="form-group">
                                            <label htmlFor="country"> Country of Residence:</label>
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
                                                Your Child's First Name:
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
                                                Your Child's Last Name:
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
                                                {/* <option value="Other">Other</option> */}
                                            </select>
                                            {pErrors.gender && (
                                                <span className="error">{pErrors.gender}</span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="gender">Age group:</label>
                                            <select
                                                id="ageGroup"
                                                name="ageGroup"
                                                value={parentData.ageGroup}
                                                onChange={(e) => handleFormChange(e, "parent")}
                                            >
                                                <option value="">Select</option>
                                                <option value="6-9 Years">6-9 Years</option>
                                                <option value="10-15 Years">10-15 Years</option>
                                                <option value="16-22 Years">16-22 Years</option>
                                            </select>
                                            {pErrors.gender && (
                                                <span className="error">{pErrors.ageGroup}</span>
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
                                        <div className=" terms-group ">
                                            <input type={"checkbox"} checked={pChecked}
                                                   onChange={handlePTermsAndCondition}/>
                                            <p className="terms" onClick={handleShowTerms}>
                                                I accept the Terms & Conditions
                                            </p>
                                        </div>
                                    </div>
                                    {pErrors.error && <span className="error">{pErrors.error}</span>}


                                    <button type="submit">Submit</button>
                                </form>
                            </div>

                            <div className={`form-wrapper ${!isParent ? "show" : ""}`}>
                                <form className="student-form" onSubmit={handleSubmitStudent}>
                                    <h1>Your details</h1>

                                    <div className="form-group">
                                        <label htmlFor="firstName">Your First Name:</label>
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
                                        <label htmlFor="surname">Your Last Name:</label>
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
                                            {/* <option value="Other">Other</option> */}
                                        </select>
                                        {sErrors.gender && (
                                            <span className="error">{sErrors.gender}</span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="gender">Age group:</label>
                                        <select
                                            id="ageGroup"
                                            name="ageGroup"
                                            value={studentData.ageGroup}
                                            onChange={(e) => handleFormChange(e, "student")}
                                        >
                                            <option value="">Select</option>
                                            <option value="6-9 Years">6-9 Years</option>
                                            <option value="10-15 Years">10-15 Years</option>
                                            <option value="16-22 Years">16-22 Years</option>
                                        </select>
                                        {sErrors.gender && (
                                            <span className="error">{sErrors.ageGroup}</span>
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
                                        <label htmlFor="country"> Country of Residence:</label>
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
                                    <div className=" terms-group ">
                                        <input type={"checkbox"}  checked={sChecked} onChange={handleSTermsAndCondition}/>
                                        <p className="terms" onClick={handleShowTerms}>
                                            I accept the Terms & Conditions
                                        </p>
                                    </div>
                                    {sErrors.error && <span className="error">{sErrors.error}</span>}

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        {showTerms && (
                            <div className="terms-container">
                                <div className="terms-content">
                                    <h1>Faith Essentials Program - Terms and Conditions with Refund Policy</h1>
                                    <h3>1. Introduction</h3>
                                    <p>Welcome to the Faith Essentials Program, a specialized initiative by 5pillars Academy designed to provide basic Islamic studies for students aged 6 and above. By enrolling in this program, you agree to abide by the following terms and conditions, including the refund policy.</p>
                                     <h3>2. Registration and Enrolment</h3>
                                    <p>2.1 Eligibility: Enrolment in the Faith Essentials Program is open to students aged 6 and above.</p>
                                    <p>2.2 Registration: To enrol in the program, parents or legal guardians must complete the online registration form and provide accurate and up-to-date information.</p>
                                    <h3>3. Program Structure and Content</h3>
                                    <p>3.1 Curriculum: The Faith Essentials Program follows a structured curriculum covering fundamental Islamic studies, including but not limited to Quranic studies, Islamic history, ethics, and basic Islamic practices.</p>
                                    <p>3.2 Modifications: 5pillars Academy reserves the right to modify the curriculum, course materials, and teaching methodologies to enhance the learning experience.</p>
                                    <h3>4. Fees and Payments</h3>
                                    <p>4.1 Tuition Fees: Tuition fees for the Faith Essentials Program are outlined in the fee schedule provided upon registration.</p>
                                    <p>4.2 Payment: Payment must be made in accordance with the payment schedule specified. Failure to meet payment deadlines may result in suspension from the program.</p>
                                    <h3>5. Refund Policy</h3>
                                    <p>5.1 Refund Eligibility: Refunds are only applicable under the following circumstances:</p>
                                    <ol>
                                        <li>Withdrawal before the start of the program: A full refund will be provided if the withdrawal occurs before the program commences.</li>
                                        <li>Withdrawal for monthly paying students: A partial refund may be granted if the withdrawal occurs after once class is completed.</li>
                                        <li>Withdrawal for annual paying students: If the student withdraws after 50% of sessions have been completed, they will receive 50% of the remaining balance, if the student withdraws after 75% of sessions have been completed then there will be no refund.</li>
                                        <li>Technical Issues: Refunds may be considered in cases of technical issues preventing access to the online platform, subject to verification by 5pillars Academy.</li>
                                    </ol>
                                    <p>5.2 Refund Request Procedure: To request a refund, parents or legal guardians must submit a written request to the academy's administration, explaining the reason for withdrawal and providing necessary documentation.</p>
                                    <p>5.3 Refund Processing: Refunds will be processed within a reasonable timeframe, and any applicable administrative fees will be deducted from the refunded amount.</p>
                                    <h3>6. Attendance and Participation</h3>
                                    <p>6.1 Regular Attendance: Students are expected to attend all scheduled classes. Absences must be communicated to the academy in advance, and missed lessons may be made up through supplementary materials.</p>
                                    <p>6.2 Participation: Active participation in class discussions, assignments, and activities is encouraged for a comprehensive learning experience.</p>
                                    <h3>7. Code of Conduct</h3>
                                    <p>7.1 Respect: Students are expected to treat teachers and fellow students with respect and courtesy, fostering a positive learning environment.</p>
                                    <p>7.2 Discipline: Any disruptive behaviour, violation of academy policies, or failure to adhere to the code of conduct may result in disciplinary action, including suspension or expulsion from the program.</p>
                                    <h3>8. Parental Involvement</h3>
                                    <p>8.1 Communication: Parents or legal guardians are encouraged to maintain open communication with the academy regarding their child's progress, concerns, or feedback.</p>
                                    <p>8.2 Support: Parents are expected to provide support for their child's learning, ensuring completion of assignments and participation in extracurricular activities.</p>
                                    <h3>9. Intellectual Property</h3>
                                    <p>9.1 Materials: All course materials provided during the Faith Essentials Program are the intellectual property of 5pillars Academy and may not be reproduced, distributed, or shared without prior written consent.</p>
                                    <h3>10. Rescheduling Clause</h3>
                                    <p>10.1 Technical Issues: In the event of technical issues preventing a student from accessing a class, the academy will make reasonable efforts to reschedule the missed session.</p>
                                    <p>10.2 Teacher Absence: If a scheduled class is missed due to the absence of a teacher, the academy will make every effort to allocate replacement teacher reschedule the session at a convenient time.</p>
                                    <h3>11. Termination</h3>
                                    <p>11.1 Termination: 5pillars Academy reserves the right to terminate a student's enrolment in the Faith Essentials Program for non-compliance with these terms and conditions or for other valid reasons.</p>
                                    <h3>12. Miscellaneous</h3>
                                    <p>12.1 Governing Law: These terms and conditions are governed by the laws of [Jurisdiction], and any disputes shall be resolved in accordance with these laws.</p>
                                    <p>12.2 Amendments: 5pillars Academy may amend these terms and conditions, including the refund policy, as necessary. Notice of any changes will be communicated to enrolled students and their parents or legal guardians.</p>
                                    <br/>
                                    <p>By enrolling in the Faith Essentials Program, you acknowledge that you have read, understood, and agreed to these terms and conditions, including the refund policy. If you have any questions, please contact the academy's administration for clarification.</p>
                                    <div className="terms-btn">
                                        <button onClick={handleShowTerms}>Close</button>
                                        {/*<button onClick={handleSTermsAndCondition}>Accept</button>*/}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </>
            )}
        </>
    );
};



export default IslamicRegister;
