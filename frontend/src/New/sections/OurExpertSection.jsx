import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { assets } from '../assets/assest';

const OurExpertSection = () => {

    // Reusable hook for scroll in-view
    const useInView = () => {
        const ref = useRef(null);
        const [isInView, setIsInView] = useState(false);

        useEffect(() => {
            const element = ref.current;
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsInView(true);
                            observer.unobserve(entry.target); // animate once
                        }
                    });
                },
                {
                    threshold: 0.2,
                }
            );

            observer.observe(element);

            return () => {
                if (element) observer.unobserve(element);
            };
        }, []);

        return { ref, isInView };
    };

    // Single service row with scroll + hover animations
    const ServiceRow = ({ title, delay = 0 }) => {
        const { ref, isInView } = useInView();

        return (
            <div
                ref={ref}
                className={`
                    w-full h-full border-t border-[#666666]
                    flex justify-between items-center group relative
                    transform transition-all duration-700 ease-out
                    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: `${delay}ms` }}
            >
                <p className='font-cervino text-2xl sm:text-3xl leading-9 uppercase text-[#B4B4B4] group-hover:text-[#222222] group-hover:font-bold group-hover:text-4xl transition-all duration-700'>
                    {title}
                </p>

                <div className='text-2xl sm:text-3xl mr-5 sm:mr-10 text-[#B4B4B4] p-2 group-hover:bg-black group-hover:rounded-xl group-hover:text-white transition-all duration-700'>
                    <GoArrowUpRight className='group-hover:rotate-45 transition-all duration-700' />
                </div>

                <img
                    src={assets.serviceimg1}
                    alt="AI teamwork"
                    className='absolute top-1/2 right-[200px] -translate-y-1/2 h-52 w-[350px] object-contain opacity-0 group-hover:opacity-100 transition-all duration-700'
                />
            </div>
        );
    };

    // Heading block scroll animation
    const { ref: headerRef, isInView: headerInView } = useInView();

    return (
        <div className='w-full min-h-screen relative py-16 px-10 lg:py-24 lg:px-14 '>

            {/* BG Multi Colors */}
            <div className='absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80'></div>
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80'></div>
            <div className='absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80'></div>

            <div className='w-full h-full relative z-50'>
                <div
                    ref={headerRef}
                    className={`
                        max-w-5xl space-y-4
                        transform transition-all duration-700 ease-out
                        ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                    `}
                >
                    <h2 className='font-cervino text-[30px] leading-[45px] sm:text-[55px] sm:leading-[75px] uppercase'>
                        Our Expert Ai Automation
                        <br />
                        Services
                    </h2>
                    <p className='font-cervino text-base leading-7 text-[#666666] w-full sm:w-[70%]'>
                        Discover the pinnacle of efficiency and innovation through our Expert AI Automation Services.
                        Our seasoned professionals craft tailored solutions, seamlessly integrating cutting-edge AI
                        technology to optimize operations, enhance customer experiences,
                    </p>
                </div>

                <div className='w-full h-[500px] mt-10 flex flex-col'>

                    <ServiceRow title="Smart Process Enhancements" delay={150} />
                    <ServiceRow title="Insightful Data Mastery" delay={250} />
                    <ServiceRow title="Tailored Customer Journeys" delay={350} />

                    {/* last row with bottom border */}
                    <div className='w-full h-full border-b border-[#666666]'>
                        <ServiceRow title="Future-Proof Decisions" delay={450} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertSection
