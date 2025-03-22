import React from "react";
import "./AboutUsSection4.css";
import TeamImage from "../../../assets/BlueRectangle.png";

import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";

const AboutUsSection1 = () => {
  return (
    <div>
      <AboutUsDivider heading="Careers" />
      <div className="join-our-journey">
        <div className="journey-container">
          <div className="journey-image">
            <img src={TeamImage} alt="Team collaborating" />
          </div>

          <div className="journey-content">
            <h2 className="journey-title">Join Our Journey</h2>
            <p className="journey-description">
              By joining us, you’ll collaborate with passionate individuals,
              gain valuable experience, and contribute to impactful projects
              that make a difference. Together, we grow, learn, and achieve.
            </p>
            <div className="journey-buttons">
              <a href="/JoinUs" className="journey-button">
                Discover Opportunities
              </a>
              <a href="/JoinUs" className="journey-button outlined">
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection1;
