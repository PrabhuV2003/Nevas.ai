import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assest'
import { FaGooglePlay } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className=' w-full min-h-screen bg-[#F2F2F2] relative pb-16 '>

      {/* BG Multi Colors */}
      <div className=' absolute left-0 top-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 '></div>
      <div className=' absolute left-1/2 -translate-x-1/2 top-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 '></div>
      <div className=' absolute right-0 top-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[250px] opacity-30 '></div>
      <div className=' absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] z-10 opacity-30 '></div>

      {/* Navbar */}
      <Navbar />

      {/* HeroContent */}
      <div className=' w-11/12 h-full pt-36 mx-auto relative z-50 '>

        <div className=' w-[900px] h-80 mx-auto '>
          <div className=' w-full h-[35px] flex justify-between items-center '>
            <h3 className=' font-cervino text-[35px] leading-12 text-black font-medium '>Unleash the Power of</h3>
            <h3 className=' font-cervino text-[35px] leading-12 text-black font-extrabold '>AI AUTOMATION</h3>
          </div>
          <div className=' w-full h-full '>
            <h1 className=' text-[350px] font-extrabold leading-60 select-none [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] '>TECH</h1>
          </div>
        </div>

        {/* 2nd Section In Hero */}

        <div className=' w-full flex justify-center items-center -mt-32 '>
          <div className=' w-[20%]  flex flex-col justify-center gap-8 '>
            <p className=' font-cervino text-lg text-[#666666] leading-8 '>Unleash the true potential of your business through our advanced AI-driven solutions. Streamline workflows, optimize decision-making, and enhance customer experiences like never before.</p>
            <a href="#" className=' font-cervino text-[26px] leading-8 uppercase underline font-bold text-[#222222] '>
              Get Started now!
            </a>
          </div>
          <div className=' w-[60%] '>
            <img className=' w-full h-full ' src={assets.HeroArtOject} alt="" />
          </div>
          <div className=' w-[20%] flex flex-col justify-center gap-4 '>
            <p className=' font-cervino text-lg leading-8 text-[#666666] '>Discover more about us!</p>
            <a href='https://www.youtube.com/@NevasAI/' className=' w-full h-[70px] flex '>
              <div className=' w-[25%] h-full bg-[#222222] flex justify-center items-center text-white text-3xl '>
                <FaGooglePlay className='animate-pulse' />
              </div>
              <div className=' w-[75%] h-full bg-white '>
                <img src={assets.john} alt="" className=' w-full h-full object-cover ' />
              </div>
            </a>
            <div className=' flex items-center text-3xl gap-5 mt-5 '>
              <FaSquareFacebook />
              <FaLinkedin />
              <FaSquareInstagram />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroSection