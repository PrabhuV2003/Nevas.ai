import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assest'

const TABS = [
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    img: assets.kf1,
    description:
      'Boost conversions and customer loyalty with AI that powers dynamic pricing, smart recommendations, automated customer support, and demand forecasting.',
  },
  {
    id: 'finance',
    title: 'Banking & Financial Services',
    img: 'https://cdn.pixabay.com/photo/2023/04/11/09/43/technology-7917037_1280.jpg',
    description:
      'Automate routine operations while keeping risk and compliance in focus. Our AI agents support fraud detection, KYC automation, loan processing.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    img: 'https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594119_1280.jpg',
    description:
      'Streamline patient journeys and operational workflows with AI. From appointment scheduling to claims processing.',
  },
  {
    id: 'operations',
    title: 'Manufacturing, Logistics & Operations',
    img: 'https://cdn.pixabay.com/photo/2019/06/29/10/45/network-4308820_1280.jpg',
    description:
      'Optimize end-to-end operations with intelligent automation. Our AI agents assist in production planning and logistics.',
  },
]

// Scroll-in-view hook (unchanged)
const useInView = (threshold = 0.2) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id)

  const currentTab = TABS.find(tab => tab.id === activeTab)

  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: leftRef, isInView: leftInView } = useInView()
  const { ref: rightRef, isInView: rightInView } = useInView()

  return (
    <div className="w-full min-h-screen overflow-hidden relative py-16 px-6 lg:py-24 lg:px-14">
      {/* BG */}
      <div className="absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80" />
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80" />
      <div className="absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80" />

      <div className="relative z-50">
        {/* HEADER */}
        <div
          ref={headerRef}
          className={`max-w-5xl transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="font-cervino text-[30px] sm:text-[55px] uppercase">
            AI Automation Solutions
            <br /> For Every Industry
          </h2>
        </div>

        {/* ================= MOBILE VIEW (ACCORDION) ================= */}
        <div className="sm:hidden mt-8 space-y-4">
          {TABS.map(tab => {
            const isOpen = tab.id === activeTab
            return (
              <div key={tab.id} className={`
                  rounded-xl overflow-hidden transition-all
                  ${isOpen ? 'bg-white shadow-md' : 'border border-[#ddd] bg-transparent'}
                `}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className="w-full px-4 py-4 text-left font-cervino text-lg uppercase flex justify-between items-center"
                >
                  {tab.title}
                  <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                </button>

                {/* EXPANDABLE CONTENT */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden px-4 pb-4 space-y-3">
                    <img
                      src={tab.img}
                      alt={tab.title}
                      className="w-full h-44 object-cover rounded-lg"
                    />
                    <p className="font-cervino text-sm leading-7 text-[#444] text-justify">
                      {tab.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
        <div className="hidden sm:flex w-full h-[500px] gap-3 mt-10">
          {/* LEFT */}
          <div
            ref={leftRef}
            className={`w-[70%] relative transition-all duration-700 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <img
              key={currentTab.id}
              src={currentTab.img}
              alt={currentTab.title}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute right-6 bottom-6 w-[340px] bg-white rounded-xl p-5 shadow-lg">
              <p className="font-cervino text-sm leading-7 text-[#222] text-justify">
                {currentTab.description}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className={`w-[30%] flex flex-col gap-3 transition-all duration-700 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {TABS.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl h-full p-5 uppercase font-cervino transition-all ${isActive
                      ? 'bg-white shadow-md text-[#222]'
                      : 'border border-[#666] text-[#666] hover:text-[#222]'
                    }`}
                >
                  {tab.title}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures
