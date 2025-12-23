import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import FactsSection from './sections/FactsSection';
import OurExpertSection from './sections/OurExpertSection';
import Testimonial from './sections/Testimonial'
import KeyFeatures from './sections/KeyFeatures';
import OurMission from './sections/OurMission';
import CTA from './sections/CTA';
import YtVideos from './sections/YtVideos';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import FAQ from './sections/FAQ';
import './index.css';
import BackToTop from './compoenents/BackToTop';
import AiTeamSection from './sections/AiTeamSection';

const App = () => {

	// useEffect(() => {
	// 	createChat({
	// 		webhookUrl: 'http://localhost:5678/webhook/2dc602bb-2b81-4867-8564-e2fd75edc118/chat'
	// 	});
	// }, []);

  return (
    <div className=' bg-[#F2F2F2] '>
      <HeroSection />
      <TrustedBySection />
      <FactsSection />
      <OurExpertSection />
      <AiTeamSection />
      <KeyFeatures />
      <OurMission />
      <CTA />
      {/* <Testimonial /> */}
      <YtVideos />
      <ContactSection />
      <FAQ />
      <Footer />

      <BackToTop />
    </div>
  )
}

export default App