import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const spanRef = useRef(null);
  const blackDivRef = useRef(null);
  const logoDivRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // Step 1: Expand span to w-full
    tl.to(spanRef.current, {
      width: '100%',
      duration: 1
    })

    // Step 2: Rotate black div to 0 deg
    .to(blackDivRef.current, {
      rotate: 0,
      duration: 1
    })

    // Step 3: Expand logo div to w-full
    .to(logoDivRef.current, {
      width: '100%',
      duration: 2
    })

    // Step 4: Slide span up by -100%
    .to('.preloader', {
      y: '-100%',
      delay: 1,
      duration: 2
    });

  }, []);

  return (
    <div className='fixed w-full h-screen bg-black flex justify-center items-center overflow-hidden z-50 preloader'>
      <div
        ref={blackDivRef}
        className='w-[300px] h-[100px] -rotate-90 relative group'
      >
        <span
          ref={spanRef}
          className='w-0 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primay to-secoundary duration-500 z-10'
        ></span>
        <div
          ref={logoDivRef}
          className='w-0 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-10 flex justify-center items-center'
        >
          <img
            src="https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png"
            alt="Logo"
            className='h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
