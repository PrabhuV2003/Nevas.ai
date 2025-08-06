// import React, { useEffect, useState, useRef } from 'react';
// import HeroSection from './Components/HeroSection';
// import Preloader from './Components/Preloader';
// import Footer from './Components/Footer';
// import Orb from './Components/Orb';
// import SecoundSection from './Components/SecoundSection';
// import Result from './Components/Result';
// import ContactFrom from './Components/ContactFrom';
// import { ToastContainer, toast } from 'react-toastify';
// import OrbSection1 from './Components/OrbSection1';
// import CTA from './Components/CTA';

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [showContact, setShowContact] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <Preloader />}
//       <div>
//         {/* <SplashCursor /> */}
//         <div
//           className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
//         >
//           <section className="h-screen snap-start flex items-center justify-center">
//             <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />
//           </section>
//           <section className="h-screen snap-start flex items-center justify-center">
//             <SecoundSection />
//           </section>
//           <section className="h-screen snap-start flex items-center justify-center">
//             <Orb />
//           </section>
//         </div>
//         <OrbSection1 />
//         <div
//           className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
//         >
//           <section className="h-screen snap-start flex items-center justify-center">
//             <Result />
//           </section>
//           <section className="h-screen snap-start flex items-center justify-center">
//             <CTA onContactClick={() => setShowContact(true)} />
//           </section>
//           <section className="h-screen snap-start flex items-center justify-center">
//             <Footer onContactClick={() => setShowContact(true)} />
//           </section>
//         </div>

//         {showContact && (
//           <ContactFrom onClose={() => setShowContact(false)} />
//         )}

//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default App;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import HeroSection from './Components/HeroSection';
import SecoundSection from './Components/SecoundSection';
import Orb from './Components/Orb';
import Result from './Components/Result';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import ParticlesComponent from "./Components/ui/particles";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Preloader from './Components/Preloader';
import { ToastContainer, toast } from 'react-toastify';
// SplitText must be imported manually or from CDN
// import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Observer);
// gsap.registerPlugin(SplitText);

function App() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  let currentIndex = -1;
  let animating = false;

  const wrap = gsap.utils.wrap(0, 9); // 5 sections

useEffect(() => {
  const sections = sectionsRef.current;
  const images = imagesRef.current;
  const outerWrappers = outerWrappersRef.current;
  const innerWrappers = innerWrappersRef.current;
  const headings = headingsRef.current;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  // Set initial section (index 0) immediately
  gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
  gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
  gsap.set(images[0], { yPercent: 0 });
  gsap.set(headings[0], { autoAlpha: 1, yPercent: 0 });

  currentIndex = 0; // Set currentIndex immediately

  const gotoSection = (index, direction) => {
    if (index < 0 || index >= sections.length || index === currentIndex) return;

    animating = true;
    let fromTop = direction === -1;
    let dFactor = fromTop ? -1 : 1;

    let tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => (animating = false),
    });

    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
      },
      { yPercent: 0 },
      0
    ).fromTo(
      images[index],
      { yPercent: 15 * dFactor },
      { yPercent: 0 },
      0
    ).fromTo(
      headings[index],
      { autoAlpha: 0, yPercent: 150 * dFactor },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
      },
      0.2
    );

    currentIndex = index;
  };

  Observer.create({
    type: "wheel,touch",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  // Removed gotoSection(0, 1) here, since we already set it above
}, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const bgImages = [
    "url(https://assets.codepen.io/16327/site-landscape-1.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-5.jpeg)",
    "url(https://assets.codepen.io/16327/site-landscape-2.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-6.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-8.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-8.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-8.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-8.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-8.jpg)",
  ];

  const headings = [
    <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />,
    <SecoundSection />,
    <Orb />,
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Result />,
    <CTA />,
    <Footer />,
  ];

  return (
    <>
      {loading && <Preloader />}
      <div className="relative w-full h-screen overflow-hidden bg-black text-white hidden md:block ">
        <div className=' w-full h-screen absolute top-0 left-0 z-10 '>
          <ParticlesComponent id="particles" />
        </div>

        <div className="fixed -bottom-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-50 md:scale-100">
          <div
            className="rounded-full animate-float"
            style={{
              width: "350px",
              height: "350px",
              backgroundColor: "#4080f5",
              opacity: 1,
              filter: "blur(200px)",
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        {bgImages.map((bg, i) => (
          <section
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="absolute top-0 left-0 w-full h-full invisible"
          >
            <div
              ref={(el) => (outerWrappersRef.current[i] = el)}
              className="w-full h-full overflow-hidden"
            >
              <div
                ref={(el) => (innerWrappersRef.current[i] = el)}
                className="w-full h-full overflow-hidden"
              >
                <div
                  ref={(el) => (imagesRef.current[i] = el)}
                  className="absolute z-0 top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
                >
                  {headings[i]}
                </div>
              </div>
            </div>
          </section>
        ))}
        {showContact && (
          <ContactFrom onClose={() => setShowContact(false)} />
        )}

        <ToastContainer />
      </div>

        <div
          className=" overflow-y-scroll snap-y snap-mandatory scroll-smooth block md:hidden vh-screen"
        >
          <section className="vh-screen snap-start flex items-center justify-center">
            <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <SecoundSection />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Orb />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Section1 />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Section2 />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Section3 />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Result />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <CTA onContactClick={() => setShowContact(true)} />
          </section>
          <section className="vh-screen snap-start flex items-center justify-center">
            <Footer onContactClick={() => setShowContact(true)} />
          </section>
        </div>

        {showContact && (
          <ContactFrom onClose={() => setShowContact(false)} />
        )}

        <ToastContainer />
    </>
  );
}

export default App;

