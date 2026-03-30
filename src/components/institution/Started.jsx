import React, { useEffect } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { PiHeadphonesBold } from "react-icons/pi";

const Started = () => {

  return (
    <div className="w-full flex items-center justify-center pt-16 px-6">
      <div className="container flex justify-center items-center bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] rounded-2xl">
        <div className="w-full rounded-2xl p-4">
          <div className="flex flex-col items-center justify-center gap-6 text-center started">
            <LuBuilding2 className="w-14 h-12" />
            <h1 className="text-4xl text-white text-single">Ready to Get Started?</h1>
            <p className="text-lg font-semibold">
              Join leading institutions already staking with Stakee. Our team is
              ready to discuss <br /> your specific requirements and create a
              custom solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
              <div className="w-full sm:w-44 h-11 cursor-pointer rounded-2xl text-white bg-btn transform duration-300 hover:scale-102 flex gap-2 justify-center items-center">
                <PiHeadphonesBold className="w-5 h-5" />
                <h1 className="font-semibold text-md">
                  Contact Sales Team
                </h1>
              </div>

              <div className="w-full sm:w-44 h-11 flex gap-2 cursor-pointer justify-center items-center transform duration-300 hover:scale-102 bg-btn text-white rounded-2xl">
                <h1 className="font-semibold text-md">
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
