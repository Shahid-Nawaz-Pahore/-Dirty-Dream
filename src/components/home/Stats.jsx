import React from "react";
import Counter from "../Counter";

const Stats = () => {
  const stats = [
    {
      value: "2.9",
      key: "Annual Percentage Yield",
      prev: null,
      after: "%"
    },
    {
      value: "62.4",
      key: "Total Value Locked",
      prev: "$",
      after: " M"
    },
    {
      value: "119329",
      key: "Stakers",
      prev: null,
      after: null
    },
    {
      value: "2.1",
      key: "TON Staked",
      prev: null,
      after: "M"
    },
  ];

  return (
    <div className="flex justify-center items-center w-full px-6 sm:px-0 pt-16 ">
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
          {stats.map((s,index) => (
            <div className="flex flex-col justify-center items-center text-center gap-1">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white">
                <span>{s.prev && s.prev}</span><Counter value={s.value} point={index == 2 ? false : true} /><span>{s.after && s.after}</span>
              </h1>
              <h1 className="text-xl sm:text-xl font-semibold text-white">
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
