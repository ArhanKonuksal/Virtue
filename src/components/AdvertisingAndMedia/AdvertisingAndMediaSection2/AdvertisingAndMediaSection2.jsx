import React from "react";
import "./AdvertisingAndMediaSection2.css";
import phoneImage from "../../../assets/phoneimage.png"; // Replace with the actual phone image path
import monitorImage from "../../../assets/senses.png"; // Replace with the actual monitor image path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AdvertisingAndMediaSection2 = () => {
  return (
    <div className="advertisement-process">
      {/* Hero Section */}
      <section className="amsection2">
        <div className="text-container">
          <h2>Worried About Your Advertisement Process?</h2>
          <p>
            Jumpstart your application with our user-centric design tools and
            libraries, enabling rapid prototyping and implementation within just
            a few clicks. Make Virtue your go-to for deploying user interfaces
            that engage and convert.
          </p>
          <p>
            Virtue isn't just a hub for innovative solutions. It's a platform
            crafted to streamline the future of intuitive user experience
            design.
          </p>
          <a href="/readmore">
            READ MORE
            <button className="readmore-button">
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ background: "rgba(0, 0, 0, 0)", size: "2px" }}
              />
            </button>
          </a>
        </div>
        <div className="image-container-advertisement">
          <img src={phoneImage} alt="Phone" className="phone-image" />
          <img src={monitorImage} alt="Monitor" className="monitor-image" />
        </div>
      </section>

      {/* Statistics Section */}
      <h2 className="statistics-header">
        <FontAwesomeIcon icon={faBook} /> Advertising Now
      </h2>
      <section className="statistics">
        <div className="stat-item">
          <h3>73%</h3>
          <p>of customers expect companies to understand their needs now.</p>
        </div>
        <div className="stat-item">
          <h3>90%</h3>
          <p>
            of B2C and B2B executives agree customer engagement drives
            retention.
          </p>
        </div>
        <div className="stat-item">
          <h3>44%</h3>
          <p>
            of companies were ready to integrate automation today in the
            mid-2000s.
          </p>
        </div>
        <div className="stat-item">
          <h3>63%</h3>
          <p>of customers expect companies to remember their unique needs.</p>
        </div>
      </section>
    </div>
  );
};

export default AdvertisingAndMediaSection2;
