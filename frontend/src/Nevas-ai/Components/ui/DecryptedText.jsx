import React, { useState, useEffect } from "react";

const phrases = [
  "all of the above.",
  "what you’re looking for.",
  "your advantage."
];

export default function DecryptedText() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let frameId;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let i = 0;

    const decryptEffect = (phrase) => {
      const reveal = () => {
        const progress = i / phrase.length;

        const output = phrase
          .split("")
          .map((char, idx) => {
            if (idx < i) {
              return phrase[idx];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayedText(output);

        // Increase opacity gradually
        setOpacity(Math.min(progress, 1));

        if (i < phrase.length) {
          i += 0.5; // speed of reveal
          frameId = requestAnimationFrame(reveal);
        } else {
          setDisplayedText(phrase);
          setOpacity(1);
        }
      };

      frameId = requestAnimationFrame(reveal);
    };

    decryptEffect(currentPhrase);

    const nextPhrase = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setCurrentPhrase(phrases[(index + 1) % phrases.length]);
    }, 5000);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(nextPhrase);
    };
  }, [currentPhrase, index]);

  return (
    <p
      className="text-lg tracking-normal white-silver-animated-text2 mt-7 transition-opacity duration-300"
      style={{ opacity }}
    >
      We are {displayedText}
    </p>
  );
}
