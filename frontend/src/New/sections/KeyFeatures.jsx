import React, { useState } from 'react'

const TABS = [
  {
    id: 'consulting',
    title: 'AI Consulting Services',
    heading: 'AI Consulting Services',
    description:
      'Not every idea is ready for full-scale AI implementation. Our AI consulting services help you validate, de-risk, and plan AI initiatives with clarity before heavy investments.',
    points: [
      'AI Readiness Audits',
      'Cost-Benefit & ROI Analysis',
      'Discovery & Ideation Workshops',
      'Scalable AI Roadmap',
      'Rapid PoC Development',
      'Executive Dashboard & Reporting',
    ],
  },
  {
    id: 'product',
    title: 'AI Product Development',
    heading: 'AI Product Development',
    description:
      'We design and build AI-first products that scale. From strategy to deployment, we help you launch intelligent platforms with built-in analytics and modular architecture.',
    points: [
      'AI Strategy, Design & Engineering',
      'Rapid Prototyping & Usability Testing',
      'Built-in Analytics',
      'Multi-cloud Support',
      'Modular & Scalable Architecture',
    ],
  },
  {
    id: 'conversational',
    title: 'Conversational AI Development',
    heading: 'Conversational AI Development Services',
    description:
      'Get smart assistants for sales, support, onboarding, and internal operations. We build multilingual chatbots, voice bots, and AI agents for customer engagement.',
    points: [
      'Custom Chatbots & Voicebots',
      'Omnichannel Availability',
      'RAG-Based Bots',
      'CRM & ERP Integration',
      'Data-Interactive Chatbots',
      'Multilingual Voice & Text Bots',
    ],
  },
  {
    id: 'operations',
    title: 'Manufacturing & Operations',
    heading: 'Manufacturing, Logistics & Operations',
    description:
      'Optimize production planning, supply chains, and logistics using AI-powered automation and intelligent decision-making systems.',
    points: [
      'Predictive Maintenance',
      'Demand Forecasting',
      'Production Optimization',
      'Logistics Intelligence',
      'AI-Powered Process Automation',
    ],
  },
]

const FeaturePoint = ({ text }) => (
  <div className="flex items-start gap-3">
    <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border border-[#222] text-xs">
      ✓
    </span>
    <span className="font-cervino uppercase text-sm text-[#222]">
      {text}
    </span>
  </div>
)

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const currentTab = TABS.find(tab => tab.id === activeTab)

  return (
    <section
      id="solutions"
      className="w-full min-h-screen py-16 px-6 lg:py-24 lg:px-14 bg-[#F2F2F2]"
    >
      {/* HEADER */}
      <div className="max-w-5xl mb-12">
        <h2 className="font-cervino text-[30px] sm:text-[55px] uppercase leading-tight">
          AI Automation Solutions
          <br /> For Every Industry
        </h2>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="sm:hidden space-y-4">
        {TABS.map(tab => {
          const isOpen = tab.id === activeTab
          return (
            <div
              key={tab.id}
              className={`rounded-xl overflow-hidden transition-all ${
                isOpen ? 'bg-white shadow-md' : 'border border-[#ddd]'
              }`}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className="w-full px-4 py-4 text-left font-cervino text-lg uppercase flex justify-between items-center"
              >
                {tab.title}
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-4 pb-4 space-y-4">
                  <p className="text-sm leading-7 text-[#444]">
                    {tab.description}
                  </p>

                  <div className="space-y-3">
                    {tab.points.map((point, idx) => (
                      <FeaturePoint key={idx} text={point} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:flex gap-6">
        {/* LEFT CONTENT */}
        <div className="w-[70%] bg-white rounded-2xl p-10 shadow-sm">
          <h3 className="font-cervino uppercase text-[34px] leading-tight">
            {currentTab.heading}
          </h3>

          <p className="mt-4 text-[#444] text-sm lg:text-base leading-10 max-w-3xl">
            {currentTab.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-y-7 gap-x-12">
            {currentTab.points.map((point, index) => (
              <FeaturePoint key={index} text={point} />
            ))}
          </div>
        </div>

        {/* RIGHT TABS */}
        <div className="w-[30%] flex flex-col gap-3">
          {TABS.map(tab => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl cursor-pointer h-full p-5 text-left uppercase font-cervino transition-all ${
                  isActive
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
    </section>
  )
}

export default KeyFeatures
