import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { assets } from '../assets/assest';

const ContactSection = () => {
    return (
        <div className=' w-full min-h-screen bg-[#F2F2F2] relative py-24 px-14 '>
            
            {/* BG Multi Colors */}
            <div className=' absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 '></div>
            <div className=' absolute left-1/2 -translate-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 '></div>
            <div className=' absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30  '></div>

            <div className=' w-full h-full relative z-50 '>
                <div className=' w-full h-[600px] flex justify-center items-center gap-5 overflow-y-hidden '>
                    <div className=' w-full h-full bg-[#222222] rounded-2xl relative p-10 '>
                        <div className=' w-[200px] h-[200px] bg-white/15 rounded-full absolute -bottom-7 -right-7 '></div>
                        <div className=' w-[100px] h-[100px] bg-[#FFF9F9]/15 rounded-full absolute bottom-24 right-20 '></div>
                        <img src={assets.john_c} alt="" className=' absolute bottom-0 -right-10 w-[300px] z-0 ' />

                        <div className=' w-full h-full flex flex-col justify-between items-center gap-1.5 relative z-10 '>
                            <div className=' w-full h-[20%]  '>
                                <h2 className=' font-cervino text-3xl text-white font-semibold leading-8 '>Contact Information </h2>
                                <p className=' font-cervino  text-lg leading-5 text-[#666666] mt-2.5 '>Say something to start a live chat!</p>
                            </div>
                            <div className=' font-cervino w-full h-[60%] flex flex-col justify-between '>
                                <div className=' w-full h-full flex items-center gap-10 '>
                                    <PiPhoneCallFill className=' text-2xl text-white ' />
                                    <a href="#" className=' text-xl text-white '>+1012 3456 789</a>
                                </div>
                                <div className=' w-full h-full flex items-center gap-10 '>
                                    <IoMdMail className=' text-2xl text-white ' />
                                    <a href="#" className=' text-xl text-white '>demo@gmail.com</a>
                                </div>
                                <div className=' w-full h-full flex items-center gap-10 '>
                                    <FaLocationDot className=' text-2xl text-white ' />
                                    <a href="#" className=' text-xl text-white w-[70%] '>132 Dartmouth Street Boston, Massachusetts 02156 United States</a>
                                </div>
                            </div>
                            <div className=' w-full h-[20%] flex items-center gap-5 '>
                                <a href='#' className=' w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-lg hover:bg-white hover:text-[#222222] transition-all duration-700 '>
                                    <FaFacebookF />
                                </a>
                                <a href='#' className=' w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-lg hover:bg-white hover:text-[#222222] transition-all duration-700 '>
                                    <SiInstagram />
                                </a>
                                <a href='#' className=' w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-lg hover:bg-white hover:text-[#222222] transition-all duration-700 '>
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className=' w-full h-full flex flex-col justify-center gap-10 '>
                        <div className=' w-full h-20 flex items-center justify-center gap-3 '>
                            <div className=' w-full h-full flex flex-col '>
                                <label htmlFor="Fname" className=' font-cervino text-base text-[#8D8D8D] '>First Name</label>
                                <input type="text" name='Fname' id='Fname' className=' w-full h-full border-b-2 border-[#8D8D8D] outline-none text-[#222222] font-cervino text-xl ' />
                            </div>
                            <div className=' w-full h-full flex flex-col '>
                                <label htmlFor="Lname" className=' font-cervino text-base text-[#8D8D8D] '>Last Name</label>
                                <input type="text" name='Lname' id='Lname' className=' w-full h-full border-b-2 border-[#8D8D8D] outline-none text-[#222222] font-cervino text-xl ' />
                            </div>
                        </div>
                        <div className=' w-full h-20 flex items-center justify-center gap-3 '>
                            <div className=' w-full h-full flex flex-col '>
                                <label htmlFor="Email" className=' font-cervino text-base text-[#8D8D8D] '>Email</label>
                                <input type="email" name='Email' id='Email' className=' w-full h-full border-b-2 border-[#8D8D8D] outline-none text-[#222222] font-cervino text-xl ' />
                            </div>
                            <div className=' w-full h-full flex flex-col '>
                                <label htmlFor="Phone" className=' font-cervino text-base text-[#8D8D8D] '>Phone</label>
                                <input type="tel" name='Phone' id='Phone' className=' w-full h-full border-b-2 border-[#8D8D8D] outline-none text-[#222222] font-cervino text-xl ' />
                            </div>
                        </div>
                        <div className=' w-full h-[150px] flex items-center justify-center gap-3 '>
                            <div className=' w-full h-full flex flex-col '>
                                <label htmlFor="Message" className=' font-cervino text-base text-[#8D8D8D] '>Message</label>
                                <textarea name="Message" id="Message" className=' w-full h-full border-b-2 border-[#8D8D8D] outline-none text-[#222222] font-cervino text-xl '></textarea>
                            </div>
                        </div>
                        <div className=' w-full h-[60px] text-end '>
                            <button className=' font-cervino w-[200px] h-full bg-[#222222] rounded-sm text-xl text-white uppercase cursor-pointer hover:bg-[#222222ba] transition-all duration-700 '>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection