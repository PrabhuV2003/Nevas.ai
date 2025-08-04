import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // or your preferred bundle

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Set up window resize listener to update `isMobile`
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: !isMobile, // ✅ disable hover for mobile
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 100,
            duration: 15,
          },
          grab: {
            distance: 200,
          },
        },
      },
      particles: {
        color: {
          value: "#4080F5",
        },
        links: {
          color: "#4080F5",
          distance: 150,
          enable: false,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 1000,
          },
          value: 50,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isMobile] // ✅ make sure useMemo recalculates when `isMobile` changes
  );

  return (
    <Particles id={props.id} init={particlesLoaded} options={options} />
  );
};

export default ParticlesComponent;
