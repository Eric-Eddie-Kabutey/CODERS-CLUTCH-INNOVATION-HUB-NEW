import NewFooter from "@/components/new-landing-page/NewFooter";
import DemoRequestForm from "@/components/pills/DemoRequestForm";
import HeroSectionPill from "@/components/pills/HeroSectionPill";
import React from "react";
const carouselImagesData = [
  {
    id: "01",
    src: "/team/Copy-of-IMG_2358-1920x1280.jpg",
    alt: "CodeFACTORY Team Meeting",
  },
  { id: "02", src: "/home/IMG_0846-1920x1280.jpg", alt: "Developers at Work" },
  {
    id: "03",
    src: "/team/IMG_0884-1920x1320.jpg",
    alt: "Collaborative Environment",
  },
  { id: "04", src: "/team/IMG_0884-1920x1320.jpg", alt: "Modern Office Space" },
  // You can add more images, but the navigation will only show up to 4 based on this setup
];
const page = () => {
  return (
    <div>
      <HeroSectionPill
        carouselImagesData={carouselImagesData}
        title={"CapitalFACTORY"}
        describtion={`CapitalFactory is the financial engine of BIH-DEVS. It provides funding, structuring, and investment support for ventures across all stages of growth—seed, growth, and scale-up.

`}
        subtitle={"CapitalFACTORY"}
      />
      <div className="bg-[#1F1F1F] text-white py-16 px-6 sm:px-10 md:py-20 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="md:flex md:gap-x-12 lg:gap-x-20 items-start">
            {/* Left Column: Heading */}
            <div className="md:w-2/5 lg:w-4/12 mb-10 md:mb-0 flex-shrink-0">
              {/* 
          Adjust width as needed. md:w-2/5 is 40%. lg:w-4/12 is ~33.33%.
          flex-shrink-0 prevents this column from shrinking if the right column content is very long.
        */}
              <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                {/* Subtitle text color #A0A0A0 is close to text-gray-400 or text-zinc-400 */}
                {"   // WHAT WE DO"}
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Capital Access <br />
                and Revenue Engine
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div className="md:w-3/5 lg:w-8/12">
              <p className="text-base sm:text-lg text-white leading-relaxed">
                {/* The paragraph in the image appears to be plain white */}
                CapitalFactory ensures that each BIH venture is not only funded
                but also commercially viable, with go-to-market strategies,
                revenue models, and business growth plans in place. It supports
                ventures with regulatory readiness, fundraising documentation,
                financial modeling, and strategic market entry planning. This
                pillar also offers advisory and consulting services to partners
                seeking to innovate within their own organizations or
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DemoRequestForm />
      <NewFooter />
    </div>
  );
};

export default page;
