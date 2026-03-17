import React from "react";
import { PiHandDepositBold } from "react-icons/pi";
import { RiFolderReceivedLine } from "react-icons/ri";
import { MdOutlineMultipleStop } from "react-icons/md";

import { FaLock } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineAutoGraph } from "react-icons/md";

const Working = () => {
  const steps = [
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
      para: "tsTON rewards in TON DeFi",
    },
  ];

  return (
    <div className="w-full pt-16 px-6 flex items-center justify-center">
      <div className="flex flex-col  bg-bg">
        <div className="flex flex-col">
          <h1 className="text-primary font-semibold text-Inter">
            START USING NOW
          </h1>
          <h1 className="text-secondary font-bold text-4xl">
            How to Get Yields
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 mt-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col px-4 py-4
            rounded-2xl border border-gray-300 
            w-full sm:w-[18rem] md:w-[24rem] 
            h-[13rem]
            
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]
            font-Inter text-secondary
            transition-all duration-300 hover:scale-105 hover:border-secondary hover:drop-shadow-2xl"
            >
              <div className="text-primary text-lg sm:text-xl font-semibold border-2 border-gray-300 w-14 h-14 rounded-2xl flex justify-center items-center">
                {s.icon}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-secondary mt-6 text-white">
                {s.title}
              </h1>

              <h1 className="text-base sm:text-lg font-medium text-primary mt-2 text-white">
                {s.para}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
