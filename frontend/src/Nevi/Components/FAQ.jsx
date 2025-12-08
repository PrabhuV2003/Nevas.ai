import React, { useState } from "react";
import { assets } from "../assets/assets";

const faqs = [
    {
        question: "Can the chatbot recommend sizes and styles?",
        answer:
            "Yes. Our AI analyzes customer measurements and purchase history to suggest the perfect size and on-trend styles in real time.",
    },
    {
        question: "Does it support multilingual voice chat for global customers?",
        answer:
            "Absolutely. The platform offers voice commerce in 15+ languages, including Hindi, Tamil, and Bengali, for seamless international engagement.",
    },
    {
        question: "Can I customize the avatar to fit my fashion brand?",
        answer:
            "Yes—you can upload your logo, choose colors, and fine-tune the avatar’s look and tone to match your brand’s aesthetic.",
    },
    {
        question: "How quickly can I deploy the chatbot on my e-commerce site?",
        answer:
            "You can launch in under 3 minutes: sign up, connect your product catalog, and embed the widget—no coding required.",
    },
    {
        question: "Will it integrate with my existing fashion platforms and CRM?",
        answer:
            "Our chatbot supports native integrations with leading e-commerce, CRM, and inventory systems—plus APIs for custom connections.",
    },
    {
        question: "Is customer data kept secure and compliant?",
        answer:
            "Yes. We are GDPR- and SOC 2 Type II–compliant, with end-to-end encryption and audit logs to ensure complete data privacy.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative w-full min-h-screen px-10 py-10 bg-[#e8eaf1]">
            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4080F57A] via-[#4C55DB3D] to-[#572AC27A]" />

            {/* Section header */}
            <div className="w-28 h-9 m-auto bg-gradient-to-r from-primay to-secoundary rounded-full p-0.5">
                <div className="w-full h-full flex justify-center items-center text-center [background:linear-gradient(90deg,#E6ECFE_0%,#EAE5FA_100%)] rounded-full">
                    <p className="gradient-text font-outfit">FAQ's</p>
                </div>
            </div>

            <h1 className="w-full text-center text-6xl text-[#374151] leading-[76px] font-outfit my-5">
                Frequently Asked Questions
            </h1>

            <div className="w-full flex gap-10">
                {/* Left: FAQ list */}
                <div className="w-8/12 flex flex-col gap-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="w-full bg-gradient-to-r from-[#4080F57A] via-[#4C55DB3D] to-[#572AC27A] rounded-xl p-0.5"
                        >
                            <div
                                onClick={() => toggleFAQ(index)}
                                className="w-full bg-white rounded-[11px] p-4 cursor-pointer"
                            >
                                {/* Question row */}
                                <div className="flex items-center justify-between">
                                    <p className="text-[#222222] text-base leading-8 font-outfit">
                                        {faq.question}
                                    </p>

                                    {/* Plus → Minus animation */}
                                    <div
                                        className={`w-5 h-5 relative transform transition-transform duration-500 ${openIndex === index ? "rotate-45" : "rotate-0"
                                            }`}
                                    >
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 rounded-full bg-gradient-to-r from-primay to-secoundary"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 rounded-full bg-gradient-to-r from-primay to-secoundary rotate-90"></div>
                                    </div>
                                </div>

                                {/* Answer (expand/collapse) */}
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="w-full h-[1px] my-2 bg-gradient-to-r from-primay to-secoundary" />
                                    <p className="text-[#222222] text-sm font-outfit font-light leading-7">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Placeholder blocks */}
                <div className="w-4/12 flex flex-col gap-5">
                    <div className=" w-full h-9/12 p-0.5 bg-gradient-to-r from-[#4080F57A] via-[#4C55DB3D] to-[#572AC27A] rounded-2xl ">
                        <div className="w-full h-full bg-white flex flex-col justify-center items-center gap-2.5 rounded-[15px]">
                            <img src={assets.ContactIcon} alt="" />
                            <p className=" gradient-text text-3xl leading-10 w-9/12 text-center font-outfit ">You have different question?</p>
                            <p className=" text-[#222222E0] text-center w-9/12 font-outfit ">Start freem scake as you grow, All plans include 24/7 support.</p>
                            <button className=" w-40 h-14 bg-gradient-to-r from-primay to-secoundary rounded-full outline [box-shadow:0px_0px_16px_rgba(64,128,245,0.36)] cursor-pointer ">Contact Us</button>
                        </div>
                    </div>
                    <div className=" w-full h-3/12 p-0.5 bg-gradient-to-r from-[#4080F57A] via-[#4C55DB3D] to-[#572AC27A] rounded-2xl ">
                        <div className=" w-full h-full bg-white rounded-[15px] flex justify-center items-center " >
                            <div className=" w-10/12 h-full flex items-center justify-center gap-3 ">
                                <div className=" w-16 h-16 bg-gradient-to-r from-[#4080F5]/10 to-[#572AC2]/10 rounded-full flex justify-center items-center ">
                                    <img src={assets.Phone_Icon} alt="" />
                                </div>
                                <div className=" flex flex-col justify-start ">
                                    <p className=" font-outfit text-[#222222] text-base leading-5 ">Your Comfort, Our Prority</p>
                                    <p className=" gradient-text text-xl font-semibold font-outfit leading-9 ">(123) 456 - 789</p>
                                    <p className=" font-outfit text-base text-secoundary leading-6 ">24/7 Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
