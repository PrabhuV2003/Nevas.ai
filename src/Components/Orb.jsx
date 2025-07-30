import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Orb = () => {
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // Animate orb scaling
      tl.fromTo(
        orbRef.current,
        {
          scale: 0.8,
        },
        {
          scale: 1,
          ease: 'power2.out',
        }
      );

      // Animate text 1 in
      tl.fromTo(
        h1Ref.current,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          ease: 'power2.out',
        }
      );

      // Animate orb half-fill when text 1 is visible
      tl.to(
        orbRef.current,
        {
          background: 'conic-gradient(from 180deg at 50% 50%, #4080F5, #572AC2)',
          borderWidth: 0,
          ease: 'power2.out',
        },
        '<' // sync with previous
      );

      // Animate text 1 out
      tl.to(
        h1Ref.current,
        {
          y: '-100%',
          opacity: 0,
          ease: 'power2.in',
        }
      );

      // Animate text 2 in
      tl.fromTo(
        h2Ref.current,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          ease: 'power2.out',
        }
      );

      // Animate orb full-fill when text 2 is visible
      tl.to(
        orbRef.current,
        {
          background: 'radial-gradient(circle at center, #4080F5, #572AC2)',
          ease: 'power2.out',
        },
        '<'
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden">
      <div
        ref={orbRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[400px] h-[400px] rounded-full border-4 border-primay border-gradient-to-r from-blue-500 to-cyan-500"
        style={{
          background: 'transparent',
          transition: 'background 0.5s ease',
        }}
      />

    <h1
      ref={h1Ref}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 -translate-y-1/2 z-30 white-silver-animated-text font-DM-Mono-Italic text-4xl md:text-6xl lg:text-7xl text-center"
    >
      We Will
    </h1>

      <h1
        ref={h2Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 -translate-y-1/2 z-30 white-silver-animated-text font-DM-Mono-Italic text-4xl md:text-6xl lg:text-7xl text-center"
      >
        Make You Shaped
      </h1>
    </div>
  );
};

export default Orb;
