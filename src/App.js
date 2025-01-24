import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import OurServices from "./pages/OurServices";
import Insights from "./pages/Insights";
import AdvertisingAndMedia from "./pages/AdvertisingAndMedia";
import BusinessSolutions from "./pages/BusinessSolutions";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
