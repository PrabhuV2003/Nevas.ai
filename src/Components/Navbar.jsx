import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=' w-[85%] h-[70px] absolute left-1/2 -translate-x-1/2 flex justify-between items-center z-30 '>
      <img src='https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png' alt="Logo" className=' w-36 ' />
        <button className=' flex items-center gap-2 px-4 py-2 border border-primay rounded-full text-white bg-transparent hover:bg-gradient-to-r hover:from-primay hover:to-secoundary transition-all duration-[10s] cursor-pointer '>
          Get In Touch
          <MdOutlineArrowOutward />
        </button>
    </div>
  )
}

export default Navbar