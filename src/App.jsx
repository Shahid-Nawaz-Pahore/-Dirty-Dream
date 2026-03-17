import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {

  gsap.registerPlugin(useGSAP,ScrollTrigger);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institution" element={<Home />} />
        <Route path="/news" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;