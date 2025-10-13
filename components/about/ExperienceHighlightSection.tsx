// components/OurExperienceSection.tsx
// (You can name this file and component as you see fit for your project)
import React from "react";

export function ExperienceHighlightSection() {
  return (
    // Section with a very light gray background and appropriate vertical padding
    <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
      {/* 
        This inner div centers the content and, critically, sets its max-width.
        'max-w-3xl' makes the text column narrower, similar to the image. 
        If it needs to be slightly wider, you could try 'max-w-4xl'.
        The text is left-aligned within this constrained width.
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        {/* Eyebrow Text: "Our Experience" */}
        <p className="text-sm font-medium text-gray-500 mb-3 sm:mb-4 text-left">
          Our Experience
        </p>

        {/* Main Heading */}
        <h1 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-bold text-gray-900 leading-tight tracking-tight mb-6 sm:mb-8">
          40yrs approximate
          <br />
          experience combined
        </h1>

        {/* Descriptive Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          The BlueSPACE Innovation Hub – Digital Economy{" "}
          <strong className="font-bold text-gray-900">Venture Studio</strong>{" "}
          (BIH-DEVS) is a transformative innovation engine at the intersection
          of <strong className="font-bold text-gray-900">technology</strong>,{" "}
          <strong className="font-bold text-gray-900">talent</strong>, and{" "}
          <strong className="font-bold text-gray-900">capital</strong>.
        </p>
      </div>
    </section>
  );
}
