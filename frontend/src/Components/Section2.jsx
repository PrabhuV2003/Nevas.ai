import React from 'react'

const Section2 = () => {
  return (
    <div className=' w-full vh-screen bg-black relative '>
      <img src=".\src\assets\face-recognition-ar-hologram-screen-smart-technology.jpg" className=' object-cover w-full h-full bg-cover absolute top-0 left-0 ' alt="" />
      <div className=' w-full h-full absolute top-0 left-0 bg-black opacity-70 '></div>
        <h1 className=' font-DM-Mono-Italic absolute right-10 top-10 text-7xl white-silver-animated-text opacity-50 '>2</h1>
        <div className=' absolute top-1/2 left-1/2 -translate-1/2 text-center '>
            <p className='text-6xl lg:text-7xl white-silver-animated-text font-DM-Sans'>
                Development
            </p>
            <p className='text-base lg:text-lg mt-5 text-[#A0A4A1] px-1 lg:px-2 font-DM-Sans white-silver-animated-text2'>We leverage our extensive experience and network to develop <span className=' gradient-text '>custom AI systems</span> that are proven to move the needle inside your business.</p>
        </div>
    </div>
  )
}

export default Section2