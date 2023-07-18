import React, { useState, useEffect } from "react";
import "../Css/HotNews.css";
import HotEvent from "../assets/hotEvent.jpeg";
import { Link } from "react-router-dom";

const HotNews = () => {
  const [showPopup, setShowPopup] = useState(false);

  //    useEffect(() => {
  //      const hasShownPopup = localStorage.getItem("hasShownPopup");
  //      if (!hasShownPopup) {
  //        setShowPopup(true);
  //        localStorage.setItem("hasShownPopup", true);
  //      }
  //    }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.removeItem("hasShownPopup");
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   const hasShownPopup = localStorage.getItem("hasShownPopup");
  //   if (!hasShownPopup) {
  //     setShowPopup(true);
  //     localStorage.setItem("hasShownPopup", true);
  //   }

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasShownPopup");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const hasShownPopup = sessionStorage.getItem("hasShownPopup");
    if (!hasShownPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasShownPopup", true);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &#10006;
            </button>
            <img src={HotEvent}></img>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <button className="hotNews-btn">Learn More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotNews;
