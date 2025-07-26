import React from 'react'
import SplashCursor from './ReactBits/SplashCursor'
import HeroSection from './Components/HeroSection'
import { NavbarDemo } from './Components/Navbar'

const App = () => {
  return (
    <div>
      <NavbarDemo />
      {/* <SplashCursor /> */}
      <HeroSection />
    </div>
  )
}

export default App