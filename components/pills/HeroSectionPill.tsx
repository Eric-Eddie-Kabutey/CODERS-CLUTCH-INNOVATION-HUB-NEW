// components/HeroSection.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay plugin
import type { EmblaCarouselType } from "embla-carousel"; // Import EmblaCarouselType

// Import shadcn/ui Carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Adjust path if your ui components are elsewhere

// Sample data for carousel images

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

const HeroSectionPill = ({
  carouselImagesData,
  title,
  describtion,
  subtitle,
}: {
  carouselImagesData: CarouselImage[];
  title: string;
  describtion: string;
  subtitle: string;
}) => {
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType | null>(
    null
  );
  const [currentSlide, setCurrentSlide] = useState(0); // 0-indexed

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000, // Slide duration
      stopOnInteraction: false, // Autoplay will not stop on manual interaction
      stopOnMouseEnter: true, // Pause autoplay when mouse enters the carousel
    })
  );

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    // Set initial slide and listen for changes
    setCurrentSlide(carouselApi.selectedScrollSnap());
    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", onSelect);

    // Clean up listener on component unmount
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const handleNavClick = (index: number): void => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
      // If stopOnInteraction were true, you might need to restart autoplay:
      // autoplayPlugin.current.reset(); // or .play()
    }
  };

  return (
    <div className="relative flex min-h-screen bg-black text-white">
      {/* Optional: Small orange square at top-left */}

      {/* Left Panel: Content */}
      <div className="w-full md:w-2/5 bg-zinc-900 flex flex-col justify-center p-6 py-10 sm:p-12 md:p-16 lg:p-24 z-10">
        {" "}
        {/* z-10 to be above carousel if it overlaps */}
        <button
          aria-label="Play video"
          className="mb-8 sm:mb-10 w-16 h-16 sm:w-20 sm:h-20 border border-white/30 rounded-full flex items-center justify-center hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors group"
        >
          <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 group-hover:text-white transition-colors" />
        </button>
        <div className="mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
            {subtitle}
          </span>
          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full ml-2 align-middle"></span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-6 sm:mb-8">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md">
          {describtion}
        </p>
      </div>

      {/* Right Panel: Carousel and Overlays (hidden on small screens) */}
      <div className="hidden md:block md:w-3/5 relative">
        <Carousel
          setApi={(api) => setCarouselApi(api || null)}
          opts={{
            loop: true, // Enable looping
            align: "start",
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full h-full" // Carousel container should fill the space
        >
          <CarouselContent className="-ml-0 h-full">
            {" "}
            {/* -ml-0 to remove default margin, h-full for full height items */}
            {carouselImagesData.map((image, index) => (
              <CarouselItem
                key={image.id || index}
                className="pl-0 basis-full h-full"
              >
                {" "}
                {/* pl-0 to remove default padding, basis-full for full width, h-full */}
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    // layout="fill"
                    fill
                    objectFit="cover"
                    // quality={85}
                    priority={index === 0} // Prioritize loading the first image
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Note: We are not using shadcn's CarouselPrevious/CarouselNext here, as we have custom controls */}
        </Carousel>

        {/* Numbered Navigation Overlay for Carousel */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 lg:right-10 flex flex-col space-y-8 md:space-y-10 z-10">
          {carouselImagesData.slice(0, 4).map(
            (
              image,
              index // Show up to 4 navigation items
            ) => (
              <button
                key={image.id}
                onClick={() => handleNavClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`text-xs font-semibold transition-colors ${
                  currentSlide === index
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {image.id} {/* Display '01', '02', etc. */}
              </button>
            )
          )}
        </div>

        {/* Social Follow Section Overlay */}
      </div>
    </div>
  );
};

export default HeroSectionPill;
