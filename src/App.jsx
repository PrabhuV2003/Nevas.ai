import React, { useEffect, useState } from 'react'
import SplashCursor from './ReactBits/SplashCursor'
import HeroSection from './Components/HeroSection'
import WeDo from './Components/WeDo'
import Preloader from './Components/Preloader'
import Footer from './Components/Footer'
import Orb from './Components/Orb'
import SecoundSection from './Components/SecoundSection'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div>
        {/* <SplashCursor /> */}
        <div className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <section className="h-screen snap-start flex items-center justify-center">
            <HeroSection />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <SecoundSection />
          </section>
        </div>

        <Orb />
        
        <div className=" h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <section className="h-screen snap-start flex items-center justify-center">
            <WeDo />
          </section>
          <section className="h-screen snap-start flex items-center justify-center">
            <Footer />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
