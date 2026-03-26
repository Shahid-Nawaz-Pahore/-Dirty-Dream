import React, { useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const Enterprise = () => {

  const data = [
    { text: "Customizable staking solutions for institutional portfolios" },
    { text: "White-label integration options for exchanges and custodians" },
    { text: "API access with dedicated rate limits and priority support" },
    { text: "Real-time analytics dashboard and comprehensive reporting" },
    { text: "Multi-signature wallet support and role-based access control" },
    { text: "Automated compliance reporting and tax documentation" },
    { text: "Integration with major custody providers" },
    { text: "Flexible withdrawal options with priority processing" },
  ];

  return (
    <div className="w-full flex items-center justify-center pt-16 px-6">
      <div className="container flex justify-center text-white">
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col text-center gap-2 head">
            <h1 className="md:text-6xl text-4xl font-bold">
              Enterprise Features
            </h1>
            <p className="md:text-2xl text-lg leading-relaxed">
              Custom solutions for every type of institutional client
            </p>
          </div>

          <div className="group rounded-2xl border transform p-6 grid sm:grid-cols-1 md:grid-cols-2 gap-6 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 text-sm font-semibold"
              >
                <BsCheckCircle className="w-4 h-4 text-white mt-1 shrink-0 transition-transform group-hover:scale-110" />
                <p className="script">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
