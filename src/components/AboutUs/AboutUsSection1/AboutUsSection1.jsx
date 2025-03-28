import React from "react";
import "./AboutUsSection1.css";
import Agha from "../../../assets/agha.png";
import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";

const AboutUsSection1 = () => {
  return (
    <div>
      <AboutUsDivider heading="Discover Our Story" />
      <div className="content-aboutus">
        <div className="quote-container">
          <p>
            “Excellence thrives where trust is earned. At Virtue, we forge
            meaningful partnerships built on integrity and commitment, creating
            a foundation for shared success. ”
          </p>
          <p className="author-aboutus">
            Hussen Agha <p className="author-info">Chief Executive Officer</p>
          </p>
        </div>
        <div className="image-container-aboutus">
          <img src={Agha} alt="Person speaking" className="person-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection1;
