import React from 'react'

const Section1 = () => {
  return (
    <div className=' w-full vh-screen bg-black relative '>
      <img src="https://assets.codepen.io/16327/site-landscape-1.jpg" className=' object-cover w-full h-full bg-cover absolute top-0 left-0 ' alt="" />
      <div className=' w-full h-full absolute top-0 left-0 bg-black opacity-70 '></div>
        <h1 className=' font-DM-Mono-Italic absolute right-10 top-10 text-7xl  opacity-50 '>1</h1>
        <div className=' absolute top-1/2 left-1/2 -translate-1/2 text-center '>
            <p className='text-6xl lg:text-7xl  font-DM-Sans'>
                Consulting
            </p>
            <p className='text-base lg:text-lg mt-5 w-full text-[#A0A4A1] px-1 lg:px-2 font-DM-Sans '>We help you identify high-impact <span className=' gradient-text '>AI opportunities</span>  and build a step-by-step <span className=' gradient-text '>AI Transformation</span> strategy to bring them to life.</p>
        </div>
    </div>
  )
}

export default Section1