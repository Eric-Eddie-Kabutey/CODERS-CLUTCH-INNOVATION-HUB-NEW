"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Sobaz Case Study",
    description:
      "Repositioning Sobaz for Expansion and Market Leadership",
    image: "https://kedrus.io/wp-content/uploads/2025/02/SOBAZ-19.png",
  },
  {
    title: "Techtron Systems Case Study",
    description:
      "Establishing a Strong Digital Presence for Techtron Systems Ltd with custom web solutions, brand expression and marketing automations.",
    image: "https://kedrus.io/wp-content/uploads/2025/02/TSL-2.jpg",
  },
  {
    title: "B2B VitalSwap Case Study",
    description:
      "Enabling Seamless B2B Payments Between Africa and America with Vital Swap",
    image: "https://kedrus.io/wp-content/uploads/2024/07/VitalSwap-Case-study-7.png",
  },
];

function CaseStudies() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section className="w-full bg-[#ffffff] py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">Case Studies</h2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl p-6"
          >
            {/* Left: Optimized Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full h-80 max-w-md">
                <Image
                  src={caseStudies[index].image}
                  alt={caseStudies[index].title}
                  fill
                  className="rounded-xl shadow-md object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center bg-[#0b2027] text-white p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                {caseStudies[index].title}
              </h3>
              <p className="text-base mb-6 leading-relaxed">
                {caseStudies[index].description}
              </p>
              <Button className="bg-[#e6f6d2] text-black hover:bg-[#FFA500] w-fit px-6 py-2 rounded-2xl shadow">
                View Project
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#0b2027] p-2 rounded-full text-white shadow-md hover:bg-[#12323c]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#0b2027] p-2 rounded-full text-white shadow-md hover:bg-[#12323c]"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slide Indicator */}
      <p className="mt-4 text-sm text-gray-600">
        {index + 1} / {caseStudies.length}
      </p>

      <Button className="mt-8 bg-green-700 hover:bg-green-800 px-6 py-2 rounded-2xl shadow">
        See all Case Study
      </Button>
    </section>
  );
}

export default CaseStudies;
