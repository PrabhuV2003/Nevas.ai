import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function ScrollAnimationSection() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);

  let currentIndex = -1;
  let animating = false;

  const bgImages = [
    "url(https://assets.codepen.io/16327/site-landscape-1.jpg)",
    "url(https://assets.codepen.io/16327/site-landscape-5.jpeg)",
    "url(https://assets.codepen.io/16327/site-landscape-2.jpg)",
  ];

  const headings = [
    "Welcome to GSAP Scroll",
    "Animation in React",
    "Scroll to Continue",
  ];

  useEffect(() => {
    const sections = sectionsRef.current;
    const images = imagesRef.current;
    const outerWrappers = outerWrappersRef.current;
    const innerWrappers = innerWrappersRef.current;
    const headings = headingsRef.current;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const gotoSection = (index, direction) => {
      if (index < 0 || index >= sections.length) return;

      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;

      let tl = gsap.timeline({
        defaults: { duration: 1.5, ease: "power2.inOut" },
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
      );

      tl.fromTo(
        headings[index],
        { autoAlpha: 0, yPercent: 150 * dFactor },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        0.2
      );

      currentIndex = index;
    };

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className=" relative w-full h-full ">
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
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), ${bg}`,
                }}
              >
                <h2
                  ref={(el) => (headingsRef.current[i] = el)}
                  className="text-center text-white text-[clamp(1rem,8vw,6rem)] font-semibold w-[90vw] max-w-[1200px]"
                >
                  {headings[i]}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
