import React from 'react'
import { motion } from 'framer-motion'


const CTA = ({ onContactClick }) => {
    return (
        <div className=' w-full h-dvh md:h-screen relative '>
            <div className=' absolute top-1/2 left-1/2 -translate-1/2 w-[70%] flex flex-col justify-center items-center '>
                <motion.p
                    className='text-4xl md:text-6xl lg:text-7xl text-center whitespace-pre-wrap w-full font-DM-Sans white-silver-animated-text'
                >
                    The best AI systems are build
                    <span className=' gradient-text '> side by side.</span>
                </motion.p>
                <div className='flex w-fit cursor-pointer mt-10 items-center gap-1 px-9 py-3 lg:px-10 lg:py-4 border-2 border-white rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-300 font-DM-Sans' onClick={onContactClick}>
                    <p className=' text-3xl lg:text-4xl '>Let's Partner Up</p>
                </div>
            </div>
        </div>
    )
}

export default CTA