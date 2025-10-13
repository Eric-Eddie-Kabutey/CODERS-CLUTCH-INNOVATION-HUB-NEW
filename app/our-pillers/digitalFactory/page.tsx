import NewFooter from "@/components/new-landing-page/NewFooter";
import DemoRequestForm from "@/components/pills/DemoRequestForm";
import HeroSectionPill from "@/components/pills/HeroSectionPill";
import ImageGallerySection from "@/components/pills/ImageGallerySection";
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

const galleryImages = [
  { id: "1", src: "/pills/DEMO-16-1-scaled.jpg", alt: "Gallery image 1" },
  { id: "2", src: "/pills/DEMO-26-1-scaled.jpg", alt: "Gallery image 2" },
  { id: "3", src: "/pills/DEMO-55-1-scaled.jpg", alt: "pills image 3" },
  { id: "4", src: "/pills/DEMO-57-1-scaled.jpg", alt: "pills image 4" },
  { id: "5", src: "/pills/DEMO-58-1-scaled.jpg", alt: "pills image 5" },
  { id: "6", src: "/pills/DEMO-61-1-scaled.jpg", alt: "pills image 6" },
  { id: "7", src: "/pills/DEMO-62-1-scaled.jpg", alt: "pills image 7" },
  { id: "8", src: "/pills/DEMO-64-1-scaled.jpg", alt: "pills image 8" },
  // Add more images as needed
  { id: "9", src: "/pills/DEMO-75-1-scaled.jpg", alt: "pills image 9" },
  { id: "10", src: "/pills/DEMO-99-2-scaled.jpg", alt: "pills image 10" },
  { id: "11", src: "/pills/DEMO-99-scaled.jpg", alt: "pills image 11" },
  { id: "12", src: "/pills/DEMO-110-scaled.jpg", alt: "Gallery image 12" },
];

const page = () => {
  return (
    <div>
      <HeroSectionPill
        carouselImagesData={carouselImagesData}
        subtitle="DigitalFACTORY"
        title={"DigitalFACTORY"}
        describtion={`DigitalFactory provides a comprehensive training infrastructure to equip individuals with the digital skills necessary to thrive in Africa’s digital transformation.`}
      />

      <div className="bg-[#1F1F1F] text-white py-16 px-6 sm:px-10 md:py-20 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          {/* 
      This outer div with max-w-screen-xl ensures the content is centered and 
      doesn't exceed a certain width on very large screens. The content blocks 
      inside will be narrower.
    */}

          <div className="mb-16 sm:mb-20 md:mb-24 max-w-3xl">
            {/* 
        max-w-3xl constrains the width of this specific content block.
        mb-* classNamees add space below this section before the next one.
      */}
            <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
              {/* Subtitle: // WHAT WE DO */}
              {"  // WHAT WE DO"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6 sm:mb-8">
              {/* Main Heading */}
              Skills Development <br /> Ecosystem
            </h2>

            {/* Paragraphs container with spacing */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {/* First paragraph text color is text-gray-300 for a slightly softer white */}
                From foundational literacy to advanced competencies in cloud
                computing, data science, blockchain, AI, and software
                development, this pillar curates hands-on, outcome-oriented
                learning experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {/* Second paragraph */}
                Through intensive bootcamps, certification programs, and
                public-private training initiatives, DigitalFactory feeds into
                TalentFactory and powers BIH’s ventures with qualified, skilled
                talent. It also supports national efforts in digital inclusion,
                digital public goods development, and workforce modernization.
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            {/* max-w-3xl constrains the width of this specific content block. */}
            <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
              {/* Subtitle: // WHAT WE DO */}
              {" // WHAT WE DO"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6 sm:mb-8">
              {/* Main Heading */}
              Finsoft Fellowship <br /> Program Sensitization
            </h2>
          </div>
        </div>
      </div>
      <ImageGallerySection galleryImages={galleryImages} />
      <DemoRequestForm />
      <NewFooter />
    </div>
  );
};

export default page;
