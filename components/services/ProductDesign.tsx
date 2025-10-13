"use client";

import React, { useState } from "react";

const designData = [
  {
    title: "Design Research",
    subtitle: "Understand Your Users",
    description: `Design research is the foundation of a successful product. We dive deep into your idea and your audience, conducting interviews, surveys, and market analysis to uncover what your users really need and prefer.

This knowledge guides our design choices, making sure your product resonates with its intended users.`,
  },
  {
    title: "Brand Development",
    subtitle: "Create Your Identity",
    description: `Creating a strong brand identity is crucial for your product’s success. Our branding experts work closely with you to define your product’s values, mission, and unique selling points. We tell your brand story through a compelling narrative, logo, color palette, and visual elements that effectively convey your product’s essence to your audience.`,
  },
  {
    title: "UI Design",
    subtitle: "Enhance User Interactions",
    description: `User Interface (UI) design focuses on the visual elements users interact with. Our skilled designers translate your brand identity and user needs into a visually captivating interface. They ensure consistency, usability, and aesthetics, resulting in a design that boosts user engagement and mirrors your product’s personality.`,
  },
  {
    title: "UX Design",
    subtitle: "Create Seamless Experiences",
    description: `User Experience (UX) design aims to make your product intuitive, enjoyable, and efficient to use. Our UX designers develop user journeys, wireframes, and interactive prototypes that outline the user flow and functionality. Their goal is to provide an experience that seamlessly meets user needs, from onboarding to task completion.`,
  },
  {
    title: "UX Audit",
    subtitle: "Improve User Experience",
    description: `A UX audit critically assesses your product’s existing user experience. Our experts evaluate usability, navigation, and the overall user journey. They identify pain points, areas of improvement, and potential bottlenecks. The audit leads to actionable recommendations for enhancing the user experience, ensuring your product aligns with industry best practices.`,
  },
];

function ProductDesign() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7fff6] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#0b2027] rounded-3xl shadow-lg grid md:grid-cols-2 gap-12 p-10 md:p-16 text-white">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Design</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            By deeply understanding your vision, the needs of the market, and the
            behavioral patterns of your potential customers, we design a
            user-driven product that resonates with your audience and simplifies
            their journey while solving their problems.
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg">
            Schedule a Call
          </button>
        </div>

        {/* Right Side */}
        <div>
          {/* Section label above Design Research */}
          <button className="bg-transparent border border-gray-400 text-gray-300 px-4 py-1 rounded-full text-sm italic mb-3 hover:text-emerald-400 hover:border-emerald-400 transition">
            Design Approach
          </button>

          {designData.map((item, index) => (
            <div key={index} className="border-b border-gray-600 py-4">
              {/* Accordion header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between w-full text-left text-lg font-medium text-white hover:text-emerald-400 transition-all"
              >
                {item.title}
                <span className="text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Accordion content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                <div className="text-gray-300 space-y-2 pr-2">
                  <h4 className="font-semibold text-white">{item.subtitle}</h4>
                  <p className="whitespace-pre-line">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDesign;
