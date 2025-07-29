import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Orb = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
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
          pin: containerRef.current,
        //   markers: true,
        },
      });

      // Step 1: scale & move video
      tl.fromTo(
        videoWrapperRef.current,
        {
          scale: 1,
          top: '-100px',
        },
        {
          scale: 1.5,
          top: '50%',
          yPercent: -50,
          ease: 'power2.out',
        }
      );

      // Step 2: when video is done → animate first h1 up
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

      // Step 3: push first h1 up & animate second h1
      tl.to(
        h1Ref.current,
        {
          y: '-100%',
          opacity: 0,
          ease: 'power2.in',
        }
      );

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

      // You don’t need an extra `.to` to unpin — the timeline’s `end` automatically stops the pin.

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative">
      <div
        ref={videoWrapperRef}
        className="absolute left-1/2 -translate-x-1/2 z-20"
      >
        <video
          src="https://static.octagoshealth.com/assets/videos/orb-safari.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[400px] h-[400px] object-cover origin-center"
        />
      </div>

      <h1
        ref={h1Ref}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-30 h-screen font-poppins text-3xl uppercase text-white"
      >
        First H1 comes up.
      </h1>

      <h1
        ref={h2Ref}
        className="absolute top-1/2 right-3 -translate-y-1/2 z-30 h-screen font-poppins text-3xl uppercase text-white"
      >
        Second H1 comes up.
      </h1>
    </div>
  );
};

export default Orb;
