import React from 'react'
import Stats from '../components/Stats';
import Hero from '../components/Hero';
import Builds from "../components/institution/Builds.jsx"
import Solutions from "../components/institution/Solutions.jsx"
import Enterprise from "../components/institution/Enterprise.jsx"
import Started from "../components/institution/Started.jsx"


const Institution = () => {

  const heroData = {
    main: "Institutional-Grade",
    sub: "Liquid Staking",
    desMain: "Enterprise solutions for exchanges, asset managers, and institutional investors.",
    desSub: "Secure, compliant, and scalable liquid staking infrastructure."
  }

  const stats = [
    {
      value: "500",
      key: "Total Value Locked",
      prev: "$",
      after: "M+",
      point: false
    },
    {
      value: "150",
      key: "Institutional Clients",
      prev: null,
      after: "+",
      point: false
    },
    {
      value: "99.9",
      key: "Uptime SLA",
      prev: null,
      after: "%",
      point: true
    },
    {
      value: "24",
      key: "Support Coverage",
      prev: null,
      after: "/7",
      point: false
    },
  ];

  return (
    <div className='text-white'>
      <Hero data={heroData} />
      <Stats stats={stats} />
      <Builds />
      <Solutions />
      <Enterprise />
      <Started />
    </div>
  )
}

export default Institution;