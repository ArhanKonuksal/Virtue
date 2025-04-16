import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import OurServices from "./pages/OurServices";
import Insights from "./pages/Insights";
import Pricing from "./pages/Pricing";
import AdvertisingAndMedia from "./pages/AdvertisingAndMedia";
import BusinessSolutions from "./pages/BusinessSolutions";
import AboutUs from "./pages/AboutUs";
import Software from "./routes/PricingRoutes/Software";
import Marketing from "./routes/PricingRoutes/Marketing";
import Creative from "./routes/PricingRoutes/Creative";
import BusinessSolutionsRoute from "./routes/PricingRoutes/BusinessSolutions";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import CreativeDesign from "./pages/CreativeDesign";
import Terms from "./routes/Terms";
import Legal from "./routes/Legal";
import Privacy from "./routes/Privacy";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Insights" element={<Insights />} />
          <Route
            path="/AdvertisingAndMedia"
            element={<AdvertisingAndMedia />}
          />
          <Route path="/BusinessSolutions" element={<BusinessSolutions />} />
          <Route path="/SoftwareSolutions" element={<SoftwareSolutions />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/CreativeDesign" element={<CreativeDesign />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Pricing/Software" element={<Software />} />
          <Route path="/Pricing/Marketing" element={<Marketing />} />
          <Route path="/Pricing/Creative" element={<Creative />} />
          <Route path="/Pricing/BusinessSolutions" element={<BusinessSolutionsRoute />}/>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/legal" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
