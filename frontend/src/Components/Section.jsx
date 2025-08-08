import React from 'react'

const Section = ({image, point, name, normalText1, normalText2, normalText3, gradientText1, gradientText2}) => {
  return (
    <div className=' w-full bg-black relative ' style={{ height: "calc(var(--vh) * 100)" }}>
      <img src={image} className=' object-cover w-full h-full bg-cover absolute top-0 left-0 ' alt="" />
      <div className=' w-full h-full absolute top-0 left-0 bg-black opacity-70 '></div>
        <h1 className=' font-DM-Mono-Italic absolute right-10 top-10 text-7xl  opacity-50 '>{point}</h1>
        <div className=' absolute top-1/2 left-1/2 -translate-1/2 text-center '>
            <p className='text-6xl lg:text-7xl font-DM-Sans'>
                {name}
            </p>
            <p className='text-base lg:text-lg mt-5 w-full text-[#cdd3ce] px-1 lg:px-2 font-DM-Sans '>{normalText1}<span className=' gradient-text '>{gradientText1}</span> {normalText2}<span className=' gradient-text '>{gradientText2}</span>{normalText3}</p>
        </div>
    </div>
  )
}

export default Section