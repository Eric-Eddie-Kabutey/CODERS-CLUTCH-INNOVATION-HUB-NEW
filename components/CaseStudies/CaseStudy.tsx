"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const filters = [
  { label: "All Case Studies", value: "all", count: 12 },
  { label: "Enterprise – (Non-tech organizations)", value: "enterprise", count: 7 },
  { label: "Start-up – (Non-tech founders)", value: "startup", count: 5 },
];

const caseStudies = [
  {
    img: "https://kedrus.io/wp-content/uploads/2025/04/Web-MK-v1.jpg",
    title: "Nature First Case Study",
    category: "enterprise",
    description: "Transforming traditional enterprise with digital innovation",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/03/Hookab-Brand-Guideline_page-0044.jpg",
    title: "Hookab Case Study",
    category: "startup",
    description: "Building a disruptive brand in the competitive market",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/02/SOBAZ-19.png",
    title: "Sobaz Case Study",
    category: "enterprise",
    description: "Digital transformation for legacy enterprise systems",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/02/TSL-2.jpg",
    title: "Techtron Systems Case Study",
    category: "startup",
    description: "Rapid scaling from MVP to market leader",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2024/07/VitalSwap-Case-study-7.png",
    title: "B2B Vitalswap Case study",
    category: "enterprise",
    description: "Enterprise-grade B2B platform development",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2024/07/VitalSwap-Case-study-4.png",
    title: "VitalSwap Case Study",
    category: "startup",
    description: "Consumer-focused health tech innovation",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/01/Untitled-design.png",
    title: "KedrusTV Case Study",
    category: "enterprise",
    description: "Media platform digital transformation",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/01/Doctor-of-the-future-2.png",
    title: "Doctor of the Future Case Study",
    category: "startup",
    description: "Healthcare startup revolutionizing patient care",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/01/Electricsol-logo-9.png",
    title: "Electrisol Case Study",
    category: "enterprise",
    description: "Energy sector digital innovation",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/01/Jodin-Data-15.png",
    title: "Jodin Data Case Study",
    category: "startup",
    description: "Data analytics startup success story",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2025/01/Triple-Wire-8.png",
    title: "Triple Wire Case Study",
    category: "enterprise",
    description: "Enterprise security solutions transformation",
  },
  {
    img: "https://kedrus.io/wp-content/uploads/2024/08/GeroCare-13.png",
    title: "GeroCare Case Study",
    category: "startup",
    description: "Elderly care tech innovation and growth",
  },
];

function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          Our <span className="text-green-600">Case Studies</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Real stories of transformation and success from non-tech founders and enterprises
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 mb-16 justify-center"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === f.value
                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:border-green-500 hover:bg-green-50 shadow-md"
            }`}
          >
            <span>{f.label}</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              activeFilter === f.value 
                ? "bg-white text-green-600" 
                : "bg-green-100 text-green-700"
            }`}>
              {f.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Results Count */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <p className="text-gray-600">
          Showing {filteredStudies.length} case {filteredStudies.length !== 1 ? 'studies' : 'study'}
          {activeFilter !== "all" && ` in ${filters.find(f => f.value === activeFilter)?.label.split(' – ')[0]}`}
        </p>
      </motion.div>

      {/* Case Studies Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredStudies.map((study, index) => (
            <motion.div
              key={`${study.title}-${index}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={study.img}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                    study.category === 'enterprise' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {study.category}
                  </span>
                </div>

                {/* Hover Action Button */}
                <div className="absolute top-4 right-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                  <button className="bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors duration-300">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    study.category === 'enterprise' 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'bg-orange-50 text-orange-700'
                  }`}>
                    {study.category === 'enterprise' ? 'Enterprise' : 'Startup'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredStudies.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="text-gray-400 mb-4">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No case studies found</h3>
          <p className="text-gray-500 mb-6">We couldn&apos;t find any case studies matching your selection</p>
          <button 
            onClick={() => setActiveFilter("all")}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
          >
            View All Case Studies
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default CaseStudy;