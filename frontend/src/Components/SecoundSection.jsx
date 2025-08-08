import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SecoundSection = ({ videoSrc }) => {

    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => { 
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        },
        { threshold: 0.25 } // play/pause when 25% visible, adjust as needed
      );
  
      observer.observe(video);
  
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <div className=' w-full flex flex-col relative justify-center items-center bg-black ' style={{ height: "calc(var(--vh) * 100)" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-contain w-full h-full bg-cover absolute top-0 left-0"
        muted
        playsInline
        preload="auto"
        // autoplay attribute is unnecessary because we'll control play via IntersectionObserver
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }} // <- every time it hits 50% visible
        className='text-4xl relative z-10 md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
      > 
        We put <span className='gradient-text'>AI</span> at the center
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className='text-4xl relative z-10 md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
      >
        of <span className='gradient-text'>everything</span> we do.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
        className='text-xl relative z-10 lg:text-2xl w-10/12 lg:w-full text-center text-[#C0C0C0] mt-9'
      >
        Your trusted partner in becoming an AI-first company.
      </motion.p>
    </div>
  )
}

export default SecoundSection
