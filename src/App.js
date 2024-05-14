import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import JoinUs from "./pages/JoinUs"
import Services from "./pages/Services"
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
