import React, { useEffect } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { PiHeadphonesBold } from "react-icons/pi";

const Started = () => {

  return (
    <div className="w-full flex items-center justify-center pt-16 px-6">
      <div className="container flex justify-center items-center bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] rounded-2xl">
        <div className="w-full rounded-2xl py-2 px-2">
          <div className="flex flex-col items-center justify-center gap-6 text-center started">
            <LuBuilding2 className="w-14 h-12" />
            <h1 className="text-4xl text-white">Ready to Get Started?</h1>
            <p className="text-lg font-semibold">
              Join leading institutions already staking with Stakee. Our team is
              ready to discuss <br /> your specific requirements and create a
              custom solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
              <div className="w-full sm:w-44 h-11 rounded-xl flex gap-2 justify-center items-center border border-white hover:text-black hover:bg-white transition-all duration-500">
                <PiHeadphonesBold className="w-5 h-5" />
                <h1 className="font-semibold text-sm">
                  Contact Sales Team
                </h1>
              </div>

              <div className="w-full sm:w-44 h-11 rounded-xl flex gap-2 justify-center items-center border bg-white text-black border-white hover:text-white hover:bg-transparent transition-all duration-500">
                <h1 className="font-semibold text-sm  ">
                  Request Documentation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
