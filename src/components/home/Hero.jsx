import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

  const location = useLocation();

  useGSAP(()=>{
    gsap.fromTo(
      "#line",
      {
        scale: 0,
        height: '0px'
      }
      ,
      {
        scale: 1,
        height: '292px',
        duration: 0.9
      }
    )

    const tl = gsap.timeline();

    tl.from(
      '#content-1',
      {
        y: 10,
        opacity: 0,
        duration: 0.3,
      }
    )
    tl.from(
      '#content-2',
      {
        y: 10,
        opacity: 0,
        duration: 0.3,
      }
    )
    tl.from(
      '#content-3',
      {
        y: 10,
        opacity: 0,
        duration: 0.3,
      }
    )
  },[location.pathname]);

  return (
    <div className='w-full h-screen flex items-center justify-center px-2'>
      <div className='container flex items-start justify-start gap-10'>
        <div className='md:flex hidden flex-col items-center justify-between'>
          <div className='size-2 bg-white rounded-full'></div>
          <div id='line' className='w-[1px] bg-white origin-top'></div>
          <div className='size-2 bg-white rounded-full'></div>
        </div>
        <div className='text-6xl flex flex-col items-start justify-between gap-10'>
          <div id='content-1'>
            <h1 className='font-bold'>Earn rewards on your TON</h1>
            <h1 className='font-bold'>with Stakee</h1>
          </div>
          <div id='content-2'>
            <h1 className='text-xl font-medium'>Secure the TON blockchain by staking your TON tokens</h1>
            <h1 className='text-xl font-medium'>and be part of the next generation of decentralized finance.</h1>
          </div>
          <button id='content-3' className='text-xl font-medium bg-white text-black py-3 px-5 rounded-full flex items-center justify-between gap-2 hover:cursor-pointer hover:shadow-2xl'>
            <h1>Start Staking</h1>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;