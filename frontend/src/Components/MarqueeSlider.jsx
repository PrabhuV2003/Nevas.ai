import React from 'react'

const logos = [
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
    'https://res.cloudinary.com/ddvsj2zxd/image/upload/f_auto/v1753435753/logo_womtni.png',
];

const MarqueeSlider = () => {
  return (
    <div className=' overflow-hidden whitespace-nowrap w-full py-6 '>
        <div className=' flex animate-marquee gap-12 '>
            {logos.concat(logos).map((logo,index) => (
                <img key={index} src={logo} alt={logo} className=' h-20 w-20 object-contain ' />
            ))}
        </div>
    </div>
  )
}

export default MarqueeSlider