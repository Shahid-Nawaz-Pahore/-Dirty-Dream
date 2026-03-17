import React from "react";
import Hero from "../components/home/Hero.jsx";
import Stats from "../components/home/Stats.jsx";
import Boost from "../components/home/Boost.jsx";
import Working from "../components/home/Working.jsx";

const Home = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-start">
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

      <Hero />
      <Stats />
      <Boost />
      <Working />
    </div>
  );
};

export default Home;
