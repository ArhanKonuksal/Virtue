import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Agha from "../assets/agha.png";
import SoftwareSolutionsSection1 from "../components/SoftwareSolutions/SoftwareSolutionsSection1/SoftwareSolutionsSection1";
import SoftwareSolutionsSection2 from "../components/SoftwareSolutions/SoftwareSolutionsSection2/SoftwareSolutionsSection2";
import SoftwareSolutionsSection3 from "../components/SoftwareSolutions/SoftwareSolutionsSection3/SoftwareSolutionsSection3";
import SoftwareSolutionsSection4 from "../components/SoftwareSolutions/SoftwareSolutionsSection4/SoftwareSolutionsSection4";
import SoftwareSolutionsSection5 from "../components/SoftwareSolutions/SoftwareSolutionsSection5/SoftwareSolutionsSection5";
import SoftwareSolutionsSection6 from "../components/SoftwareSolutions/SoftwareSolutionsSection6/SoftwareSolutionsSection6";

const SoftwareSolutions = () => {
  return (
    <>
      <Navbar />
      <SoftwareSolutionsSection1 />
      <SoftwareSolutionsSection2 />
      <SoftwareSolutionsSection3 />
      <SoftwareSolutionsSection4 />
      <SoftwareSolutionsSection5
        quote="Software is a bridge between ideas and reality, well-built code turns possibiliteis into seamless experiences."
        author="Ersoy Baki"
        title="Chief Technical Officer"
        profileImage={Agha}
      />
      <SoftwareSolutionsSection6 />
      <Footer />
    </>
  );
};

export default SoftwareSolutions;
