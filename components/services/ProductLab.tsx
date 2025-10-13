"use client";

import React, { useState } from "react";

const accordionData = [
  {
    title: "Innovation Workshop",
    subtitle: "Discover and Innovate with Us!",
    description: `Join our Innovation Workshop, a dynamic session where you collaborate with our experts to brainstorm, generate ideas, and explore innovative solutions.
We guide you through structured activities to uncover the core of your idea, pinpoint potential challenges, and ignite creative thinking. By the end of this workshop, you'll gain a clearer vision of your product's unique value and receive a roadmap to guide your next steps.`,
  },
  {
    title: "Proof of Concept (PoC)",
    subtitle: "Visualize Your Idea",
    description: `In the Proof of Concept phase, we focus on proving the feasibility of your idea. Working closely with you, we create a scaled-down version of your product that showcases its core functionality. 
Our development team builds a prototype, providing you with a tangible representation of how your product will function.

This not only helps you visualize your concept but also aids in attracting potential investors or stakeholders by demonstrating its technical viability.`,
  },
  {
    title: "Idea Validation",
    subtitle: "Validate Your Vision",
    description: `To ensure your concept resonates with your target market, our market research experts dive deep, conducting comprehensive analyses to determine the demand for your product. 
We engage potential users through surveys, interviews, and focus groups to validate your concept’s value and fine-tune your product’s features based on real-world feedback.`,
  },
  {
    title: "Customer Discovery",
    subtitle: "Understand Your Users",
    description: `In this phase you discover the needs, pain points, and preferences of your potential users. Our team conducts interviews and engages in direct conversations with your target audience.

By delving deep into their motivations and behaviors, we help you tailor your product to meet their specific needs, resulting in a solution that truly resonates with your customers.`,
  },
  {
    title: "Product Research",
    subtitle: "Position for Success",
    description: `In the product research phase, we thoroughly analyze the competitive landscape and identify market trends to inform your product’s positioning and features. 
Our team investigates similar solutions, evaluates their strengths and weaknesses, and identifies gaps in the market.

This research guides our strategy in crafting a product that stands out and addresses unmet needs.`,
  },
];

function ProductLab() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7fff6] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#0b2027] rounded-3xl shadow-lg grid md:grid-cols-2 gap-12 p-10 md:p-16 text-white">
        
        {/* Left side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Lab</h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Our product lab empowers non-tech founders to effectively navigate
            the challenges of product development. Through our innovation
            workshops, ideation validation, proof of concept, customer
            discovery, and product research, we turn ideas into successful
            products.
          </p>

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-full font-medium text-base transition-all duration-300 shadow-md hover:shadow-lg">
            Book a Strategy Call
          </button>
        </div>

        {/* Right side */}
        <div>
          {/* How we deliver button */}
          <div className="flex justify-start mb-4">
            <button className="bg-transparent border border-gray-400 text-gray-300 px-4 py-1 rounded-full text-sm italic hover:text-emerald-400 hover:border-emerald-400 transition">
              How we deliver
            </button>
          </div>

          {/* Accordion */}
          {accordionData.map((item, index) => (
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

              {/* Accordion content with slide animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                <div className="text-gray-300 space-y-2 pr-2">
                  <h4 className="font-semibold text-white">
                    {item.subtitle}
                  </h4>
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

export default ProductLab;
