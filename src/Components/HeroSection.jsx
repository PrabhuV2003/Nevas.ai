import React from 'react'
import SplitText from '../Components/SplitText'
import RotatingText from '../ReactBits/RotatingText'
import { CiSaveDown1 } from "react-icons/ci";
import LightRays from '../ReactBits/LightRays';
import TypedText from './ui/TypedText';

const HeroSection = () => {
    return (
        <div className=' w-full h-screen relative '>
            <div style={{ width: '100%', height: '100vh', position: 'relative', zIndex: '0' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#4080F5"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <div className=' w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center z-10 '>
                <p className=' white-silver-animated-text font-DM-Sans  text-5xl md:text-7xl lg:text-8xl text-center '>We are not an AI</p>
                {/* <RotatingText
                        texts={['ERP', 'Development', 'Consulting', 'Cool!']}
                        mainClassName="font-DM-Mono-Italic text-5xl md:text-7xl lg:text-8xl text-center text-primay"
                        staggerFrom={"last"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    /> */}
                <TypedText
                    words={['ERP', 'Development', 'Consulting', 'Cool!']}
                />
                <p className=' white-silver-animated-text font-DM-Sans  text-5xl md:text-7xl lg:text-8xl text-center '>Company</p>
                <p className=' text-2xl tracking-normal white-silver-animated-text2 mt-7 '>We are all of the above</p>
            </div>

            <div className=' absolute bottom-5 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-10 cursor-pointer '><CiSaveDown1 /></div>
        </div>
    )
}

export default HeroSection