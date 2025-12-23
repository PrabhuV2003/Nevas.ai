import React from "react";

const ICONS = {
  ml: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 4v16M4 12h6l2-4 3 8 2-4h3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  nlp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  vision: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  genai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  rl: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 18c6 0 6-12 12-12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 6v6h-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  edge: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

const SPECIALIZATIONS = [
  {
    title: "Machine Learning",
    icon: "ml",
    description:
      "We build ML models that can predict, classify, and recommend by learning from data over time.",
  },
  {
    title: "Natural Language Processing",
    icon: "nlp",
    description:
      "Our NLP systems understand, analyze, and generate human language.",
  },
  {
    title: "Computer Vision",
    icon: "vision",
    description:
      "We use image and video analysis to power applications like defect detection, face recognition, and AR apps.",
  },
  {
    title: "Generative AI",
    icon: "genai",
    description:
      "Our affordable generative AI development company builds applications that create new content using advanced LLMs and transformers.",
  },
  {
    title: "Reinforcement Learning",
    icon: "rl",
    description:
      "Our AI-based software development company develops systems that learn optimal actions through feedback.",
  },
  {
    title: "Edge AI",
    icon: "edge",
    description:
      "We design lightweight AI models that run on devices like sensors, cameras, or IoT devices for real-time decisions.",
  },
  {
    title: "Deep Learning",
    icon: "edge",
    description:
      "Our neural networks power complex tasks like speech recognition, emotion detection, and advanced predictions.",
  },
  {
    title: "Explainable AI (XAI)",
    icon: "edge",
    description:
      "We build AI systems that provide transparency and reasoning behind predictions.",
  },
  {
    title: "AI Ethics & Bias Mitigation",
    icon: "edge",
    description:
      "We implement fairness checks and bias mitigation strategies to ensure responsible AI outcomes.",
  },
];



const AiSpecializations = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-14 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-cervino uppercase text-[30px] sm:text-[45px] leading-tight">
            Specialized Areas of Artificial Intelligence
            <br /> We Excel In
          </h2>
          <p className="mt-4 text-[#555]">
            Core AI capabilities we leverage to solve complex business challenges.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SPECIALIZATIONS.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                p-8
                border border-[#ccc]
                bg-transparent
                transition-all duration-300
                hover:bg-white
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12 rounded-xl
                  flex items-center justify-center
                  mb-6
                  border border-[#999]
                  text-black
                  transition-all duration-300
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                {ICONS[item.icon]}
              </div>

              <h3 className="font-cervino uppercase text-lg mb-4 text-[#111]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiSpecializations;

