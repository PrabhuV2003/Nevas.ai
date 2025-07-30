import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiYoutubeshorts } from "react-icons/si";
import { FaSquareInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='w-full h-screen py-3 px-5 flex flex-col justify-between md:py-5 md:px-10'>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className='w-full lg:text-5xl text-5xl text-left leading-tight font-DM-Sans'>
          Supercharge your <span className='gradient-text'>AI journey</span>
        </p>
      </motion.div>

      <div className='w-full flex flex-col justify-between items-start md:flex-row md:items-center md:justify-between'>

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
          <button className='flex items-center gap-2 mt-2.5 px-4 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer text-sm md:text-[16px]'>
            Get In Touch
            <MdOutlineArrowOutward />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className='mt-7 md:mt-0'
        >
          <img src="https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png" alt="Logo" className='w-28 md:w-36' />
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
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <SiYoutubeshorts className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <FaSquareInstagram className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <FaFacebook className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                <FaXTwitter className='w-5 h-5 md:w-7 md:h-7' />
              </a>
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  )
}

export default Footer
