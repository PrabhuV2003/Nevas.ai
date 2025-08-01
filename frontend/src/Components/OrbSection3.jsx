import React from 'react'
import { motion } from 'framer-motion'

const OrbSection3 = () => {

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const orbVariants = {
        initial: {
            top: -500,
            x: 0,
            scale: 0.2,
        },
        animate: (custom) => ({
            top: custom.top,
            x: custom.x,
            scale: 0.2,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        }),
    }

    return (
        <div className='w-full h-screen relative overflow-hidden '>

            <motion.div
                className='w-[80%] absolute top-[50px] left-1/2 -translate-x-1/2'
                variants={containerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.5 }}
            >
                {/* Center Orb */}
                <motion.img
                    className='w-[600px] h-[600px] absolute left-1/2 -translate-x-1/2 z-50'
                    src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
                    alt=""
                    custom={{ x: 0, top: -100 }}
                    variants={orbVariants}
                />

                {/* Right Orb +100 */}
                <motion.img
                    className='w-[600px] h-[600px] absolute left-1/2 -translate-x-1/2 z-40'
                    src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
                    alt=""
                    custom={{ x: 100, top: -200 }}
                    variants={orbVariants}
                />

                {/* Left Orb -100 */}
                <motion.img
                    className='w-[600px] h-[600px] absolute left-1/2 -translate-x-1/2 z-30'
                    src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
                    alt=""
                    custom={{ x: -100, top: -200 }}
                    variants={orbVariants}
                />

                {/* Far Right Orb +200 */}
                <motion.img
                    className='w-[600px] h-[600px] absolute left-1/2 -translate-x-1/2 z-20'
                    src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
                    alt=""
                    custom={{ x: 200, top: -100 }}
                    variants={orbVariants}
                />

                {/* Far Left Orb -200 */}
                <motion.img
                    className='w-[600px] h-[600px] absolute left-1/2 -translate-x-1/2 z-10'
                    src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
                    alt=""
                    custom={{ x: -200, top: -100 }}
                    variants={orbVariants}
                />
            </motion.div>

            <div className='absolute w-11/12 lg:w-full bottom-5 md:bottom-10 lg:bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-center pointer-events-none z-50'>
                <motion.p
                    className='font-DM-Sans text-6xl lg:text-7xl font-light'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Training
                </motion.p>
                <motion.p
                    className='text-base lg:text-lg lg:w-6/12 text-[#A0A4A1] px-1 lg:px-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    We train and support your team with the right tools and know-how to embed AI across your entire organization.
                </motion.p>
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 left-[30px] flex flex-col gap-3'>
                <motion.p
                    className='font-DM-Mono-Light uppercase opacity-100'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Development
                </motion.p>
                <motion.p
                    className='font-DM-Mono-Light uppercase opacity-50'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Consulting
                </motion.p>
                <motion.p
                    className='font-DM-Mono-Light uppercase opacity-50'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    Training
                </motion.p>
            </div>
        </div>
    )
}

export default OrbSection3
