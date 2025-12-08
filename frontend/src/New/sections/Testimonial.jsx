import React, { useEffect, useState } from 'react'

const Testimonial = () => {

    const TESTIMONIALS = [
        {
            id: 1,
            name: "Kashen Bhatti",
            role: "Owner",
            quote: "I had been searching for a product like this for months and finally found it here. The team was extremely helpful in answering all of my questions and ensuring I was completely satisfied with my purchase. I couldn't be happier!",
            image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 2,
            name: "Abdul Rehman",
            role: "Co-Owner",
            quote: "The team was incredibly supportive from day one. Their attention to detail and quick responses made the entire experience smooth and stress free. I’d absolutely recommend them to anyone.",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 3,
            name: "Hammad Ali",
            role: "CTO",
            quote: "Their product quality and customer support exceeded my expectations. We were able to get up and running quickly and the impact on our business has been fantastic.",
            image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: 4,
            name: "Kashen Bhatti",
            role: "Owner",
            quote: "I had been searching for a product like this for months and finally found it here. The team was extremely helpful in answering all of my questions and ensuring I was completely satisfied with my purchase. I couldn't be happier!",
            image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
    ]

    const AUTO_PLAY_DELAY = 7000;

    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, AUTO_PLAY_DELAY);

        return () => clearInterval(id);
    }, []);

    return (
        <div className=' w-full min-h-screen bg-[#F2F2F2] py-24 px-14 relative '>

            {/* BG Multi Colors */}
            <div className=' absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-30 '></div>
            <div className=' absolute left-1/2 -translate-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-30 '></div>
            <div className=' absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-30 '></div>

            <div className=' w-full h-full z-50 flex flex-col justify-center items-center '>
                <h1 className=' font-cervino text-[55px] leading-[75px] uppercase mb-2.5 '>What People Are Saying </h1>
                <p className=' font-cervino text-2xl leading-8 uppercase text-[#666666] mb-5 '>Here are some testimonials from our satisfied customers</p>

                <div className=' w-full h-[300px] flex justify-center items-center gap-3.5 overflow-scroll '>
                    {TESTIMONIALS.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <article key={item.id} aria-label={`${item.name} testtimonial`} className={[
                                "group flex w-[85%] max-w-[960px] flex-col items-center gap-6 rounded-[32px] border border-white/60 bg-white/90 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-500 sm:flex-row sm:px-10 sm:py-10",
                                "md:w-[70%] lg:w-[60%]",
                                isActive
                                    ? "scale-100 opacity-100"
                                    : "scale-[0.94] opacity-40 blur-[1px]",
                            ].join(" ")}>
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <div className="overflow-hidden rounded-[28px] bg-slate-900">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-40 w-40 object-cover sm:h-48 sm:w-48"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative flex-1">
                                    {/* Quote mark top-right */}
                                    <div className="pointer-events-none absolute -right-1 -top-2 text-3xl text-slate-200 sm:-right-3 sm:-top-4 sm:text-4xl">
                                        <span aria-hidden="true">“</span>
                                    </div>

                                    <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                                        {item.quote}
                                    </p>

                                    <div className="mt-6 flex flex-col items-start gap-1">
                                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                                            {item.name}
                                        </span>
                                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                                            {item.role}
                                        </span>
                                    </div>

                                    {/* Closing quote bottom-right */}
                                    <div className="pointer-events-none absolute -bottom-1 right-0 text-2xl text-slate-200 sm:-bottom-3 sm:text-3xl">
                                        <span aria-hidden="true">”</span>
                                    </div>
                                </div>

                            </article>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Testimonial