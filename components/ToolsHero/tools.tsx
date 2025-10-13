"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Eye } from "lucide-react";

const filters = [
  "All Tools",
  "Business model",
  "Go-to-market",
  "Ideation",
  "Innovation",
  "Report",
  "Strategy",
  "Validation",
];

const tools = [
  {
    title: "USER PERSONA",
    category: "Ideation",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-USER-PERSONA1.png",
  },
  {
    title: "OFFERING VIABILITY TOOL",
    category: "Business model",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-OFFERING-VIABILITY-TOOL1.png",
  },
  {
    title: "NEW VENTURE CANVAS",
    category: "Strategy",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-New-Venture-Canvas1.png",
  },
  {
    title: "MOUNTAINS AND VALLEYS",
    category: "Innovation",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-Mountains-and-Valleys1.png",
  },
  {
    title: "MARKET MATRIX",
    category: "Go-to-market",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-MARKET-MATRIX1.png",
  },
  {
    title: "INNOVATION SOURCE BOOK",
    category: "Report",
    img: "https://kedrus.io/wp-content/uploads/2024/10/KEDRUS-INNOVATION-SOURCE-BOOK1.png",
  },
];

function Tools() {
  const [activeFilter, setActiveFilter] = useState("All Tools");

  const filteredTools =
    activeFilter === "All Tools"
      ? tools
      : tools.filter((tool) => tool.category === activeFilter);

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
    <div className="min-h-screen bg-white px-6 py-16 flex flex-col items-center">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm
              ${activeFilter === filter
                ? "bg-gradient-to-r from-green-800 to-green-900 text-white shadow-lg"
                : "bg-green-100 text-green-900 hover:bg-green-200 shadow-md"}`}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Cards Grid */}
      <motion.div
        key={activeFilter}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-7xl"
      >
        {filteredTools.map((tool) => (
          <motion.div
            key={tool.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-green-50 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border-b-8 border-green-900 overflow-hidden cursor-pointer"
          >
            {/* Image Container */}
            <div className="bg-black p-4 flex justify-center items-center relative overflow-hidden">
              <motion.img
                src={tool.img}
                alt={tool.title}
                className="rounded-md object-contain h-48 group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tool.category}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-lg font-semibold text-gray-900 flex justify-between items-center group-hover:bg-green-100 transition-colors duration-300">
              <span className="group-hover:text-green-900 transition-colors duration-300">
                {tool.title}
              </span>
              <motion.span 
                className="text-green-900 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ x: 2, y: -2 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredTools.length === 0 && (
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
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No tools found</h3>
          <p className="text-gray-500 mb-6">We couldn&apos;t find any tools matching &quot;{activeFilter}&quot;</p>
          <motion.button 
            onClick={() => setActiveFilter("All Tools")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-800 to-green-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Tools
          </motion.button>
        </motion.div>
      )}

      {/* Pagination */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-12 space-x-4 text-sm font-medium text-gray-500"
      >
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer hover:text-green-900 bg-green-100 px-4 py-2 rounded-full transition-colors duration-200"
        >
          1
        </motion.span>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer hover:text-green-900 bg-white px-4 py-2 rounded-full border border-green-200 transition-colors duration-200"
        >
          2
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Tools;