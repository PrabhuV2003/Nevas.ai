import React from 'react'

const OurMission = () => {
    return (
        <div className=' w-full min-h-screen bg-[#F2F2F2] relative py-24 px-14 '>

            {/* BG Multi Colors */}
            <div className=' absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[250px] z-10 opacity-30 '></div>

            <div className=' w-full h-full relative z-50 '>
                <h2 className=' font-cervino text-[55px] leading-[75px] uppercase '>Empowering Businesses Through
                    <br /> Innovation
                </h2>
                <div className=' absolute w-[40%] h-[1px] bg-[#666666] right-0 top-[120px] '></div>
                <div className=' w-full h-[400px] mt-7 flex justify-center items-center gap-5 '>
                    <div className=' w-full h-full '>
                        <img src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_1280.png" alt="" className=' w-full h-full object-cover rounded-3xl ' />
                    </div>
                    <div className=' w-full h-full '>
                        <h2 className=' font-cervino text-5xl leading-16 text-[#222222] font-semibold uppercase '>At algoso, we're on a mission to drive business growth through</h2>
                        <p className=' font-cervino text-xl leading-8 capitalize mt-5  text-[#666666] '>cutting-edge AI automation solutions. With a team of AI experts and a proven track record, we're here to transform the way you operate. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission