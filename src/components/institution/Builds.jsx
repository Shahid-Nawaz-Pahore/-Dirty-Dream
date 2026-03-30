import React, { useEffect } from "react";
import { MdOutlineShield } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuGlobe } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";

const Builds = () => {
  const data = [
    {
      icon: <MdOutlineShield className="text-white w-full h-full" />,
      heading: "Enterprise-Grade Security",
      para: "Multi-signature wallets, comprehensive insurance coverage, and audited smart contracts ensure institutional-level security.",
    },
    {
      icon: <BsGraphUpArrow className="text-white w-full h-full" />,
      heading: "Optimized Returns",
      para: "Access to premium validator pools and optimized staking strategies to maximize institutional portfolio yields.",
    },
    {
      icon: <IoLockClosedOutline className="text-white w-full h-full" />,
      heading: "Regulatory Compliance",
      para: "Full compliance documentation, KYB processes, and support for institutional reporting requirements.",
    },
    {
      icon: <GoPeople className="text-white w-full h-full" />,
      heading: "Dedicated Support",
      para: "24/7 dedicated account management, priority support channels, and custom integration assistance.",
    },
    {
      icon: <LuGlobe className="text-white w-full h-full" />,
      heading: "Global Infrastructure",
      para: "Distributed validator network across multiple jurisdictions with 99.9% uptime guarantee.",
    },
    {
      icon: <BsLightningCharge className="text-white w-full h-full" />,
      heading: "Instant Liquidity",
      para: "Access deep liquidity pools for STAKED tokens, enabling flexible treasury management at scale.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="container grid gap-4 pt-10 card 
          grid-cols-1 md:px-0 px-6
          sm:grid-cols-2 
          lg:grid-cols-3"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl flex flex-col gap-3 border 
        transition bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] 
        hover:scale-105 duration-500"
          >
            <div className="w-8 h-8 rounded-xl flex justify-center items-center">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold text-single">{item.heading}</h2>

            <p className="text-lg font-semibold">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Builds;
