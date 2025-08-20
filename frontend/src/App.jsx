import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ToastContainer } from "react-toastify";
import { IoSparklesSharp } from "react-icons/io5";

// ✅ Lazy loaded components
const HeroSection = lazy(() => import("./Components/HeroSection"));
const SecoundSection = lazy(() => import("./Components/SecoundSection"));
const Orb = lazy(() => import("./Components/Orb"));
const Result = lazy(() => import("./Components/Result"));
const CTA = lazy(() => import("./Components/CTA"));
const Footer = lazy(() => import("./Components/Footer"));
const ParticlesComponent = lazy(() => import("./Components/ui/particles"));
const Preloader = lazy(() => import("./Components/Preloader"));
const ContactFrom = lazy(() => import("./Components/ContactFrom"));
const Newsletter = lazy(() => import("./Components/Newsletter"));
const Section = lazy(() => import("./Components/Section"));

gsap.registerPlugin(Observer);

function App() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const heroRef = useRef(null);

  // 🔧 GSAP control refs (so Back-to-Top can control desktop)
  const currentIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const gotoSectionRef = useRef(null);
  const observerRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  // ---------- Desktop GSAP setup ----------
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const sections = sectionsRef.current;
    const images = imagesRef.current;
    const outerWrappers = outerWrappersRef.current;
    const innerWrappers = innerWrappersRef.current;
    const headings = headingsRef.current;

    // Initial positions (start state)
    gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    // Some components may not populate headings[i]; GSAP ignores null safely
    gsap.set(headings, { autoAlpha: 0, yPercent: 150 });

    // Reveal first section (index 0)
    gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
    gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
    gsap.set(images[0], { yPercent: 0 });
    gsap.set(headings[0], { autoAlpha: 1, yPercent: 0 });

    currentIndexRef.current = 0;
    animatingRef.current = false;

    // Transition helper accessible from outside (button)
    const gotoSection = (index, direction) => {
      const currentIndex = currentIndexRef.current;
      if (
        index < 0 ||
        index >= sections.length ||
        index === currentIndex ||
        animatingRef.current
      ) {
        return;
      }

      animatingRef.current = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
        onComplete: () => (animatingRef.current = false),
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
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headings[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          { autoAlpha: 1, yPercent: 0, ease: "power2" },
          0.2
        );

      currentIndexRef.current = index;
    };

    gotoSectionRef.current = gotoSection;

    // GSAP Observer
    observerRef.current = Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      onDown: () =>
        !animatingRef.current &&
        gotoSectionRef.current(currentIndexRef.current - 1, -1),
      onUp: () =>
        !animatingRef.current &&
        gotoSectionRef.current(currentIndexRef.current + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    return () => {
      observerRef.current && observerRef.current.kill();
      observerRef.current = null;
      gotoSectionRef.current = null;
    };
  }, []);

  // ---------- Preloader ----------
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2900);
    return () => clearTimeout(timer);
  }, []);

  // ---------- Fix vh unit on mobile ----------
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // ---------- Desktop "Back to Top" behavior ----------
  const resetDesktopToStart = () => {
    const sections = sectionsRef.current;
    const images = imagesRef.current;
    const outerWrappers = outerWrappersRef.current;
    const innerWrappers = innerWrappersRef.current;
    const headings = headingsRef.current;

    // Kill any running tweens to avoid conflicts
    gsap.killTweensOf([sections, images, outerWrappers, innerWrappers, headings]);

    // 1) Go to exact start state (instant)
    gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    gsap.set(images, { yPercent: 0 });
    gsap.set(headings, { autoAlpha: 0, yPercent: 150 });

    // 2) Reveal the first section as at initial load
    gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
    gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
    gsap.set(images[0], { yPercent: 0 });

    // 3) Replay the intro of the first heading for a nice "start from the start"
    gsap.fromTo(
      headings[0],
      { autoAlpha: 0, yPercent: 150 },
      { autoAlpha: 1, yPercent: 0, duration: 0.8, ease: "power2" }
    );

    currentIndexRef.current = 0;
    animatingRef.current = false;
  };

  // ✅ Back to Top (mobile = native scroll, desktop = reset & replay)
  const scrollToTop = () => {
    if (window.innerWidth < 768) {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      resetDesktopToStart();
    }
  };

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
    // Wrap hero so mobile scroll works
    <section ref={heroRef} className="w-full h-full flex items-center justify-center">
      <HeroSection
        isLoaded={!loading}
        onContactClick={() => setShowContact(true)}
      />
    </section>,
    <SecoundSection />,
    <Orb />,
    <Section
      videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666832/consulting_kbiemk.mp4'
      point={"1"}
      name={"Consulting"}
      normalText1={"We help you identify high-impact"}
      gradientText1={" AI opportunities "}
      normalText2={"and build a step-by-step"}
      gradientText2={" AI Transformation "}
      normalText3={"strategy to bring them to life."}
    />,
    <Section
      videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666882/development_xkt0wx.mp4'
      point={"2"}
      name={"Development"}
      normalText1={"We leverage our extensive experience and network to develop"}
      gradientText1={" custom AI systems "}
      normalText2={"that are proven to move the needle inside your business."}
    />,
    <Section
      videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666901/training_b9rjy9.mp4'
      point={"3"}
      name={"Training"}
      normalText1={"We train and support your team with the right tools and know-how to embed"}
      gradientText1={" AI across your entire organization."}
    />,
    <Result />,
    <CTA onContactClick={() => setShowContact(true)} />,
    <Footer
      onContactClick={() => setShowContact(true)}
      onNewsletterClick={() => setShowNewsletter(true)}
    />,
  ];

  return (
    <>
      <Suspense fallback={<div />}>
        {loading && <Preloader />}
      </Suspense>

      {/* Desktop (GSAP controlled) */}
      <div
        className="relative w-full overflow-hidden bg-black text-white hidden md:block"
        style={{ height: "calc(var(--vh) * 100)" }}
      >
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
      </div>

      {/* Particles (deferred) */}
      <Suspense fallback={null}>
        <div
          className="w-full absolute top-0 left-0 z-10 select-none pointer-events-none"
          style={{ height: "calc(var(--vh) * 100)" }}
        >
          <ParticlesComponent id="particles" />
        </div>
      </Suspense>

      {/* Background Blur Orb */}
      <div className="fixed -bottom-[350px] left-1/2 -translate-x-1/2 pointer-events-none -translate-y-1/2 z-10 scale-50 md:scale-100">
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

      {/* Mobile (native scroll) */}
      <div
        className="overflow-y-scroll snap-y snap-mandatory scroll-smooth block md:hidden"
        style={{ height: "calc(var(--vh) * 100)" }}
      >
        <section
          ref={heroRef}
          className="snap-start flex items-center justify-center"
          style={{ height: "calc(var(--vh) * 100)" }}
        >
          <HeroSection
            isLoaded={!loading}
            onContactClick={() => setShowContact(true)}
          />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <SecoundSection />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Orb />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Section
            videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666832/consulting_kbiemk.mp4'
            point={"1"}
            name={"Consulting"}
            normalText1={"We help you identify high-impact"}
            gradientText1={" AI opportunities "}
            normalText2={"and build a step-by-step"}
            gradientText2={" AI Transformation "}
            normalText3={"strategy to bring them to life."}
          />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Section
            videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666882/development_xkt0wx.mp4'
            point={"2"}
            name={"Development"}
            normalText1={"We leverage our extensive experience and network to develop"}
            gradientText1={" custom AI systems "}
            normalText2={"that are proven to move the needle inside your business."}
          />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Section
            videoSrc='https://res.cloudinary.com/dwsfxpmuo/video/upload/f_auto,q_auto,vc_auto,w_1280,h_720,c_fill/v1755666901/training_b9rjy9.mp4'
            point={"3"}
            name={"Training"}
            normalText1={"We train and support your team with the right tools and know-how to embed"}
            gradientText1={" AI across your entire organization."}
          />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Result />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <CTA onContactClick={() => setShowContact(true)} />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Footer onContactClick={() => setShowContact(true)} onNewsletterClick={() => setShowNewsletter(true)} />
        </section>
      </div>

      {/* Newsletter + Contact */}
      <Suspense fallback={null}>
        {showNewsletter && <Newsletter onClose={() => setShowNewsletter(false)} />}
        {showContact && <ContactFrom onClose={() => setShowContact(false)} />}
      </Suspense>

      {/* ✅ Back to Top Button */}
      <button
        // onClick={scrollToTop}
        onClick={() => setShowContact(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primay to-secoundary cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <IoSparklesSharp className="w-5 h-5" />
      </button>

      <ToastContainer />
    </>
  );
}

export default App;
