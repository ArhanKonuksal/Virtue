import React, { useState, useRef } from "react";
import "./AboutUsSection3.css";
import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";

const AboutUsSection3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      id: 1,
      title: "Growth",
      content:
        "We focus on fostering growth—both for our clients and within our own team.",
    },
    {
      id: 2,
      title: "Adaptability",
      content:
        "We tailor our approach to meet the unique needs of every client and embrace change as an opportunity for growth.",
    },
    {
      id: 3,
      title: "Trust",
      content:
        "We earn trust through consistency, transparency, and delivering on our promises.",
    },
    {
      id: 4,
      title: "Long-Term Partnerships",
      content:
        "We focus on building relationships that grow over time, ensuring sustainable success for our clients.",
    },
    {
      id: 5,
      title: "Collaboration",
      content:
        "We believe in teamwork and strong partnerships, creating synergies that drive mutual success.",
    },
  ];

  return (
    <>
      <div>
        <AboutUsDivider heading="Our Values" />
      </div>

      <div className="vision-section">
        <div className="vision-header">
          <h1>Turning Vision Into Reality</h1>
          <p>
            Virtue grows as we listen to our clients' needs and work closely
            with them to create their Excellent visions. Our focus is on clear
            communication. We're not just here to get the job done—we're here to
            build strong and lasting partnerships.
          </p>
        </div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <button
                className="accordion-button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsSection3;
