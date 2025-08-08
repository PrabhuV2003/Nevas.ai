import React from 'react'
import { motion } from 'framer-motion'
import MarqueeSlider from './MarqueeSlider'


const CTA = ({ onContactClick }) => {
    return (
        <div className=' w-full vh-screen relative bg-black '>
            <div className=' absolute to-[100px] left-1/2 -translate-x-1/2 w-full '>
                <MarqueeSlider />
            </div>
            <div className=' absolute top-1/2 left-1/2 -translate-1/2 w-[90%] lg:w-[70%] flex flex-col justify-center items-center '>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='text-4xl md:text-6xl lg:text-7xl text-center whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
                >
                    The best AI systems are build
                    <span className=' gradient-text '> side by side.</span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='flex w-fit cursor-pointer mt-10 items-center gap-1 px-9 py-3 lg:px-10 lg:py-4 border-2 border-white rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-300 font-DM-Sans' onClick={onContactClick}>
                    <p className=' text-2xl lg:text-4xl relative z-30 '>Let's Partner Up</p>
                </motion.div>
            </div>
        </div>
    )
}

export default CTA