import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const Orb = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null); // add video ref
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const video = videoRef.current;

      // Create ScrollTrigger for playing the video when container enters viewport
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom', // when container enters viewport
        onEnter: () => {
          if (video && video.paused) {
            video.play();
          }
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: containerRef.current,
          // markers: true,
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          scale: 1,
          top: '0',
        },
        {
          scale: 1.5,
          top: '50%',
          yPercent: -50,
          ease: 'power2.out',
        }
      );

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
          ref={videoRef} // use video ref
          src='https://res.cloudinary.com/ddvsj2zxd/video/upload/v1753773216/Sequence_02_zykltx.mp4'
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
