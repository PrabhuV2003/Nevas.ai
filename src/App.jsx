import React, { useEffect, useState } from 'react'
import SplashCursor from './ReactBits/SplashCursor'
import HeroSection from './Components/HeroSection'
import { NavbarDemo } from './Components/Navbar'
import Solution from './Components/Solution'
import WeDo from './Components/WeDo'
import Preloader from './Components/Preloader'
import Footer from './Components/Footer'
import Orb from './Components/Orb'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3s

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div>
        <NavbarDemo />
        {/* <SplashCursor /> */}
        <HeroSection />
        {/* <Orb /> */}
        {/* <Solution /> */}
        <WeDo />
        <Footer />
      </div>
    </>
  )
}

export default App