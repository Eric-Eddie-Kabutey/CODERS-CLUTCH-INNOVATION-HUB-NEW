// components/AboutUsHeroSection.tsx
"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react"; // For icons
import { useRouter } from "next/navigation";

export function AboutUsHeroSection() {
  // For router.back(), uncomment these lines and ensure the component is a client component
  // "use client";
  const router = useRouter();

  const handleBackClick = () => {
    // router.back(); // If using Next.js router
    router.back(); // Simple browser back
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* This inner div constrains the content width and handles left alignment */}
        <div className="max-w-3xl">
          {" "}
          {/* Adjust max-width as needed, e.g., max-w-2xl */}
          {/* Back Arrow Button */}
          {/* Positioned above the title. The image shows it aligned left. */}
          <div className="mb-4 md:mb-6">
            <button
              onClick={handleBackClick}
              aria-label="Go back"
              className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 -ml-1.5"
              // Negative margin helps align the icon visual edge with text block start
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black leading-tight tracking-tighter mb-6 md:mb-8">
            About us
          </h1>
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10">
            We&#39;ve engineered an integrated ecosystem that enables rapid and
            sustainable digital venture creation through five interdependent
            pillars—each one playing a critical role in our end-to-end
            innovation framework.
          </p>
          {/* Button */}
          <div className="mb-20 sm:mb-24 md:mb-28">
            {" "}
            {/* Significant space before breadcrumbs */}
            <Link
              href="/pillars"
              className="inline-flex items-center justify-center px-7 py-3
                           text-base sm:text-lg font-semibold text-white
                           bg-blue-600 hover:bg-blue-700
                           rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           transition-all duration-300 ease-in-out
                           transform hover:scale-[1.03]"
            >
              {/* Assuming "/pillars" is the target URL */}
              BIH-DEVS Pillars
            </Link>
          </div>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <ChevronRight
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </li>
              <li>
                <span className="font-semibold text-black" aria-current="page">
                  About us
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
