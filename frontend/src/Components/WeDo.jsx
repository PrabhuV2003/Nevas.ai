import React from 'react'
import CardSwap, { Card } from './ui/CardSwap'
import { IoCodeSlash } from "react-icons/io5";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa";
import { motion } from 'framer-motion'

const WeDo = () => {
    return (
        <>
        {/* <div className="relative w-full h-screen hidden md:block ">
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
            <div className=' absolute w-full lg:w-[50%] h-full lg:top-1/2 top-[50px] lg:-translate-y-1/2 lg:flex flex-col justify-center items-center '>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }} // <- every time it hits 50% visible
                    className=' text-2xl md:text-4xl w-full text-center leading-tight whitespace-pre-wrap font-DM-Sans white-silver-animated-text '
                >
                    We spend our days guiding companies through our 3-step
                    <span className=' gradient-text '> AI Transformation</span> Journey.
                </motion.h1>
            </div>
        </div> */}

    <motion.div
      className='w-full h-fit block md:hidden py-10 '
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className='text-2xl my-10 md:text-4xl w-full text-center leading-tight whitespace-pre-wrap font-DM-Sans white-silver-animated-text'>
        our 3-step
        <span className='gradient-text'> AI Transformation</span> Journey.
      </h1>
      <div className='w-full h-[500px] relative'>
        <p className='white-silver-animated-text font-DM-Sans text-xl md:text-7xl lg:text-8xl text-center w-full absolute left-0 top-0'>
          • Development • Consulting • Training
        </p>
        <img
          className='absolute bottom-0 -right-[150px]'
          src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-bfc4-61f4-a6e0-1ca28662f135/raw?se=2025-07-30T13%3A34%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=94a96287-f5a6-5d7e-9890-513e544bc7ea&skoid=61180a4f-34a9-42b7-b76d-9ca47d89946d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-29T18%3A54%3A49Z&ske=2025-07-30T18%3A54%3A49Z&sks=b&skv=2024-08-04&sig=7melt%2BcE8ucQ%2BnV8sO3L8FZg5uTkhde8QXYC8JmwrSY%3D"
          alt=""
        />
      </div>
    </motion.div>

        </>
    )
}

export default WeDo