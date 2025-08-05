import React from 'react'
import { motion } from 'framer-motion'

const SecoundSection = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center z-50'>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }} // <- every time it hits 50% visible
        className='text-4xl md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
      >
        We put <span className='gradient-text'>AI</span> at the center
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className='text-4xl md:text-6xl lg:text-7xl text-center h-fit whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
      >
        of <span className='gradient-text'>everything</span> we do.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
        className='text-xl lg:text-2xl w-10/12 lg:w-full text-center text-[#C0C0C0] mt-9'
      >
        Your trusted partner in becoming an AI-first company.
      </motion.p>
    </div>
  )
}

export default SecoundSection
