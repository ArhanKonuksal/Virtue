import "./SoftwareSolutionsSection4.css";
import React from "react";
import phoneMockup from "../../../assets/Beykoy_Phone_Mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
            Our platform adapts to your needs, offering a smooth and efficient
            experience with customizable features that fit your workflow
          </p>
          <p>
            Talk to us to make it happen—our team ensures a smooth, professional
            process from concept to execution
          </p>
          <a href="/Pricing" className="cta">
            <button className="learn-more">
              See Pricing{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ background: "rgba(0, 0, 0, 0)", size: "2px" }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection4;
