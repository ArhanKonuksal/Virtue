import React from "react";
import "./CreativeDesignSection2.css";
import creativeImage from "../../../assets/creativeImage.png";

const CreativeDesignSection2 = () => {
  return (
    <div className="creative-ideas">
      {/* Left Side - Image */}
      <div className="creative-image">
        <img src={creativeImage} alt="Creative Concept" />
      </div>

      {/* Right Side - Text */}
      <div className="creative-text">
        <p className="subheading">WHAT WE DO?</p>
        <h1>
          WE BRING <span className="highlight">CREATIVE</span> <br></br> IDEAS
          TO LIFE
        </h1>
        <p className="small-text">
          Transforming Bold Ideas Into Stunning Visuals
        </p>
        <p className="description-creativesection2">
          We Craft Unique, Engaging, and Innovative Designs that Elevate Brands,
          Inspire Audiences, and Bring Your Vision to Life with Creativity and
          Precision.
        </p>
      </div>
    </div>
  );
};

export default CreativeDesignSection2;
