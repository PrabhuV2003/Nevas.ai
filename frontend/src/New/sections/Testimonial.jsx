import React, { useState, useEffect } from "react";

const testimonials = [
    {
        text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
        name: "Zen",
        role: "Author",
        img: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
    },
    {
        text: "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
        name: "Jonathan",
        role: "Treymont Inc.",
        img: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
    },
    {
        text: "Charlie Green is an European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
        name: "Charlie",
        role: "Hallmark Inc.",
        img: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
    },
    {
        text: "Sarah Dam is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.",
        name: "Sarah",
        role: "Zara Inc.",
        img: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
    },
];

const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Auto Slide Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000); // auto slide every 4 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center py-24 px-14">

            {/* BG Multi Colors */}
            <div className='absolute left-0 top-0 w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute left-1/2 -translate-x-1/2 top-0 w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute right-0 top-0 w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80 pointer-events-none'></div>

            {/* BG Multi Colors */}
            <div className='absolute left-0 -bottom-[208px] w-[379px] h-[442px] bg-[#FA9E59] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-[208px] w-[379px] h-[442px] bg-[#24AFCD] blur-[200px] opacity-80 pointer-events-none'></div>
            <div className='absolute right-0 -bottom-[208px] w-[379px] h-[442px] bg-[#DE8DC9] blur-[200px] opacity-80 pointer-events-none'></div>

            <main className="w-full max-w-[800px] relative z-50">
                <h2 className="font-cervino text-[45px] leading-[75px] uppercase text-center">
                    What People Are Saying
                </h2>
                <p className="font-cervino text-[20px] leading-3 uppercase text-center text-[#666666]">
                    Here are some testimonials from our satisfied customers
                </p>

                {/* Slider */}
                <div className="w-full overflow-hidden mt-20">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="relative flex w-full flex-shrink-0">
                                {/* Content card */}
                                <div className="z-20 flex h-[400px] w-full max-w-[520px] -translate-y-1/2 flex-col justify-between rounded-lg bg-white/70 p-8 text-[#4d4352] backdrop-blur-sm md:absolute md:left-0 md:top-1/2 md:h-[270px] md:p-11 max-md:static max-md:mt-10 max-md:h-auto max-md:translate-y-0 max-md:max-w-full">
                                    <p className="text-[1.25rem] leading-tight max-md:text-[0.9rem]">
                                        {item.text}
                                    </p>
                                    <div className="mt-8 md:mt-9">
                                        <h2 className="text-[1.5rem] font-semibold max-md:text-[1.2rem]">
                                            {item.name}
                                        </h2>
                                        <p className="text-sm">{item.role}</p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="pointer-events-none w-full absolute right-0 top-0 flex h-full items-center justify-end md:static md:h-[400px]">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-[320px] rounded-lg object-cover select-none max-md:w-[200px] max-md:h-[250px] max-sm:absolute max-sm:top-[60%] max-sm:h-[100px] max-sm:w-[100px] max-sm:z-10"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicator buttons */}
                <div className="mt-16 flex justify-center">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`mx-1 h-[15px] cursor-pointer rounded-full bg-white transition-all duration-500 ${currentIndex === index ? "w-[30px]" : "w-[15px]"
                                }`}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
};

export default TestimonialsSlider;
