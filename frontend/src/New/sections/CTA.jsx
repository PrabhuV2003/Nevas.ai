import React from 'react'

const CTA = () => {
  return (
    <div className=' w-full h-[500px] py-24 px-14 flex justify-center items-center shadow-lg/5 relative z-50 bg-white '>
      <div className=' w-full h-full flex flex-col justify-center '>
        <h2 className=' font-cervino text-5xl leading-16 text-[#222222] uppercase '>Supercharge Your Business with AI Automation!</h2>
        <p className=' font-cervino text-xl leading-7 text-[#666666] uppercase my-7 '>Unlock Efficiency, Insights, and Growth Today.</p>
        <button className=' font-cervino w-[250px] h-[60px] bg-[#D9D9D9] rounded-sm text-xl text-[#222222] uppercase cursor-pointer hover:bg-[#d9d9d9b0] transition-all duration-700 '>Get Started</button>
      </div>
      <div className=' w-full h-[600px] flex justify-center items-center relative '>
        <div className=' w-full h-full flex justify-center items-center cta-inverted-radius '>
          <img src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_1280.png" alt="" className=' absolute w-full rounded-3xl object-cover ' />
        </div>
        <div className=' absolute bottom-0 left-0 w-[190px] h-[240px] rounded-3xl overflow-hidden '>
          <img src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_1280.png" alt="" className=' w-full h-full scale-250 object-cover object-bottom-left absolute -top-44 left-34 ' />
        </div>
      </div>
    </div>
  )
}

export default CTA