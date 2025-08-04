// import React, { useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import { motion, AnimatePresence } from 'framer-motion'

// gsap.registerPlugin(ScrollTrigger)

// // Inline SVG components — replace the <path> etc. with your actual SVG code
// const DevelopmentSVG = () => (
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294 294" fill="none"
//                 class="absolute left-1/2 -translate-x-1/2 max-w-screen w-[31rem] md:w-[31rem] lg:w-[42rem] aspect-square">
//                 <g opacity="0.8" id="outerCircle">
//                     <g filter="url(#a)">
//                         <path fill="url(#b)"
//                             d="M294 147C294 65.814 228.186 0 147 0S0 65.814 0 147s65.814 147 147 147 147-65.814 147-147Z">
//                         </path>
//                     </g>
//                     <path stroke="url(#c)" stroke-width="2.5"
//                         d="M292.75 147C292.75 66.504 227.495 1.25 147 1.25 66.504 1.25 1.25 66.504 1.25 147c0 80.495 65.254 145.75 145.75 145.75 80.495 0 145.75-65.255 145.75-145.75Z">
//                     </path>
//                 </g>
//                 <g filter="url(#d)" id="innerCircle">
//                     <path fill="url(#e)"
//                         d="M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z"></path>
//                 </g>
//                 <path id="innerCircleHighlight" stroke="url(#f)" stroke-width="2.5"
//                     d="M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z">
//                 </path>
//                 <defs>
//                     <linearGradient id="b" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                         <stop stop-color="#fff"></stop>
//                         <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                         <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                     </linearGradient>
//                     <linearGradient id="c" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                         <stop stop-color="#FDFFFE"></stop>
//                         <stop offset="0.4" stop-color="#549876"></stop>
//                         <stop offset="1" stop-color="#fff"></stop>
//                     </linearGradient>
//                     <linearGradient id="e" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                         <stop stop-color="#fff"></stop>
//                         <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                         <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                     </linearGradient>
//                     <linearGradient id="f" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                         <stop stop-color="#FDFFFE"></stop>
//                         <stop offset="0.4" stop-color="#549876"></stop>
//                         <stop offset="1" stop-color="#fff"></stop>
//                     </linearGradient>
//                     <filter id="a" width="294" height="318.088" x="0" y="-24.088" color-interpolation-filters="sRGB"
//                         filterUnits="userSpaceOnUse">
//                         <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
//                         <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
//                         <feColorMatrix in="SourceAlpha" result="hardAlpha"
//                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                         <feOffset dy="-24.088"></feOffset>
//                         <feGaussianBlur stdDeviation="18.066"></feGaussianBlur>
//                         <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//                         <feColorMatrix values="0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0">
//                         </feColorMatrix>
//                         <feBlend in2="shape" result="effect1_innerShadow_0_1"></feBlend>
//                     </filter>
//                     <filter id="d" width="162" height="186.088" x="65" y="41.912" color-interpolation-filters="sRGB"
//                         filterUnits="userSpaceOnUse">
//                         <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
//                         <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
//                         <feColorMatrix in="SourceAlpha" result="hardAlpha"
//                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
//                         <feOffset dy="-24.088"></feOffset>
//                         <feGaussianBlur stdDeviation="18.066"></feGaussianBlur>
//                         <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
//                         <feColorMatrix values="0 0 0 0 0.536175 0 0 0 0 0.741662 0 0 0 0 0.638918 0 0 0 0.7 0">
//                         </feColorMatrix>
//                         <feBlend in2="shape" result="effect1_innerShadow_0_1"></feBlend>
//                     </filter>
//                 </defs>
//             </svg>
// )

// const ConsultingSVG = () => (
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 166 166" fill="none"
//                     class="smallSphere hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 w-[25%] lg:w-[9.5rem] aspect-square opacity-20">
//                     <g>
//                         <path fill="url(#e)"
//                             d="M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z"
//                             class="morph-shape"></path>
//                     </g>
//                     <path stroke="url(#f)" stroke-width="2.5"
//                         d="M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z"
//                         class="morph-shape-highlight"></path>
//                     <defs>
//                         <linearGradient id="b" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#fff"></stop>
//                             <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                             <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                         </linearGradient>
//                         <linearGradient id="c" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#FDFFFE"></stop>
//                             <stop offset="0.4" stop-color="#549876"></stop>
//                             <stop offset="1" stop-color="#fff"></stop>
//                         </linearGradient>
//                         <linearGradient id="e" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#fff"></stop>
//                             <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                             <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                         </linearGradient>
//                         <linearGradient id="f" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#FDFFFE"></stop>
//                             <stop offset="0.4" stop-color="#549876"></stop>
//                             <stop offset="1" stop-color="#fff"></stop>
//                         </linearGradient>
//                     </defs>
//                 </svg>
// )

