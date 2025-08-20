import React, { useEffect, useRef } from 'react';
import TypedText from './ui/TypedText';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import DecryptedText from './ui/DecryptedText';

const HeroSection = ({ isLoaded, onContactClick }) => {

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
    <div className='w-full h-screen relative bg-black'>

        <video
        ref={videoRef}
        src='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666885/heroSection_xiis5x.mp4'
        className="object-cover w-full h-full absolute top-0 left-0"
        muted
        playsInline
        preload="aut"
        loop
        // autoplay attribute is unnecessary because we'll control play via IntersectionObserver
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
      <Navbar onContactClick={onContactClick} />

      <div className='w-full h-full flex flex-col gap-2 justify-center items-center relative z-20'>
        <motion.p
          initial={{ y: 50 }}
          animate={isLoaded ? { y: 0 } : {}}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          We are not an AI
        </motion.p>

        <motion.div
          initial={{ y: 50 }}
          animate={isLoaded ? { y: 0 } : {}}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          <div className="sr-only">Consulting Development Training Company</div>
          <TypedText words={['Consulting', 'Development', 'Training']} />
        </motion.div>

        <motion.p
          initial={{y: 50 }}
          animate={isLoaded ? { y: 0 } : {}}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          Company
        </motion.p>

        <motion.div
          initial={{ y: 50 }}
          animate={isLoaded ? { y: 0 } : {}}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DecryptedText  />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
