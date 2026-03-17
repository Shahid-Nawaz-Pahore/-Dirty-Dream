import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Institution', path: '/institution' },
  { label: 'News', path: '/news' },
]

// ✅ Self-contained — each instance has its own refs and state
const NavIndicator = ({ className = '' }) => {
  const location = useLocation()
  const navRef = useRef(null)
  const linkRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => item.path === location.pathname)
    const activeLink = linkRefs.current[activeIndex]
    const navContainer = navRef.current

    if (activeLink && navContainer) {
      const navRect = navContainer.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      })
    }
  }, [location.pathname])

  return (
    <div
      ref={navRef}
      className={`relative flex items-center justify-between bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] py-2 px-2 rounded-full ${className}`}
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-1.5 h-[calc(100%-12px)] bg-[rgba(255,255,255,0.2)] backdrop-blur-[1px] rounded-full transition-all duration-500 ease-in-out"
        style={{ left: indicator.left, width: indicator.width }}
      />

      {navItems.map((item, index) => (
        <NavLink
          key={item.path}
          to={item.path}
          ref={el => (linkRefs.current[index] = el)}
          className='py-2 px-5 relative z-10'
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavIndicator;