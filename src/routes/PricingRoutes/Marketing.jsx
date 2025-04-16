import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PricingSubpageSection1 from "../../components/Pricing/PricingSubpageSection1/PricingSubpageSection1";
import CoreVirtuesValues from "../../components/CoreVirtuesValues/CoreVirtuesValues";
import Footer from "../../components/Footer/Footer";

const basicPlanFeatures = [
  "Website & App Social Media Management",
  "SEO Optimization",
  "Email Marketing",
  "Basic Google & Meta Ad Setup",
];

const standardPlanFeatures = [
  "Content-Driven Digital Marketing",
  "Performance Marketing",
  "Data-Driven SEO Strategy",
  "Conversion Optimization",
];

const enterprisePlanFeatures = [
  "We create fully customized strategies tailored to your business needs.",
  "From AI-powered software to multi-platform branding & strategy, we take YOU there.",
  "Tell us your goals—our team will craft a strategic solution just for you.",
];
const Marketing = () => {
  return (
    <>
      <Navbar />
      <PricingSubpageSection1
        mainTitle="Pricing for Marketing"
        subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        basicPlanTitle="Basic"
        basicPlanDescription="For startups & small businesses looking to establish an online presence."
        basicPlanFeatures={basicPlanFeatures}
        standardPlanTitle="Standard"
        standardPlanDescription=" For businesses focused on scaling brand visibility & increasing conversions."
        standardPlanFeatures={standardPlanFeatures}
        enterprisePlanTitle="Enterprise"
        enterprisePlanDescription="Need a marketing strategy tailored to your business growth?"
        enterprisePlanFeatures={enterprisePlanFeatures}
      />
      <CoreVirtuesValues />
      <Footer />
    </>
  );
};

export default Marketing;
