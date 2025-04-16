import "./PricingSubpageSection1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BirdLogo from "../../../assets/Varlık 1 7.png";

function PricingSubpageSection1(props) {
  const {
    mainTitle,
    subtitleText,
    basicPlanTitle,
    basicPlanDescription,
    basicPlanFeatures,
    standardPlanTitle,
    standardPlanDescription,
    standardPlanFeatures,
    enterprisePlanTitle,
    enterprisePlanDescription,
    enterprisePlanFeatures,
  } = props;

  return (
    <div className="pricing-page-container">
      <div className="pricing-content-wrapper">
        <div className="pricing-header-section">
          <h1 className="pricing-main-title">{mainTitle}</h1>
          <p className="pricing-subtitle-text">{subtitleText}</p>
        </div>

        <div className="pricing-cards-grid">
          {/* Basic Plan */}
          <div className="pricing-card-item pricing-basic-card">
            <div className="card-header-block">
              <h2 className="card-title-text">{basicPlanTitle}</h2>
              <p className="card-description-text">{basicPlanDescription}</p>
            </div>

            <ul className="feature-list-container">
              {basicPlanFeatures.map((feature, index) => (
                <li key={index} className="feature-list-item">
                  <span className="bullet-point">•</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="/ContactUs">
              <button className="cta-button-element basic-cta-button">
                Get in Touch{" "}
                <span className="arrow-icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </button>
            </a>
          </div>

          {/* Standard Plan */}
          <div className="pricing-card-item pricing-standard-card">
            <div className="card-header-block">
              <h2 className="card-title-text">{standardPlanTitle}</h2>
              <p className="card-description-text">{standardPlanDescription}</p>
            </div>

            <ul className="feature-list-container">
              {standardPlanFeatures.map((feature, index) => (
                <li key={index} className="feature-list-item">
                  <span className="bullet-point">•</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="/ContactUs">
              <button className="cta-button-element standard-cta-button">
                Get in Touch{" "}
                <span className="arrow-icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </button>
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card-item pricing-enterprise-card">
            <div className="bird-logo-container">
              <img src={BirdLogo} alt="Bird Logo" className="bird-logo-image" />
            </div>

            <div className="card-header-block">
              <h2 className="card-title-text">{enterprisePlanTitle}</h2>
              <p className="card-description-text enterprise-description">
                {enterprisePlanDescription}
              </p>
            </div>

            <ul className="feature-list-container enterprise-feature-list">
              {enterprisePlanFeatures.map((feature, index) => (
                <li key={index} className="enterprise-feature-item">
                  <span className="bullet-point">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="/ContactUs">
              <button className="cta-button-element enterprise-cta-button">
                Get in Touch{" "}
                <span className="arrow-icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSubpageSection1;
