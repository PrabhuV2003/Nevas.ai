import React from 'react'
import { assets } from '../assets/assest'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' w-full min-h-[400px] pt-24 pb-5 px-14 relative '>

            {/* BG Multi Colors */}
            <div className='absolute left-0 bottom-0 w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute left-1/2 -translate-x-1/2 top-0 w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute right-0 top-0 w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80 pointer-events-none'></div>

            <div className=' w-full h-full border-y border-[#B4B4B4] p-5 pb-1 '>
                <div className=' w-full h-full flex justify-between gap-2.5 '>
                    <div className=' w-full h-full flex flex-col justify-between gap-10 '>
                        <img src={assets.logo} alt="nevas logo" className=' w-[200px] ' />
                        <p className=' font-cervino text-base leading-10 text-[#666666] text-justify '>Visual Elements: Incorporate futuristic and dynamic elements, such as circuit lines, interconnected nodes, and sleek, modern typography. Consider using a gradient color scheme that transitions from vibrant blues to deep purples, symbolizing innovation and intelligence. </p>
                    </div>
                    <div className=' w-full h-full flex flex-col justify-between items-center '>
                        <p className=' font-cervino font-semibold text-lg leading-6 tracking-wider uppercase mb-5 '>Quick Links</p>
                        <div className=' flex flex-col '>
                            <a href="#" className=' font-cervino text-base text-[#666666] leading-8 tracking-widest '>Home</a>
                            <a href="#" className=' font-cervino text-base text-[#666666] leading-8 tracking-widest '>About Us</a>
                            <a href="#" className=' font-cervino text-base text-[#666666] leading-8 tracking-widest '>Services</a>
                            <a href="#" className=' font-cervino text-base text-[#666666] leading-8 tracking-widest '>FAQ</a>
                            <a href="#" className=' font-cervino text-base text-[#666666] leading-8 tracking-widest '>Contact Us</a>
                        </div>
                    </div>
                    <div className=' w-full h-full flex flex-col justify-between items-center '>
                        <p className=' font-cervino font-semibold text-lg leading-6 tracking-wider uppercase mb-5 '>Contact</p>
                        <div className=' flex flex-col '>
                            <a href="#" className=' font-cervino text-base text-[#4D5053] leading-8 tracking-widest '>11201 contact@interno.com</a>
                            <a href="#" className=' font-cervino text-base text-[#4D5053] leading-8 tracking-widest '>(123) 456 - 7890</a>
                            <div className=' w-[70%] flex justify-between items-center text-3xl mt-7 '>
                                <FaSquareFacebook />
                                <FaLinkedin />
                                <FaSquareInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-[50px] font-cervino flex justify-between items-center mt-5 '>
                    <p className=' text-base text-[#000000] leading-5 font-semibold '>© 2023 Nevas.ai - All Rights Reserved</p>
                    <div className=' flex  items-center gap-2.5 '>
                        <p className=' text-base text-[#000000] leading-5 font-semibold '>Privacy Policy</p>
                        <div className=' w-[1px] h-[25px] bg-black '></div>
                        <p className=' text-base text-[#000000] leading-5 font-semibold '>Terms of Services</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer