import React from 'react'
import ExtendingSlider from '../compoenents/ExtendingSlider'

const YtVideos = () => {
  return (
    <div className=' w-full min-h-screen bg-[#F2F2F2] relative py-24 px-14 '>

      {/* BG Multi Colors */}
      <div className=' absolute left-0 top-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 '></div>
      <div className=' absolute left-1/2 -translate-x-1/2 top-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 '></div>
      <div className=' absolute right-0 top-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[250px] opacity-30 '></div>
      <div className=' absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] z-10 opacity-30 '></div>

      <div className=' w-full h-full relative z-50 '>
        <h2 className=' font-cervino text-[55px] leading-[75px] uppercase '>There are so many digital
          <br />
          marketing agencies out
        </h2>
        <p className=' font-cervino text-sm leading-7 text-[#666666] '>So, we bet you’re wondering…</p>
        <div className=' w-full h-full mt-7 '>
          <ExtendingSlider />
        </div>
      </div>
    </div>
  )
}

export default YtVideos