import React from "react";
import "./homesection1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const homesection1 = () => {
  return (
    <>
      <div className="home-section1-container">
        <div className="container">
          <div className="heading">
            <h1>Empowering business innovation,</h1>
            <h1>Driving dynamic strategies for your success.</h1>
          </div>
          <div className="list-item">
            <li>Discover & Plan</li>
            <li>Design & Development</li>
            <li>Support & Expand</li>
          </div>
          <div className="Boxes">
            <div className="box1">
              <div className="text">
                <h1>LOREM IPSUM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <button className="button-box1">
                Learn More About Our Services
              </button>
            </div>
            <div className="box2">
              <h1>LOREM IPSUM</h1>

              <button className="button-box2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ borderRadius: "50%", size: "2px" }}
                />
              </button>
            </div>
            <div className="box2">
              <h1>LOREM IPSUM</h1>
              <button className="button-box2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ borderRadius: "50%", size: "2px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* O resim buraya mı gelsin emin olamadım */}
    </>
  );
};

export default homesection1;
