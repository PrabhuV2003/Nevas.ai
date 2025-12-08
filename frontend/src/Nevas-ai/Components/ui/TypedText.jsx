// TypedText.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ words = ["Mike", "John", "Cindy", "Daisy"] }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: words,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [words]);

  return (
    <main className="grid place-content-center">
      <h1 className="text-[clamp(1.5rem,8vw,5rem)]">
        <span ref={el} className="font-DM-Mono-Italic text-5xl md:text-7xl lg:text-8xl text-center gradient-text"></span>
      </h1>
    </main>
  );
};

export default TypedText;
