import "./SoftwareSolutionsSection4.css";
import React from "react";
import phoneMockup from "../../../assets/phoneimage.png";

const SoftwareSolutionsSection4 = () => {
  return (
    <div className="tailored-section">
      <div className="container-softwaresection4">
        <div className="mockup-container">
          <img src={phoneMockup} alt="Phone Mockup" className="mockup-image" />
        </div>

        <div className="text-container-softwaresection4">
          <h1>
            Tailored <br />
            <span className="highlight-softwaresection4">for you.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="learn-more">LEARN MORE →</button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection4;
