import React from "react";
import "./CreativeDesignSection5.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import brainImage from "../../../assets/brainImage.png";

const CreativeDesignSection5 = () => {
  return (
    <div className="why-us">
      {/* Left Side - Image */}
      <div className="why-us-image">
        <img src={brainImage} alt="Creative Brain" />
      </div>

      {/* Right Side - Text */}
      <div className="why-us-text">
        <p className="subheading">WHY US?</p>
        <h1>
          ELEVATING{" "}
          <span className="highlight-creativesection5">CREATIVITY</span> <br />
          WITH INNOVATION <br />
          AND EXCELLENCE
        </h1>
        <p className="description-creativesection5">
          We blend creativity with strategy to deliver designs that make an
          impact. Our team crafts visually stunning & user-focused solutions.
        </p>
        <a href="/ContactUs" className="cta">
          GET IN TOUCH <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    </div>
  );
};

export default CreativeDesignSection5;
