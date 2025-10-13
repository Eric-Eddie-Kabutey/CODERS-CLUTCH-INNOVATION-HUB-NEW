"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroComponent = () => {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden">
      {/* YouTube Embed */}
      <div className="absolute z-0 w-full h-full">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/0RrjN6nKhFI?autoplay=1&mute=1&loop=1&playlist=0RrjN6nKhFI&controls=0&modestbranding=1&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Content aligned to the left */}
      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4 font-normal text-gray-200">
            Building the Future of Africa&apos;s Financial Infrastructure.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight">
            Digital Economy
            <br />
            Venture Studio
          </h1>
          <Button
            asChild
            size="lg"
            className="mt-6 sm:mt-8 bg-[#00A99D] hover:bg-[#008a7d] text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-md shadow-md transition-colors duration-150"
          >
            <Link href="/pillars">
              Our Pillars
              <ArrowRight className="ml-2.5 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
