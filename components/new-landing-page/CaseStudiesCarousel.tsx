'use client'; 

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselCard from './CarouselCard';
import { CAROUSEL_DATA } from '@/data/case-studies-data';

const CaseStudiesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, // Requirement: Disable looping
    align: 'start',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-28">
      <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            THE LATEST FROM GOOGLE FOR STARTUPS
          </p>
      </div>

      {/* Main container for carousel and buttons */}
      <div className="relative max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {CAROUSEL_DATA.map((card) => (
              // Refactored basis for mobile "peek"
              <div 
                className="embla__slide flex-grow-0 flex-shrink-0 basis-4/5 md:basis-3/4 lg:basis-3/5 pl-4" 
                key={card.id}
              >
                <CarouselCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Now with visibility logic */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-[calc(100%+4rem)] -left-8 justify-between">
           <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`bg-white rounded-full p-3 shadow-md transition-opacity ${canScrollPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`bg-white rounded-full p-3 shadow-md transition-opacity ${canScrollNext ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;