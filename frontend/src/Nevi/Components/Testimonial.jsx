import React from 'react'
import { FaStar } from "react-icons/fa";
import { assets } from '../assets/assets';

const testimonials = [
    {
        name: "Leslie Alexander",
        role: "Head of Customer Success",
        rating: 5,
        review:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
        image: assets.TestimonialImg,
    },
    {
        name: "Jacob Jones",
        role: "Product Manager",
        rating: 3,
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
        image: assets.TestimonialImg,
    },
    {
        name: "Eleanor Pena",
        role: "Chief Marketing Officer",
        rating: 5,
        review:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        image: assets.TestimonialImg,
    },
    {
        name: "Eleanor Pena",
        role: "Chief Marketing Officer",
        rating: 5,
        review:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        image: assets.TestimonialImg,
    },
    {
        name: "Eleanor Pena",
        role: "Chief Marketing Officer",
        rating: 5,
        review:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        image: assets.TestimonialImg,
    },
];

const Testimonial = () => {
    return (
            <div className="relative w-full h-screen bg-[#e8eaf1] px-10 flex">
                <div className=' absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4080F57A] via-[#4C55DB3D] to-[#572AC27A] z-20 '></div>
                {/* Left Section */}
                <div className="w-9/12 h-full flex flex-col justify-center">
                    <div className="w-48 h-9 bg-gradient-to-r from-primay to-secoundary rounded-full p-0.5">
                        <div className="w-full h-full flex justify-center items-center text-center [background:linear-gradient(90deg,#E6ECFE_0%,#EAE5FA_100%)] rounded-full">
                            <p className="gradient-text font-outfit">Client Testimonials</p>
                        </div>
                    </div>
                    <h1 className="text-6xl text-[#374151] leading-[70px] font-outfit my-5">
                        Truested by <br /> Industry Leaders
                    </h1>
                    <p className="text-[#666666] text-[20px] font-outfit leading-6">
                        "Our customers now get instant, 24/7 support, <br /> enhancing satisfaction and reducing wait times."
                    </p>
                </div>

                {/* Right Section */}
                <div className=" relative w-full h-full flex gap-5 testimonialCards">
                    <div className=' absolute w-full h-32 bg-gradient-to-b from-[#e8eaf1] to-transparent opacity-80 top-0 right-0 z-10 select-none pointer-events-none '></div>
                    <div className=' absolute w-full h-32 bg-gradient-to-b from-transparent to-[#e8eaf1] opacity-80 bottom-0 right-0 z-10 select-none pointer-events-none '></div>
                    {/* Left Testimonial Cards */}
                    <div className="w-full h-full overflow-hidden">
                        <div className='animate-scroll1'>
                            {testimonials.map((t, index) => (
                                <div
                                    key={index}
                                    className=" w-full h-60 rounded-2xl p-[1px] shadow-[0px_0px_20px_#E6E6E6] group bg-transparent bg-gradient-to-r from-transparent to-transparent hover:from-primay hover:to-secoundary transition-colors duration-500 ease-in-out mb-5"
                                >
                                    <div className="w-full h-full bg-white rounded-2xl p-2">
                                        {/* Top (Image + Name + Role + Rating) */}
                                        <div className="w-full h-6/12 flex items-center gap-2">
                                            <div className="w-7/12 h-full bg-gradient-to-r from-[#4080F5]/50 to-[#572AC2]/50 rounded-[16px_56px_56px_0px] flex justify-center items-center group-hover:from-[#4080F5] group-hover:to-[#572AC2] duration-500 transition-colors ease-in-out">
                                                <img src={t.image} alt={t.name} className="mb-3.5 mr-1" />
                                            </div>
                                            <div className="w-full h-full p-2.5 flex flex-col justify-center">
                                                <p className="text-lg leading-6 text-[#222222] font-semibold font-outfit">
                                                    {t.name}
                                                </p>
                                                <p className="text-[#606060] text-sm leading-4 my-1.5 font-outfit">
                                                    {t.role}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-1 text-[#FFB900]">
                                                        {Array(t.rating)
                                                            .fill()
                                                            .map((_, i) => (
                                                                <FaStar key={i} />
                                                            ))}
                                                    </div>
                                                    <p className="text-base leading-5 text-[#222222] ml-1.5 font-outfit">
                                                        {t.rating}.0
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Review */}
                                        <div className="w-full h-6/12 p-2.5">
                                            <p className="text-[#666666] text-base leading-5 font-outfit">
                                                {t.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Testimonial Cards */}
                    <div className="w-full h-full overflow-hidden ">
                        <div className='animate-scroll'>
                            {[...testimonials].reverse().map((t, index) => (
                                <div
                                    key={index}
                                    className="relative w-full h-60 rounded-2xl p-[1px] shadow-[0px_0px_20px_#E6E6E6] group bg-transparent bg-gradient-to-r from-transparent to-transparent hover:from-primay hover:to-secoundary transition-colors duration-500 ease-in-out mb-5"
                                >
                                    <div className="w-full h-full bg-white rounded-2xl p-2">
                                        {/* Top (Image + Name + Role + Rating) */}
                                        <div className="w-full h-6/12 flex items-center gap-2">
                                            <div className="w-7/12 h-full bg-gradient-to-r from-[#4080F5]/50 to-[#572AC2]/50 rounded-[16px_56px_56px_0px] flex justify-center items-center group-hover:from-[#4080F5] group-hover:to-[#572AC2] duration-500 transition-colors ease-in-out">
                                                <img src={t.image} alt={t.name} className="mb-3.5 mr-1" />
                                            </div>
                                            <div className="w-full h-full p-2.5 flex flex-col justify-center">
                                                <p className="text-lg leading-6 text-[#222222] font-semibold font-outfit">
                                                    {t.name}
                                                </p>
                                                <p className="text-[#606060] text-sm leading-4 my-1.5 font-outfit">
                                                    {t.role}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex gap-1 text-[#FFB900]">
                                                        {Array(t.rating)
                                                            .fill()
                                                            .map((_, i) => (
                                                                <FaStar key={i} />
                                                            ))}
                                                    </div>
                                                    <p className="text-base leading-5 text-[#222222] ml-1.5 font-outfit">
                                                        {t.rating}.0
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Review */}
                                        <div className="w-full h-6/12 p-2.5">
                                            <p className="text-[#666666] text-base leading-5 font-outfit">
                                                {t.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonial;
