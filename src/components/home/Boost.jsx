import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import NavIndicator from '../NavIndicator.jsx';
import BoostIndicator from "../BoostIndicator.jsx";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoShieldOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { TbArrowCapsule } from "react-icons/tb";
import { RiCoinsFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";

const Boost = () => {

  const navItems = [
  {
    id: "liquidity",
    title: "Instant Liquidity",
    description: "Receive STAKED tokens immediately upon staking. Use them in DeFi while earning staking rewards and enjoy fast access anytime without waiting for unbonding periods.",
    icon: AiOutlineThunderbolt
  },
  {
    id: "security",
    title: "Secure & Audited",
    description: "Smart contracts audited by leading security firms. Your funds are protected by battle-tested code, ensuring reliability, trust, and industry-standard security measures.",
    icon: IoShieldOutline
  },
  {
    id: "apy",
    title: "Competitive APY",
    description: "Earn up to 5.2% APY on your staked TON. Rewards are automatically compounded and reinvested, maximizing your potential returns over time efficiently.",
    icon: SlGraph
  },
  {
    id: "flexibility",
    title: "No Lock-up Period",
    description: "Unstake your TON anytime. Enjoy flexibility without sacrificing rewards and manage your assets freely according to your financial needs anytime.",
    icon: TbArrowCapsule
  },
  {
    id: "defi",
    title: "DeFi Integration",
    description: "Use STAKED across the TON ecosystem. Participate in lending, farming, and more, leveraging your tokens for multiple opportunities simultaneously.",
    icon: RiCoinsFill
  },
  {
    id: "custody",
    title: "Non-Custodial",
    description: "You maintain full control. Stake and unstake directly from your wallet, keeping ownership secure and never relying on a third-party custodian.",
    icon: FaLock
  }
];

  const [selected,setSelected] = useState(navItems[0]);
  const Icon = selected.icon;
  console.log(selected);
  

  return (
    <div className="flex justify-center items-center pt-16 w-full px-6 sm:px-0">
      <div className="container flex justify-center items-start flex-col gap-10">
        <div className="flex items-center w-full">
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
          <div className="flex-1 h-[1px] bg-white -mx-[3px]"></div>
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
        </div>

        <BoostIndicator setSelected={setSelected} selected={selected} />

        <div className="w-full bg-[hsla(0,0%,100%,0)] px-6 py-8 backdrop-blur-[20px] border border-gray-300 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-6 md:w-[70%]">
              <h1 className="text-white text-4xl font-semibold text-single">
                {selected.title}
              </h1>

              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-2 text-white text-2xl pt-2">
                  {selected.description}
                </div>
              </div>
            </div>

            {/* <div
              className="relative w-[50%]"
              // style={{ width: "320px", height: "220px" }}
            > */}
              {Icon && <Icon className="hidden md:block w-40 h-40 absolute top-[10%] right-[2%] rotate-12 z-10 text-white" />}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
