import React from 'react'
import { motion } from 'framer-motion'

const Orb = () => {
  return (
    <motion.div
    style={{ height: "calc(var(--vh) * 100)" }}
      className='w-full relative bg-black flex flex-col justify-center items-center '
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      <motion.p
        className=' font-DM-Sans text-2xl md:text-5xl w-full text-center leading-tight whitespace-pre-wrap'
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className='white-silver-animated-text'>We </span>
        <span className='white-silver-animated-text1'>spend </span>
        <span className='white-silver-animated-text2'>our </span>
        <span className='white-silver-animated-text2'>days </span>
        <span className='white-silver-animated-text1'>guiding </span>
        <span className='white-silver-animated-text1'>companies </span>
        <br className='hidden lg:block' />
        <span className='white-silver-animated-text1'>through </span>
        <span className='white-silver-animated-text2'>our </span>
        <span className='white-silver-animated-text'>3-step </span>
        <span className='gradient-text'>AI </span>
        <span className='gradient-text'>Transformation </span>
        <span className='white-silver-animated-text'>Journey.</span>
      </motion.p>

      {/* <motion.img
        className='w-[600px] h-[600px] absolute -bottom-[350px] left-1/2 -translate-x-1/2'
        src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png"
        alt=""
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 }
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      /> */}
    </motion.div>
  )
}

export default Orb
