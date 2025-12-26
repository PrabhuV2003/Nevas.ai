import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assest'
import { FaGooglePlay } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";

/* ================== ADD: useInView hook ================== */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};
/* ======================================================== */

const Card = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4 bg-[#F7F7F7] border border-[#ccc] text-[#111] px-6 py-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black text-white">
        {icon}
      </div>
      <p className="text-lg font-semibold whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  /* ================== ADD: inView refs ================== */
  const heroText = useInView();
  const robotView = useInView();
  const leftCard1 = useInView();
  const leftCard2 = useInView();
  const rightCard1 = useInView();
  const rightCard2 = useInView();
  /* ===================================================== */

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

  return (
    <div
      className='w-full min-h-screen relative'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* ================= EXISTING BACKGROUNDS (UNCHANGED) ================= */}
      <div className='absolute left-0 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[100px] sm:blur-[200px]' />
      <div className='absolute left-1/2 -translate-x-1/2 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[100px] sm:blur-[200px]' />
      <div className='absolute right-0 top-[100px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[100px] sm:blur-[200px]' />
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-[250px] w-[200px] h-[300px] sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[100px] sm:blur-[200px]' />
      {/* ==================================================================== */}

      <Navbar />

      {/* ================= HERO TEXT (on-view + gradient span) ================= */}
      <div
        ref={heroText.ref}
        className={`w-full h-full relative z-50 p-10 transition-all duration-700 ease-out
        ${heroText.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className='w-full min-h-[70vh] flex flex-col justify-center items-center gap-5'>
          <h1 className='font-cervino uppercase text-6xl font-semibold leading-16 text-[#1C2546] text-center'>
            Unleash the power of{" "}
            <span className='bg-gradient-to-r from-[#4080F5] to-[#572AC2] bg-clip-text text-transparent'>
              AI Automation
            </span>{" "}
            &{" "}
            <span className='bg-gradient-to-r from-[#4080F5] to-[#572AC2] bg-clip-text text-transparent'>
              Innovation
            </span>{" "}
            for your business
          </h1>

          <p className='font-cervino text-center w-9/12'>
            Partner with nevas to build, deploy and scale intelligent automation systems.
          </p>

          <button className='flex justify-center items-center gap-2.5 bg-gradient-to-r from-[#4080F5] to-[#572AC2] text-lg text-white p-2 px-4 rounded-lg'>
            Let's Talk About Your Project <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      {/* ===================================================================== */}

      {/* ================= ROBOT + CARDS (on-view only) ================= */}
      <div className='w-full min-h-[70vh] flex justify-center relative z-50'>

        <div
          ref={leftCard1.ref}
          className={`absolute left-10 top-1/3 hidden lg:block transition-all duration-700
          ${leftCard1.inView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <Card title="Enhanced ROI" icon={<span><MdOutlineAutoGraph /></span>} />
        </div>

        <div
          ref={leftCard2.ref}
          className={`absolute left-20 top-7/12 hidden lg:block transition-all duration-700 delay-150
          ${leftCard2.inView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <Card title="AI Agent Development" icon={<span>🤖</span>} />
        </div>

        <img
          ref={robotView.ref}
          src={assets.robot}
          alt=""
          className={`w-[650px] transition-all duration-1000
          ${robotView.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        />

        <div
          ref={rightCard1.ref}
          className={`absolute right-10 top-1/3 hidden lg:block transition-all duration-700
          ${rightCard1.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <Card title="100% Secured" icon={<span>⚙️</span>} />
        </div>

        <div
          ref={rightCard2.ref}
          className={`absolute right-20 top-7/12 hidden lg:block transition-all duration-700 delay-150
          ${rightCard2.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <Card title="AI Tech Consulting" icon={<span>🗄️</span>} />
        </div>

      </div>
      {/* =================================================== */}

    </div>
  )
}

export default HeroSection
