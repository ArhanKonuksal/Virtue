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
            <h1>
              Empowering business From strategy to execution, we craft solutions
              that turn your vision into success.
            </h1>
          </div>
          <div className="list-item">
            <a href="/OurServices">
              <li>Services</li>
            </a>
            <a href="/AboutUs">
              <li>About Us</li>
            </a>
            <a href="/ContactUs">
              <li>Contact Us</li>
            </a>
          </div>
          <div className="Boxes">
            <div className="box1">
              <div className="text">
                <h1>Powering Your Vision</h1>
                <p>
                  Unleash the full potential of your business with our
                  cutting-edge solutions. From strategy to execution, we’ve got
                  you covered
                </p>
              </div>

              <button className="button-box1">
                <a href="/OurServices">Learn More About Our Services</a>
              </button>
            </div>
            <div className="box2">
              <h1>Who We Are, What We Do</h1>

              <button className="button-box2">
                <a href="/AboutUs">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ borderRadius: "50%", size: "2px" }}
                  />
                </a>
              </button>
            </div>
            <div className="box2">
              <h1>Let’s Build Together</h1>
              <button className="button-box2">
                <a href="/OurServices">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ borderRadius: "50%", size: "2px" }}
                  />
                </a>
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
