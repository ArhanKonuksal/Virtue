import React from 'react';
import './ContactStyles.css';

const ContactPart = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact <span className="highlight">Virtue</span>!</h1>
      <p className="contact-subtitle">We appreciate your interest in Virtue. Please select from the options below.</p>

      <div className="contact-info">
        <div className="contact-item">
          <p className="phone-number">+00 (000) 000-0000</p>
          <p className="location">Cyprus & Cyprus</p>
        </div>
        <div className="contact-item">
          <p className="phone-number">+00 (000) 000-0000</p>
          <p className="location">Cyprus & Cyprus</p>
        </div>
        <div className="contact-item">
          <p className="location-link">Find the Location</p>
          <p className="location-description">View a list of local Virtue office information</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQs</h2>
        <div className="faq-item">
          <p>Sustainability <span className="faq-toggle">+</span></p>
        </div>
        <div className="faq-item">
          <p>Inclusion & Diversity <span className="faq-toggle">+</span></p>
        </div>
        <div className="faq-item">
          <p>Responsible AI <span className="faq-toggle">+</span></p>
        </div>
        <div className="faq-item">
          <p>Transparent workforce reporting <span className="faq-toggle">+</span></p>
        </div>
        <div className="faq-item">
          <p>Apprenticeship <span className="faq-toggle">+</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPart ;
