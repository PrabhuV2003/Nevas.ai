import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
    return (
        <div className=' w-full h-screen bg-white bg-gradient-to-r from-[#EFF6FF] via-[#FAF5FF] to-[#E0E7FF] relative '>

            {/* Circle Blur1 */}
            <div className=' absolute -left-2.5 -top-2.5 w-32 h-32 bg-primay rounded-full opacity-20 blur-[32px] -z-0 '></div>
            
            {/* Circle Blur2 */}
            <div className=' absolute right-10 bottom-0 w-40 h-40 bg-secoundary rounded-full opacity-20 blur-[32px] '></div>

            {/* HeroSection Content */}
            <div className=' flex justify-center items-center w-full h-full gap-5 p-10 '>
                <div className=' w-full h-full font-outfit '>

                    <h1 className=' text-6xl text-[#374151] leading-[76px] '>The Future of <span className=' gradient-text '> AI </span>  <br /> <span className=' gradient-text '>Conversation </span> is Here</h1>

                    <p className=' text-xl leading-7 font-[400] text-[#666666] mt-5 mb-10 '>Experience next-generation AI chatbot technology with voice interaction, avatar assistance, and intelligent knowledge-based responses.</p>

                    <div className=' w-9/12 flex items-center gap-4 '>
                        <button className=' w-full h-14 bg-gradient-to-r from-primay to-secoundary rounded-full [box-shadow:0px_0px_16px_rgba(64,128,245,0.36)] font-[400] text-base leading-6 text-center cursor-pointer '>Start Free Trail</button>

                        <div className=' w-full h-14 bg-gradient-to-r from-primay to-secoundary rounded-full p-0.5 font-[400] text-base leading-6 text-center cursor-pointer '>
                            <button className=' w-full h-full [background:linear-gradient(90deg,#E6ECFE_0%,#EAE5FA_100%)] rounded-full cursor-pointer '>
                                <p className=' gradient-text '>Book An Demo</p>
                            </button>
                        </div>
                        
                    </div>  

                </div>
                <div className=' w-full h-full '></div>
            </div>

            {/* Dot Vector */}
            <img src={assets.HeroDotVector} alt="Dot Vector" className=' absolute right-0 top-10 w-[700px] ' />

            {/* Bottom Border Line */}
            <div className=' absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-primay to-secoundary '></div>

            {/* Bottom Pill Section */}
            <div className=' absolute top-11/12 left-1/2 -translate-x-1/2 w-10/12 h-24 bg-conic-270 from-[#4080F5] to-[#572AC2] p-[3px] rounded-2xl '>
                <div className=' w-full h-full bg-[#F4F7FF] rounded-[14px] font-outfit flex items-center justify-between px-6 py-4 '>

                    <div className=' flex items-center gap-3 '>
                        <div className=' w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primay to-secoundary text-white text-sm '>✔</div>
                        <p className=' font-semibold text-sm text-[#2B2B2B] '>
                            Answers Product <br />
                            questions
                        </p>
                    </div>

                    <div className=' h-8 w-0.5 bg-gradient-to-b from-primay to-secoundary '></div>

                    <div className=' flex items-center gap-3 '>
                        <div className=' w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primay to-secoundary text-white text-sm '>✔</div>
                        <p className=' font-semibold text-sm text-[#2B2B2B] '>
                            Personalized brand <br />
                            tone & knowledge
                        </p>
                    </div>

                    <div className=' h-8 w-0.5 bg-gradient-to-b from-primay to-secoundary '></div>

                    <div className=' flex items-center gap-3 '>
                        <div className=' w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primay to-secoundary text-white text-sm '>✔</div>
                        <p className=' font-semibold text-sm text-[#2B2B2B] '>
                            Goes live <br />
                            within minutes
                        </p>
                    </div>

                    <div className=' h-8 w-0.5 bg-gradient-to-b from-primay to-secoundary '></div>

                    <div className=' flex items-center gap-3 '>
                        <div className=' w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-r from-primay to-secoundary text-white text-sm '>✔</div>
                        <p className=' font-semibold text-sm text-[#2B2B2B] '>
                            Responds instantly <br />
                            & Naturally
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection