import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";

const Hero = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.fromTo(
      "#line",
      {
        scale: 0,
        height: "0px",
      },
      {
        scale: 1,
        height: "292px",
        duration: 0.9,
      },
    );

    const tl = gsap.timeline();

    tl.from("#content-1", {
      y: 10,
      opacity: 0,
      duration: 0.3,
    });
    tl.from("#content-2", {
      y: 10,
      opacity: 0,
      duration: 0.3,
    });
    tl.from("#content-3", {
      y: 10,
      opacity: 0,
      duration: 0.3,
    });
  }, [location.pathname]);

  return (
    <div className="w-full h-screen flex items-center justify-center px-6">
      <div className="container flex items-start justify-start gap-10">
        <div className="md:flex hidden flex-col items-center justify-between">
          <div className="size-2 bg-white rounded-full"></div>
          <div id="line" className="w-[1px] bg-white origin-top"></div>
          <div className="size-2 bg-white rounded-full"></div>
        </div>
        <div className="md:text-6xl text-5xl flex flex-col items-start justify-between gap-10">
          <div id="content-1">
            <h1 className="font-bold">{data.main}</h1>
            <h1 className="font-bold">{data.sub}</h1>
          </div>
          <div id="content-2">
            <h1 className="text-xl font-medium">{data.desMain}</h1>
            <h1 className="text-xl font-medium">{data.desSub}</h1>
          </div>
          <button
            onClick={() => navigate("/stake")}
            className="text-xl font-medium bg-white text-black py-3 px-5 rounded-full"
          >
            Start Staking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
