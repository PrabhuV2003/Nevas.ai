import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assest'
import { FaGooglePlay } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseAnim = "transform transition-all ease-out duration-700";

  const handleMouseMove = (e) => {
    if (!isDesktop) return;

    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;
    setParallax({ x, y });
  };


  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setParallax({ x: 0, y: 0 });
  };

  // Depth factors (bigger = more movement)
  const depthBgLeft = 40;
  const depthBgCenter = 60;
  const depthBgRight = 40;
  const depthBgBottom = 50;
  const depthHeroImage = 30;

  return (
    <div
      className='w-full min-h-screen relative pb-16  '
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* BG Multi Colors with parallax */}
      <div
        className='absolute left-0 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[100px] sm:blur-[200px] opacity-100'
        style={{
          transform: isDesktop
            ? `translate3d(${parallax.x * depthBgLeft}px, ${parallax.y * depthBgLeft}px, 0)`
            : 'translate3d(0px, 0px, 0px)'

        }}
      ></div>

      <div
        className='absolute left-1/2 -translate-x-1/2 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[100px] sm:blur-[200px] opacity-100'
        style={{
          transform: isDesktop
            ? `translate3d(${parallax.x * depthBgLeft}px, ${parallax.y * depthBgLeft}px, 0)`
            : 'translate3d(0px, 0px, 0px)'

        }}
      ></div>

      <div
        className='absolute right-0 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[100px] sm:blur-[200px] opacity-100'
        style={{
          transform: isDesktop
            ? `translate3d(${parallax.x * depthBgLeft}px, ${parallax.y * depthBgLeft}px, 0)`
            : 'translate3d(0px, 0px, 0px)'

        }}
      ></div>

      <div
        className='absolute left-1/2 -translate-x-1/2 -bottom-[250px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[100px] sm:blur-[200px] opacity-100'
        style={{
          transform: isDesktop
            ? `translate3d(${parallax.x * depthBgLeft}px, ${parallax.y * depthBgLeft}px, 0)`
            : 'translate3d(0px, 0px, 0px)'

        }}
      ></div>

      {/* <div className=' w-full md:w-[90%] h-52 absolute bottom-0 sm:bottom-20 right-1/2 translate-x-1/2 z-0 flex justify-center text-center '>
        <h1 className=' h-full w-full text-[12vw] sm:text-[11vw] font-poppins font-semibold uppercase text-center text-white AiText '>AI AUTOMATION</h1>
      </div>

      <div className=' w-full md:w-[90%] h-52 absolute bottom-0 sm:bottom-20 right-1/2 translate-x-1/2 z-[99] flex justify-center text-center '>
        <h1 className=' h-full w-full text-[12vw] sm:text-[11vw] font-poppins font-semibold uppercase text-center text-white AiTextStroke '>AI AUTOMATION</h1>
      </div> */}

      <Navbar />

      {/* Hero Content */}
      <div className='w-11/12 h-full pt-10 mx-auto relative z-50'>

        {/* Headings */}
        <div id='home'
          className={`
            lg:w-[900px] w-fit h-fit md:h-80 mx-auto 
            ${baseAnim}
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "150ms" }}
        >
          <div className='md:w-[100%] lg:w-full mx-auto h-[35px] flex justify-between items-center'>
            <h3 className='font-cervino text-xl md:text-[25px] lg:text-[35px] text-black font-medium'>
              Unleash the Power of
            </h3>
            <h3 className='font-cervino text-xl md:text-[25px] lg:text-[35px] text-black font-extrabold'>
              AI AUTOMATION
            </h3>
          </div>

          {/* TECH */}
          <h1
            className={`
              text-[35vw] sm:text-[200px] md:text-[30vw] lg:text-[350px] font-extrabold select-none leading-28  md:leading-44 lg:leading-60 text-center
              [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]
              ${baseAnim}
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: "350ms" }}
          >
            TECH
          </h1>
        </div>

        {/* 3-Column Section */}
        <div className='w-full flex justify-center items-center -mt-10 md:-mt-44 lg:-mt-36 gap-6'>

          {/* LEFT TEXT */}
          <div
            className={`
              md:w-[25%] lg:w-[20%] hidden lg:flex flex-col justify-center gap-8
              ${baseAnim}
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: "500ms" }}
          >
            <p className='font-cervino text-lg text-[#666666] leading-8'>
              Unleash the true potential of your business through our advanced AI-driven solutions.
              Streamline workflows, optimize decision-making, and enhance customer experiences like never before.
            </p>
            <a
              href="#contact"
              className='font-cervino text-[26px] leading-8 uppercase underline font-bold text-[#222222]'
            >
              Get Started now!
            </a>
          </div>

          {/* CENTER IMAGE with parallax */}
          <div
            className={`
              w-full md:w-[80%] lg:w-[60%] relative
              ${baseAnim}
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: "650ms" }}
          >
            <div
              style={{
                transform: isDesktop
                  ? `translate3d(${parallax.x * depthBgLeft}px, ${parallax.y * depthBgLeft}px, 0)`
                  : 'translate3d(0px, 0px, 0px)'

              }}
            >
              <img className='w-full h-full' src={assets.HeroArtOject} alt="" />
            </div>
          </div>

          {/* RIGHT CTA */}
          <div
            className={`
              md:w-[25%] lg:w-[20%] hidden lg:flex flex-col justify-center gap-4
              ${baseAnim}
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: "800ms" }}
          >
            <p className='font-cervino text-lg leading-8 text-[#666666]'>
              Discover more about us!
            </p>
            <a href='https://www.youtube.com/@NevasAI/' className='w-full h-[70px] flex'>
              <div className='w-[25%] h-full bg-[#222222] flex justify-center items-center text-white text-3xl'>
                <FaGooglePlay className='animate-pulse' />
              </div>
              <div className='w-[75%] h-full bg-white '>
                <img src={assets.john} alt="" className='w-full h-full object-cover' />
              </div>
            </a>
            <div className='flex items-center text-3xl gap-5 mt-5'>
              <FaSquareFacebook className=' hover:-rotate-6 hover:text-[#1877F2] transition-all duration-500 cursor-pointer ' />
              <FaLinkedin className=' hover:-rotate-6 hover:text-[#0077B5] transition-all duration-500 cursor-pointer ' />
              <FaSquareInstagram className=' hover:-rotate-6 hover:text-[#E4405F] transition-all duration-500 cursor-pointer ' />
            </div>
          </div>

        </div>

        {/* Smaller Devices */}

        <div className=' w-full lg:hidden flex flex-col justify-center mt-10 gap-6 '>
          <div className=' flex flex-col justify-center gap-4 '>
            <p className='font-cervino text-lg text-justify text-[#666666] leading-8'>
              Unleash the true potential of your business through our advanced AI-driven solutions.
              Streamline workflows, optimize decision-making, and enhance customer experiences like never before.
            </p>
            <a
              href="#contact"
              className='font-cervino text-[20px] leading-8 uppercase underline font-bold text-[#222222]'
            >
              Get Started now!
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default HeroSection
