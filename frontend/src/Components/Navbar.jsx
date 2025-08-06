import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = ({ onContactClick }) => {
  return (
    <div className=' w-[90%] md:w-[85%] h-[70px] fixed left-1/2 -translate-x-1/2 flex justify-between items-center z-40 '>
      <img src='https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png' alt="Logo" className=' sm:w-36 w-28 ' />
        <button onClick={onContactClick} className=' flex items-center gap-2 px-4 py-2 text-sm sm:text-[16px] border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-500 cursor-pointer '>
          Get In Touch
          <MdOutlineArrowOutward />
        </button>
    </div>
  )
}
 
export default Navbar