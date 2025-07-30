import React from 'react'
import TextType from './TextType'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiYoutubeshorts } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' w-full h-[100vh] py-5 px-10 flex flex-col justify-between '>
            <div>
                <p className=' full lg:text-5xl text-5xl text-left leading-tight font-DM-Sans '>
                    Supercharge your <span className=' gradient-text '>AI journey</span>
                </p>
            </div>
            <div className=' w-full flex justify-between items-center '>
                <div className=' flex flex-col gap-2 justify-between '>
                    <p className=' whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase font-DM-Sans '>Contact</p>
                    <a href="#" className=' whitespace-pre-wrap text-white cursor-pointer hover:text-white/80 '>Info@nevas.ai</a>
                    <button className=' flex items-center gap-2 px-4 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-[10s] cursor-pointer '>
                        Get In Touch
                        <MdOutlineArrowOutward />
                    </button>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png" alt="" className=' w-40 ' />
                </div>
                <div className=' flex flex-col gap-2 justify-between '>
                    <p className=' whitespace-pre-wrap text-[#D9D9D9] uppercase font-DM-Sans '>Follow</p>
                    <ul class="flex justify-center mt-5 space-x-5">
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <SiYoutubeshorts className=' w-7 h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaSquareInstagram className=' w-7 h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaFacebook className=' w-7 h-7 ' />
                            </a>
                        </li>
                        <li>
                            <a
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                <FaXTwitter className=' w-7 h-7 ' />
                            </a>
                        </li>
 
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer