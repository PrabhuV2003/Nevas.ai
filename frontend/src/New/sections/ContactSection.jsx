import React, { useEffect, useRef, useState } from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { assets } from '../assets/assest';

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const ContactSection = () => {
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  return (
    <section className="relative w-full overflow-hidden
      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-14">

      {/* BG Blobs */}
      <div className="absolute left-0 top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-30" />
      <div className="absolute left-1/2 -translate-x-1/2 top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-30" />
      <div className="absolute right-0 top-32 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CARD */}
          <div
            ref={leftRef}
            className={`
              w-full lg:w-1/2 bg-[#222222] rounded-2xl p-8 sm:p-10 relative
              transition-all duration-700
              ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
          >
            <img
              src={assets.john_c}
              alt=""
              className="hidden sm:block absolute bottom-0 -right-10 w-[260px]"
            />

            <div className="relative z-10 space-y-10 text-white">

              <div>
                <h2 className="font-cervino text-2xl sm:text-3xl">
                  Contact Information
                </h2>
                <p className="font-cervino text-sm sm:text-base text-[#aaaaaa] mt-2">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="space-y-6 font-cervino">
                <div className="flex gap-6 items-center">
                  <PiPhoneCallFill className="text-xl" />
                  <span className="text-lg">+1012 3456 789</span>
                </div>

                <div className="flex gap-6 items-center">
                  <IoMdMail className="text-xl" />
                  <span className="text-lg">demo@gmail.com</span>
                </div>

                <div className="flex gap-6 items-start">
                  <FaLocationDot className="text-xl mt-1" />
                  <span className="text-lg">
                    132 Dartmouth Street Boston, Massachusetts
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                {[FaFacebookF, SiInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center
                    hover:bg-white hover:text-black transition"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={rightRef}
            className={`
              w-full lg:w-1/2 space-y-8
              transition-all duration-700
              ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["First Name", "Last Name", "Email", "Phone"].map((label, i) => (
                <div key={i} className="flex flex-col">
                  <label className="font-cervino text-sm text-[#8D8D8D]">
                    {label}
                  </label>
                  <input
                    className="border-b-2 border-[#8D8D8D] py-2 text-lg outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <label className="font-cervino text-sm text-[#8D8D8D]">
                Message
              </label>
              <textarea
                rows={4}
                className="border-b-2 border-[#8D8D8D] text-lg outline-none"
              />
            </div>

            <div className="text-right">
              <button className="w-full sm:w-[200px] h-[50px]
                bg-[#222222] text-white font-cervino uppercase
                hover:bg-[#222222cc] transition">
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection;
