// components/DigitalTalentSection.js
"use client";

import React, { useState } from "react";
// import Image from "next/image"; // If you have a logo image
import { Code2, Building } from "lucide-react"; // Example icons

const DigitalTalentSection = () => {
  const [selectedPath, setSelectedPath] = useState("employer"); // 'talent' or 'employer'

  const cardBaseClasses =
    "p-6 rounded-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02]";
  const cardInactiveClasses =
    "bg-black/30 border-2 border-transparent backdrop-blur-sm"; // Slightly transparent dark background
  const cardActiveClasses =
    "bg-blue-900/40 border-2 border-blue-500 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-transparent shadow-2xl scale-[1.03]"; // Active card has blue border and slight glow

  // Placeholder for Bluespace logo
  const BluespaceLogo = () => (
    <div className="text-center mb-2">
      <span className="text-2xl font-bold text-white">
        <span className="text-blue-400">blue</span>
        <span className="text-yellow-400">spa</span>
        <span className="text-red-400">ce</span>
      </span>
      <div className="text-xs text-neutral-400 tracking-wider">
        INNOVATION HUB
      </div>
    </div>
  );

  return (
    <section className="bg-neutral-950 text-white py-16 md:py-24 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Digital <br className="sm:hidden lg:block" />
              Talent
            </h2>
            <p className="text-neutral-300 text-base lg:text-lg leading-relaxed mb-6">
              The goal is to bridge the skills gap and ensure a continuous
              supply of relevant, market-ready talent that drives innovation and
              operational excellence.
            </p>
            <p className="text-neutral-300 text-base lg:text-lg leading-relaxed mb-8">
              Through partnerships with universities, technical institutions,
              coding academies, and community networks, TalentFactory builds a
              dynamic and inclusive workforce, with particular focus on youth,
              women, and underserved populations. It offers career development
              pathways, hands-on learning, mentorship, and placement
              opportunities in high-growth sectors.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-neutral-700 px-10 py-4 text-base font-medium text-white shadow-sm hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-colors"
            >
              Register today
            </button>
          </div>

          {/* Right Column: Interactive Card Selection */}
          <div className="lg:w-1/2 w-full max-w-2xl lg:max-w-none">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 shadow-2xl overflow-hidden">
              {/* Optional: Starry background effect */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                {/* Simple stars, could be an image or more complex SVG */}
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: `${Math.random() * 2 + 0.5}px`,
                      height: `${Math.random() * 2 + 0.5}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `twinkle ${
                        Math.random() * 5 + 3
                      }s infinite alternate ease-in-out`,
                    }}
                  />
                ))}
              </div>
              <style jsx global>{`
                @keyframes twinkle {
                  0% {
                    opacity: 0.3;
                  }
                  100% {
                    opacity: 0.8;
                  }
                }
              `}</style>

              <div className="relative z-10">
                {" "}
                {/* Content above stars */}
                <BluespaceLogo />
                <p className="text-center text-neutral-300 text-sm mb-8 mt-4">
                  Choose Your Registration Path
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Talent Card */}
                  <div
                    className={`${cardBaseClasses} ${
                      selectedPath === "talent"
                        ? cardActiveClasses
                        : cardInactiveClasses
                    }`}
                    onClick={() => setSelectedPath("talent")}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-black/50 rounded-full inline-flex">
                        <Code2 className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-1">
                        TALENT
                      </h3>
                      <p className="text-blue-300 font-medium text-base mb-2">
                        Find Work / Training / Mentorship
                      </p>
                      <p className="text-xs text-neutral-400 leading-snug">
                        Join as a Talent and discover exciting opportunities to
                        work on meaningful projects / build your skills.
                      </p>
                    </div>
                  </div>

                  {/* Employer Card */}
                  <div
                    className={`${cardBaseClasses} ${
                      selectedPath === "employer"
                        ? cardActiveClasses
                        : cardInactiveClasses
                    }`}
                    onClick={() => setSelectedPath("employer")}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-black/50 rounded-full inline-flex">
                        <Building className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-1">
                        EMPLOYER
                      </h3>
                      <p className="text-blue-300 font-medium text-base mb-2">
                        Hire Talent
                      </p>
                      <p className="text-xs text-neutral-400 leading-snug">
                        Join as an Employer to find and collaborate with skilled
                        professionals for your projects.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-neutral-400 mt-8">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-orange-400 hover:text-orange-300"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTalentSection;
