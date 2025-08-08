import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from '../assets/nevas-ai.png'

const Navbar = ({ onContactClick }) => {
  return (
    <div className=' w-[90%] md:w-[85%] h-[70px] absolute left-1/2 top-[50px] md:top-0 -translate-x-1/2 flex justify-between items-center z-40 '>
      <img src={logo} alt="Logo" className=' sm:w-36 w-28 ' />
        <button onClick={onContactClick} className=' flex items-center gap-2 px-4 py-2 text-sm sm:text-[16px] border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer '>
          Get In Touch
          <MdOutlineArrowOutward />
        </button>
    </div>
  )
}
 
export default Navbar