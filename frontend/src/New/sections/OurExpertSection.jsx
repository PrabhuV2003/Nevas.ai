import React, { useEffect, useRef, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { assets } from '../assets/assest';

/* ---------- reusable in-view hook ---------- */
const useInView = (threshold = 0.2) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
};

/* ---------- service row ---------- */
const ServiceRow = ({ title, desc, delay = 0 }) => {
    const { ref, isInView } = useInView();

    return (
        <div
            ref={ref}
            className={`
        relative w-full border-t border-[#666666]
        flex flex-col
        py-6 sm:py-8
        transition-all duration-700 ease-out group
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* ROW CONTENT */}
            <div className="flex items-center justify-between">
                {/* title */}
                <p className="
          font-cervino uppercase text-[#B4B4B4]
          text-lg sm:text-2xl lg:text-3xl
          transition-all duration-500
          group-hover:text-[#222222]
          group-hover:font-bold
          lg:group-hover:text-4xl
        ">
                    {title}
                </p>

                {/* arrow */}
                <div className="
          text-xl sm:text-2xl lg:text-3xl
          text-[#B4B4B4] p-2 mr-2 sm:mr-6
          transition-all duration-500
          group-hover:bg-black group-hover:text-white
          group-hover:rounded-xl
        ">
                    <GoArrowUpRight className="group-hover:rotate-45 transition-all duration-500" />
                </div>
            </div>

            {/* HOVER DESCRIPTION */}
            <p
                className="
          max-w-2xl mt-2
          font-cervino text-sm sm:text-base
          text-[#666666]
          leading-6
          opacity-0 translate-y-2
          transition-all duration-500
          group-hover:opacity-100 group-hover:translate-y-0
        "
            >
                {desc}
            </p>

            {/* hover image (desktop only) */}
            <img
                src={assets.serviceimg1}
                alt=""
                className="
          hidden lg:block
          absolute top-1/2 right-[180px]
          -translate-y-1/2
          h-44 w-[300px]
          object-contain
          opacity-0 group-hover:opacity-100
          transition-all duration-700
        "
            />
        </div>
    );
};

const OurExpertSection = () => {
    const { ref: headerRef, isInView: headerInView } = useInView();

    return (
        <section className="
      relative w-full overflow-hidden
      py-16 sm:py-20 lg:py-24
      px-4 sm:px-6 lg:px-14
    ">

            {/* BG Blobs */}
            <div className="absolute left-0 -bottom-48 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#FA9E59] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-48 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#24AFCD] blur-[160px] sm:blur-[200px] opacity-60" />
            <div className="absolute right-0 -bottom-48 w-48 h-60 sm:w-[379px] sm:h-[442px] bg-[#DE8DC9] blur-[160px] sm:blur-[200px] opacity-60" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* header */}
                <div
                    ref={headerRef}
                    className={`
            max-w-4xl space-y-4
            transition-all duration-700
            ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
                >
                    <h2 className="
            font-cervino uppercase
            text-[26px] leading-[36px]
            sm:text-[40px] sm:leading-[55px]
            lg:text-[55px] lg:leading-[75px]
          ">
                        Our Expert AI Automation
                        <br /> Services
                    </h2>

                    <p className="
            font-cervino text-sm sm:text-base
            leading-6 sm:leading-7
            text-[#666666]
            max-w-2xl
          ">
                        Discover the pinnacle of efficiency and innovation through our Expert AI Automation
                        Services. Our seasoned professionals craft tailored solutions using cutting-edge AI.
                    </p>
                </div>

                {/* services */}
                <div className="mt-10 flex flex-col">
                    <ServiceRow
                        title="Smart Process Enhancements"
                        desc="Automate repetitive workflows and optimize operations with intelligent AI-driven process improvements."
                        delay={150}
                    />
                    <ServiceRow
                        title="Insightful Data Mastery"
                        desc="Turn raw data into actionable insights using predictive analytics and real-time intelligence."
                        delay={250}
                    />
                    <ServiceRow
                        title="Tailored Customer Journeys"
                        desc="Deliver hyper-personalized customer experiences across every touchpoint using AI automation."
                        delay={350}
                    />
                    <div className="border-b border-[#666666]">
                        <ServiceRow
                            title="Future-Proof Decisions"
                            desc="Leverage AI-powered forecasting and decision intelligence to stay ahead in a changing market."
                            delay={450}
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default OurExpertSection;
