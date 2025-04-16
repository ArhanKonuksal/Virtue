import React from "react";
import "./CreativeDesignSection4.css";
import logo1 from "../../../assets/beykoy_siyah_beyaz 11.png";
import logo2 from "../../../assets/liberaldemokrasi.png";

const CreativeDesignSection4 = () => {
  return (
    <div className="latest-projects">
      {/* Heading */}
      <h1>Enjoy our latest projects</h1>
      <p className="description-creativesection4">
        Explore, experience, and enjoy our latest projects – bringing ideas to
        life.
      </p>

      {/* Logos Section */}
      <div className="logos-creative">
        <img src={logo1} alt="Beykoy Logo 1" className="logo-creative" />
        <img
          src={logo2}
          alt="Liberal Demokrasi Hareketi"
          className="logo-creative center-logo-creative"
        />
        <img src={logo2} alt="Beykoy Logo 2" className="logo-creative" />
      </div>
    </div>
  );
};

export default CreativeDesignSection4;
