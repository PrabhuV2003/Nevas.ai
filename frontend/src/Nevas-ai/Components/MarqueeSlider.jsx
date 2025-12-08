import React from 'react'
import logo1 from '../assets/MarqueeLogo/1.png'
import logo2 from '../assets/MarqueeLogo/2.png'
import logo3 from '../assets/MarqueeLogo/3.png'
import logo4 from '../assets/MarqueeLogo/4.png'
import logo5 from '../assets/MarqueeLogo/5.png'
import logo6 from '../assets/MarqueeLogo/6.png'
import logo7 from '../assets/MarqueeLogo/7.png'
import logo8 from '../assets/MarqueeLogo/8.png'
import logo9 from '../assets/MarqueeLogo/9.png'
import logo10 from '../assets/MarqueeLogo/10.png'
import logo11 from '../assets/MarqueeLogo/11.png'
import logo12 from '../assets/MarqueeLogo/12.png'
import logo13 from '../assets/MarqueeLogo/13.png'
import logo14 from '../assets/MarqueeLogo/14.png'
import logo15 from '../assets/MarqueeLogo/15.png'

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
];

const MarqueeSlider = () => {
  return (
    <div className=' overflow-hidden whitespace-nowrap w-full py-6 '>
        <div className=' flex animate-marquee gap-12 '>
            {logos.concat(logos).map((logo,index) => (
                <img key={index} src={logo} alt={logo} className=' h-28 w-28 object-contain ' />
            ))}
        </div>
    </div>
  )
}

export default MarqueeSlider