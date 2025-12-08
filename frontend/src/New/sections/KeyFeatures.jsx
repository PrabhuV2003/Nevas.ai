import React, { useState } from 'react'

const TABS = [
  {
    id: 'ml',
    title: 'Advanced Machine Learning Algorithms',
    img: 'https://cdn.pixabay.com/photo/2024/05/27/03/47/futuristic-8789975_1280.png',
    description:
      'Experience the frontier of technological innovation with our suite of advanced machine learning algorithms. These powerful tools are at the heart of modern data analysis, enabling us to extract meaningful insights, enhance predictive accuracy, and drive automation.',
  },
  {
    id: 'workflows',
    title: 'Customizable Automation Workflows',
    img: 'https://cdn.pixabay.com/photo/2023/04/11/09/43/technology-7917037_1280.jpg',
    description:
      'Design automation workflows that fit your business like a glove. From lead routing to back-office operations, our AI agents can be configured step-by-step to match your exact rules, approvals, and edge cases without writing complex code.',
  },
  {
    id: 'analytics',
    title: 'Real-time Data Analytics Dashboard',
    img: 'https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594119_1280.jpg',
    description:
      'Monitor performance in real-time with interactive dashboards. Track KPIs, spot bottlenecks, and visualize the impact of automation instantly so you can make faster, smarter decisions.',
  },
  {
    id: 'integration',
    title: 'Seamless Integration with Existing Systems',
    img: 'https://cdn.pixabay.com/photo/2019/06/29/10/45/network-4308820_1280.jpg',
    description:
      'Plug AI into your existing tools with minimal disruption. We integrate with CRMs, ERPs, marketing tools, and internal databases so everything stays in sync while your workflows get smarter.',
  },
]

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState('ml')

  const currentTab = TABS.find(tab => tab.id === activeTab) || TABS[0]

  return (
    <div className='w-full min-h-screen bg-[#F2F2F2] relative py-24 px-14'>

      {/* BG Multi Colors */}
      <div className='absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30'></div>
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30'></div>
      <div className='absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30'></div>

      <div className='w-full h-full relative z-50'>
        <h2 className='font-cervino text-[55px] leading-[75px] uppercase'>
          Discover the Key Features of Our AI
          <br />
          Automation Services
        </h2>

        <p className='font-cervino text-base leading-7 text-[#666666] w-[70%]'>
          Experience groundbreaking AI automation services that streamline tasks, provide actionable insights from data, and
          deliver personalized customer experiences. Our technology offers predictive maintenance, NLP communication, workflow
          optimization, and scalability, all while ensuring security and compliance.
        </p>

        <div className='w-full h-[500px] gap-2.5 flex mt-7'>
          {/* LEFT SIDE: IMAGE + DESCRIPTION (changes with tab) */}
          <div className='w-[70%] h-full relative'>
            <div className='w-full h-full inverted-radius overflow-hidden'>
              <img
                src={currentTab.img}
                alt={currentTab.title}
                className='w-full h-full object-cover '
              />
            </div>

            <div className='absolute right-0 bottom-0 w-[340px] h-[240px] bg-white shadow-2xs rounded-[20px] flex justify-center items-center p-5 '>
              <p className='font-cervino text-base leading-9 text-[#222222] text-justify'>
                {currentTab.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: TABS */}
          <div className='w-[30%] h-full flex flex-col gap-2.5'>
            {TABS.map(tab => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  type='button'
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    w-full h-full rounded-2xl flex justify-center items-center p-5 transition-all duration-700
                    ${isActive
                      ? 'bg-white shadow-2xs text-[#222222]'
                      : 'border border-[#666666] text-[#666666] hover:border-[#222222] hover:text-[#222222]'}
                  `}
                >
                  <p className='font-cervino text-2xl leading-9 text-center uppercase cursor-pointer'>
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
