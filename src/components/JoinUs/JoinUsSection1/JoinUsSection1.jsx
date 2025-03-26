"use client";

import { useState } from "react";
import "./JoinUsSection1.css";
import BillboardImg from "../../../assets/virtue billboard png 2.png";
function JoinUsSection1() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <div className="job-search-container">
        <div className="job-search-content">
          <h1 className="no-offers-heading">No offers avaliable...</h1>

          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Job title or keywords"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="search-icon-button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            <button className="filters-button">
              Filters
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <button className="search-button" onClick={handleSearch}>
              Search Jobs
            </button>
          </div>

          <div className="company-section">
            <div className="company-logo-container">
              <img
                src={BillboardImg}
                alt="Virtue Company Logo"
                className="company-logo"
              />
            </div>

            <div className="company-description">
              <p>
                Virtue empowers businesses around the globe to significantly
                enhance their digital strategies through expert marketing and
                cutting-edge web development. By integrating advanced AI tools
                into our services, we deliver not just measurable outcomes, but
                also tailor our approaches to align perfectly with our clients'
                unique business needs, ensuring impactful results across various
                digital platforms. Our suite of sophisticated tools and
                strategies is designed to streamline operations, maximize
                engagement, and boost overall business growth, making Virtue a
                trusted partner in navigating the complex digital landscape.
              </p>
              <p>
                Virtue encompasses a broad spectrum of over 50 distinct
                services, encompassing tools and enhancements within business
                solutions, web development, content creation, and digital
                marketing. Annually recognized for excellence, Virtue continues
                to set standards in digital strategy and innovation across
                multiple industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>
    </>
  );
}

export default JoinUsSection1;
