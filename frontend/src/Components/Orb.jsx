import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Orb = () => {
  const containerRef = useRef(null)
  const orbRef = useRef(null)
  const h1Ref = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    gsap.set(h1Ref.current, { xPercent: -50 })
    gsap.set(h2Ref.current, { xPercent: -50 })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
        },
      })

      tl.fromTo(orbRef.current, { scale: 0.8 }, { scale: 1, ease: 'power2.out' })
      tl.fromTo(
        h1Ref.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: 'power2.out' }
      )
      tl.to(
        orbRef.current,
        {
          background: 'conic-gradient(from 180deg at 50% 50%, #4080F5, #572AC2)',
          borderWidth: 0,
          ease: 'power2.out',
        },
        '<'
      )
      tl.to(
        h1Ref.current,
        { yPercent: -100, opacity: 0, ease: 'power2.in' }
      )
      tl.fromTo(
        h2Ref.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: 'power2.out' }
      )
      tl.to(
        orbRef.current,
        {
          background: 'radial-gradient(circle at center, #4080F5, #572AC2)',
          ease: 'power2.out',
        },
        '<'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden">
      <div
        ref={orbRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] h-[300px] rounded-full border-4 border-primay"
        style={{
          background: 'transparent',
          transition: 'background 0.5s ease',
        }}
      />
      <h1
        ref={h1Ref}
        className="absolute w-full font-DM-Sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-3xl md:text-6xl lg:text-7xl text-center"
      >
        We Will
      </h1>
      <h1
        ref={h2Ref}
        className="absolute w-full font-DM-Sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-3xl md:text-6xl lg:text-7xl text-center"
      >
        Make You Shaped
      </h1>
    </div>
  )
}

export default Orb
