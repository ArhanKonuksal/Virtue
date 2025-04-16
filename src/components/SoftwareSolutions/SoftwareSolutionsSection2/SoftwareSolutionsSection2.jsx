import React from "react";
import "./SoftwareSolutionsSection2.css";
import Image1 from "../../../assets/servicessoftware1.png";
import Image2 from "../../../assets/Item2.png";
import Image3 from "../../../assets/servicessoftware3.png";

const SoftwareSolutionsSection2 = () => {
  return (
    <div className="digital-services-container">
      <div className="header-section">
        <h1 className="main-heading">
          All Your Visions, One Seamless Experience
        </h1>
        <p className="subtitle">
          Unifying Data, Workflows, and Collaboration into an Intelligent
          Ecosystem
        </p>
      </div>

      <div className="services-grid">
        <ServiceCard
          imageSrc={Image1}
          imageAlt="Web & App Development Icon"
          title="Web & App Development"
          description="We design and develop high-performance, scalable, and user-friendly websites and applications tailored to your business needs. Whether it's a corporate website, SaaS application, or a custom mobile app, our solutions are built for speed, security, and seamless user experiences. Our development process includes custom UI/UX design, backend integrations, and optimized performance to ensure your digital presence stands out in a competitive landscape. Let us bring your vision to life with cutting-edge technologies and industry best practices."
        />

        <ServiceCard
          imageSrc={Image2}
          imageAlt="ERP & CRM Solutions Icon"
          title="ERP & CRM Solutions"
          description="Transform how you manage your business with our ERP (Enterprise Resource Planning) and CRM (Customer Relationship Management) solutions. We deliver custom-built business automation workflows, improve customer engagement, and enhance operational efficiency by centralizing data and streamlining processes. Whether you need solutions covering inventory management, HR, financial management, or customer support solutions, our ERP & CRM platforms integrate real-time insights, seamless integrations, and user-friendly interfaces that help your company scale with confidence."
        />

        <ServiceCard
          imageSrc={Image3}
          imageAlt="No-code & Low-code Solutions Icon"
          title="No-code & Low-code Solutions"
          description="Accelerate your digital transformation with no-code and low-code platforms designed for businesses that need fast, cost-effective and adaptable software solutions without deep coding expertise. We empower teams to build applications, automate processes, and prototype ideas with reduced development time and costs. Whether you need a custom business app, internal workflow automation, or a scalable client portal, our no-code and low-code approach delivers professional-grade applications while ensuring flexibility and growth."
        />
      </div>
    </div>
  );
};

function ServiceCard({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="service-card-softwaresolutions">
      <div className="icon-container">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="service-icon-software"
        />
      </div>
      <div className="title-container">
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default SoftwareSolutionsSection2;
