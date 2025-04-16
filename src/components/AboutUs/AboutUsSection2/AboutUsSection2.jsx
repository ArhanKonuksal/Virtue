import "./AboutUsSection2.css";
import AboutUsDivider from "../AboutUsDivider/AboutUsDivider";

const AboutUsSection2 = () => {
  const cards = [
    {
      id: 1,
      image: require("../../../assets/aboutusimage1.png"), // Replace with your actual image path
      title: "Software Solutions",
      description: "Driven by innovation",
      link: "/SoftwareSolutions",
    },
    {
      id: 2,
      image: require("../../../assets/Item6H.png"), // Replace with your actual image path
      title: "Creative Design",
      description: "Your growth, our focus",
      link: "/CreativeDesign",
    },
    {
      id: 3,
      image: require("../../../assets/aboutusimage2.png"), // Replace with your actual image path
      title: "Advertisement & Media",
      description: "Smart, simple, yours",
      link: "/MarketingAndAdvertisement",
    },
  ];

  return (
    <>
      <div>
        {/*<AboutUsDivider heading="Our Work" /> */}
      </div>

      <div className="about-virtue">
        <h2 className="about-title">About Virtue.</h2>
        <div className="cards-container-aboutus">
          {cards.map((card) => (
            <div className="card-aboutus" key={card.id}>
              <div className="card-image-aboutus">
                <img src={card.image} alt={card.title} />
                <div className="card-title-aboutus">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <a href={card.link}>
                  <button className="view-services-btn">
                    View Our Services
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsSection2;
