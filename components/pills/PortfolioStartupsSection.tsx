// components/PortfolioStartupsSection.js
"use client";

import React from "react";
import Image from "next/image";

const portfolioLogosData = [
  {
    id: "ametshop",
    src: "/logos/Custom-dimensions-200x100-px-15.png", // Replace with your actual logo path
    alt: "AmetShop Logo",
    // No containerBgClass: Assumes this logo looks good directly on the section's dark background,
    // or the PNG itself has the desired appearance including any necessary backdrop.
  },
  {
    id: "insurity",
    src: "/logos/Custom-dimensions-200x100-px-17.png", // Replace with your actual logo path
    alt: "Insurity Logo",
    containerBgClass: "bg-white", // This logo will be displayed on a white background
  },
  {
    id: "dibi",
    src: "/logos/Custom-dimensions-200x100-px-21.png", // Replace with your actual logo path
    alt: "Dibi Organics Logo",
    containerBgClass: "bg-white",
  },
  {
    id: "prodige",
    src: "/logos/Untitled-design-3.png", // Replace with your actual logo path
    alt: "Prodige Logo",
    containerBgClass: "bg-white",
  },
  {
    id: "flangar",
    src: "/logos/Untitled-design-5.png", // Replace with your actual logo path
    alt: "Flangar Logo",
    containerBgClass: "bg-blue-600", // This logo will be displayed on a blue background
  },
  {
    id: "bethniel",
    src: "/logos/Untitled-design-6.png", // Replace with your actual logo path
    alt: "Bethniel Financial Technology Logo",
    containerBgClass: "bg-white",
  },
  // Add more logos if needed
];

const PortfolioStartupsSection = () => {
  return (
    <section className="bg-neutral-950 text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/4 text-center lg:text-left shrink-0">
            {" "}
            {/* shrink-0 prevents it from shrinking too much */}
            <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider mb-3">
              {"    // Feature"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Portfolio <br className="hidden lg:block" />{" "}
              {/* Break line on large screens */}
              Startups
            </h2>
          </div>

          {/* Right Column: Logos Grid */}
          <div className="lg:w-3/4 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
              {portfolioLogosData.map((logo) => (
                <div
                  key={logo.id}
                  className={`
                    flex items-center justify-center p-3 sm:p-4 rounded-lg
                    h-20 sm:h-24 md:h-28 lg:h-[100px]  // Fixed height for all logo cells
                    ${
                      logo.containerBgClass || "bg-transparent"
                    } // Apply specified bg or default to transparent
                  `}
                >
                  {/* This inner div helps constrain the image size within the cell and centers it if smaller */}
                  <div className="relative w-full h-full max-w-[160px] max-h-[60px] sm:max-w-[180px] sm:max-h-[70px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      layout="fill"
                      objectFit="contain" // Ensures entire logo is visible and aspect ratio maintained
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStartupsSection;
