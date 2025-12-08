import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegCopyright, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className=' w-full h-80 bg-[#111827] px-20 py-10 flex flex-col '>
            <div className=' w-full h-10/12 border-b border-[#1F2937] flex items-start pb-10 '>
                <div className=' w-full h-full flex flex-col justify-between '>
                    <img src={assets.NevasFooter} className=' w-52 ' alt="" />
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Next-generation AI Chatbot <br /> platform for modern business.</p>
                </div>
                <div className=' w-8/12 h-full flex flex-col '>
                    <p className=' text-white text-base leading-7 font-outfit mb-5 '>Product</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Features</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Pricing</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>API</p>
                </div>
                <div className=' w-8/12 h-full flex flex-col '>
                    <p className=' text-white text-base leading-7 font-outfit mb-5 '>Company</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Privacy Policy</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Terms of Service</p>
                    <p className=' text-[#9CA3AF] text-base leading-7 font-outfit '>Contact</p>
                </div>
                <div className=' h-full flex flex-col '>
                    <p className=' text-white text-base leading-7 font-outfit mb-5 '>Contact</p>
                    <div className=' flex items-center justify-self-start gap-3.5 '>
                        <a href='#' className=' bg-[#1F2937] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-[#1f2937be] transition-colors duration-500 ease-in-out '>
                            <FaXTwitter />
                        </a>
                        <a href='#' className=' bg-[#1F2937] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-[#1f2937be] transition-colors duration-500 ease-in-out '>
                            <FaLinkedinIn />
                        </a>
                        <a href='#' className=' bg-[#1F2937] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-[#1f2937be] transition-colors duration-500 ease-in-out '>
                            <FaYoutube />
                        </a>
                        <a href='#' className=' bg-[#1F2937] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-[#1f2937be] transition-colors duration-500 ease-in-out '>
                            <FaFacebookF />
                        </a>
                        <a href='#' className=' bg-[#1F2937] w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer group hover:bg-[#1f2937be] transition-colors duration-500 ease-in-out '>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className=' w-full h-2/12 text-center '>
                <p className=' w-full h-full text-[#9CA3AF] text-base font-outfit leading-6 flex items-center justify-center gap-1.5 mt-3.5 '>
                    <FaRegCopyright />
                    2025 Nevas.ai All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer