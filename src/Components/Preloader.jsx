import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [showLeftImage, setShowLeftImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Slide in after 0.5s
    const slideTimer = setTimeout(() => {
      setShowLeftImage(true);
    }, 500);

    // Then fade out after 2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Right Image */}
        <img
          src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753700079/logo-left_ra34jv.png"
          alt="Right"
          className={`w-[100px] absolute left-0 transition-all duration-700 ease-in-out object-cover z-20 ${
            showLeftImage ? "translate-x-2 opacity-100" : "translate-x-6 opacity-0"
          }`}
        />

        {/* Left Image (static behind) */}
        <img
          src="https://res.cloudinary.com/ddvsj2zxd/image/upload/v1753700083/logo-right_kwosop.png"
          alt="Left"
          className="w-[35px] relative z-10 object-cover"
        />
      </div>
    </div>
  );
};

export default Preloader;
