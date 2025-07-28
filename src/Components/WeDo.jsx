import React from 'react'
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack'
import CardSwap, { Card } from './ui/CardSwap'
import { IoCodeSlash } from "react-icons/io5";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa";

const WeDo = () => {
    return (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <CardSwap
                cardDistance={100}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={true}
            >
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-t from-primay to-black flex items-center gap-2 p-2 rounded-lg '>
                            <IoCodeSlash />
                            <h3 className=' font-poppins uppercase font-semibold '>Development</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[80%] text-5xl text-start uppercase leading-16 gradient-text font-semibold '>We build custom AI solutions that solve your real problems.</h1>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-t from-primay to-black flex items-center gap-2 p-2 rounded-lg '>
                            <PiChalkboardTeacherFill />
                            <h3 className=' font-poppins uppercase font-semibold '>Consulting</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[80%] text-5xl text-start uppercase leading-16 gradient-text font-semibold '>We help you plan and use AI to grow your business smartly.</h1>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className=' w-full h-full overflow-hidden '>
                        <div className=' w-full h-[50px] mb-2 bg-gradient-to-t from-primay to-black flex items-center gap-2 p-2 rounded-lg '>
                            <FaBrain />
                            <h3 className=' font-poppins uppercase font-semibold '>Training</h3>
                        </div>
                        <div className=' w-full h-full rounded-lg '>
                            <h1 className=' w-[80%] text-5xl text-start uppercase leading-16 gradient-text font-semibold '>We teach your team how to use AI tools easily and effectively.</h1>
                        </div>
                    </div>
                </Card>
            </CardSwap>
            <div className=' absolute w-[50%] h-full top-1/2 -translate-y-1/2 flex flex-col justify-center items-center '>
                <h1 className=' text-4xl uppercase font-semibold text-center font-poppins gradient-text '>our 3-step AI Growth Path.</h1>
                <p className=' text-center mt-2.5 text-sm text-[#fff6] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore magni nihil nulla voluptatum deserunt natus debitis dolor placeat esse deleniti rerum, exercitationem consectetur, beatae tempore aperiam minus? Consectetur, labore ipsam.</p>
            </div>
        </div>
    )
}

export default WeDo