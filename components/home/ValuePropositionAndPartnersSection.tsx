"use client";
import React, { useState } from "react";
import { Play, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder images - replace with your actual image paths

const ValuePropositionAndPartnersSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const valuePropositions = [
    {
      title: "End-to-End Ecosystem",
      description:
        "BIH-DEVS covers every phase of venture building—from idea to exit—via its integrated five-pillar model.",
    },
    {
      title: "AI-Powered Infrastructure",
      description:
        "Leveraging cutting-edge AI to drive innovation and efficiency across all operations.",
    },
    {
      title: "Capital Leadership",
      description:
        "Strategic funding approaches that maximize growth and sustainability.",
    },
    {
      title: "Talent as a Core Asset",
      description:
        "Investing in human capital as the foundation of all successful ventures.",
    },
    {
      title: "Pan-African Ambition",
      description:
        "A continent-wide vision with localized execution strategies.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const partners = [
    {
      name: "Blossom Academy",
      logo: "/home/Custom-dimensions-200x100-px-1.png",
    },
    {
      name: "Lancaster University",
      logo: "/home/Custom-dimensions-200x100-px-2.png",
    },
    {
      name: "Innovation Spark",
      logo: "/home/Custom-dimensions-200x100-px-3.png",
    },
    {
      name: "Ghana Communication Technology University",
      logo: "/home/Custom-dimensions-200x100-px-4.png",
    },
    {
      name: "Ghana  Technology University",
      logo: "/home/Custom-dimensions-200x100-px-6.png",
    },
    {
      name: "  Technology University",
      logo: "/home/Custom-dimensions-200x100-px-7.png",
    },
  ];

  return (
    <div className="bg-white font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Value Proposition Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16 md:mb-24">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm text-gray-500 mb-2">{"// Our Value"}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              BIH Unique
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              Value Proposition
            </h2>

            <div className="space-y-2">
              {valuePropositions.map((item, index) => (
                <div
                  key={item.title}
                  className="py-3 border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <span className="text-base  font-bold text-black">
                        {item.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 pl-0 md:pl-4 text-sm md:text-base text-gray-700 leading-relaxed">
                          {item.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image - Now matches left column width */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/4] w-full">
              <Image
                fill
                src="/home/Startup-Malta-2-1-scaled.jpg"
                alt="BIH Value Proposition - Startup Festival"
                className="rounded-lg shadow-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play video"
                className="absolute top-4 left-4 w-14 h-14 md:w-16 md:h-16 bg-[#00A99D] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-md"
              >
                <Play
                  className="w-7 h-7 md:w-8 md:h-8 text-white"
                  fill="white"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Our Partners Section */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-1">
            Our
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0052CC] mb-10 md:mb-12">
            Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex justify-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  width={300}
                  height={200}
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 md:max-h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositionAndPartnersSection;
