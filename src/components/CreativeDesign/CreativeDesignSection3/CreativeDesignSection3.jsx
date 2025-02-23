import React from "react";
import "./CreativeDesignSection3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Branding from "../../../assets/Video Icon.png";
import GraphicDesign from "../../../assets/graphicdesign.png";
import UIUX from "../../../assets/ux-creative.png";
import WebsiteDesign from "../../../assets/websitedesign.png";

const CreativeDesignSection3 = () => {
  const services = [
    {
      id: 1,
      icon: Branding,
      title: "BRANDING",
      description:
        "From Logos to Complete Brand Strategies, We Shape How the World Sees You.",
    },
    {
      id: 2,
      icon: GraphicDesign,
      title: "GRAPHIC DESIGN",
      description:
        "We Create Stunning Graphics That Capture Attention and Enhance Your Brand.",
    },
    {
      id: 3,
      icon: UIUX,
      title: "UI/UX DESIGN",
      description:
        "Elevate Your Digital Products with Designs That Prioritize Functionality and Aesthetics.",
    },
    {
      id: 4,
      icon: WebsiteDesign,
      title: "WEBSITE DESIGN",
      description: "Beautiful, Fast, and Optimized for Maximum Impact.",
    },
  ];
  return (
    <div className="innovation-section">
      {/* Left Side - Text Content */}
      <div className="innovation-text">
        <p className="subheading">WHAT WE OFFER?</p>
        <h1>
          EXPERIENCE THE POWER OF <span className="highlight">INNOVATION</span>
        </h1>
        <hr className="divide-creativesection3" />
        <p className="description-creativesection3">
          We Design, Build, and Transform Brands with Cutting-Edge Solutions in
          Branding, Graphic Design, UI/UX, and Website Development to Elevate
          Your Digital Presence.
        </p>
        <a href="/" className="cta">
          VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>

      {/* Right Side - Service Cards */}
      <div className="service-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeDesignSection3;
