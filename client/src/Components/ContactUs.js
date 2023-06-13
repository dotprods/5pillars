import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
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
        </>
      )}
    </>
  );
};
export default ContactUs;
