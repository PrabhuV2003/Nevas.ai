import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from 'framer-motion'

const Newsletter = ({ onClose }) => {
    return (
        <motion.div
            initial={{ borderRadius: "50%", opacity: 0 }}
            animate={{ borderRadius: "0%", opacity: 1 }}
            exit={{ borderRadius: "50%", opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className=' w-full h-full fixed bg-black/40 z-50 top-0 left-0 flex justify-center items-center '>

            <div className=' w-[90%] lg:w-[70%] xl:w-[50%] h-[85%] p-0.5 bg-gradient-to-b from-gray-400 via-gray-700 to-gray-900 rounded-2xl relative flex justify-between items-center'>
                <IoIosCloseCircle onClick={onClose} className='absolute top-3 right-3 text-2xl z-10 text-white cursor-pointer' />
                <div className=' w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-[#1E1E20] via-[#18181C] to-[#111113] bg-black rounded-2xl '>
                    <img src="src\assets\—Pngtree—3d realistic purple email envelope_21230947.png" alt="" className=' w-[80px] sm:w-[100px] ' />
                    <p className='text-2xl md:text-4xl lg:text-5xl text-center w-full font-DM-Sans gradient-text whitespace-pre-wrap '>
                        Join Our Community!
                    </p>
                    <p className=' text-lg md:text-xl font-bold font-DM-Sans text-center mt-2.5 white-silver-animated-text'>
                        Be the first to grab this opportunity!
                    </p>
                    <p className=' text-base sm:text-lg font-DM-Sans text-center mt-2.5 text-gray-400'>Get the latest news, updates, and special offers straight to your inbox.</p>

                    <form action="#" className=' w-[95%] sm:w-[80%] flex items-center justify-center gap-2.5 mt-10 ' autoCapitalize='off'>
                        <input type="email" name='email' id='email' placeholder='Email Address' className=' w-full outline-none bg-[#2B2B2B] h-[50px] rounded-full px-5 ' required />
                        <button type='submit' className=' w-[200px] h-[50px] bg-gradient-to-r from-primay to-secoundary rounded-full cursor-pointer '>Subscribe</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Newsletter