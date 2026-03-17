import React from "react";
import { GoDotFill } from "react-icons/go";

const Boost = () => {
  const points = [
    {
      line: "Earn up to 7% APY with TON rewards",
    },
    {
      line: "Over $200M in deposits",
    },
    {
      line: "Built using battle-tested lending markets",
    },
  ];
  return (
    <div className="flex justify-center items-center pt-16 w-full px-2 sm:px-0">
      <div className="container flex justify-center items-center flex-col gap-10">
        <div className="flex items-center w-full">
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
          <div className="flex-1 h-[1px] bg-white -mx-[3px]"></div>
          <GoDotFill className="text-white w-4 h-4 flex-shrink-0" />
        </div>

        <div className="w-full bg-[hsla(0,0%,100%,0)] px-6 py-8 backdrop-blur-[20px] border border-gray-300 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-4xl font-semibold">
                Stakee Boost
              </h1>

              <div className="flex flex-col gap-5">
                {points.map((p) => (
                  <div className="flex flex-row gap-2 text-white text-2xl pt-2">
                    <GoDotFill className="w-3 h-3 text-white mt-2" />
                    {p.line}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative mx-20 w-full md:w-[320px] md:h-[220px] right-20 md:right-0"
              // style={{ width: "320px", height: "220px" }}
            >
              <img
                src="/ArrowImage.webp"
                alt="img"
                className="w-40 h-40 absolute"
                style={{ top: "0px", left: "120px", zIndex: 3 }}
              />

              <img
                src="/ArrowImage.webp"
                alt="img"
                className="w-40 h-40 absolute"
                style={{ top: "80px", left: "60px", zIndex: 2 }}
              />

              <img
                src="/ArrowImage.webp"
                alt="img"
                className="w-40 h-40 absolute"
                style={{ top: "160px", left: "0px", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
