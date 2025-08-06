import React from 'react'

const Section1 = () => {
  return (
    <div className=' w-full h-screen bg-black relative '>
        <h1 className=' font-DM-Mono-Italic absolute right-10 top-10 text-7xl white-silver-animated-text opacity-50 '>1</h1>
        <div className=' absolute top-1/2 left-1/2 -translate-1/2 text-center '>
            <p className='text-6xl lg:text-7xl white-silver-animated-text font-DM-Sans'>
                Consulting
            </p>
            <p className='text-base lg:text-lg mt-5 w-full text-[#A0A4A1] px-1 lg:px-2 font-DM-Sans white-silver-animated-text2'>We help you identify high-impact <span className=' gradient-text '>AI opportunities</span>  and build a step-by-step <span className=' gradient-text '>AI Transformation</span> strategy to bring them to life.</p>
        </div>
    </div>
  )
}

export default Section1