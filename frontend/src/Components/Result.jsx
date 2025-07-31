import React, { useRef, useState, useEffect } from 'react'
import { TextHoverEffect } from './ui/text-hover-effect'
import { motion } from 'framer-motion'

const Result = () => {
  const Result = [
    {
      id: 1,
      count: 17,
      countType: 'M+',
      desc: 'Professionals upskilled in AI via our platforms',
      link: 'Watch our content here'
    },
    {
      id: 2,
      count: 435,
      countType: '+',
      desc: 'AI Opportunities identified for businesses',
      link: ''
    },
    {
      id: 3,
      count: 55,
      countType: '+',
      desc: 'Bespoke AI solutions developed',
      link: ''
    },
  ]

  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <TextHoverEffect text="nevas.ai" />
      <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center px-10'>
        
        {/* Heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='font-DM-Sans text-4xl md:text-5xl whitespace-pre-wrap lg:mr-1 white-silver-animated-text'
        >
          We don't sell AI. We sell Results.
        </motion.h1>

        <div className='flex w-full flex-col lg:flex-row justify-start items-start mx-auto gap-4 mt-5'>
          {Result.map((result) => (
            <CountUpCard key={result.id} result={result} />
          ))}
        </div>

      </div>
    </div>
  )
}

const CountUpCard = ({ result }) => {
  const ref = useRef()
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(result.count)
        } else {
          setCount(0)
          clearInterval(counterRef.current)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      clearInterval(counterRef.current)
    }
  }, [result.count])

  const animateCount = (target) => {
    let start = 0
    const duration = 2000
    const stepTime = 20
    const totalSteps = duration / stepTime
    const increment = target / totalSteps

    clearInterval(counterRef.current)

    counterRef.current = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(counterRef.current)
      }
      setCount(Math.ceil(start))
    }, stepTime)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className='flex flex-col w-full lg:w-1/3 md:mb-0 mb-0 gap-1 lg:gap-4'
    >
      <p className='lg:text-8xl md:text-7xl text-6xl tracking-widest'>
        <span>{count}</span>{result.countType}
      </p>
      <div className='w-full h-0.5 bg-gradient-to-r from-primay to-secoundary md:my-4 my-0'></div>
      <p className='text-lg text-white font-DM-Sans'>{result.desc}</p>
      {result.link && (
        <a href="https://www.youtube.com/@NevasAI" className='decoration-none flex text-md flex-row items-center gap-1 cursor-pointer' target='_blank' rel="noreferrer">
          <p className='text-md gradient-text font-bold font-DM-Sans'>{result.link}</p>
        </a>
      )}
    </motion.div>
  )
}

export default Result
