import React, { useState, useEffect } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import useAddModalStore from "../../store/useAddModalStore";
import AddModal from "../AddModal";
import AddNewsForm from "../AddNewsForm";
import DeleteModal from "../DeleteModal";
import DeleteNews from "../DeleteNews";
import useDeleteModalStore from "../../store/useDeleteModalStore";
import { ReactGA } from "react-ga4";
const Hero = () => {
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const navigate = useNavigate();
  const { openModal, closeModal } = useAddModalStore();
  const { openDeleteModal } = useDeleteModalStore();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const [newsData, setNewsData] = useState([
    {
      img: "/image.png",
      head: "TON Liquid Reaches $50M TVL Milestone",
      desc: "We are thrilled to announce that TON Liquid has surpassed $50 million in Total Value Locked, marking a significant milestone in our journ...",
      longDesc: `We are thrilled to announce that TON Liquid has officially surpassed $50 million in Total Value Locked, marking a major milestone in the platform's growth journey. This achievement highlights the increasing trust and confidence placed in TON Liquid by the global community. The rapid growth reflects strong adoption of liquid staking solutions across the TON ecosystem.

Users continue to benefit from flexible staking while maintaining liquidity through stTON tokens. This milestone was driven by consistent protocol upgrades and improved user experience. Community participation and validator support played a key role in reaching this level.

Security-first design and transparent operations remain core priorities. As TVL continues to grow, TON Liquid is positioned as a leading staking solution on TON. The team remains committed to long-term sustainability and innovation. More ecosystem partnerships and integrations are planned in upcoming releases. Thank you to our community for making this milestone possible.`,

      date: "Nov 4, 2025",
      time: "3 min read",
    },
    {
      img: "/image2.png",
      head: "How to Maximize Your TON Staking Rewards",
      desc: "Learn the best strategies to optimize your liquid staking returns with TON Liquid. This comprehensive guide covers everything from...",
      longDesc: `Maximizing staking rewards requires a deep understanding of both protocol mechanics and market behavior. This guide explores proven strategies to optimize returns using TON Liquid's staking features. Readers will learn how liquid staking differs from traditional staking models.

We explain how stTON tokens allow users to stay liquid while earning rewards. Advanced compounding techniques are covered for long-term growth. Risk management strategies are outlined to protect staked assets. The guide also explains validator selection and delegation best practices.

Timing strategies for staking and unstaking are discussed in detail. Real-world examples demonstrate reward optimization techniques. Whether you are a beginner or advanced user, this guide adds value. Following these strategies can significantly improve yield efficiency.`,

      date: "Nov 1, 2025",
      time: "7 min read",
    },
    {
      img: "/image3.webp",
      head: "Protocol Update: Reduced Fees & Improved UX",
      desc: "We're excited to announce a major protocol update that reduces staking fees and introduces a completely redesigned user interface for...",
      longDesc: `We are excited to introduce a major protocol update focused on performance and usability. Transaction and staking fees have been reduced to improve accessibility. The updated user interface offers a cleaner and more intuitive experience.

Navigation across staking, rewards, and analytics is now faster. Smart contract optimizations enhance execution efficiency. Users will notice reduced confirmation times across interactions. Visual improvements make key metrics easier to understand.

Mobile responsiveness has been significantly improved. Security audits were conducted prior to release. This update reflects our commitment to continuous improvement. More performance-focused upgrades are already in development.`,

      date: "Oct 27, 2025",
      time: "4 min read",
    },
    {
      img: "/image4.png",
      head: "Understanding Liquid Staking on TON",
      desc: "New to liquid staking? This beginner-friendly guide explains how liquid staking works on TON blockchain and why it's revolutioniz...",
      longDesc: `Liquid staking is transforming how users interact with blockchain staking. This guide introduces the core concepts behind liquid staking on TON. We explain how users can stake assets without locking liquidity.

stTON tokens represent staked value while remaining usable in DeFi. The guide compares traditional staking vs liquid staking. Users learn how rewards are generated and distributed. Potential risks and mitigation strategies are clearly explained.

Use cases such as lending and liquidity pools are explored. This model unlocks new financial flexibility for participants. The TON ecosystem benefits from increased capital efficiency. Ideal for beginners seeking clarity on modern staking models.`,
      date: "Oct 24, 2025",
      time: "5 min read",
    },
    {
      img: "/image5.webp",
      head: "Partnership Announcement: Integration with Major DEX",
      desc: "TON Liquid partners with leading decentralized exchanges to enable seamless trading and liquidity provision using stTON tokens.",
      longDesc: `TON Liquid is proud to announce a strategic integration with a major decentralized exchange. This partnership enables seamless trading of stTON tokens. Users can now access deeper liquidity and better price discovery.

The integration enhances overall ecosystem interoperability. Liquidity providers benefit from new yield opportunities. Trading stTON becomes faster and more efficient. This move strengthens TON Liquid's DeFi positioning.

Security and performance were prioritized during integration. Cross-platform usability improves user adoption. Future DEX integrations are already under evaluation. This partnership marks a major step toward DeFi expansion.`,

      date: "Oct 19, 2025",
      time: "3 min read",
    },
    {
      img: "/image6.webp",
      head: "Q4 2024 Roadmap Released by TON Chain",
      desc: "Check out our ambitious roadmap for Q4 2024, featuring new features, partnerships, and exciting developments for the TON Liquid...",
      longDesc: `We are excited to unveil the official roadmap for Q4 2024. The roadmap outlines upcoming protocol upgrades and features. Key focus areas include scalability, security, and user experience.

New staking options will offer greater flexibility. Expanded analytics tools are planned for transparency. Multiple ecosystem partnerships are scheduled for release. UI enhancements will improve onboarding for new users.

Performance optimizations remain a top priority. Community feedback heavily influenced roadmap planning. Each milestone aligns with long-term protocol vision. The roadmap demonstrates TON Liquid's commitment to growth.`,

      date: "Oct 14, 2025",
      time: "6 min read",
    },
    {
      img: "/image7.webp",
      head: "Security Audit Results Published by TON",
      desc: "Independent security audit confirms TON Liquid smart contracts are secure and follow best practices...",
      longDesc: `Security remains a top priority for TON Liquid. An independent third-party audit has been successfully completed. The audit confirms adherence to industry best practices. Smart contracts were tested against common attack vectors.

No critical vulnerabilities were identified. Recommendations from auditors have been implemented. The audit improves overall protocol trust and transparency. Users can stake with increased confidence.

Continuous monitoring systems remain active. Future audits are already planned. Security-first development remains non-negotiable.`,

      date: "Oct 9, 2025",
      time: "4 min read",
    },
    {
      img: "/image8.webp",
      head: "DeFi Strategies: Using stTON in Lending Protocols",
      desc: "Discover advanced DeFi strategies that leverage stTON tokens for lending, borrowing, and yield farming...",
      longDesc: `stTON tokens unlock advanced DeFi opportunities beyond staking. This article explores lending and borrowing strategies using stTON. Users can earn additional yield without unstaking assets. Collateralized lending models are explained step by step.

Risk considerations are clearly outlined for informed decisions. Liquidity optimization techniques are discussed. Yield stacking strategies are explored in real-world scenarios. Protocol compatibility enhances capital efficiency.

This approach enables multi-layered reward generation. Advanced users benefit from flexible DeFi integrations. A must-read for yield-focused participants.`,
      date: "Oct 4, 2025",
      time: "8 min read",
    },
  ]);

  const [newItem, setNewItem] = useState({
    img: "",
    head: "",
    desc: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".headings",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-card",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".news-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-card",
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const saveNews = () => {
    if (!newItem.head || !newItem.desc) {
      alert("Title and description are required!");
      return;
    }

    if (editingIndex !== null) {
      const updatedNews = [...newsData];
      updatedNews[editingIndex] = newItem;
      setNewsData(updatedNews);
      setEditingIndex(null);
    } else {
      setNewsData([newItem, ...newsData]);
    }

    setNewItem({ img: "", head: "", desc: "", date: "", time: "" });
    // setShowAddForm(false);
  };

  const filteredData = newsData.filter(
    (item) =>
      item.head.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()),
  );

  const handleOpenDelete = (item, index) => {
    setSelectedNews({ news: item, index });
    openDeleteModal();
  };

  return (
    <div className="w-full flex items-center justify-center pt-26 md:pt-30 px-6 md:pb-0">
      <div className="flex flex-col container mx-auto justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-2 flex-row w-full sm:w-40 h-9 rounded-3xl border border-gray-200 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] headings">
          <LuBuilding2 className="w-4 h-4" />
          <h1 className="text-white text-sm text-center">Latest Updates</h1>
        </div>

        <div className="flex flex-col gap-4 text-center px-2 headings">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold textoutline-light">
            News & Updates
          </h1>
          <h1 className="font-semibold text-base sm:text-lg md:text-xl text-single">
            Stay informed about the latest developments and announcements
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
          <div className="flex flex-row w-full h-12 md:h-14 border border-gray-200 bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] gap-4 justify-start items-center p-3 rounded-xl transition-all duration-300 focus-within:scale-[1.02] focus-within:border-white">
            <IoIosSearch className="w-5 h-5 md:w-6 md:h-6" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-lg w-full font-bold appearance-none outline-none bg-transparent"
            />
          </div>

          {String(id) === import.meta.env.VITE_SEARCH && (
            <button
              className="flex justify-center text-center cursor-pointer items-center font-bold mt-1 bg-btn text-white border-gray-200 border rounded-2xl w-30 h-12 transition-all duration-200 hover:scale-105 active:scale-95"
              onClick={openModal}
            >
              Add News
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full news-card items-start">
          {filteredData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(
                  `/NewsDetails${
                    String(id) === import.meta.env.VITE_SEARCH
                      ? `/admin?id=${id}`
                      : ""
                  }`,
                  { state: { news: item } },
                );

                ReactGA.event("News_Details_clicked", {
                  wallet_action: "News Details clicked",
                  button_name: "News_Details_clicked",
                  location: "header",
                });
              }}
              className="relative w-full group self-start
    bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px]
    rounded-xl border border-gray-200
    transition-all duration-500 ease-out
    hover:-translate-y-3 hover:scale-[1.02]
    hover:shadow-2xl hover:shadow-white/10
    cursor-pointer"
            >
              {String(id) === import.meta.env.VITE_SEARCH && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDelete(item, index);
                  }}
                  className="absolute top-3 right-3 z-10
        opacity-0 group-hover:opacity-100
        p-2 rounded-xl
        bg-[rgba(255,0,0,0.2)] backdrop-blur-[20px]
        border border-red-400/40 text-white
        transition-all duration-300
        hover:scale-110 hover:bg-[rgba(255,0,0,0.35)] active:scale-95"
                >
                  <FiTrash2 className="w-6 h-6" />
                </button>
              )}

              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={item.img || "/coin.PNG"}
                  className="w-full h-40 sm:h-44 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              <div className="flex flex-col flex-grow px-4 py-4">
                <div className="text-xl font-bold text-white px-4 mt-4 transition-all duration-300 text-single">
                  {item.head}
                </div>

                <div className="px-4 text-lg font-semibold mt-4 transition-opacity duration-300 group-hover:opacity-80">
                  {item.desc}
                </div>

                <div className="flex flex-row flex-wrap gap-3 mt-4">
                  <div className="flex flex-row gap-1 px-4 text-base font-semibold items-center">
                    <CiCalendarDate className="w-5 h-5" />
                    {item.date}
                  </div>
                  <div className="flex flex-row gap-1 px-4 text-base font-semibold items-center">
                    <IoMdTime className="w-5 h-5" />
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {selectedNews && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] p-6 rounded-xl w-[90%] md:w-[500px]">
              <img
                src={selectedNews.img}
                alt={selectedNews.head}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2">
                {selectedNews.head}
              </h2>
              <p className="text-gray-300 mb-4">{selectedNews.longDesc}</p>
              <button
                className="px-2 py-1 rounded-2xl bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] transition-all duration-200 hover:scale-105 active:scale-95 text-[#2FA8FF]"
                onClick={() => setSelectedNews(null)}
              >
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
      <AddModal>
        <AddNewsForm
          newItem={newItem}
          setNewItem={setNewItem}
          saveNews={saveNews}
          editingIndex={editingIndex}
          closeModal={closeModal}
        />
      </AddModal>

      <DeleteModal>
        <DeleteNews
          news={selectedNews?.news}
          index={selectedNews?.index}
          onDelete={(i) => {
            const updated = [...newsData];
            updated.splice(i, 1);
            setNewsData(updated);
          }}
        />
      </DeleteModal>
    </div>
  );
};

export default Hero;
