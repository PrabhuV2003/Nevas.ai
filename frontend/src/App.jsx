import React, { useEffect, useState, useRef } from 'react';
import SplashCursor from './ReactBits/SplashCursor';
import HeroSection from './Components/HeroSection';
import WeDo from './Components/WeDo';
import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import Orb from './Components/Orb';
import SecoundSection from './Components/SecoundSection';
import Result from './Components/Result';
import ContactFrom from './Components/ContactFrom';
import { ToastContainer, toast } from 'react-toastify';
import OrbSection1 from './Components/OrbSection1';
import OrbSection3 from './Components/OrbSection3';
import OrbSection2 from './Components/OrbSection2';
import CTA from './Components/CTA';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div>
        {/* <SplashCursor /> */}
        <div
          className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >
          <section className="h-screen snap-start flex items-center justify-center">
            <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <SecoundSection />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <Orb />
          </section>
        </div>
        <OrbSection1 />
        <div
          className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >
          <section className="h-screen snap-start flex items-center justify-center">
            <Result />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <CTA onContactClick={() => setShowContact(true)} />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <Footer onContactClick={() => setShowContact(true)} />
          </section>
        </div>

        {showContact && (
          <ContactFrom onClose={() => setShowContact(false)} />
        )}

        <ToastContainer />
      </div>
    </>
  );
};

export default App;

