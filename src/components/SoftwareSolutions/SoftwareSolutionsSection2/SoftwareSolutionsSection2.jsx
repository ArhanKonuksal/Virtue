import React from "react";
import "./SoftwareSolutionsSection2.css";
import VirtueLogo from "../../../assets/Virtue-Logo.png";
import CodeBlock from "../../../assets/code2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SoftwareSolutionsSection2 = () => {
  return (
    <>
      <div className="image-container-home">
        <div className="blue-rectangle-content">
          <img className="virtue-logo" src={VirtueLogo} alt="virtue-logo" />

          <div className="blue-rectangle-content-text">
            <h1>Accelerate Your Design Process</h1>
            <p>
              Virtue isn't just a hub for innovative solutions. It’s a platform
              crafted to streamline the future of intuitive user experience
              designs.
              <div
                style={{ height: "20px", backgroundColor: "transparent" }}
              ></div>
              Jumpstart your application with our user-centric design tools and
              libraries, enabling rapid prototyping and implementation with just
              a few clicks. Make Virtue your go-to for deploying user interfaces
              that engage and convert.
            </p>
            <a className="cta" href="/readmore">
              See Our Offer
              <button className="readmore-button">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </a>
          </div>

          <img src={CodeBlock} className="codeblock" alt="Code Block" />
        </div>
      </div>
    </>
  );
};

export default SoftwareSolutionsSection2;
