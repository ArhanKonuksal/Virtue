import React from "react";
import "./AboutUsSection2.css";
import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";
import Divider from "../../Dividers/Dividers";
import DividerImg from "../../../assets/firstDivider.png";

const AboutUsSection2 = () => {
  const cards = [
    {
      id: 1,
      image: require("../../../assets/codeBlock.png"), // Replace with your actual image path
      title: "Software Solutions",
    },
    {
      id: 2,
      image: require("../../../assets/BlueRectangle.png"), // Replace with your actual image path
      title: "Creative Design",
    },
    {
      id: 3,
      image: require("../../../assets/BlueRectangle.png"), // Replace with your actual image path
      title: "Marketing",
    },
  ];

  return (
    <>
      <div>
        <AboutUsDivider heading="Our Work" />
      </div>

      <div className="about-virtue">
        <h2 className="about-title">About Virtue.</h2>
        <div className="cards-container-aboutus">
          {cards.map((card) => (
            <div className="card-aboutus" key={card.id}>
              <div className="card-image-aboutus">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-title-aboutus">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* <Divider dividerImg={DividerImg} /> */}
      </div>
    </>
  );
};

export default AboutUsSection2;
