import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom"; 
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Institution from "./pages/Institution.jsx";
import News from "./pages/News.jsx";
import Stake from "./components/Stake.jsx";

const App = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <video
        className="fixed -z-1 h-full w-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/news" element={<News />} />
        <Route path="/stake" element={<Stake />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
