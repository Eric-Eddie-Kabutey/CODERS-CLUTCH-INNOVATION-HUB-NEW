// components/PlatformHubSection.js
import React from "react";
import Image from "next/image";

const PlatformHubSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="md:w-3/5 lg:w-1/2 text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-3">
              {" // What We Do"}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Platform <br className="hidden xs:block sm:hidden md:block" />
              Development Hub
            </h2>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
              It serves as the internal software engineering and product
              development unit that supports ventures with everything from UX/UI
              design and MVP development to full-scale cloud-based architecture
              and API infrastructure.
            </p>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              This pillar enables rapid product iteration, customization, and
              innovation by leveraging modern development frameworks, DevOps
              practices, and agile delivery methodologies. Codefactory also
              engages in emerging tech experimentation (e.g., AI, Web3, DeFi)
              and licenses select tools to external clients to monetize BIH’s
              technical expertise and platform assets.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-2/5 lg:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            {/*
              For next/image with specific dimensions, you need to know the aspect ratio.
              If the image is, for example, 300x500 pixels:
              <Image
                src="/lightbulb-idea.png"
                alt="Platform Development Hub - Idea lightbulb"
                width={300}
                height={500}
                className="max-w-xs sm:max-w-sm md:max-w-none md:w-auto md:h-[450px] lg:h-[500px] object-contain"
              />

              If using layout="fill", the parent needs relative positioning and dimensions.
              The example image seems to be quite tall. Let's estimate its container.
            */}
            <div className="relative w-[200px] h-[320px] sm:w-[250px] sm:h-[400px] md:w-[280px] md:h-[450px] lg:w-[320px] lg:h-[510px]">
              <Image
                src="/pills/light-bulb-with-drawing-graph.png" // Replace with your actual image path
                alt="Platform Development Hub - Idea lightbulb"
                layout="fill"
                objectFit="contain" // 'contain' will ensure the whole image is visible and aspect ratio is maintained
                quality={90}
                priority // If this section is above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHubSection;
