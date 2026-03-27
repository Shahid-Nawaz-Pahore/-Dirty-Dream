import { BsArrowRight } from 'react-icons/bs'
import NavIndicator from "../components/NavIndicator.jsx"
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();

  const handleOutboundClick = (url) => {
    window.gtag('event', 'outbound_click', {
      link_url: url,
      link_text: 'Start Staking',  // whatever the button says
    })

    // Small delay to ensure gtag fires before navigation
    setTimeout(() => {
      window.open(url, '_blank')
    }, 300)
  }

  return (
    <div className='fixed z-10 w-full flex items-center justify-center mt-5 px-6'>

      {/* Mobile bottom nav */}
      <div className='fixed bottom-5 left-0 w-full md:hidden flex items-center justify-center'>
        <div className='container flex items-center justify-center text-lg text-white'>
          <NavIndicator />
        </div>
      </div>

      {/* Desktop nav */}
      <div className='container flex items-center justify-between text-lg text-white'>
        <img src="/Logo.svg" className='w-12' />
        <NavIndicator className='hidden md:flex' />
        <button
          onClick={(e)=> {
            e.preventDefault()
            handleOutboundClick('https://stakee-stake.vercel.app')
          }}
          className='bg-btn font-bold text-white py-3 px-5 rounded-full flex items-center gap-2 hover:cursor-pointer hover:shadow-2xl'
        >
          <h1>Start Staking</h1>
          <BsArrowRight />
        </button>
      </div>

    </div>
  )
}

export default Header