// const TrainingSVG = () => (
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 166 166" fill="none"
//                     class="smallSphere hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 w-[25%] lg:w-[9.5rem] aspect-square opacity-20">
//                     <g>
//                         <path fill="url(#e)"
//                             d="M227 147c0-44.735-36.265-81-81-81s-81 36.265-81 81 36.265 81 81 81 81-36.265 81-81Z"
//                             class="morph-shape"></path>
//                     </g>
//                     <path stroke="url(#f)" stroke-width="2.5"
//                         d="M225.75 147c0-44.045-35.705-79.75-79.75-79.75S66.25 102.955 66.25 147s35.705 79.75 79.75 79.75 79.75-35.705 79.75-79.75Z"
//                         class="morph-shape-highlight"></path>
//                     <defs>
//                         <linearGradient id="b" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#fff"></stop>
//                             <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                             <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                         </linearGradient>
//                         <linearGradient id="c" x1="147" x2="147" y1="0" y2="294" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#FDFFFE"></stop>
//                             <stop offset="0.4" stop-color="#549876"></stop>
//                             <stop offset="1" stop-color="#fff"></stop>
//                         </linearGradient>
//                         <linearGradient id="e" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#fff"></stop>
//                             <stop offset="0.6" stop-color="#4CAA7D" stop-opacity="0.1"></stop>
//                             <stop offset="1" stop-color="#E1FFF1" stop-opacity="0.5"></stop>
//                         </linearGradient>
//                         <linearGradient id="f" x1="146" x2="146" y1="66" y2="228" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#FDFFFE"></stop>
//                             <stop offset="0.4" stop-color="#549876"></stop>
//                             <stop offset="1" stop-color="#fff"></stop>
//                         </linearGradient>
//                     </defs>
//                 </svg>
// )

// const slides = [
//   {
//     title: 'Development',
//     text: 'We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.',
//     SvgComponent: DevelopmentSVG,
//   },
//   {
//     title: 'Consulting',
//     text: 'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
//     SvgComponent: ConsultingSVG,
//   },
//   {
//     title: 'Training',
//     text: 'We train and support your team with the right tools and know-how to embed AI across your entire organization.',
//     SvgComponent: TrainingSVG,
//   },
// ]

