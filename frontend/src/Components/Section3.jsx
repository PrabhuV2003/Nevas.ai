import React from 'react'

const Section3 = () => {
  return (
    <div className=' w-full h-screen bg-black relative '>
      <img src="https://assets.codepen.io/16327/site-landscape-5.jpeg" className=' w-full h-full bg-cover absolute top-0 left-0 ' alt="" />
        <h1 className=' font-DM-Mono-Italic absolute right-10 top-10 text-7xl white-silver-animated-text opacity-50 '>3</h1>
        <div className=' absolute top-1/2 left-1/2 -translate-1/2 text-center '>
            <p className='text-6xl lg:text-7xl white-silver-animated-text font-DM-Sans'>
                Training
            </p>
            <p className='text-base lg:text-lg mt-5 w-full text-[#A0A4A1] px-1 lg:px-2 font-DM-Sans white-silver-animated-text2'>We train and support your team with the right tools and know-how to embed <span className=' gradient-text '>AI across your entire organization.</span> </p>
        </div>
    </div>
  )
}

export default Section3