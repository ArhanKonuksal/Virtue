import React from "react";
import "./AdvertisingAndMediaSection1.css";
import laptopImage from "../../../assets/BlueRectangle.png"; // Replace with the correct path to your laptop image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faMessage, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const AdvertisingAndMediaSection1 = () => {
  return (
    <div className="marketing-plan">
      <section className="hero-section">
        <div className="text-content">
          <h1>There is a plan to market your success</h1>
          <p>
            Virtue offers advanced software development frameworks that
            streamline the creation and deployment of applications. Our
            solutions include robust libraries that enhance coding efficiency
            and reduce time-to-market. We specialize in optimizing software
            architecture, ensuring scalable and maintainable codebases. Our
            systems are designed to support a broad range of software
            engineering tasks, enabling developers to produce high-quality
            software that meets the dynamic needs of businesses.
          </p>
          <button>Press Button</button>
        </div>
        <img src={laptopImage} alt="Laptop" className="laptop-image" />
      </section>

      <section className="brands">
        <div className="brand">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faBook} /> Brand Sessions
          </h3>
          <p>
            Our solutions include robust libraries that enhance coding
            efficiency and reduce time-to-market. We specialize in optimizing
            software architecture, ensuring scalable and maintainable codebases.
          </p>
        </div>
        <div className="brand">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faMessage} /> Brand Sessions
          </h3>
          <p>
            Our solutions include robust libraries that enhance coding
            efficiency and reduce time-to-market. We specialize in optimizing
            software architecture, ensuring scalable and maintainable codebases.
          </p>
        </div>
        <div className="brand">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faPersonHiking} /> Brand Challenge
          </h3>
          <p>
            Our solutions include robust libraries that enhance coding
            efficiency and reduce time-to-market. We specialize in optimizing
            software architecture, ensuring scalable and maintainable codebases.
          </p>
        </div>
        <div className="brand">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faLightbulb} /> Brand Concept
          </h3>
          <p>
            Our solutions include robust libraries that enhance coding
            efficiency and reduce time-to-market. We specialize in optimizing
            software architecture, ensuring scalable and maintainable codebases.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdvertisingAndMediaSection1;
