import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/nevas-ai.png';

const Preloader = () => {
  const spanRef = useRef(null);
  const blackDivRef = useRef(null);
  const logoDivRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // Step 1: Expand span smoothly
    tl.fromTo(
      spanRef.current,
      { width: '0%' },
      { width: '100%', duration: 0.6 }
    )

    // Step 2: Rotate black div to 0 deg with smoother motion
    .fromTo(
      blackDivRef.current,
      { rotate: -90, transformOrigin: 'center center' },
      { rotate: 0, duration: 0.6 },
      "<0.2" // overlap with previous animation
    )

    // Step 3: Expand logo div with slight delay
    .fromTo(
      logoDivRef.current,
      { width: '0%' },
      { width: '100%', duration: 0.8 },
      "<0.1"
    )

    // Step 4: Slide preloader up smoothly
    .to(
      '.preloader',
      { y: '-100%', duration: 1.2, ease: "power4.inOut", delay: 0.2 }
    );

  }, []);

  return (
    <div className='fixed w-full h-screen bg-black flex justify-center items-center overflow-hidden z-50 preloader'>
      <div
        ref={blackDivRef}
        className='w-[300px] h-[100px] -rotate-90 relative group'
      >
        <span
          ref={spanRef}
          className='w-0 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primay to-secoundary z-10'
        ></span>
        <div
          ref={logoDivRef}
          className='w-0 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-10 flex justify-center items-center'
        >
          <img
            src={logo}
            alt="Nevas ai"
            className='h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
