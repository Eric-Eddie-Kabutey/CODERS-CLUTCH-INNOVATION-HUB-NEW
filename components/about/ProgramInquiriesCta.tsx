// components/ProgramInquiriesCta.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // For the background image (optional, can also use CSS background)
import { ArrowRight } from "lucide-react";

export function ProgramInquiriesCta() {
  return (
    <section className="relative text-white">
      {/* Background Image using next/image for optimization */}
      {/* Replace with your actual image path */}
      <Image
        src="/team/7K5A9455-1-scaled.jpg" // <<< REPLACE THIS IMAGE PATH
        alt="Diverse team members collaborating"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-0" // Ensures it's behind the content
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>{" "}
      {/* Adjust opacity (e.g., bg-black/60) as needed */}
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <p className="text-sm sm:text-base font-normal text-gray-300 mb-3 sm:mb-4">
              Work inquiries
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 sm:mb-8">
              Questions?
              <br />
              On our
              <br />
              Programs
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We&apos;re a team of creatives who are excited about unique ideas
              and help fin-tech companies to{" "}
              <strong className="font-semibold text-white">create</strong>{" "}
              amazing identity by creating the space to aid them in their
              journey.
            </p>
          </div>

          {/* Button */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <Link href="/programs" legacyBehavior>
              <a
                className="inline-flex items-center justify-center px-8 py-4 
                           text-base sm:text-lg font-semibold text-white 
                           bg-cyan-500 hover:bg-cyan-600 
                           rounded-lg shadow-lg 
                           transition-colors duration-300 ease-in-out
                           transform hover:scale-105" // Optional: subtle scale on hover
              >
                View Programs
                <ArrowRight className="ml-2.5 h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
