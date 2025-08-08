import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiYoutubeshorts } from "react-icons/si";
import { FaSquareInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/nevas-ai.png'

const Footer = ({ onContactClick, onNewsletterClick }) => {
  return (
    <div className='w-full py-3 px-5 flex flex-col justify-between md:py-5 md:px-10 relative overflow-hidden bg-black ' style={{ height: "calc(var(--vh) * 100)" }}>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className=' flex-col md:flex-row flex md:justify-between md:items-center -mb-10 md:-mb-0 '
      >
        <p className=' lg:text-5xl text-3xl text-left leading-tight font-DM-Sans'>
          Supercharge your <span className='gradient-text'>AI journey</span>
        </p>
      </motion.div>

      <div className='w-full relative z-20 flex flex-col justify-between items-start md:flex-row md:items-end'>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col gap-1 md:gap-2 justify-between'
        >
          <p className='whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase font-DM-Sans text-sm md:text-[16px]'>
            Contact
          </p>
          <a href="#" className='whitespace-pre-wrap text-white cursor-pointer hover:text-white/80 text-sm md:text-[16px]'>
            Info@nevas.ai
          </a>
          <button onClick={onContactClick} className='flex items-center gap-2 mt-2.5 px-4 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer text-sm md:text-[16px]'>
            Get In Touch
            <MdOutlineArrowOutward />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className=' flex justify-center items-end h-full mt-7 md:mt-0 '
        >
          <button onClick={onNewsletterClick} className=' px-5 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer text-sm md:text-[16px]'>
            News Letter
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col gap-2 justify-between mt-7 md:mt-0'
        >
          <p className='whitespace-pre-wrap text-[#D9D9D9] uppercase font-DM-Sans text-sm md:text-[16px]'>
            Follow
          </p>
          <ul className="flex justify-center mt-1 space-x-5">
            <li>
              <a href='https://www.youtube.com/@NevasAI' target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer transition-all duration-300">
                <SiYoutubeshorts className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/aiwithjohnsolomon/' target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer transition-all duration-300">
                <FaSquareInstagram className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/nevasaiconsulting' target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer transition-all duration-300">
                <FaFacebook className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/9376084/admin/dashboard/' target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer transition-all duration-300">
                <FaLinkedin className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a href='https://x.com/nevastech' target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer transition-all duration-300">
                <FaXTwitter className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
          </ul>
        </motion.div>

      </div>

      <img initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }} className=' absolute bottom-0 lg:-bottom-[50px] left-1/2 -translate-x-1/2 z-0 w-full object-cover opacity-30 ' src={logo} alt="" />
    </div>
  )
}

export default Footer
