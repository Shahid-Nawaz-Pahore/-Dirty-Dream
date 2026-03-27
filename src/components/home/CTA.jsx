import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";
const CTA = () => {
  const navigate = useNavigate();

  const handleOutboundClick = (url) => {
    window.gtag("event", "outbound_click", {
      link_url: url,
      link_text: "Start Staking", // whatever the button says
    });

    // Small delay to ensure gtag fires before navigation
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  return (
    <div className="w-full flex items-center justify-center pt-16 px-6">
      <div className="container flex flex-col gap-12 md:text-[48px] text-[36px]">
        <h1 className="font-extrabold  text-white textoutline-light">
          Stake It. Grow It. Own It.
        </h1>
        <div className="flex md:flex-row flex-col gap-8 items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] py-8 px-8 rounded-xl">
          <div className="md:w-[50%] flex flex-col text-[0.5em]">
            <h1>
              Stake TON, instantly receive liquid STAKED tokens, earn 5.2% APY
              with auto-compounding, and usable across TON DeFi.
            </h1>
          </div>
          <div className="md:w-[50%] flex items-center justify-end text-[0.5em] cursor-pointer">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleOutboundClick("https://stakee-stake.vercel.app");
              }}
              className="bg-btn text-white py-3 px-5 rounded-full flex items-center gap-2 hover:cursor-pointer hover:shadow-2xl"
            >
              <h1>Start Staking</h1>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
