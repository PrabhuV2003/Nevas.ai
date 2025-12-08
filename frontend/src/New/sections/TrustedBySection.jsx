import React from 'react'
import { assets } from '../assets/assest'

const brands = [
  assets.C1,
  assets.C2,
  assets.C3,
  assets.C4,
  assets.C5,
  assets.C6,
]

const TrustedBySection = () => {
  return (
    <div className=' relative z-50 flex flex-col justify-center items-center w-full h-[250px] bg-white overflow-hidden shadow-2sm '>
      <h2 className=' font-cervino font-semibold text-3xl text-center uppercase text-[#222222] '>Trusted by Businesses That Refuse to Stay</h2>
      <p className=' font-cervino text-base leading-7 text-center text-[#666666] '>Organizations across sectors rely on our AI-driven automations to boost productivity, reduce costs, and accelerate digital transformation.</p>
      <div className=' relative w-full overflow-hidden mt-10 '>
        <div className="w-[150px] h-full absolute left-0 bg-gradient-to-r from-white to-transparent pointer-events-none z-50 "></div>
        <div className="w-[150px] h-full absolute right-0 bg-gradient-to-r from-transparent to-white pointer-events-none z-50 "></div>
        <div className=' flex animate-marquee whitespace-nowrap '>
          {brands.map((logo, i) => (
            <img key={i} src={logo} alt="brand logo" className=' mx-12 h-6 opacity-70 hover:opacity-100 transition ' />
          ))}
          {brands.map((logo, i) => (
            <img key={`dup-${i}`} src={logo} alt="brand logo" className=' mx-12 h-6 opacity-70 hover:opacity-100 transition ' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection