import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { assets } from '../assets/assest';

const OurExpertSection = () => { 
    return (
        <div className=' w-full min-h-screen bg-[#F2F2F2] py-24 px-14 relative -z-10 '>

            {/* BG Multi Colors */}
            <div className=' absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 '></div>
            <div className=' absolute left-1/2 -translate-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 '></div>
            <div className=' absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30  '></div>

            <div className=' w-full h-full relative  z-50 '>
                <h2 className=' font-cervino text-[55px] leading-[75px] uppercase '>
                    Our Expert Ai Automation
                    <br />
                    Services
                </h2>
                <p className=' font-cervino text-base leading-7 text-[#666666] w-[70%] '>Discover the pinnacle of efficiency and innovation through our Expert AI Automation Services. Our seasoned professionals craft tailored solutions, seamlessly integrating cutting-edge AI technology to optimize operations, enhance customer experiences, </p>

                <div className=' w-full h-[500px] mt-10 flex flex-col '>
                    <div className=' w-full h-full border-t border-[#666666] flex justify-between items-center group relative '>
                        <p className=' font-cervino text-3xl leading-9 uppercase text-[#B4B4B4] group-hover:text-[#222222] group-hover:font-bold group-hover:text-4xl transition-all duration-700 '>Smart Process Enhancements </p>
                        <div className=' text-3xl mr-10 text-[#B4B4B4] p-2 group-hover:bg-black group-hover:rounded-xl group-hover:text-white transition-all duration-700 '>
                            <GoArrowUpRight className=' group-hover:rotate-45 transition-all duration-700 ' />
                        </div>

                        <img src={assets.serviceimg1} alt="AI teamwork" className=' absolute top-1/2 right-[200px] -translate-y-1/2 h-52 w-[350px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 ' />

                    </div>
                    <div className=' w-full h-full border-t border-[#666666] flex justify-between items-center group relative '>
                        <p className=' font-cervino text-3xl leading-9 uppercase text-[#B4B4B4] group-hover:text-[#222222] group-hover:font-bold group-hover:text-4xl transition-all duration-700 '>Insightful Data Mastery</p>
                        <div className=' text-3xl mr-10 text-[#B4B4B4] p-2 group-hover:bg-black group-hover:rounded-xl group-hover:text-white transition-all duration-700 '>
                            <GoArrowUpRight className=' group-hover:rotate-45 transition-all duration-700 ' />
                        </div>

                        <img src={assets.serviceimg1} alt="AI teamwork" className=' absolute top-1/2 right-[200px] -translate-y-1/2 h-52 w-[350px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 ' />

                    </div>
                    <div className=' w-full h-full border-t border-[#666666] flex justify-between items-center group relative '>
                        <p className=' font-cervino text-3xl leading-9 uppercase text-[#B4B4B4] group-hover:text-[#222222] group-hover:font-bold group-hover:text-4xl transition-all duration-700 '>Tailored Customer Journeys</p>
                        <div className=' text-3xl mr-10 text-[#B4B4B4] p-2 group-hover:bg-black group-hover:rounded-xl group-hover:text-white transition-all duration-700 '>
                            <GoArrowUpRight className=' group-hover:rotate-45 transition-all duration-700 ' />
                        </div>

                        <img src={assets.serviceimg1} alt="AI teamwork" className=' absolute top-1/2 right-[200px] -translate-y-1/2 h-52 w-[350px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 ' />

                    </div>
                    <div className=' w-full h-full border-t border-b border-[#666666] flex justify-between items-center group relative '>
                        <p className=' font-cervino text-3xl leading-9 uppercase text-[#B4B4B4] group-hover:text-[#222222] group-hover:font-bold group-hover:text-4xl transition-all duration-700 '>Future-Proof Decisions</p>
                        <div className=' text-3xl mr-10 text-[#B4B4B4] p-2 group-hover:bg-black group-hover:rounded-xl group-hover:text-white transition-all duration-700 '>
                            <GoArrowUpRight className=' group-hover:rotate-45 transition-all duration-700 ' />
                        </div>

                        <img src={assets.serviceimg1} alt="AI teamwork" className=' absolute top-1/2 right-[200px] -translate-y-1/2 h-52 w-[350px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-700 ' />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurExpertSection