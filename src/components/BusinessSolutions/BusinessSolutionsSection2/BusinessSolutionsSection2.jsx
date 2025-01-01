import React from "react";
import "./BusinessSolutionsSection2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const BusinessSolutionsSection2 = () => {
  return (
    <div className="business-solutions-section2">
      <div className="image-wrapper">
        <img
          src="path-to-your-image.jpg"
          alt="Two individuals at a table"
          className="business-solutions-section2-image"
        />
      </div>
      <div className="text-content">
        <h1>
          Build a Solution That’s <br /> Truly Your Own
        </h1>
        <p>
          Virtue excels in delivering innovative solutions in software
          development, digital marketing.
        </p>
        <div className="highlight">
          <span className="highlight-text">
            <FontAwesomeIcon icon={faLayerGroup} /> Business CRM
          </span>
        </div>
        <p className="small-text">
          Virtue excels in delivering innovative solutions in software
          development, digital marketing.
        </p>
      </div>
    </div>
  );
};

export default BusinessSolutionsSection2;
