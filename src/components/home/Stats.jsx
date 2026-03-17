import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "2.97%",
      key: "Annual Percentage Yield",
    },
    {
      value: "$62.4 M",
      key: "Total Value Locked",
    },
    {
      value: "119,329",
      key: "Stakers",
    },
    {
      value: "2.1M",
      key: "TON Staked"
    },
  ];

  return (
    <div className="flex justify-center items-center w-full px-2 sm:px-0 pt-16 ">
      <div className="container flex flex-col justify-center gap-10 items-center ">
        {/* <h1 className="text-2xl md:text-5xl font-bold text-white text-center mt-4">
          <span className="block">
            Stakee is the fastest-growing{" "}
            <span className="text-3xl md:text-6xl text-violet-500 uppercase">
              staking
            </span>
          </span>
          <span className="block">
            community on <span className="text-violet-500">TON</span>.
          </span>
        </h1> */}
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 md:gap-20 lg:gap-32 py-4">
          {stats.map((s) => (
            <div className="flex flex-col justify-center items-center text-center gap-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                {s.value}
              </h1>
              <h1 className="text-xl sm:text-2xl font-semibold text-white">
                {s.key}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
