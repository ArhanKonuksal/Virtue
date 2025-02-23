import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Agha from "../assets/agha.png";
import CreativeDesignSection1 from "../components/CreativeDesign/CreativeDesignSection1/CreativeDesignSection1";
import CreativeDesignSection2 from "../components/CreativeDesign/CreativeDesignSection2/CreativeDesignSection2";
import SoftwareSolutionsSection5 from "../components/SoftwareSolutions/SoftwareSolutionsSection5/SoftwareSolutionsSection5";
import CreativeDesignSection3 from "../components/CreativeDesign/CreativeDesignSection3/CreativeDesignSection3";
import CreativeDesignSection4 from "../components/CreativeDesign/CreativeDesignSection4/CreativeDesignSection4";
import CreativeDesignSection5 from "../components/CreativeDesign/CreativeDesignSection5/CreativeDesignSection5";

const CreativeDesign = () => {
  return (
    <>
      <Navbar />
      <CreativeDesignSection1 />
      <CreativeDesignSection2 />
      <SoftwareSolutionsSection5
        quote="Design is not just what it looks like and feels like. Design is how it works."
        author="Steve Jobs"
        title="CEO of Apple INC."
        profileImage={Agha}
      />
      <CreativeDesignSection3 />
      <CreativeDesignSection4 />
      <CreativeDesignSection5 />
      <Footer />
    </>
  );
};

export default CreativeDesign;
