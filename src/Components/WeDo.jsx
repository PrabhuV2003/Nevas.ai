import React from 'react'
import CardSwap, { Card } from './ui/CardSwap'
import { IoCodeSlash } from "react-icons/io5";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa";

const WeDo = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <CardSwap
                cardDistance={100}
                verticalDistance={70}
                delay={5000}
            >
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-r from-primay to-secoundary flex items-center gap-2 p-2 rounded-lg '>
                            <IoCodeSlash />
                            <h3 className=' font-DM-Mono-Italic font-semibold '>Development</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[90%] text-3xl text-start leading-10 gradient-text font-DM-Mono-Light '>We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.</h1>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-r from-primay to-secoundary flex items-center gap-2 p-2 rounded-lg '>
                            <PiChalkboardTeacherFill />
                            <h3 className=' font-DM-Mono-Italic font-semibold '>Consulting</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[90%] text-3xl text-start leading-10 gradient-text font-DM-Mono-Light '>We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.</h1>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-r from-primay to-secoundary flex items-center gap-2 p-2 rounded-lg '>
                            <FaBrain />
                            <h3 className=' font-DM-Mono-Italic font-semibold '>Training</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[90%] text-3xl text-start leading-10 gradient-text font-DM-Mono-Light '>We train and support your team with the right tools and know-how to embed AI across your entire organization.</h1>
                        </div>
                    </div>
                </Card>
            </CardSwap>
            <div className=' absolute w-full lg:w-[50%] h-full lg:top-1/2 top-6 lg:-translate-y-1/2 lg:flex flex-col justify-center items-center '>
                <h1 className=' text-2xl md:text-4xl w-full text-center leading-tight whitespace-pre-wrap font-DM-Sans white-silver-animated-text '>We spend our days guiding companies through our 3-step <span className=' gradient-text '>AI Transformation</span> Journey.</h1>
            </div>
        </div>
    )
}

export default WeDo