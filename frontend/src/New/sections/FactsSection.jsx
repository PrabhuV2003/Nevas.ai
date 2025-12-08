import React from 'react'

const FactsSection = () => { 

    const primaryStat = {
        value: "96%",
        title: "Increase in efficiency",
        description: "Say goodbye to manual, time-consuming tasks. Our streamlined automations elevate efficiency so your team can fouse on strategic initiatives."
    }

    const secondaryStats = [
        {
            value: "20%",
            title: "Reduction in operational costs",
            description:
                "Experience substantial savings as AI-driven automation optimizes resource allocation and minimizes wastage.",
        },
        {
            value: "51%",
            title: "Customer satisfaction",
            description:
                "Delight your customers with personalized, responsive journeys that boost satisfaction and loyalty.",
        },
        {
            value: "44%",
            title: "Rise in revenue generation",
            description:
                "Unlock new revenue streams with data-driven insights, smarter cross-sell and upsell opportunities.",
        },
    ];

    function StatBlock({ stat, emphasize }) {
        return (
            <article className=' w-full h-full '>
                <p className=' font-poppins font-bold text-8xl text-[#B4B4B4] leading-20 uppercase mb-3 '>{stat.value}</p>
                <h2 className=' font-cervino font-semibold text-2xl text-[#222222] leading-7 uppercase mb-3 '>{stat.title}</h2>
                <p className=' font-cervino text-base leading-7 text-[#666666] '>{stat.description}</p>
            </article>
        )
    }

    return (
        <div className=' w-full min-h-screen bg-[#F2F2F2] relative py-24 px-14 '>

            {/* BG Multi Colors */}
            <div className=' absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 pointer-events-none '></div>
            <div className=' absolute left-1/2 -translate-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 pointer-events-none '></div>
            <div className=' absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30 pointer-events-none '></div>

            <div className=' w-full h-full space-y-16 relative z-50 '>
                <div className=' grid gap-10 grid-cols-3 items-center '>
                    <div className=' col-span-2 scroll-y-6 '>
                        <h2 className=' font-cervino text-[55px] leading-[75px] uppercase '>
                            Elevate your business with AI
                            <br />
                            Auto's proven impact
                        </h2>
                        <p className=' font-cervino text-base leading-7 text-[#666666] '>Join the league of forward-thinking businesses that have experienced a remarkable transformation through AI Auto's AI automation solutions. Our commitment to innovation and excellence has delivered tangible results that speak for themselves.</p>
                    </div>
                    <StatBlock stat={primaryStat} emphasize />
                </div>

                <div className=' grid gap-10 grid-cols-3 '>
                    {secondaryStats.map((stat) => (
                        <StatBlock key={stat.title} stat={stat} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default FactsSection