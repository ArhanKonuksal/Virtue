// React Component
import React, { useState } from "react";
import "./ourservices2.css";
import Item1 from "../../../assets/servicessoftware1.png";
import Item1H from "../../../assets/Item1H.png";
import Item2 from "../../../assets/Item2.png";
import Item2H from "../../../assets/Item2H.png";
import Item3 from "../../../assets/servicessoftware3.png";
import Item3H from "../../../assets/Item3H.png";
import Item4 from "../../../assets/Item4.png";
import Item4H from "../../../assets/Item4H.png";
import Item5 from "../../../assets/Item5.png";
import Item5H from "../../../assets/Item5H.png";
import Item6 from "../../../assets/Item6.png";
import Item6H from "../../../assets/Item6H.png";
import Item7 from "../../../assets/Item7.png";
import Item7H from "../../../assets/Item7H.png";
import Item8 from "../../../assets/Item8.png";
import Item8H from "../../../assets/Item8H.png";
import Item9 from "../../../assets/Item9.png";
import Item9H from "../../../assets/Item9H.png";
import Logo from "../../../assets/Logos/2/colored.svg";

const sections = [
  {
    id: 1,
    title: "Software Solutions",
    subtitle: "Innovative Software Tailored for Business Growth",
    description:
      "Power your business with cutting-edge software tailored to your needs. From custom web development to ERP & CRM solutions and low-code platforms, we build scalable and efficient digital systems that drive growth and innovation.",
    link: "/SoftwareSolutions",
    services: [
      {
        title: "Web & App Development",
        defaultImage: Item1,
        hoverImage: Item1H,
        hoverText:
          "We build scalable, high-performance websites and mobile applications tailored to your business needs. From custom UI/UX design to secure backend solutions, we ensure seamless digital experiences.",
        link: "/SoftwareSolutions",
      },
      {
        title: "ERP & CRM Solutions",
        defaultImage: Item2,
        hoverImage: Item2H,
        hoverText:
          "Optimize your business with custom ERP & CRM systems that streamline operations, automate workflows, and enhance customer relationships. Gain real-time insights for smarter decision-making.",
        link: "/SoftwareSolutions",
      },
      {
        title: "Low-Code & No-Code Solutions",
        defaultImage: Item3,
        hoverImage: Item3H,
        hoverText:
          "Accelerate development with low-code & no-code platforms. Build apps, automate tasks, and innovate faster—without complex coding. Efficiency meets flexibility.",
        link: "/SoftwareSolutions",
      },
    ],
  },
  {
    id: 2,
    title: "Creative Design",
    subtitle: "Bringing Your Vision to Life with Stunning Designs",
    description:
      "Our creative team transforms ideas into visually compelling designs that resonate. Whether it’s UI/UX, branding, or digital artistry, we craft high-impact visuals that set you apart in a crowded marketplace.",
    link: "/CreativeDesign",
    services: [
      {
        title: "UI/UX Design",
        defaultImage: Item4,
        hoverImage: Item4H,
        hoverText:
          "We create intuitive and visually engaging user experiences that enhance usability and drive engagement. Seamless design meets functionality.",
        link: "/CreativeDesign",
      },
      {
        title: "Brand Identity & Visuals",
        defaultImage: Item5,
        hoverImage: Item5H,
        hoverText:
          "Build a strong and recognizable brand with custom logos, typography, and visual assets. Stand out with a unique identity.",
        link: "/CreativeDesign",
      },
      {
        title: "Graphic & Motion Design",
        defaultImage: Item6,
        hoverImage: Item6H,
        hoverText:
          "Enhance your brand with dynamic visuals and animations that captivate audiences. Elevate your digital presence with creative storytelling.",
        link: "/CreativeDesign",
      },
    ],
  },
  {
    id: 3,
    title: "Advertisement & Media",
    subtitle: "Strategic Media Solutions to Strengthen Your Brand",
    description:
      "Elevate your brand with powerful advertising and media strategies. From social media campaigns to press/publication content, we help you connect with your audience and achieve real results.",
    link: "/AdvertisingAndMedia",
    services: [
      {
        title: "Marketing Strategy",
        defaultImage: Item7,
        hoverImage: Item7H,
        hoverText:
          "Develop data-driven marketing strategies that boost visibility, engagement, and conversions. Position your brand for success with tailored solutions.",
        link: "/AdvertisingAndMedia",
      },
      {
        title: "Social Media Campaigns",
        defaultImage: Item8,
        hoverImage: Item8H,
        hoverText:
          "Grow your brand with impactful social media campaigns that drive audience engagement and increase reach. Maximize results with targeted strategies.",
        link: "/AdvertisingAndMedia",
      },
      {
        title: "Video Production & Editing",
        defaultImage: Item9,
        hoverImage: Item9H,
        hoverText:
          "Bring your brand to life with high-quality video production and engaging edits. Create compelling visual content that captures attention.",
        link: "/AdvertisingAndMedia",
      },
    ],
  },
];

const Ourservices2 = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="services-container">
      {sections.map((section) => (
        <div className="service-section" key={section.id}>
          <div className="service-info">
            <img src={Logo} alt="" />
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
            <p>{section.description}</p>
            <a href={section.link}>
              <button className="explore-button">Explore Services</button>
            </a>
          </div>
          <div className="service-items">
            {section.services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${
                  hovered === `${section.id}-${index}` ? "hovered" : ""
                }`}
                onMouseEnter={() => setHovered(`${section.id}-${index}`)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={
                    hovered === `${section.id}-${index}`
                      ? service.hoverImage
                      : service.defaultImage
                  }
                  alt={service.title}
                  className="service-icon"
                />
                <h3
                  className={
                    hovered === `${section.id}-${index}` ? "hovered-title" : ""
                  }
                >
                  {service.title}
                </h3>
                {hovered === `${section.id}-${index}` && (
                  <>
                    <p className="hover-text">
                      {service.hoverText}
                      <a href={service.link} className="services-link">
                        Learn More{" "}
                      </a>
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ourservices2;