// const CrossfadeWithPoints = () => {
//   const containerRef = useRef(null)
//   const slidesRef = useRef([])
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [inView, setInView] = useState(false)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       slidesRef.current.forEach((el, i) => {
//         gsap.set(el, {
//           opacity: i === 0 ? 1 : 0,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//         })
//       })

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: `+=${slides.length * 150}%`,
//           scrub: 1,
//           pin: true,
//           onUpdate: (self) => {
//             const progress = self.progress
//             const index = Math.min(
//               slides.length - 1,
//               Math.floor(progress * slides.length)
//             )
//             setCurrentSlide(index)
//           },
//         },
//       })

//       slides.forEach((_, i) => {
//         if (i !== slides.length - 1) {
//           timeline
//             .to(
//               slidesRef.current[i],
//               { opacity: 0, duration: 1, ease: 'power1.inOut' },
//               '+=1'
//             )
//             .to(
//               slidesRef.current[i + 1],
//               { opacity: 1, duration: 1, ease: 'power1.inOut' },
//               '-=1'
//             )
//         }
//       })

//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: 'top center',
//         end: 'bottom top',
//         onEnter: () => setInView(true),
//         onLeaveBack: () => setInView(false),
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="relative snap-start w-full h-dvh md:h-screen overflow-hidden bg-black text-white"
//     >
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           ref={(el) => (slidesRef.current[i] = el)}
//           className="w-full h-full flex flex-col items-center justify-center text-center relative"
//         >
//           {/* Render SVG instead of image */}
//           {slide.SvgComponent && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1, y: -100 } : { opacity: 0, y: -200 }}
//               transition={{ duration: 1 }}
//               className="mx-auto mb-6"
//             >
//               <slide.SvgComponent />
//             </motion.div>
//           )}

//           {/* Animated text content */}
//           <AnimatePresence mode="wait">
//             {currentSlide === i && (
//               <motion.div
//                 key={i}
//                 className="absolute bottom-[50px]"
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: 100, opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <p className="text-4xl lg:text-7xl font-DM-Sans mb-3">{slide.title}</p>
//                 <p className="text-sm lg:text-lg lg:w-9/12 m-auto text-[#A0A4A1] px-1 lg:px-2">
//                   {slide.text}
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}

//       {/* Left side points */}
//       <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 select-none pointer-events-none">
//         {slides.map((slide, i) => (
//           <p
//             key={i}
//             className={`uppercase font-DM-Mono-Light transition-opacity duration-300 cursor-default ${
//               i === currentSlide ? 'opacity-100' : 'opacity-50'
//             }`}
//           >
//             {slide.title}
//           </p>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default CrossfadeWithPoints


// import React, { useRef, useEffect } from 'react';
// import Aurora from './ui/Aurora';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const OrbSection1 = () => {
//   const containerRef = useRef(null);
//   const bgBlocksRef = useRef([]);
//   const progressBarsRef = useRef([]);
//   const auroraRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);

//   const contents = [
//     {
//       title: 'Development',
//       desc: 'We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.',
//     },
//     {
//       title: 'Consulting',
//       desc: 'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
//     },
//     {
//       title: 'Training',
//       desc: 'We train and support your team with the right tools and know-how to embed AI across your entire organization.',
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate BG blocks from w-0 to w-full
//       bgBlocksRef.current.forEach(block => {
//         gsap.fromTo(
//           block,
//           { width: '0%' },
//           {
//             width: '100%',
//             ease: 'power2.out',
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: 'top 50%',
//               end: 'top top',
//               scrub: true,
//             },
//           }
//         );
//       });

//       // Pin & animate content + progress bars
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=4000',
//           scrub: true,
//           pin: true,
//         },
//       });

//       contents.forEach((content, i) => {
//         // Animate title out
//         tl.to(
//           titleRef.current,
//           { opacity: 0, y: 30, duration: 0.3, ease: 'power1.in' },
//           i
//         )
//           // Animate desc out
//           .to(
//             descRef.current,
//             { opacity: 0, y: -30, duration: 0.3, ease: 'power1.in' },
//             `<`
//           )
//           // Swap text
//           .call(() => {
//             titleRef.current.textContent = content.title;
//             descRef.current.textContent = content.desc;
//           })
//           // Animate title in
//           .to(
//             titleRef.current,
//             { opacity: 1, y: 0, duration: 0.4, ease: 'power1.out' },
//             '+=0.1'
//           )
//           // Animate desc in
//           .to(
//             descRef.current,
//             { opacity: 1, y: 0, duration: 0.4, ease: 'power1.out' },
//             `<`
//           )
//           // Fill progress bar
//           .to(
//             progressBarsRef.current[i],
//             { width: '100%', duration: 0.5, ease: 'power1.out' },
//             `<`
//           );
//       });

//       // Aurora fade out
//       tl.to(
//         auroraRef.current,
//         { opacity: 0, duration: 1, ease: 'power2.out' },
//         '+=0.5'
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen relative overflow-hidden"
//     >
//       <div className="w-full h-[70vh] sm:h-[90vh] grid grid-cols-1 grid-rows-2 sm:grid-cols-2">
//         <div className="relative sm:border-0 border-b-2 border-[#363636]">
//           <h1
//             ref={titleRef}
//             className="absolute bottom-5 left-5 sm:left-auto sm:right-5 text-4xl lg:text-6xl font-DM-Sans z-10"
//           >
//           </h1>
//         </div>

//         <div
//           ref={el => (bgBlocksRef.current[0] = el)}
//           className="border border-t-0 border-r-0 border-[#363636] bg-[#131313] hidden sm:block"
//         ></div>

//         <div
//           ref={el => (bgBlocksRef.current[1] = el)}
//           className="border border-l-0 border-[#363636] bg-[#131313] hidden sm:block"
//         ></div>

//         <div
//           className="border border-t-0 border-r-0 border-[#363636] relative overflow-hidden"
//         >
//           <p
//             ref={descRef}
//             className="absolute top-5 left-5 text-xl lg:text-3xl font-DM-Sans tracking-wide leading-8 sm:leading-10 z-10"
//           >
//           </p>
//           <div
//             ref={el => (bgBlocksRef.current[2] = el)}
//             className="absolute inset-0 -z-10"
//           ></div>
//         </div>
//       </div>

//       <div className="w-full h-[30vh] sm:h-[10vh] flex justify-center items-center gap-2 sm:gap-5 font-DM-Sans absolute z-10">
//         {[1, 2, 3].map((num, i) => (
//           <React.Fragment key={i}>
//             <p>0{num}</p>
//             {i < 2 && (
//               <div className="w-[100px] h-0.5 bg-white/50 overflow-hidden">
//                 <div
//                   ref={el => (progressBarsRef.current[i] = el)}
//                   className="w-0 h-full bg-white"
//                 ></div>
//               </div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       <div
//         ref={auroraRef}
//         className="absolute bottom-0 rotate-180 w-full h-full left-0 z-0"
//       >
//         <Aurora
//           colorStops={['#4080f5', '#572ac2', '#4080f5']}
//           blend={0.5}
//           amplitude={1.0}
//           speed={0.5}
//         />
//       </div>
//     </div>
//   );
// };

// export default OrbSection1;

// src/components/ScrollPinAnimation.jsx

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PinScroll() {
  const [step, setStep] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on load
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY < vh * 2) { // stays for 2 full viewport heights
        setStep(1);
      } else if (scrollY < vh * 4) {
        setStep(2);
      } else {
        setStep(3);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[500vh]">
      {/* Sticky pin container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Pinned SVG */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            transition={{ duration: 1 }}
            className="flex items-center justify-center -mt-[180px]"
          >
            {step === 1 && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1754310443/svgviewer-output_2_ill8zv.png" alt="SVG 1" className=" md:w-80 w-40" />
            )}
            {step === 2 && (
              <div className="flex gap-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1754310443/svgviewer-output_2_ill8zv.png"
                      alt="SVG 2"
                      className={`w-32 ${i >= 3 ? '  md:block hidden' : ''}`}
                    />
                  ))}
              </div>
            )}
            {step === 3 && (
    <div className="flex flex-wrap justify-center gap-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <motion.img
            key={i}
            src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1754310443/svgviewer-output_2_ill8zv.png"
            alt={`Zig ${i}`}
            className={`w-32 ${i >= 3 ? "hidden md:block" : ""}`}
            animate={{
              y: isMobile
                ? i % 2 === 0
                  ? -0 // smaller y on mobile
                  : 0
                : i % 2 === 0
                ? -50 // bigger y on desktop
                : 50,
            }}
          />
        ))}
    </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Left side Points */}
        <div className="absolute md:left-0 md:top-1/2 top-auto bottom-0 -translate-y-1/2 flex md:flex-col md:gap-2 left-1/2 -translate-x-1/2 md:translate-x-0 text-base md:text-base">
          <Point name="Development" active={step === 1} />
          <Point name="Training" active={step === 2} />
          <Point name="Consulting" active={step === 3} />
        </div>

        {/* Bottom Content */}
        <div className="absolute md:bottom-[0px] bottom-[50px] left-1/2 -translate-x-1/2 w-full md:w-[80%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className=" p-4 shadow rounded w-full"
            >

              {step === 1 && <div className=" text-center w-full ">
                <p className="text-5xl lg:text-7xl font-light font-DM-Sans mb-5 ">Development</p>
                <p className="text-sm md:texbas lg:text-base text-[#A0A4A1] px-1 lg:px-2 ">We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.</p>
              </div>}
              {step === 2 && <div className=" text-center ">
                <p className="text-5xl lg:text-7xl font-light font-DM-Sans mb-5 ">Training</p>
                <p className="text-sm md:texbas lg:text-base text-[#A0A4A1] px-1 lg:px-2 ">We train and support your team with the right tools and know-how to embed AI across your entire organization.</p>
              </div>}
              {step === 3 && <div className=" text-center ">
                <p className="text-5xl lg:text-7xl font-light font-DM-Sans mb-5 ">Consulting</p>
                <p className="text-sm md:texbas lg:text-base text-[#A0A4A1] px-1 lg:px-2 ">We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.</p>
              </div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Point({ name, active }) {
  return (
    <div
      className={` px-2 md:px-4 rounded-full font-DM-Mono-Light ${active ? " opacity-100 " : " opacity-50 "
        } transition`}
    >
      {name}
    </div>
  );
}

