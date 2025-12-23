import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "Understand business goals, data readiness, and identify high-impact AI opportunities.",
    hover: "hover:-translate-y-2 hover:shadow-xl",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "Design scalable AI architectures, workflows, and ROI-driven implementation plans.",
    hover: "hover:scale-[1.03] hover:shadow-lg",
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "Develop, test, and integrate AI solutions seamlessly into existing systems.",
    hover: "hover:border-black hover:shadow-md",
  },
  {
    step: "04",
    title: "Deploy & Scale",
    description:
      "Deploy to production, monitor performance, and scale solutions across teams.",
    hover: "hover:shadow-xl group-hover:rotate-[1deg]",
  },
];

const OurWorkProcess = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-14 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="font-cervino uppercase text-[30px] sm:text-[45px] leading-tight">
            Our Work Process
          </h2>
          <p className="mt-4 text-[#555]">
            A structured, outcome-driven approach to delivering scalable AI solutions.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <div className="absolute top-[44px] left-0 right-0 h-[1px] bg-[#ccc]" />

          <div className="grid grid-cols-4 gap-10 relative z-10">
            {STEPS.map((item, index) => (
              <div
                key={index}
                className={`
                  group
                  bg-[#F7F7F7]
                  border border-[#ccc]
                  rounded-3xl
                  p-8
                  transition-all duration-300
                  ${item.hover}
                `}
              >
                {/* Step Circle */}
                <div className="mb-6">
                  <div
                    className="
                      w-10 h-10 rounded-full
                      border border-[#999]
                      flex items-center justify-center
                      text-sm text-[#666]
                      bg-[#F2F2F2]
                      transition-all duration-300
                      group-hover:bg-black
                      group-hover:text-white
                    "
                  >
                    {item.step}
                  </div>
                </div>

                <h3 className="font-cervino uppercase text-lg mb-4 text-[#111]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-[#ccc]" />

          <div className="space-y-10">
            {STEPS.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-[#F7F7F7]
                  border border-[#ccc]
                  rounded-3xl
                  p-6
                  transition-all duration-300
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    absolute -left-6 top-6
                    w-8 h-8 rounded-full
                    border border-[#999]
                    flex items-center justify-center
                    text-xs text-[#666]
                    bg-[#F2F2F2]
                    group-hover:bg-black
                    group-hover:text-white
                    transition-all
                  "
                >
                  {item.step}
                </div>

                <h3 className="font-cervino uppercase text-base mb-3 text-[#111]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurWorkProcess;
