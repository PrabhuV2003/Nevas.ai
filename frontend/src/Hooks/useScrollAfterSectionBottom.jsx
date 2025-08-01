import { useEffect, useRef, useState } from "react";

function useScrollAfterSectionBottom() {
  const isScrolling = useRef(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    function onWheel(e) {
      if (isScrolling.current) return;

      const section = sections[currentSection];
      if (!section) return;

      const { scrollTop, scrollHeight, clientHeight } = section;

      // Check if user is at bottom and scrolling down
      const atBottom = scrollTop + clientHeight >= scrollHeight - 5; // small buffer
      // Check if user is at top and scrolling up
      const atTop = scrollTop <= 5;

      if (e.deltaY > 0 && atBottom) {
        // Scroll down, move to next section if exists
        if (currentSection < sections.length - 1) {
          isScrolling.current = true;
          setCurrentSection((prev) => prev + 1);
          setTimeout(() => (isScrolling.current = false), 1000);
        }
      } else if (e.deltaY < 0 && atTop) {
        // Scroll up, move to previous section if exists
        if (currentSection > 0) {
          isScrolling.current = true;
          setCurrentSection((prev) => prev - 1);
          setTimeout(() => (isScrolling.current = false), 1000);
        }
      }
    }

    // Make each section scrollable
    sections.forEach((section) => {
      section.style.overflowY = "auto";
      section.style.height = "100vh";
    });

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      sections.forEach((section) => {
        section.style.overflowY = "";
        section.style.height = "";
      });
    };
  }, [currentSection]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (sections[currentSection]) {
      // Scroll the next section top to viewport top
      sections[currentSection].scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]);

  return currentSection;
}

export default useScrollAfterSectionBottom;
