import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Orb from './ui/Orb'

gsap.registerPlugin(ScrollTrigger)

const Solution = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: -300, opacity: 0},
        {
          
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom 0',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className='w-full h-screen overflow-hidden relative'>
      <h1
        ref={headingRef}
        className='absolute z-40 top-[200px] left-1/2 -translate-x-1/2 lg:text-5xl md:text-4xl text-3xl w-[95%] text-center uppercase font-poppins gradient-text font-semibold'
      >
        We spend our days empowering teams through our 3-step AI Success Plan.
      </h1>
      <div className='w-full h-screen z-10 absolute '>
        <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>
    </div>
  )
}

export default Solution
