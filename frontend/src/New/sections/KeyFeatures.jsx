import React, { useState } from 'react'

const TABS = [
  {
    id: 'consulting',
    title: 'AI Consulting Services',
    heading: 'AI Consulting Services',
    description:
      'Validate, de-risk, and plan AI initiatives with clear ROI and technical feasibility.',
    points: [
      'AI Readiness Audits',
      'Cost-Benefit & ROI Analysis',
      'Discovery & Ideation Workshops',
      'Scalable AI Roadmap',
      'Rapid PoC Development',
      'Executive Dashboards',
    ],
  },
  {
    id: 'product',
    title: 'AI Product Development',
    heading: 'AI Product Development',
    description:
      'Design and launch AI-first platforms with scalability, performance, and analytics built in.',
    points: [
      'AI Strategy & Architecture',
      'Rapid Prototyping',
      'Model Deployment',
      'Built-in Analytics',
      'Multi-cloud Support',
    ],
  },
  {
    id: 'conversational',
    title: 'Conversational AI',
    heading: 'Conversational AI Development',
    description:
      'Smart chatbots, voice bots, and AI agents for customer engagement and operations.',
    points: [
      'Custom Chatbots & Voicebots',
      'Omnichannel Support',
      'RAG-based Bots',
      'CRM & ERP Integration',
      'Multilingual Support',
    ],
  },
  {
    id: 'automation',
    title: 'Process Automation',
    heading: 'AI Process Automation',
    description:
      'Automate repetitive workflows using AI agents and intelligent triggers.',
    points: [
      'Workflow Automation',
      'AI Agents',
      'System Integrations',
      'Approval Flows',
      'Monitoring & Alerts',
    ],
  },
  {
    id: 'analytics',
    title: 'AI Analytics',
    heading: 'AI Analytics & Insights',
    description:
      'Turn raw data into predictive and actionable insights.',
    points: [
      'Predictive Analytics',
      'Forecasting Models',
      'BI Dashboards',
      'Real-time Insights',
      'Data Visualization',
    ],
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    heading: 'Computer Vision Solutions',
    description:
      'AI-powered image and video intelligence for automation and monitoring.',
    points: [
      'Object Detection',
      'Face Recognition',
      'Video Analytics',
      'Quality Inspection',
      'OCR Systems',
    ],
  },
  {
    id: 'nlp',
    title: 'NLP Solutions',
    heading: 'Natural Language Processing',
    description:
      'Advanced text understanding and generation systems.',
    points: [
      'Text Classification',
      'Sentiment Analysis',
      'Entity Recognition',
      'Document Intelligence',
      'LLM Integrations',
    ],
  },
  {
    id: 'mlops',
    title: 'MLOps',
    heading: 'MLOps & Model Management',
    description:
      'Deploy, monitor, and scale ML models reliably in production.',
    points: [
      'Model Versioning',
      'CI/CD for ML',
      'Monitoring & Drift Detection',
      'Auto Scaling',
      'Governance',
    ],
  },
  {
    id: 'cloud',
    title: 'AI Cloud Solutions',
    heading: 'AI Cloud & Infrastructure',
    description:
      'Cloud-native AI systems optimized for performance and cost.',
    points: [
      'AWS / Azure / GCP',
      'GPU Optimization',
      'Cost Optimization',
      'Secure Deployments',
      'High Availability',
    ],
  },
  {
    id: 'operations',
    title: 'Manufacturing & Ops',
    heading: 'Manufacturing & Operations',
    description:
      'Optimize logistics, production, and maintenance with AI.',
    points: [
      'Predictive Maintenance',
      'Demand Forecasting',
      'Production Optimization',
      'Logistics Intelligence',
      'Operational Dashboards',
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
        <h2 className="font-cervino text-[30px] sm:text-[45px] uppercase leading-tight">
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
              className={`rounded-xl overflow-hidden transition-all ${isOpen ? 'bg-white shadow-md' : 'border border-[#ddd]'
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
                className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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
        <div className="w-[30%]">
          <div className="h-[350px] overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar">
            {TABS.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl cursor-pointer p-5 text-left uppercase font-cervino transition-all ${isActive
                      ? 'bg-gradient-to-r from-[#FA9E59] via-[#24AFCD] to-[#DE8DC9] shadow-md text-white'
                      : 'border border-[#666] text-[#666] hover:text-[#222]'
                    }`}
                >
                  {tab.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT TABS (SCROLLABLE) */}
        <div className="w-[70%] bg-white rounded-2xl p-10 shadow-sm min-h-[350px]">
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

      </div>

    </section>
  )
}

export default KeyFeatures
