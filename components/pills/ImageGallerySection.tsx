// components/ImageGallerySection.js
"use client"; // If using Next.js App Router and client-side hooks/interactivity

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample data for gallery images

const socialLinksAbbr = ["Fb.", "Ig.", "Yt.", "X.", "Lk."]; // Reused from previous component

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const ImageGallerySection = ({
  galleryImages,
}: {
  galleryImages: GalleryImage[];
}) => {
  return (
    <div className="relative bg-black min-h-screen text-white flex">
      {/* Main Scrollable Content Area (Image Grid) */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 pr-[calc(4rem+1rem)] sm:pr-[calc(4rem+1.5rem)] md:pr-[calc(5rem+2rem)]">
        {/* Adjust pr based on sidebar width + desired gap */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden group"
              // aspect-[4/3] is common, adjust if your images are different (e.g., aspect-square, aspect-video)
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                quality={80}
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Optional: Overlay on hover, e.g., image title or zoom icon */}
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Right Sidebar */}
      <aside className="fixed top-0 right-0 h-screen w-16 sm:w-16 md:w-20 bg-black flex flex-col items-center justify-center space-y-12 z-30 border-l border-neutral-800/50">
        {/* Rotated "Follow Us" text */}
        <div className="relative" style={{ height: "100px" }}>
          <span
            className="absolute left-1/2 top-1/2 text-xs text-white/70 tracking-widest uppercase"
            style={{
              transform: "translateX(-50%) translateY(-50%) rotate(-90deg)",
              whiteSpace: "nowrap",
            }}
          >
            Follow Us
          </span>
        </div>

        {/* Dash separator */}
        <span className="text-white/40 text-sm select-none">—</span>

        {/* Social media links */}
        <div className="text-xs text-white/60 flex flex-col items-center space-y-1">
          {socialLinksAbbr.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href="#"
                className="hover:text-white transition-colors py-0.5 leading-tight"
              >
                {link}
              </a>
              {index < socialLinksAbbr.length - 1 && (
                <span className="text-white/30 my-0.5 select-none text-[10px]">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </aside>

      {/* Fixed "Next Project" CTA */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-[calc(5rem+1rem)] lg:right-[calc(5rem+2rem)] xl:right-[calc(5rem+3rem)] bg-neutral-900 p-4 sm:p-5 rounded-lg shadow-2xl z-20 w-60 sm:w-64 md:w-72 transition-all duration-300 ease-in-out">
        {/* Adjust right positioning carefully considering sidebar width */}
        {/* Example: md:right-[calc(5rem(sidebar)+1rem(gap))] */}
        {/* Or if it should always be a fixed distance from viewport edge: md:right-10 */}
        {/* The provided image seems to have it offset from the sidebar */}

        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 uppercase">Next Project</span>
          <div className="flex space-x-2">
            <button
              aria-label="Previous Project"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Next Project"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <a
          href="#"
          className="block text-lg sm:text-xl font-semibold text-white hover:text-gray-300 transition-colors"
        >
          TalentFACTORY
        </a>
      </div>
    </div>
  );
};

export default ImageGallerySection;
