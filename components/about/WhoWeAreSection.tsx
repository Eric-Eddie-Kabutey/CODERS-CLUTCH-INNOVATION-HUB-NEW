// components/WhoWeAreSection.tsx
import React from "react";

const leftListItems = [
  "Venture Creation and Scaling",
  "Digital Talent",
  "Skills Development Ecosystem",
  "Capital Access and Revenue Engine",
];

const rightListItems = [
  "Platform Development Hub",
  "(BIX) Exchange Program",
  "BIH Startup Catalyst Program",
];

export function WhoWeAreSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Main container, centered with max-width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column layout for larger screens */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* Left Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            {" "}
            {/* Slightly wider left column */}
            {/* Eyebrow Text */}
            <p className="text-sm font-medium text-gray-600 mb-3">
              {" // Who We Are"}
            </p>
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-black leading-tight tracking-tight mb-6 md:mb-8">
              We are a Digital Economy Venture Studio Building the Future of
              Africa&apos;s Financial Infrastructure.
            </h2>
            {/* First Paragraph on Left */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The BlueSPACE Innovation Hub – Digital Economy{" "}
              <strong className="font-semibold text-black">
                Venture Studio
              </strong>{" "}
              (BIH-DEVS) is a transformative innovation engine at the
              intersection of{" "}
              <strong className="font-semibold text-black">technology</strong>,{" "}
              <strong className="font-semibold text-black">talent</strong>, and{" "}
              <strong className="font-semibold text-black">capital</strong>.
            </p>
          </div>

          {/* Right Column */}
          <div className="mt-10 lg:mt-0 lg:col-span-5 xl:col-span-5">
            {/* Paragraph on Right */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10">
              As a venture studio—not a traditional accelerator or
              incubator—BIH-DEVS actively ideates, builds, launches, and scales
              its own high-impact digital ventures across key sectors of
              Africa&apos;s emerging digital economy.
            </p>

            {/* Two-column list layout within the right column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {/* First list (left side of the right column) */}
              <ul className="space-y-3">
                {leftListItems.map((item) => (
                  <li key={item} className="flex">
                    <span className="text-gray-700 mr-2">—</span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Second list (right side of the right column) */}
              <ul className="space-y-3">
                {rightListItems.map((item) => (
                  <li key={item} className="flex">
                    <span className="text-gray-700 mr-2">—</span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
