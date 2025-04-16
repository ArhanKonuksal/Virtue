import React from "react";
import "./AboutUsSection4.css";
import BirdImage from "../../../assets/Logos/2/colored.svg";

import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";

const AboutUsSection4 = () => {
  return (
    <div>
      <AboutUsDivider heading="Careers" />
      <div className="join-our-journey">
        <div className="journey-container">
          <div className="journey-content">
            <h2 className="journey-title">Join Our Journey</h2>
            <p className="journey-description">
              By joining us, you’ll collaborate with passionate individuals,
              gain valuable experience, and contribute to impactful projects
              that make a difference. Together, we grow, learn, and achieve.
            </p>
            <div className="journey-buttons">
              <a href="/OurServices" className="journey-button">
                Discover Services
              </a>
              <a href="/JoinUs" className="journey-button outlined">
                Join the Team
              </a>
            </div>
          </div>
          <div className="journey-image">
            <img src={BirdImage} alt="Team collaborating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection4;
