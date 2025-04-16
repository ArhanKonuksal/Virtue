import React from "react";
import "./ourservices1.css";
import icon1 from "../../../assets/servicesicon1.png";
import icon2 from "../../../assets/serviceicon2.png";
import icon3 from "../../../assets/serviceicon3.png";

const ourservices1 = () => {
  const services = [
    {
      icon: icon1,
      title: "Get strong digital presence",
      description:
        "Build a powerful online identity with innovative web solutions, seamless user experiences, and engaging content. Elevate your brand's visibility across digital platforms.",
    },
    {
      icon: icon2,
      title: "Attract quality leads and increase sales",
      description:
        "Drive targeted traffic and convert prospects into loyal customers with strategic marketing, data-driven campaigns, and optimized funnels designed for growth.",
    },
    {
      icon: icon3,
      title: "Reach your target audience",
      description:
        "Connect with the right people at the right time through tailored advertising, social media strategies, and impactful messaging that resonates with your audience.",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">
        Discover our services, tailored for your needs
      </h1>
      <div className="ourservices-grid">
        {services.map((service, index) => (
          <div className="service-card-services" key={index}>
            <div className="service-icon-wrapper">
              <img
                className="service-icon"
                src={service.icon}
                alt="service-icons"
              ></img>
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ourservices1;
