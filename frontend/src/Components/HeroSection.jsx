import React from 'react';
import TypedText from './ui/TypedText';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import DecryptedText from './ui/DecryptedText';

const HeroSection = ({ isLoaded, onContactClick }) => {
  return (
    <div className='w-full h-screen relative bg-black'>
      <Navbar onContactClick={onContactClick} />

      <div className='w-full h-full flex flex-col gap-2 justify-center items-center z-10'>
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
