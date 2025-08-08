import React, { useRef, useEffect } from 'react';

const Section = ({ videoSrc, point, name, normalText1, normalText2, normalText3, gradientText1, gradientText2 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 } // play/pause when 25% visible, adjust as needed
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-black relative" style={{ height: "calc(var(--vh) * 100)" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-cover w-full h-full bg-cover absolute top-0 left-0"
        muted
        playsInline
        preload="auto"
        // autoplay attribute is unnecessary because we'll control play via IntersectionObserver
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
      <h1 className="font-DM-Mono-Italic absolute right-10 top-10 text-7xl opacity-50">{point}</h1>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center w-full md:w-fit">
        <p className="text-6xl lg:text-7xl font-DM-Sans">{name}</p>
        <p className="text-base lg:text-lg mt-5 w-full text-[#cdd3ce] px-1 lg:px-2 font-DM-Sans">
          {normalText1}
          <span className="gradient-text">{gradientText1}</span> {normalText2}
          <span className="gradient-text">{gradientText2}</span>
          {normalText3}
        </p>
      </div>
    </div>
  );
};

export default Section;
