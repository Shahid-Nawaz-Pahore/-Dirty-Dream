import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router"; 
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Institution from "./pages/Institution.jsx";
import News from "./pages/News.jsx";
import Stake from "./components/Stake.jsx";
import { LuLoader } from "react-icons/lu";

const App = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const { pathname } = useLocation();
  const [loaded,setLoaded] = useState(false);

  console.log("Loaded : ",loaded);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={`${loaded ? 'hidden' : 'flex'} absolute h-screen w-full items-center justify-center bg-transparent`}>
        <LuLoader className="size-10 animate-[spin_1.8s_linear_infinite]" />
      </div>
      <video
        className={`${loaded ? 'scale-100' : 'scale-0' } fixed -z-1 h-full w-full object-cover`}
        loop
        autoPlay
        muted
        onCanPlayThrough={() => {
          console.log("Loaded");
          setLoaded(true);
        }}
        onLoadStart={()=> console.log("Loading start")}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className={`${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/news" element={<News />} />
          <Route path="/stake" element={<Stake />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
