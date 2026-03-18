import React, { useEffect } from "react";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import gsap from "gsap";


const Solutions = () => {

  const data = [
    {
      icon: <HiBuildingOffice className="w-full h-full text-white" />,
      heading: "Exchanges & Custodians",
      desc: "Offer liquid staking to your users with our white-label solution. Earn additional revenue while maintaining custody.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "White-label API",
      p2: "Revenue sharing",
      p3: "Full custody control",
    },
    {
      icon: <HiOutlineArrowTrendingUp className="w-full h-full text-white" />,
      heading: "Asset Managers",
      desc: "Enhance portfolio yields with secure TON staking. Access institutional-grade infrastructure and reporting.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "Optimized yields",
      p2: "Risk management",
      p3: "Portfolio analytics",
    },
    {
      icon: <GoPeople className="w-full h-full text-white" />,
      heading: "DAOs & Treasuries",
      desc: "Put idle treasury assets to work. Maintain liquidity while earning staking rewards at scale.",
      tickIcon: <FaRegCheckCircle className="w-4 h-4 text-[#37B3FE]" />,
      p1: "Multi-sig support",
      p2: "Governance tools",
      p3: "Treasury analytics",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center pt-16 px-6">
      <div className="container flex flex-col justify-center text-white">
        <div className="flex flex-col text-center gap-2 liness">
          <h1 className="md:text-6xl text-4xl font-bold">
            Tailored Solutions
          </h1>
          <h1 className="md:text-2xl text-lg leading-relaxed">
            Custom solutions for every type of institutional client
          </h1>
        </div>

        <div className="flex md:justify-between justify-center flex-wrap gap-8 mt-10 blockk">
          {data.map((item, index) => (
            <div
              className="md:w-76 w-full group p-6 rounded-xl flex flex-col gap-3 border transition-all duration-500 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] hover:scale-105"
              key={index}
            >
              <div className="w-8 h-8 rounded-xl flex justify-center items-center transition-transform">
                {item.icon}
              </div>
              <div className="text-xl font-bold">{item.heading}</div>
              <div className="text-sm font-semibold">
                {item.desc}
              </div>

              <div className="flex flex-row gap-2 justify-start items-center text-sm">
                {item.tickIcon}
                {item.p1}
              </div>

              <div className="flex flex-row gap-2 justify-start items-center text-sm">
                {item.tickIcon}
                {item.p2}
              </div>

              <div className="flex flex-row gap-2 justify-start items-center text-sm">
                {item.tickIcon}
                {item.p3}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
