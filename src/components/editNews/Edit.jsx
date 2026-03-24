import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { FiEdit2, FiCheck } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Edit = ({ onUpdate }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const news = state?.news;

  const [form, setForm] = useState({
    img: "",
    head: "",
    desc: "",
    longDesc: "",
    date: "",
    time: "",
  });

  const [saved, setSaved] = useState(false);
  const formRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (news) {
      setForm({
        img: news.img || "",
        head: news.head || "",
        desc: news.desc || "",
        longDesc: news.longDesc || "",
        date: news.date || "",
        time: news.time || "",
      });
    }
  }, [news]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      );

      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      gsap.fromTo(
        ".form-actions",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.9 },
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.head.trim() || !form.desc.trim()) {
      alert("Title and description are required!");
      return;
    }

    if (onUpdate) {
      onUpdate(form);
    }

    setSaved(true);
    setTimeout(() => {
      navigate(-2);
    }, 800);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl border border-gray-200
    bg-[rgba(255,255,255,0.15)] backdrop-blur-[20px]
    text-white placeholder-gray-400 font-semibold text-sm
    outline-none transition-all duration-300
    focus:border-white focus:bg-[rgba(255,255,255,0.25)] focus:scale-[1.01]
  `;

  const labelClass =
    "text-xs font-bold uppercase tracking-widest text-white mb-1 block";

  if (!news) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-16 text-white gap-4">
        <p className="text-xl container flex items-center font-semibold">
          No article found to edit.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-gray-200
            bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white
            transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <IoArrowBack className="w-4 h-4" />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full justify-center items-center px-4 pt-16 md:pt-24 pb-16">
      <div className="container mx-auto justify-center flex flex-col gap-8">
        <div ref={headerRef} className="flex flex-col gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 w-fit px-4 py-2 rounded-2xl border border-gray-200
              bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] text-white text-sm font-semibold
              transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <IoArrowBack className="w-4 h-4" />
            Back
          </button>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 w-fit px-4 h-9 rounded-3xl border border-gray-200 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]">
              <LuBuilding2 className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Edit Article</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
              Update News
            </h1>
            <p className="text-white font-semibold text-sm sm:text-base">
              Make changes to the article below and save when done.
            </p>
          </div>
        </div>

        {form.img && (
          <div className="form-field w-full h-40 sm:h-56 rounded-2xl overflow-hidden border border-gray-200 relative">
            <img
              src={form.img}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white bg-[rgba(0,0,0,0.4)] px-3 py-1 rounded-full backdrop-blur-sm">
                Image Preview
              </span>
            </div>
          </div>
        )}

        <div
          ref={formRef}
          className="w-full rounded-2xl border border-gray-200
            bg-[rgba(255,255,255,0.15)] backdrop-blur-[20px]
            px-6 sm:px-10 py-8 flex flex-col gap-6
            shadow-2xl shadow-white/5"
        >
          <div className="form-field flex flex-col">
            <label className={labelClass}>Image URL</label>
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
              placeholder="https://example.com/image.png"
              className={inputClass}
            />
          </div>

          {/* Title */}
          <div className="form-field flex flex-col">
            <label className={labelClass}>Title *</label>
            <input
              type="text"
              name="head"
              value={form.head}
              onChange={handleChange}
              placeholder="Article title..."
              className={inputClass}
            />

            <div className="form-field flex flex-col">
              <label className={labelClass}>Short Description *</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleChange}
                placeholder="Brief summary shown on the news card..."
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="form-field flex flex-col">
              <label className={labelClass}>Full Article Content</label>
              <textarea
                name="longDesc"
                value={form.longDesc}
                onChange={handleChange}
                placeholder="Full article content shown on the details page..."
                rows={14}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="form-field grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className={labelClass}>Date</label>
                <input
                  type="text"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  placeholder="Nov 4, 2025"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Read Time</label>
                <input
                  type="text"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  placeholder="5 min read"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="form-actions flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-gray-200
              bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px] text-white font-semibold
              transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[rgba(255,255,255,0.2)]"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={saved}
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-2xl border font-semibold
              backdrop-blur-[20px] transition-all duration-200 hover:scale-105 active:scale-95
              ${
                saved
                  ? "border-green-400/60 bg-[rgba(0,255,100,0.15)] text-green-400"
                  : "border-white/60 bg-[rgba(255,255,255,0.25)] text-white hover:bg-[rgba(255,255,255,0.35)]"
              }`}
            >
              {saved ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                <>
                  <FiEdit2 className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
