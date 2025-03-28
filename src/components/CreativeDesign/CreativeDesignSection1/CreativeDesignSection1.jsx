import React from "react";
import "./CreativeDesignSection1.css";
import designImage from "../../../assets/CyprioJob-Mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CreativeDesignSection1 = () => {
  return (
    <section className="creative-designs">
      {/* Left Side - Text Content */}
      <div className="design-text">
        <p className="welcome-text">WELCOME TO VIRTUE</p>
        <h1>
          WE ARE <span className="highlight-creative">CREATING</span> BEST
          DESIGNS
        </h1>

        <p className="description-section1">
          Elevate Your Brand with Stunning, Impactful Designs that Captivate
          Audiences, Enhance User Experience, and Drive Meaningful Engagement
          Across Digital and Print Platforms with a Unique, Professional, and
          Memorable Visual Identity.
        </p>
        <a href="/ContactUs" className="cta">
          GET IN TOUCH <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>

      {/* Right Side - Image Section */}
      <div className="design-image">
        <img src={designImage} alt="Creative Design Showcase" />
      </div>
    </section>
  );
};

export default CreativeDesignSection1;
