import React, { useEffect, useState } from "react";
import { PiHandDepositBold } from "react-icons/pi";
import { RiFolderReceivedLine } from "react-icons/ri";
import { MdOutlineMultipleStop } from "react-icons/md";

import { FaLock } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Stats = () => {

  const [width,setWidth] = useState(window.innerWidth);
  
  const stats = [
    {
      icon: <FaLock className="text-white w-7 h-7" />,
      title: "Non-Custodial",
      para: "Full control. Stake directly from your wallet.",
    },
    {
      icon: <BsFillLightningChargeFill className="text-white w-7 h-7" />,
      title: "Instant Liquidity",
      para: "Receive STAKED tokens instantly. Use in DeFi while earning rewards.",
    },
    {
      icon: <MdOutlineAutoGraph className="text-white w-7 h-7" />,
      title: "Competative APY",
      para: "Earn up to 5.2% APY. Rewards are automatically compounded.",
    },
    {
      icon: <PiHandDepositBold className="text-white w-7 h-7" />,
      title: "Deposit TON",
      para: "to start staking, and to catch-up the Rewards from all.",
    },
    {
      icon: <RiFolderReceivedLine className="text-white w-7 h-7" />,
      title: "Receive tsTON",
      para: "that accumulates rewards and distribute to traders accordingly",
    },
    {
      icon: <MdOutlineMultipleStop className="text-white w-7 h-7" />,
      title: "Use and Multiply",
      para: "tsTON rewards in TON DeFi and catch-up the rewards from the pont.",
    },
  ];

  useEffect(()=>{

    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    }

    window.addEventListener("resize",handleResize);

    return () => window.removeEventListener("resize",handleResize)

  },[]);

  return (
    <section id="stats" className="overflow-hidden pt-16">
      <style>
        {`
          @keyframes scrollStats {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className=" mx-auto">
        <div className="flex items-center w-full mt-6 px-6">
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
          <div className="flex-1 h-[1px] bg-white -mx-[3px]"></div>
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
        </div>

        <div className="group flex md:overflow-hidden overflow-scroll py-2 md:px-0 px-6 no-scrollbar">
          <div
            className="flex w-max gap-6 pt-16 md:animate-[scrollStats_45s_linear_infinite]"
            style={{
              // animation: "scrollStats 45s linear infinite",
              animationPlayState: "var(--play-state, running)",
            }}
            onMouseEnter={(e) =>
              e.currentTarget.style.setProperty("--play-state", "paused")
            }
            onMouseLeave={(e) =>
              e.currentTarget.style.setProperty("--play-state", "running")
            }
          >
            {[...stats, ...(width > 768 ? stats : [])].map((item, i) => (
              <div
                key={i}
                className="w-[350px]

flex flex-col
rounded-2xl border border-primary
gap-3
bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]
hover:shadow-secondary hover:drop-shadow-2xl
hover:ring-1 hover:ring-primary
transition-all duration-300
hover:-translate-y-1 px-4 py-4"
              >
                <div className="flex flex-row justify-between w-full">
                  <div className="w-14 h-14 border border-gray-200 rounded-2xl flex justify-center items-center">
                    <p className="text-sm sm:text-base font-semibold text-white text-single">
                      {item.icon}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <GoDotFill className="w-4 h-4 text-white animate-pulse mt-3 transform duration-300" />
                    <GoDotFill className="w-4 h-4 text-white mt-3" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-single">
                  {item.title}
                </p>

                <p className="text-lg text-white mt-2 leading-snug">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
