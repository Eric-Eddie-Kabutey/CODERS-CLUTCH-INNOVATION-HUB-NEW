"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const WhoWeAre = () => {
  return (
    <motion.div
      className="font-sans bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.p
          variants={itemVariants}
          className="text-sm p-8 text-gray-500 mb-3"
        >
          {" // Who We Are"}
        </motion.p>

        <div className="grid p-8 md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-black mb-5 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Welcome to <br />
              <span className="text-[#34cc33] font-serif italic font-bold">CodersClutch</span>
            </motion.h1>

            <motion.p
              className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              We are key to expanding the impact of the{" "}
              <strong className="text-black font-bold">
                CodersClutch
              </strong>{" "}
              across Africa and the world.
            </motion.p>

            {/* Vision text moved here */}
            <motion.p
              className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Vision is to be the leading innovation center that creates the
              platform for digital transformation and serves as the fertile
              ground for next generation solutions
            </motion.p>

            <motion.button
              className="bg-[#34cc33] text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </motion.button>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <Image
              src="/SVG LARGE.svg"
              alt="BlueSPACE Illustration"
              width={970}
              height={970}
              className="w-full max-w-2xl p-5 h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;
