import React, { Component } from "react";
import Navbar from "./Navbar";
import "../Css/Packages.css";

const Packages = () => {
  return (
    <>
      <div className="background" />
      <div className="other-nav">
        <Navbar />
      </div>
      <div className="packages">
        <div className="package">
          <div className="package-fee"></div>
          <div className="package-content"></div>
          <div className="package-button"></div>
        </div>
        <div className="package">
          <div className="package-fee"></div>
          <div className="package-content"></div>
          <div className="package-button"></div>
        </div>
        <div className="package">
          <div className="package-fee"></div>
          <div className="package-content"></div>
          <div className="package-button"></div>
        </div>
      </div>
    </>
  );
};
export default Packages;
