import React from 'react'
import TextType from './TextType'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiYoutubeshorts } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' w-full h-screen py-3 px-5 flex flex-col justify-between md:py-5 md:px-10 '>
            <div>
                <p className=' full lg:text-5xl text-5xl text-left leading-tight font-DM-Sans '>
                    Supercharge your <span className=' gradient-text '>AI journey</span>
                </p>
            </div>
            <div className=' w-full flex flex-col justify-between items-start md:flex-row md:items-center '>
                <div className=' flex flex-col gap-1 md:gap-2 justify-between '>
                    <p className=' whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase font-DM-Sans text-sm md:text-[16px] '>Contact</p>
                    <a href="#" className=' whitespace-pre-wrap text-white cursor-pointer hover:text-white/80 text-sm md:text-[16px] '>Info@nevas.ai</a>
                    <button className=' flex items-center gap-2 mt-2.5 px-4 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer text-sm md:text-[16px] '>
                        Get In Touch
                        <MdOutlineArrowOutward />
                    </button>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png" alt="" className=' w-36 hidden md:block ' />
                </div>
                <div className=' flex flex-col gap-2 justify-between mt-7 md:mt-0 '>
                    <p className=' whitespace-pre-wrap text-[#D9D9D9] uppercase font-DM-Sans text-sm md:text-[16px] '>Follow</p>
                    <ul class="flex justify-center mt-1 space-x-5">
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <SiYoutubeshorts className=' w-5 h-5 md:w-7 md:h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaSquareInstagram className=' w-5 h-5 md:w-7 md:h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaFacebook className=' w-5 h-5 md:w-7 md:h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaXTwitter className=' w-5 h-5 md:w-7 md:h-7 ' />
                            </a>
                        </li>
 
                    </ul>
                </div>
                <div className=' mt-7 md:mt-0 '>
                    <img src="https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png" alt="" className=' w-28 block md:hidden ' />
                </div>
            </div>
        </div>
    )
}

export default Footer