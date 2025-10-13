// components/ImageGalleryCarousel.tsx
"use client"; // Required for useState, useEffect, and event handlers

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"; // Adjust path if necessary
import Autoplay from "embla-carousel-autoplay";

// --- IMPORTANT ---
// Replace these placeholders with your actual image data
const galleryImages = [
  {
    src: "/team/EFC-19-1920x1081.jpg", // REPLACE with your actual image path
    alt: "Team at Ghana Innovation Hub",
    tag: "IMG_0884", // This tag can be dynamic per image
  },
  {
    src: "/team/IMG_0884-1920x1320.jpg", // Placeholder - REPLACE
    alt: "Another view of the team",
    tag: "IMG_0885",
  },
  {
    src: "/team/Copy-of-IMG_2283-1920x1280.jpg", // Placeholder - REPLACE
    alt: "Team members collaborating",
    tag: "IMG_0886",
  },
  {
    src: "/team/Copy-of-IMG_2283-1920x1280.jpg", // Placeholder - REPLACE
    alt: "Innovation Hub event",
    tag: "IMG_0887",
  },
];

export function ImageGalleryCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Autoplay plugin configuration
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    // Start autoplay if it was stopped by mouse enter
    const onMouseLeave = () => {
      autoplayPlugin.current.play();
    };
    api.rootNode()?.parentElement?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      api.off("select", onSelect);
      api
        .rootNode()
        ?.parentElement?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [api]);

  return (
    <div className="relative w-full max-w-7xl mx-auto my-8 md:my-12">
      {" "}
      {/* Adjust max-width as needed */}
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="overflow-hidden rounded-lg shadow-xl" // Added rounded corners and shadow for aesthetics
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="relative">
              {/* Image Tag Overlay */}
              {image.tag && (
                <div className="absolute top-4 left-4 z-10 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {image.tag}
                </div>
              )}
              {/* Main Image */}
              {/* Adjust aspect ratio as needed. The image provided is landscape. */}
              <div className="aspect-[16/10] w-full overflow-hidden">
                {" "}
                {/* Common landscape aspect ratio */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0} // Prioritize loading the first image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Pagination */}
      {count > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          <span>{current}</span>
          <span className="text-gray-300">—</span>
          <span>{count}</span>
        </div>
      )}
    </div>
  );
}
