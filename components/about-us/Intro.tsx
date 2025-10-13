"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  "https://kedrus.io/wp-content/uploads/2024/07/Digital-Ocean.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Salesforce.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Amazon-Web-Services.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Sophos.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Hubspot.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Microsoft.png",
  "https://kedrus.io/wp-content/uploads/2024/07/Zoho.png",
];

function Intro() {
  return (
    <section className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 px-6 lg:px-12 py-16">
        
        {/* Left Background + Image */}
        <div className="relative bg-[#e6f6d2] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Kedrus Team"
            width={600}
            height={500}
            className="object-cover w-full h-full rounded-tr-[3rem] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center gap-6 text-left bg-white px-6 lg:px-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            Our name <span className="font-bold text-green-600">CodersClutch</span>, is
            the Greek word for CEDAR, inspired by the resilient cedar tree,
            reflecting our enduring nature. Like the cedar, we adapt and grow to
            bring founders’ ideas to life.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Technology isn’t just our profession; it’s our soul-deep calling.
            Drawing inspiration from ancient Greek ingenuity demonstrated by
            inventions like the screw, crane, and alarm clock we embrace
            innovation’s rich legacy.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-bold text-green-600">CodersClutch</span>, we’re
            committed to pushing boundaries. We empower{" "}
            <span className="font-bold">non-tech</span> founders to build
            meaningful products that transform lives and businesses.
          </p>
          <button className="mt-4 self-start bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 shadow-md">
            See how we do it
          </button>
        </div>
      </div>

      {/* Scrolling Brands Section */}
      <div className="w-full overflow-hidden py-10 border-t border-gray-100">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`brand-${idx}`}
                width={150}
                height={60}
                className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
