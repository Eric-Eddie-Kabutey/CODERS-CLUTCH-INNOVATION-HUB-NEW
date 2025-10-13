"use client";

import React, { useState } from "react";

const devData = [
  {
    title: "Web App Development",
    subtitle: "Your Unique Web Solution",
    description: `Your web presence is often the first connection with customers. Our skilled developers create intuitive web applications tailored to your needs, focusing on modern practices for scalability, performance, and security.`,
  },
  {
    title: "Mobile Development (Android/iOS)",
    subtitle: "Elevate Your Mobile Presence",
    description: `In today’s mobile-driven world, a strong mobile app is vital. Our experts craft user-friendly apps for Android and iOS, emphasizing responsive design, a smooth user experience, and platform-specific optimizations.`,
  },
  {
    title: "MVP Development",
    subtitle: "Launch Quickly, Refine Strategically",
    description: `Our MVP strategy gets you to market fast with essential features that showcase your product’s core value. This approach helps validate your idea and refine your product based on real user interactions.`,
  },
  {
    title: "Technical Planning",
    subtitle: "Build a Strong Tech Foundation",
    description: `Our tech architects work closely with you to define your product’s architecture, technology stack, and development roadmap. We ensure your product is built on a solid foundation for scalability, maintainability, and future enhancements.`,
  },
  {
    title: "Manual and Automated Testing",
    subtitle: "Ensure Quality, in Every Step",
    description: `Quality assurance is crucial. Our dedicated testing team combines manual and automated testing to ensure your product meets user expectations, functions seamlessly, and performs consistently, reducing errors and accelerating testing cycles.`,
  },
];

function ProductDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7fff6] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#350b29] rounded-3xl shadow-lg grid md:grid-cols-2 gap-12 p-10 md:p-16 text-white">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Product Development
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            In our product development phase, just like a symphony, we
            choreograph every note in partnership with you through the journey.
            Using appropriate technologies and methodologies we ensure the
            scalability and functionality of the product.
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg">
            Get a Quote
          </button>
        </div>

        {/* Right Side */}
        <div>
          {/* Section label above Web App Development */}
          <button className="bg-transparent border border-gray-400 text-gray-300 px-4 py-1 rounded-full text-sm italic mb-3 hover:text-emerald-400 hover:border-emerald-400 transition">
            What we do and build
          </button>

          {devData.map((item, index) => (
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

export default ProductDevelopment;
