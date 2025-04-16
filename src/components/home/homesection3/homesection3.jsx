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
            Reimagine your design process with Virtue. Our platform delivers the
            tools and support you need to create user-friendly, impactful
            experiences with ease. Turn your ideas into reality and achieve
            results that truly engage.
          </p>
          <div className="image-container-home">
            <div className="blue-rectangle-content">
              <img className="virtue-logo" src={VirtueLogo} alt="virtue-logo" />

              <div className="blue-rectangle-content-text">
                <h1>Achieve Excellence in Design / Development</h1>
                <p>
                  Virtue provides access to a team skilled in hosting, creating,
                  and managing both front-end and back-end solutions. Whether
                  it's a dynamic website or robust software, our developers
                  deliver tailored to your needs. <br></br>
                  <br></br>
                  <p>
                    {" "}
                    Partner with our team to design and deliver creative
                    solutions tailored to your needs. Together, we’ll bring your
                    ideas to life
                  </p>
                </p>
                <a href="/OurServices" className="cta">
                  Discover More
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
