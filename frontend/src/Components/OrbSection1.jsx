import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    title: 'Development',
    text: 'We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.',
    image:
      'https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png',
  },
  {
    title: 'Consulting',
    text: 'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
    image:
      'https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png',
  },
  {
    title: 'Training',
    text: 'We train and support your team with the right tools and know-how to embed AI across your entire organization.',
    image:
      'https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753955520/20250731_1514_Glossy_Blue-Purple_Sphere_simple_compose_01k1fxvsaef6x8q37dfw51hp6p_g5lpjc.png',
  },
]

const CrossfadeWithPoints = () => {
  const containerRef = useRef(null)
  const slidesRef = useRef([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      slidesRef.current.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        })
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${slides.length * 150}%`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress
            const index = Math.min(
              slides.length - 1,
              Math.floor(progress * slides.length)
            )
            setCurrentSlide(index)
          },
        },
      })

      slides.forEach((_, i) => {
        if (i !== slides.length - 1) {
          timeline
            .to(
              slidesRef.current[i],
              { opacity: 0, duration: 1, ease: 'power1.inOut' },
              '+=1'
            )
            .to(
              slidesRef.current[i + 1],
              { opacity: 1, duration: 1, ease: 'power1.inOut' },
              '-=1'
            )
        }
      })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        onEnter: () => setInView(true),
        onLeaveBack: () => setInView(false),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative snap-start w-full h-dvh md:h-screen overflow-hidden bg-black text-white"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="w-full h-full flex flex-col items-center justify-center text-center relative"
        >
          {slide.title === 'Development' && (
            <motion.img
              src={slide.image}
              alt=""
              initial={{ opacity: 0, }}
              animate={inView ? { opacity: 1, y: -100 } : { opacity: 0, scale: 1.5 }}
              transition={{ duration: 1 }}
              style={{ width: '300px', height: '300px' }}
              className="mx-auto mb-6"
            />
          )}

          {slide.title === 'Consulting' && (
            <div className="flex -mt-[220px] flex-wrap justify-center">
              {Array(window.innerWidth < 768 ? 3 : 5)
                .fill(0)
                .map((_, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt=""
                    style={{ width: '200px', height: '200px' }}
                  />
                ))}
            </div>
          )}

          {slide.title === 'Training' && (
            <div className="flex -mt-[220px] flex-wrap justify-center">
              {Array(
                window.innerWidth < 500 ? 2 : window.innerWidth < 768 ? 4 : 5
              )
                .fill(0)
                .map((_, idx) => (
                  <img
                    key={idx}
                    src={slide.image}
                    alt=""
                    className=' max-sm:w-[150px] max-sm:h-[150px] '
                    style={{
                      width: '200px',
                      height: '200px',
                      transform: `translateY(${idx % 2 === 0
                          ? '0px'
                          : window.innerWidth < 500
                            ? '10px'
                            : '100px'
                        })`,
                    }}
                  />
                ))}
            </div>
          )}

          {/* Animated text content */}
          <AnimatePresence mode="wait">
            {currentSlide === i && (
              <motion.div
                key={i}
                className="absolute bottom-[50px]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-4xl lg:text-7xl font-DM-Sans mb-3">{slide.title}</p>
                <p className="text-sm lg:text-lg lg:w-9/12 m-auto text-[#A0A4A1] px-1 lg:px-2">
                  {slide.text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Left side points */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 select-none pointer-events-none">
        {slides.map((slide, i) => (
          <p
            key={i}
            className={`uppercase font-DM-Mono-Light transition-opacity duration-300 cursor-default ${i === currentSlide ? 'opacity-100' : 'opacity-50'
              }`}
          >
            {slide.title}
          </p>
        ))}
      </div>
    </section>
  )
}

export default CrossfadeWithPoints
