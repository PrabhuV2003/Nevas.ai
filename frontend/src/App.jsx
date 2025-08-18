import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ToastContainer } from "react-toastify";

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

// ✅ Video assets
import development from "./assets/videos/development.mp4";
import consulting from "./assets/videos/consulting.mp4";
import training from "./assets/videos/training.mp4";
import secoundComponent from "./assets/videos/secoundComponent.mp4";
import OrbV from "./assets/videos/Orb.mp4";

gsap.registerPlugin(Observer);

function App() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);

  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  let currentIndex = -1;
  let animating = false;

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const sections = sectionsRef.current;
      const images = imagesRef.current;
      const outerWrappers = outerWrappersRef.current;
      const innerWrappers = innerWrappersRef.current;
      const headings = headingsRef.current;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
      gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
      gsap.set(images[0], { yPercent: 0 });
      gsap.set(headings[0], { autoAlpha: 1, yPercent: 0 });

      let currentIndex = 0;
      let animating = false;

      const gotoSection = (index, direction) => {
        if (index < 0 || index >= sections.length || index === currentIndex) return;

        animating = true;
        let fromTop = direction === -1;
        let dFactor = fromTop ? -1 : 1;

        let tl = gsap.timeline({
          defaults: { duration: 1, ease: "power1.inOut" },
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

        currentIndex = index;
      };

      const observer = Observer.create({
        type: "wheel,touch",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      return () => observer.kill();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

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
    <SecoundSection videoSrc={secoundComponent} />,
    <Orb videoSrc={OrbV} />,
    <Section
      videoSrc={consulting}
      point={"1"}
      name={"Consulting"}
      normalText1={"We help you identify high-impact"}
      gradientText1={" AI opportunities "}
      normalText2={"and build a step-by-step"}
      gradientText2={" AI Transformation "}
      normalText3={"strategy to bring them to life."}
    />,
    <Section
      videoSrc={development}
      point={"2"}
      name={"Development"}
      normalText1={"We leverage our extensive experience and network to develop"}
      gradientText1={" custom AI systems "}
      normalText2={"that are proven to move the needle inside your business."}
    />,
    <Section
      videoSrc={training}
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

      {/* Desktop */}
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

      {/* Mobile (scrollable sections) */}
      <div
        className="overflow-y-scroll snap-y snap-mandatory scroll-smooth block md:hidden"
        style={{ height: "calc(var(--vh) * 100)" }}
      >
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <SecoundSection videoSrc={secoundComponent} />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Orb videoSrc={OrbV} />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Section
            videoSrc={consulting}
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
            videoSrc={development}
            point={"2"}
            name={"Development"}
            normalText1={"We leverage our extensive experience and network to develop"}
            gradientText1={" custom AI systems "}
            normalText2={"that are proven to move the needle inside your business."}
          />
        </section>
        <section className="snap-start flex items-center justify-center" style={{ height: "calc(var(--vh) * 100)" }}>
          <Section
            videoSrc={training}
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

      <ToastContainer />
    </>
  );
}

export default App;
