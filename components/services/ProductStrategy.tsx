"use client";

import React, { useState } from "react";

const strategyData = [
  {
    title: "Vision & Mission Development",
    subtitle: "Craft Purposeful Direction",
    description: `We’ll help you define a compelling vision and mission that embodies your product and resonates with your audience.

At the core of any successful business is a compelling vision and mission. We partner closely with you to craft a vision and mission that not only captures your product’s essence but also deeply resonates with your target audience.`,
  },
  {
    title: "Target Audience Research",
    subtitle: "Get to Know Your Customers",
    description: `Our experts dive deep into audience research to uncover who your customers are, what they like, what bothers them, and how they behave.`,
  },
  {
    title: "Product Positioning",
    subtitle: "Stand Out in the Market",
    description: `Discover how our team will create a strategy to make your product shine and show why it’s the best choice for your target audience.`,
  },
  {
    title: "Pricing Strategy",
    subtitle: "Balance Value and Cost",
    description: `Learn how we’ll work with you to set the right price that reflects your product’s value while staying competitive in the market.`,
  },
  {
    title: "Business Model Design",
    subtitle: "Sustainable Success Planning",
    description: `Find out how we’ll collaborate to design a business model that fits your product’s vision, revenue, and scalability.`,
  },
  {
    title: "Competitive Analysis",
    subtitle: "Understand your Competitors",
    description: `Explore how we’ll analyze your competitors to identify market opportunities and ways to outperform them.`,
  },
  {
    title: "Product Roadmap Design",
    subtitle: "Guiding Your Product’s Journey",
    description: `Discover how we’ll create a roadmap outlining your product’s evolution, aligning it with your business goals and development strategy.`,
  },
];

function ProductStrategy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7fff6] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#003d51] rounded-3xl shadow-lg grid md:grid-cols-2 gap-12 p-10 md:p-16 text-white">
        
        {/* Left side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Strategy</h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            From a product strategy point of view, our approach is
            straightforward: we immerse ourselves in your ideas, dissect the
            challenges, and then design a roadmap that aligns technology with
            your vision, ensuring your product sails smoothly from conception to
            realization.
          </p>

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg">
            Book a Strategy Call
          </button>
        </div>

        {/* Right side */}
        <div>
          {/* Strategy Approach label above Vision */}
          <button className="bg-transparent border border-gray-400 text-gray-300 px-4 py-1 rounded-full text-sm italic mb-3 hover:text-emerald-400 hover:border-emerald-400 transition">
            Strategy Approach
          </button>

          {strategyData.map((item, index) => (
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

export default ProductStrategy;
