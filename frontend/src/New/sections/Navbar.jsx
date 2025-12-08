// src/components/Navbar.jsx
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { assets } from "../assets/assest";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between py-4">
        {/* LEFT: LOGO + MENU */}
        <div className="flex gap-12">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img src={assets.logo} alt="nevas.ai logo" className=" w-[160px] " />
          </div>

          <div className=" mt-5 ">
            <nav>
              <ul className="flex gap-10 text-[14px] font-cervino font-semibold ">
                <li className="cursor-pointer hover:opacity-70 uppercase">HOME</li>
                <li className="cursor-pointer hover:opacity-70 uppercase">ABOUT US</li>
                <li className="cursor-pointer hover:opacity-70 uppercase">Contact Us</li>
              </ul>
            </nav>
            <div className="mt-3 h-px w-full bg-[#d2d2d2]" />
          </div>

        </div>

        {/* RIGHT: CTA + ICONS */}
        <div className="flex items-center gap-4">
          {/* BOOK A MEETING */}
          <button className="text-[14px] font-cervino cursor-pointer font-semibold tracking-[0.25em] uppercase border-b border-black pb-0.5 hover:opacity-75">
            BOOK A MEETING
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
