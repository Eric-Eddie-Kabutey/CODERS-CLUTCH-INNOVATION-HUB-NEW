"use client";
import * as React from "react";
import Image from "next/image";
import { Play, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const impactAreas = [
  {
    id: "item-1",
    title: "Drive Economic Growth",
    content:
      "Launching high-impact ventures that generate revenue, create jobs, and catalyze industry modernization.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    title: "Advance Financial Inclusion",
    content:
      "Developing solutions that make financial services accessible and affordable for underserved populations across Africa.",
  },
  {
    id: "item-3",
    title: "Empower the Workforce",
    content:
      "Investing in digital skills development and talent cultivation to prepare Africa's youth for the future of work.",
  },
  {
    id: "item-4",
    title: "Strengthen Regional Ecosystems",
    content:
      "Fostering collaboration and innovation networks across different African regions to build a cohesive digital economy.",
  },
];

const visionImageUrl = "/team/2082.jpg";

export function VisionImpactSection() {
  const defaultAccordionValue = impactAreas.find(
    (area) => area.defaultOpen
  )?.id;

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Added container to constrain width while keeping full-width image */}
      <div className="container mx-auto px-0">
        <div className="grid lg:grid-cols-2 items-stretch">
          {" "}
          {/* Changed to items-stretch */}
          {/* Left Column - Text Content */}
          <div className="px-4 sm:px-6 lg:pl-8 xl:pl-16 2xl:pl-24 lg:pr-4 xl:pr-8 h-full">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none h-full flex flex-col">
              {/* Play Icon */}
              <div className="mb-6 sm:mb-8">
                <button
                  aria-label="Play video"
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-teal-500 hover:bg-teal-600 rounded-full shadow-lg transition-colors duration-300"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                </button>
              </div>

              {/* Content wrapper that grows to fill space */}
              <div className="flex-grow flex flex-col">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black leading-tight tracking-tight mb-4 md:mb-5">
                  Our Vision
                  <br />& Impact Plans
                </h2>

                {/* Introductory Paragraph */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10">
                  BIH-DEVS envisions a digitally empowered Africa—where
                  innovation fuels opportunity, technology connects communities,
                  and inclusive growth becomes a reality.
                </p>

                {/* Accordion - now fills remaining space */}
                <div className="flex-grow">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-1 h-full"
                    defaultValue={defaultAccordionValue}
                  >
                    {impactAreas.map((area) => (
                      <AccordionItem
                        key={area.id}
                        value={area.id}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <AccordionTrigger className="flex w-full items-center justify-start py-4 text-left font-semibold text-base sm:text-lg text-black hover:no-underline group [&>svg]:hidden">
                          <span className="mr-3 transition-transform duration-200 group-data-[state=open]:hidden">
                            <Plus className="h-5 w-5 text-black" />
                          </span>
                          <span className="mr-3 transition-transform duration-200 hidden group-data-[state=open]:inline-block">
                            <Minus className="h-5 w-5 text-black" />
                          </span>
                          <span>{area.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-4 text-base text-gray-600 leading-relaxed pl-8">
                          {area.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="h-full w-full lg:h-auto">
            {" "}
            {/* Ensure full height */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              {" "}
              {/* Set minimum heights */}
              <Image
                src={visionImageUrl}
                alt="Man in a futuristic chair using a VR headset"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
