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
        { y: -300,  },
        {
          
          y: 0,
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
        className='absolute top-[200px] left-1/2 -translate-x-1/2 text-4xl w-[90%] text-center uppercase font-poppins gradient-text font-semibold'
      >
        We spend our days empowering teams through our 3-step AI Success Plan.
      </h1>
      <div className='w-full h-screen z-40 absolute -bottom-[300px]'>
        <Orb hoverIntensity={0} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>
    </div>
  )
}

export default Solution
