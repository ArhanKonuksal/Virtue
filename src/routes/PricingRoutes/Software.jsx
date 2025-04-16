import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PricingSubpageSection1 from "../../components/Pricing/PricingSubpageSection1/PricingSubpageSection1";
import CoreVirtuesValues from "../../components/CoreVirtuesValues/CoreVirtuesValues";
import Footer from "../../components/Footer/Footer";
const basicPlanFeatures = [
  "Website & App Maintenance",
  "Hosting & Server Management",
  "Basic Feature Enhancements",
];

const standardPlanFeatures = [
  "Full Website & App Management",
  "Custom API & Integration Support",
  "Advanced Cybersecurity Solutions",
  "Performance Monitoring",
];

const enterprisePlanFeatures = [
  "We create fully customized strategies tailored to your business needs.",
  "From AI-powered software to multi-platform branding & strategy, we take YOU there.",
  "Tell us your goals—our team will craft a strategic solution just for you.",
];
const Software = () => {
  return (
    <>
      <Navbar />
      <PricingSubpageSection1
        mainTitle="Pricing for Software"
        subtitleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        basicPlanTitle="Basic"
        basicPlanDescription="For businesses needing reliable maintenance & security for their digital platforms."
        basicPlanFeatures={basicPlanFeatures}
        standardPlanTitle="Standard"
        standardPlanDescription="For growing companies requiring development, automation & maintenance."
        standardPlanFeatures={standardPlanFeatures}
        enterprisePlanTitle="Enterprise"
        enterprisePlanDescription="Looking for a fully customized software solution."
        enterprisePlanFeatures={enterprisePlanFeatures}
      />
      <CoreVirtuesValues />
      <Footer />
    </>
  );
};

export default Software;
