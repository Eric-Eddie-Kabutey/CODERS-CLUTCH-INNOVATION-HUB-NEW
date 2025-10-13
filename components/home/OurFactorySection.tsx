"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const pillarsData = [
  {
    imageSrc: "/home/Untitled-design-8-1024x1024-1.jpg",
    title: "TalentFACTORY",
    subtitle: "TalentFactory",
    description:
      "TalentFactory is the human capital engine of BIH-DEVS. It sources, trains, and deploys highly skilled professionals who are placed into BIH-backed ventures or connected...",
  },
  {
    imageSrc: "/home/Untitled-design-8-1024x1024-1.jpg",
    title: "CapitalFACTORY",
    subtitle: "CapitalFactory",
    description:
      "CapitalFactory is the financial engine of BIH-DEVS. It provides funding, structuring, and investment support for ventures across all stages of growth—seed, growth, and scale-up.",
  },
  {
    imageSrc: "/home/IMG_0846-1920x1280.jpg",
    title: "AcceleratorFACTORY",
    subtitle: "AcceleratorFactory",
    description:
      "AcceleratorFactory serves as the nerve center of BIH-DEVS. It identifies market gaps and high-potential digital opportunities through rigorous data analysis, partner collaboration, and real-time...",
  },
];

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 md:w-8 md:h-8 text-white"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const OurFactorySection = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hub DEV'S Pillars Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="bg-[#00A99D] text-white font-semibold py-3 px-6 rounded-md text-sm hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More DEV&apos;s Pillars
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 mb-1"
          >
            {"// Our Factory"}
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1"
          >
            BlueSPACE Innovation
          </motion.h2>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12"
          >
            <span className="text-black">Hub </span>
            <span className="text-[#0052CC]">DEV&apos;S Pillars</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {pillarsData.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <Image
                  width={200}
                  height={300}
                  src={pillar.imageSrc}
                  alt={pillar.title}
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    aria-label={`Play video for ${pillar.title}`}
                    className="w-16 h-16 md:w-20 md:h-20 bg-[#00A99D] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <PlayIcon />
                  </motion.button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-black mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{pillar.subtitle}</p>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* The BlueSPACE Financial CLOUD Section */}
      <motion.div
        className="relative w-full md:min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {/* Background Image */}
        <Image
          fill
          src="/home/DEMO-61-1-scaled.jpg"
          alt="BlueSPACE Financial Cloud event"
          className="absolute inset-0 w-full h-full object-cover -z-0"
        />

        {/* Overlayed Content Box Container */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center py-12 sm:py-16 md:py-20">
          <motion.div
            className="bg-[#0000FF] text-white p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[580px]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xs sm:text-sm opacity-80 mb-2">
              {"// Our Financial Cloud"}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              The BlueSPACE Financial CLOUD (BFC)
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 opacity-95">
              At the heart of BIH-DEVS lies the BlueSPACE Financial CLOUD
              (BFC)—an AI-powered digital financial infrastructure that powers
              internal ventures and external clients alike. BFC integrates smart
              payment gateways, data analytics, digital identity, credit
              scoring, and financial management tools. It provides real-time
              intelligence and infrastructure for fintechs and non-fintech
              ventures to operate efficiently and scale securely.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 md:mb-8 opacity-95">
              By embedding BFC into all BIH ventures, the studio ensures a
              unified, scalable, and secure technology backbone that accelerates
              product launch, enhances financial inclusion, and reduces
              operational overhead.
            </p>
            <motion.button
              className="bg-[#00A99D] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md flex items-center space-x-2 self-start hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurFactorySection;
