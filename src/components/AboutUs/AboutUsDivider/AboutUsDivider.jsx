import React from "react";
import "./AboutUsDivider.css";

const AboutUsDivider = (props) => {
  return (
    <div className="our-thinking-section">
      <div className="header-aboutus">
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
};

export default AboutUsDivider;
