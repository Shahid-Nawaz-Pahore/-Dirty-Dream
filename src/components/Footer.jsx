import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center pt-16 px-6 md:pb-0 pb-25'>
        <div className='container flex items-center justify-between text-white'>
            <div className='flex items-center text-8xl font-bold'>
                <img src="/Logo.png" className='md:w-80 w-50' />
            </div>
            <div className='flex items-center gap-4'>
                <FaTwitter className='md:size-10 size-6' />
                <FaTelegram className='md:size-10 size-6' />
                <FaGithub className='md:size-10 size-6' />
            </div>
        </div>
    </div>
  )
}

export default Footer;