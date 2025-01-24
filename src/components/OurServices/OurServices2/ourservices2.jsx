// React Component
import React from "react";
import "./ourservices2.css";
import Item1 from "../../../assets/BlueRectangle.png";
import Item2 from "../../../assets/BlueRectangle.png";
import Item3 from "../../../assets/BlueRectangle.png";
import Logo from "../../../assets/Virtue-Logo.png";

const ourservices2 = () => {
  const services = [
    {
      title: "Innovative Software Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      items: [
        { name: "Web Development", image: Item1 },
        { name: "Cloud-based Optimization", image: Item2 },
        { name: "Machine Learning & AI", image: Item3 },
      ],
    },
    {
      title: "Dynamic Advertising & Media Strategies",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      items: [
        { name: "Web Development", image: Item1 },
        { name: "Cloud-based Optimization", image: Item2 },
        { name: "Machine Learning & AI", image: Item3 },
      ],
    },
    {
      title: "Comprehensive Business Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      items: [
        { name: "Web Development", image: Item1 },
        { name: "Cloud-based Optimization", image: Item2 },
        { name: "Machine Learning & AI", image: Item3 },
      ],
    },
    {
      title: "Creative Content & Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      items: [
        { name: "Web Development", image: Item1 },
        { name: "Cloud-based Optimization", image: Item2 },
        { name: "Machine Learning & AI", image: Item3 },
      ],
    },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-section" key={index}>
          <div className="service-info">
            <img src={Logo} alt="" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className="explore-button">Explore Services</button>
          </div>
          <div className="service-items">
            {service.items.length > 0 ? (
              service.items.map((item, idx) => (
                <div
                  className="service-item"
                  key={idx}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="empty-placeholder">Empty Section</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ourservices2;
