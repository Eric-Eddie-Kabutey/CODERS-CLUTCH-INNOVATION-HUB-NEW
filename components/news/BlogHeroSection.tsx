"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function BlogHeroSection() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <motion.section
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Back Arrow Button */}
          <motion.div className="mb-4 md:mb-6" variants={itemVariants}>
            <motion.button
              onClick={handleBackClick}
              aria-label="Go back"
              className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 -ml-1.5"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black leading-tight tracking-tighter mb-6 md:mb-8"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            Our Newsroom
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.nav aria-label="Breadcrumb" variants={itemVariants}>
            <ol className="flex items-center space-x-1 text-sm">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring" }}
              >
                <ChevronRight
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <span className="font-semibold text-black" aria-current="page">
                  About us
                </span>
              </motion.li>
            </ol>
          </motion.nav>
        </div>
      </div>
    </motion.section>
  );
}
