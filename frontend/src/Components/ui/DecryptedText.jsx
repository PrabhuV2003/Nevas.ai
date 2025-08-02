import React, { useState, useEffect } from "react";

const phrases = [
  "We are all of the above.",
  "We are what you’re looking for.",
  "We are your advantage."
];

export default function DecryptedText() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const decryptEffect = (phrase) => {
      let i = 0;
      const chars = "!<>-_\\/[]{}—=+*^?#________";
      let decrypted = "";

      const interval = setInterval(() => {
        decrypted = phrase
          .split("")
          .map((char, idx) => {
            if (idx < i) {
              return phrase[idx];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setDisplayedText(decrypted);

        if (i >= phrase.length) {
          clearInterval(interval);
        }
        i++;
      }, 70);
    };

    decryptEffect(currentPhrase);

    const nextPhrase = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setCurrentPhrase(phrases[(index + 1) % phrases.length]);
    }, 5000);

    return () => {
      clearTimeout(nextPhrase);
    };
  }, [currentPhrase, index]);

  return (
    <p className="text-lg tracking-normal white-silver-animated-text2 mt-7">
      {displayedText}
    </p>
  );
}
