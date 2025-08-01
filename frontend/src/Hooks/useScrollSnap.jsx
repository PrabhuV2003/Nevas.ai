import { useEffect, useRef, useState } from 'react';

function useScrollSnap() {
  const isScrolling = useRef(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    if (!sections.length) return;

    function onWheel(e) {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scroll down - next section
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (e.deltaY < 0) {
        // Scroll up - previous section
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // prevent rapid scrolling, adjust delay as needed
    }

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    if (sections[currentSection]) {
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return currentSection;
}

export default useScrollSnap;
