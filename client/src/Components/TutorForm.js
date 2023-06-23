import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

const TutorForm = () => {
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
          <div className="background" />
          <div className="">
            <Navbar />
          </div>
          <div className="blank"></div>
          <Footer />
        </>
      )}
    </>
  );
};

export default TutorForm;
