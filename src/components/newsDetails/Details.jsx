import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { gsap } from "gsap";
import { FiEdit2 } from "react-icons/fi";

const NewsDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const news = state?.news;

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const backBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        backBtnRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
      );

      gsap.fromTo(
        ".detail-hero",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );

      gsap.fromTo(
        ".detail-para",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <p className="text-xl font-semibold mb-4">No news article found.</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-gray-200 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <IoArrowBack className="w-4 h-4" />
          Go Back
        </button>
      </div>
    );
  }

  const paragraphs = news.longDesc
    ? news.longDesc
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0)
    : [news.desc];

  return (
    <div className="min-h-screen px-4 pt-16 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <button
          ref={backBtnRef}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 w-fit px-4 py-2 rounded-2xl border border-gray-200 
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white text-sm font-semibold
            transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[rgba(255,255,255,0.3)]"
        >
          <IoArrowBack className="w-4 h-4" />
          Back to News
        </button>

        <div
          className="detail-hero w-full rounded-2xl border border-gray-200 
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] overflow-hidden
            shadow-2xl shadow-white/5"
        >
          <div className="w-full h-56 sm:h-72 md:h-96 overflow-hidden">
            <img
              src={news.img || "/coin.PNG"}
              alt={news.head}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="px-6 py-6 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              {news.head}
            </h1>

            <div className="flex flex-row flex-wrap gap-4">
              {news.date && (
                <div className="flex items-center gap-1 text-sm font-semibold text-white ">
                  <CiCalendarDate className="w-5 h-5" />
                  {news.date}
                </div>
              )}
              {news.time && (
                <div className="flex items-center gap-1 text-sm font-semibold text-white ">
                  <IoMdTime className="w-5 h-5" />
                  {news.time}
                </div>
              )}
            </div>

            <div className="w-full h-px bg-gray-200/30 mt-1" />
          </div>
        </div>

        <div
          className="w-full rounded-2xl border border-gray-200 
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]
            px-6 sm:px-10 py-8 flex flex-col gap-5
            shadow-2xl shadow-white/5"
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="detail-para text-sm sm:text-base font-semibold text-white leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-row w-full justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 w-fit self-center px-6 py-3 rounded-2xl border border-gray-200 
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white font-semibold
            transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[rgba(255,255,255,0.3)]"
          >
            <IoArrowBack className="w-4 h-4" />
            Back to News
          </button>

          <button
            onClick={() => navigate("/EditNews", { state: { news } })}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-200
  bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white text-sm font-semibold
  transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <FiEdit2 className="w-4 h-4" />
            Edit Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
