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

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div>
        {/* <SplashCursor /> */}
        {/* <div
          className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        >
          <section className="h-screen snap-start flex items-center justify-center">
            <HeroSection isLoaded={!loading} />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <SecoundSection />
          </section>
        </div>

        <Orb />

        <div className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <section className="h-screen snap-start flex items-center justify-center">
            <Result />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <WeDo />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <Footer />
          </section>
        </div> */} 

        <HeroSection isLoaded={!loading} onContactClick={() => setShowContact(true)} />
        <SecoundSection />
        <Orb />
        <Result />
        <WeDo />
        <Footer onContactClick={() => setShowContact(true)} />
        {showContact && (
          <ContactFrom onClose={() => setShowContact(false)} />
        )}
      </div>
    </>
  );
};

export default App;
