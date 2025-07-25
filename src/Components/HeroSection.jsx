import React from 'react'
import SplitText from '../Components/SplitText'
import RotatingText from '../ReactBits/RotatingText'
import { CiSaveDown1 } from "react-icons/ci";
import LightRays from '../ReactBits/LightRays';

const HeroSection = () => {
    return (
        <div className=' w-full h-screen relative '>
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
            <div className=' w-[70%] h-[70%]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center z-50 '>
                <h1 className=' text-5xl uppercase font-semibold text-balance text-center font-poppins gradient-text '>Supercharge Your Business with</h1>
                <div className=' flex justify-center items-center gap-2 '>
                    <h1 className=' text-5xl uppercase font-semibold text-balance text-center font-poppins gradient-text transition-all duration-1000 '>AI-Driven</h1>
                    <RotatingText
                        texts={['EPR', 'Development', 'Consulting', 'Cool!']}
                        mainClassName="text-5xl uppercase font-semibold text-balance text-center font-poppins text-primay "
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>

                <p className=' mt-5 text-center text-gray-600 text-sm '>Automate operations, gain real-time insights, and stay ahead of the competition — all with our next-generation AI ERP platform.</p>
            </div>
            <div className=' absolute bottom-5 left-1/2 -translate-x-1/2 text-3xl animate-bounce z-50 '><CiSaveDown1 /></div>
        </div>
    )
}

export default HeroSection