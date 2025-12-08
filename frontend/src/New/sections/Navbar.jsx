import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assest'
import { IoIosArrowForward } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>

      <nav className={` font-cervino w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between  gap-20 z-[999] transition-all duration-500 ${isScroll ? ' bg-white/50 backdrop-blur-lg shadow-sm justify-between ' : ' justify-center '} `}>

        <a href="#top" className=' flex justify-center items-center '>
          <img src={assets.logo} className=' w-28 cursor-pointer ' />
        </a>

        <ul className={` hidden w-fit md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500 ${isScroll ? '' : ' bg-white/50 shadow-sm '} `}>
          <li><a href="#top">Home</a></li>
          <li><a href="#top">About Us</a></li>
          <li><a href="#top">Services</a></li>
          <li><a href="#top">Contact Us</a></li>
        </ul>

        <div className=' flex justify-center items-center gap-4 '>

          <a href="#contact" className=' hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full '>Contact <IoIosArrowForward className=' w-3 ' /></a>

          <button className=' block md:hidden ml-3 '>
            <RiMenu3Line />
          </button>

        </div>

      </nav>
    </>
  )
}

export default Navbar