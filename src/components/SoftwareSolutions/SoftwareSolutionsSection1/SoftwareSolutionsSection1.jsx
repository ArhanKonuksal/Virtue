import React from "react";
import "./SoftwareSolutionsSection1.css";
import illustration from "../../../assets/softwaresoltop.png"; // Replace with your actual image path

const SoftwareSolutionsSection1 = () => {
  return (
    <div className="smart-software">
      <div className="content-software">
        <h1>
          SMART <span className="highlight">SOFTWARE</span>
          <br /> BUILT FOR SUCCESS
        </h1>
        <p>
          Slite is a modern knowledge base that drives action with structured
          docs, thoughtful collaboration, and confident decision-making.
        </p>
      </div>
      <div className="illustration">
        <img src={illustration} alt="Illustration of team collaboration" />
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection1;
