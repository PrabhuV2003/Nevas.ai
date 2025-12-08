import React, { useEffect } from 'react'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import HeroSection from './sections/HeroSection'
import TrustedBySection from './sections/TrustedBySection'
import FactsSection from './sections/FactsSection'
import OurExpertSection from './sections/OurExpertSection'
import Testimonial from './sections/Testimonial'
import KeyFeatures from './sections/KeyFeatures'
import OurMission from './sections/OurMission'
import CTA from './sections/CTA'
import YtVideos from './sections/YtVideos'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer';
import './index.css'

const App = () => {

	// useEffect(() => {
	// 	createChat({
	// 		webhookUrl: 'http://localhost:5678/webhook/2dc602bb-2b81-4867-8564-e2fd75edc118/chat'
	// 	});
	// }, []);

  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <FactsSection />
      <OurExpertSection />
      <KeyFeatures />
      <OurMission />
      <CTA />
      <YtVideos />
      <ContactSection />
      {/* <Testimonial /> */}
      <Footer />


<button
  class="cursor-pointer fixed after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border border-4 border-sky-200 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
>
  <svg
    class="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
    viewBox="0 0 384 512"
  >
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
</button>


    </div>
  )
}

export default App