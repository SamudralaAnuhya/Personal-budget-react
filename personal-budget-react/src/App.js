import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./HomePage/Homepage";
import AboutPage from "./AboutPage/AboutPage";
import Menu from "./Menu/Menu";
import LoginPage from "./LoginPage/LoginPage";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Hero />
        <div className="maincontainer">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
          
        </div>
        <Footer />
      </Router>
    </div>
  );
}
