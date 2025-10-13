"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Innovation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "Ideation & strategy",
      description:
        "Through our innovation workshops, proof of concept, customer discovery, and product research we refine your idea and create a solid roadmap for development.",
    },
    {
      title: "Design & development",
      description:
        "By deeply understanding your vision, the needs of the market, and the behavioral patterns of your potential customers, we design and build your MVP quickly and efficiently.",
    },
    {
      title: "Launch & scale",
      description:
        "We prepare your product for the market and help you attract users and investors.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b2027] text-white rounded-b-2xl w-full min-h-[auto] flex flex-col justify-between p-4 sm:p-6 md:p-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold pt-4 sm:pt-6">
            Our 3{" "}
            <span className="relative text-orange-600 after:absolute after:-inset-0.5 after:border after:border-orange-600 after:rounded-full after:-z-10">
              STEP
            </span>{" "}
            Process for Innovation
          </h2>

          <div className="mt-4 sm:mt-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border-t border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-left py-4 sm:py-5 px-4 sm:px-6 text-lg sm:text-xl font-semibold"
                >
                  <span className="mb-2 sm:mb-0">{step.title}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 bg-[#c3d3b5] text-gray-900 text-base sm:text-lg leading-relaxed">
                    <p>{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
