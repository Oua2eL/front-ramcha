import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SectionOne from "./components/Home/SectionOne/SectionOne";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import OurService from "./components/OurService/OurService";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Privacy } from "./components/Privacy/Privacy";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SectionOne />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/Services" element={<OurService />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/sincrire" element={<Register />} />
        <Route path="/connecte" element={<Login />} />
        <Route path="/confidentialité" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
