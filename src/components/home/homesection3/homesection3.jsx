import React from "react";
import "./homesection3.css";
import VirtueLogo from "../../../assets/Virtue-Logo.png";
//import BlueRectangle from "../../assets/BlueRectangle.png";
import CodeBlock from "../../../assets/code2.png";
//import NpmBlock from "../../assets/npm-requestfoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HomeSection3 = () => {
  return (
    <>
      <div className="home-section3-container">
        <div className="container">
          <div className="headings">
            <h1>Elevated User Experiences by Virtue</h1>
            <h1>UI/UX</h1>
            <h2>Integrated UX Design Solutions</h2>
          </div>
          <p>
            Modular Development Framework: Virtue's approach empowers developers
            to streamline UX/UI development, leveraging preferred frameworks and
            existing tech stacks for seamless deployment.
          </p>
          <div className="image-container-home">
            <div className="blue-rectangle-content">
              <img className="virtue-logo" src={VirtueLogo} alt="virtue-logo" />

              <div className="blue-rectangle-content-text">
                <h1>Accelerate Your Design Process</h1>
                <p>
                  Virtue isn't just a hub for innovative solutions. It’s a
                  platform crafted to streamline the future of intuitive user
                  experience designs. Jumpstart your application with our
                  user-centric design tools and libraries, enabling rapid
                  prototyping and implementation with just a few clicks. Make
                  Virtue your go-to for deploying user interfaces that engage
                  and convert.
                </p>
                <a href="/readmore" className="cta">
                  READ MORE
                  <button className="readmore-button">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ background: "rgba(0, 0, 0, 0)", size: "2px" }}
                    />
                  </button>
                </a>
              </div>

              <img src={CodeBlock} className="codeblock" alt="Code Block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
