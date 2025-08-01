import { useEffect, useRef } from 'react';

export default function useFullPageScroll(stopClassName = 'stop-fullpage') {
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.fullpage-section'));

    const handleWheel = (e) => {
      // Check if the event target is inside an element with stopClassName
      let el = e.target;
      while (el) {
        if (el.classList && el.classList.contains(stopClassName)) {
          // Inside a stop-fullpage area: do not prevent default, do not scroll fullpage
          return;
        }
        el = el.parentElement;
      }

      e.preventDefault(); // Stop default scroll

      if (isScrolling.current) return;
      isScrolling.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentScroll = window.scrollY;

      // Find current section index based on scroll position
      let currentSectionIndex = sections.findIndex((section, index) => {
        const top = section.offsetTop;
        const nextTop = sections[index + 1]?.offsetTop ?? Infinity;
        return currentScroll >= top && currentScroll < nextTop;
      });

      if (currentSectionIndex === -1) currentSectionIndex = 0;

      // Calculate target section index based on scroll direction
      let targetIndex = currentSectionIndex + direction;

      // Clamp targetIndex
      targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1));

      const targetTop = sections[targetIndex].offsetTop;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });

      const scrollDuration = 800;

      setTimeout(() => {
        isScrolling.current = false;
      }, scrollDuration);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [stopClassName]);
}
