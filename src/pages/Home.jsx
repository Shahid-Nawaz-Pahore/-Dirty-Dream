import React from "react";

import Stats from "../components/Stats.jsx";
import Boost from "../components/home/Boost.jsx";
import Working from "../components/home/Working.jsx";
import FAQ from "../components/home/FAQ.jsx";
import CTA from "../components/home/CTA.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {

  const heroData = {
    main: "Earn rewards on your TON",
    sub: "with Stakee",
    desMain: "Secure the TON blockchain by staking your TON tokens",
    desSub: "and be part of the next generation of decentralized finance."
  }

  const stats = [
    {
      value: "2.9",
      key: "Annual Percentage Yield",
      prev: null,
      after: "%",
      point: true
    },
    {
      value: "62.4",
      key: "Total Value Locked",
      prev: "$",
      after: " M",
      point: true
    },
    {
      value: "119329",
      key: "Stakers",
      prev: null,
      after: null,
      point: false
    },
    {
      value: "2.1",
      key: "TON Staked",
      prev: null,
      after: "M",
      point: true
    },
  ];

  return (
    <div className='text-white'>
      <Hero data={heroData} />
      <Stats stats={stats} />
      <Boost />
      <Working />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
