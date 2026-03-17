import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoShieldOutline } from 'react-icons/io5';
import { SlGraph } from 'react-icons/sl';
import { TbArrowCapsule } from 'react-icons/tb';
import { RiCoinsFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa6';

const navItems = [
  {
    id: "liquidity",
    title: "Instant Liquidity",
    description: "Receive STAKED tokens immediately upon staking. Use them in DeFi while earning staking rewards and enjoy fast access anytime without waiting for unbonding periods.",
    icon: AiOutlineThunderbolt
  },
  {
    id: "security",
    title: "Secure & Audited",
    description: "Smart contracts audited by leading security firms. Your funds are protected by battle-tested code, ensuring reliability, trust, and industry-standard security measures.",
    icon: IoShieldOutline
  },
  {
    id: "apy",
    title: "Competitive APY",
    description: "Earn up to 5.2% APY on your staked TON. Rewards are automatically compounded and reinvested, maximizing your potential returns over time efficiently.",
    icon: SlGraph
  },
  {
    id: "flexibility",
    title: "No Lock-up Period",
    description: "Unstake your TON anytime. Enjoy flexibility without sacrificing rewards and manage your assets freely according to your financial needs anytime.",
    icon: TbArrowCapsule
  },
  {
    id: "defi",
    title: "DeFi Integration",
    description: "Use STAKED across the TON ecosystem. Participate in lending, farming, and more, leveraging your tokens for multiple opportunities simultaneously.",
    icon: RiCoinsFill
  },
  {
    id: "custody",
    title: "Non-Custodial",
    description: "You maintain full control. Stake and unstake directly from your wallet, keeping ownership secure and never relying on a third-party custodian.",
    icon: FaLock
  }
];

// ✅ Self-contained — each instance has its own refs and state
const BoostIndicator = ({ className = '', setSelected , selected }) => {
  const navRef = useRef(null)
  const linkRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.id === selected.id)
    const activeLink = linkRefs.current[activeIndex]
    const navContainer = navRef.current

    if (activeLink && navContainer) {
      const navRect = navContainer.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      console.log(linkRect.left,navRect);
      

      setIndicator({
        // left: linkRect.left - navRect.left,
        // width: linkRect.width,
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      })

      if(selected.id != "liquidity")
      activeLink.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    }
  }, [selected])

  return (
    <div
      ref={navRef}
      className={`relative flex items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] py-2 px-2 rounded-full ${className} max-w-[100%] overflow-auto no-scrollbar`}
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-1.5 h-[calc(100%-12px)] bg-[rgba(255,255,255,0.2)] backdrop-blur-[1px] rounded-full transition-all duration-500 ease-in-out"
        style={{ left: indicator.left, width: indicator.width }}
      />

      {navItems.map((item, index) => (
        <div
          key={item.id}
          ref={el => (linkRefs.current[index] = el)}
          className='md:text-xl text-lg  py-2 px-5 relative z-10 hover:cursor-pointer'
          onClick={() => setSelected(item)}
        >
          {item.id.split("")[0].toLocaleUpperCase()+item.id.slice(1)}
        </div>
      ))}
    </div>
  )
}

export default BoostIndicator;