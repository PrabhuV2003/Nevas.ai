import React from 'react';
import { CiSaveDown1 } from "react-icons/ci";
import LightRays from '../ReactBits/LightRays';
import TypedText from './ui/TypedText';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Galaxy from './ui/Galaxy';
import ParticlesComponent from './ui/particles';
import DecryptedText from './ui/DecryptedText';

const HeroSection = ({ isLoaded, onContactClick }) => {
  return (
    <div className='w-full h-screen relative'>
      <Navbar onContactClick={onContactClick} />

       <div className=' w-full h-screen absolute top-0 left-0 -z-10 '>
         <ParticlesComponent id="particles" />
      </div>

      <div className="fixed -bottom-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-50 md:scale-100">
        <div
          className="rounded-full animate-float"
          style={{
            width: "350px",
            height: "350px",
            backgroundColor: "#4080f5",
            opacity: 1,
            filter: "blur(200px)",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>


      <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center z-10'>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          We are not an AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          <TypedText words={['Education', 'Development', 'Consulting']} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="white-silver-animated-text font-DM-Sans text-5xl md:text-7xl lg:text-8xl text-center"
        >
          Company
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl tracking-normal white-silver-animated-text2 mt-7"
        >
          We are all of the above
        </motion.p> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DecryptedText  />
        </motion.div>
      </div>

      {/* <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-10 cursor-pointer'>
        <CiSaveDown1 />
      </div> */}
    </div>
  );
};

export default HeroSection;
