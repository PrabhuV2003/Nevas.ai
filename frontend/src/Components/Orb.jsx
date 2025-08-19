import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Orb = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {}); // prevent console errors
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ height: "calc(var(--vh) * 100)" }}
      className="w-full relative bg-black flex flex-col justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      {/* Poster image ensures fast LCP */}
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        className="object-cover w-full h-full absolute top-0 left-0"
        muted
        playsInline
        preload="metadata"
        loop
      />

      {/* Overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70" style={{ willChange: 'opacity' }}></div>

      {/* Text content */}
      <motion.p
        className="relative z-10 font-DM-Sans text-2xl md:text-5xl w-full text-center leading-tight whitespace-pre-wrap"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className='white-silver-animated-text'>We </span>
        <span className='white-silver-animated-text1'>spend </span>
        <span className='white-silver-animated-text2'>our </span>
        <span className='white-silver-animated-text2'>days </span>
        <span className='white-silver-animated-text1'>guiding </span>
        <span className='white-silver-animated-text1'>companies </span>
        <br className='hidden lg:block' />
        <span className='white-silver-animated-text1'>through </span>
        <span className='white-silver-animated-text2'>our </span>
        <span className='white-silver-animated-text'>3-step </span>
        <span className='gradient-text'>AI </span>
        <span className='gradient-text'>Transformation </span>
        <span className='white-silver-animated-text'>Journey.</span>
      </motion.p>
    </motion.div>
  );
};

export default Orb;
  