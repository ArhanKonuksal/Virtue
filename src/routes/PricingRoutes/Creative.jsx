import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PricingSubpageSection1 from "../../components/Pricing/PricingSubpageSection1/PricingSubpageSection1";
import CoreVirtuesValues from "../../components/CoreVirtuesValues/CoreVirtuesValues";
import Footer from "../../components/Footer/Footer";
const basicPlanFeatures = [
  "Social Media Graphics",
  "Hosting & Server Managementn",
  "Basic Feature Enhancements",
];

const standardPlanFeatures = [
  "Comprehensive Branding Package",
  "Marketing & Advertising Visuals",
  "UI/UX Design Support",
  "Motion Graphics & Short Video Editing",
];

const enterprisePlanFeatures = [
  "We create fully customized strategies tailored to your business needs.",
  "From AI-powered software to multi-platform branding & strategy, we take YOU there.",
  "Tell us your goals—our team will craft a strategic solution just for you.",
];
const CreativeDesing = () => {
  return (
    <>
      <Navbar />
      <PricingSubpageSection1
        mainTitle="Pricing for Creative Design"
        subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        basicPlanTitle="Basic"
        basicPlanDescription="For small businesses & startups needing consistent design support."
        basicPlanFeatures={basicPlanFeatures}
        standardPlanTitle="Standard"
        standardPlanDescription=" For brands looking to establish a strong visual identity & engage their audience."
        standardPlanFeatures={standardPlanFeatures}
        enterprisePlanTitle="Enterprise"
        enterprisePlanDescription="Need high-end creative solutions tailored to your business?"
        enterprisePlanFeatures={enterprisePlanFeatures}
      />
      <CoreVirtuesValues />
      <Footer />
    </>
  );
};

export default CreativeDesing;
