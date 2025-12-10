import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assest'

const TABS = [
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    img: assets.kf1,
    description:
      'Boost conversions and customer loyalty with AI that powers dynamic pricing, smart recommendations, automated customer support, and demand forecasting. From small online stores to enterprise marketplaces, we adapt our solutions to your retail and e-commerce stack.',
  },
  {
    id: 'finance',
    title: 'Banking & Financial Services',
    img: 'https://cdn.pixabay.com/photo/2023/04/11/09/43/technology-7917037_1280.jpg',
    description:
      'Automate routine operations while keeping risk and compliance in focus. Our AI agents support fraud detection, KYC automation, loan processing, and personalized financial guidance—helping banks, NBFCs, and fintechs deliver faster, safer, and smarter services.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    img: 'https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594119_1280.jpg',
    description:
      'Streamline patient journeys and operational workflows with AI. From appointment scheduling and triage assistants to claims processing and data-driven insights, we help hospitals, clinics, and health-tech companies deliver better care with less manual effort.',
  },
  {
    id: 'operations',
    title: 'Manufacturing, Logistics & Operations',
    img: 'https://cdn.pixabay.com/photo/2019/06/29/10/45/network-4308820_1280.jpg',
    description:
      'Optimize end-to-end operations with intelligent automation. Our AI agents assist in production planning, quality checks, inventory management, and logistics coordination—reducing downtime, cutting costs, and improving delivery performance across any supply chain.',
  },
]

// Reusable hook for scroll-in-view
const useInView = (threshold = 0.2) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold])

  return { ref, isInView }
}

const KeyFeatures = () => {
  // default to the first tab’s id so you can change TABS freely
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const currentTab = TABS.find(tab => tab.id === activeTab) || TABS[0]

  const { ref: headerRef, isInView: headerInView } = useInView()
  const { ref: leftRef, isInView: leftInView } = useInView()
  const { ref: rightRef, isInView: rightInView } = useInView()

  return (
    <div className='w-full min-h-screen relative py-16 px-10 lg:py-24 lg:px-14 '>
      {/* BG Multi Colors */}
      <div className='absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80'></div>
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80'></div>
      <div className='absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80'></div>

      <div className='w-full h-full relative z-50'>
        {/* Heading + intro */}
        <div
          ref={headerRef}
          className={`
            max-w-5xl space-y-4
            transform transition-all duration-700 ease-out
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h2 className='font-cervino text-[30px] leading-[45px] sm:text-[55px] sm:leading-[75px] uppercase'>
            AI Automation Solutions
            <br />
            For Every Industry
          </h2>

          <p className='font-cervino text-base leading-7 text-[#666666] w-full sm:w-[70%]'>
            Whether you&apos;re in retail, finance, healthcare, manufacturing, or any other sector, our AI agents are
            built to adapt to your industry&apos;s unique workflows, data, and regulations. Explore how we tailor our
            automation solutions for different domains—while still offering one unified platform that can support
            <span className='font-semibold'> any industry you operate in.</span>
          </p>
        </div>

        <div className='w-full h-fit md:h-[500px] gap-2.5 flex max-md:flex-col-reverse mt-7'>
          {/* LEFT SIDE: IMAGE + DESCRIPTION */}
          <div
            ref={leftRef}
            className={`
              w-full md:w-[80%] lg:w-[70%] h-full relative
              transform transition-all duration-700 ease-out
              ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: leftInView ? '150ms' : '0ms' }}
          >
            <div className='w-full h-full inverted-radius overflow-hidden'>
              <img
                key={currentTab.id} // small fade on tab change
                src={currentTab.img}
                alt={currentTab.title}
                className='w-full h-full object-cover transition-opacity duration-500'
              />
            </div>

            <div className='absolute right-0 bottom-0 w-[290px] lg:w-[340px] h-[240px] bg-white shadow-2xs rounded-[20px] flex justify-center items-center p-5'>
              <p className='font-cervino text-sm leading-8 lg:text-base lg:leading-9 text-[#222222] text-justify'>
                {currentTab.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: TABS */}
          <div
            ref={rightRef}
            className={`
              w-full md:w-[30%] h-full flex md:flex-col gap-2.5
              transform transition-all duration-700 ease-out
              ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: rightInView ? '250ms' : '0ms' }}
          >
            {TABS.map((tab, index) => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type='button'
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full md:h-full rounded-2xl flex justify-center items-center p-1.5 md:p-5
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-white shadow-2xs text-[#222222]'
                        : 'border border-[#666666] text-[#666666] hover:border-[#222222] hover:text-[#222222]'
                    }
                  `}
                  style={{
                    transitionDelay: rightInView ? `${300 + index * 120}ms` : '0ms', // stagger on scroll
                  }}
                >
                  <p className='font-cervino leading-5 text-base sm:text-lg lg:text-2xl sm:leading-9 text-center uppercase cursor-pointer'>
                    {tab.title}
                  </p>
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
