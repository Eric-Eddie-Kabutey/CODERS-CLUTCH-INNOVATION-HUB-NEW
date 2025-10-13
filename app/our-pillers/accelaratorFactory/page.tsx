import NewFooter from "@/components/new-landing-page/NewFooter";
import AcceleratorProgramsSection from "@/components/pills/AcceleratorProgramsSection";
import HeroSectionPill from "@/components/pills/HeroSectionPill";
import ImageGallerySection from "@/components/pills/ImageGallerySection";
import PortfolioStartupsSection from "@/components/pills/PortfolioStartupsSection";
import YouTubeEmbedSection from "@/components/pills/YouTubeEmbedSection";
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
        subtitle="AcceleratorFACTORY"
        title={"AcceleratorFACTORY"}
        describtion={` AcceleratorFactory serves as the nerve center of BIH-DEVS. It identifies market gaps and high-potential digital opportunities through rigorous data analysis, partner collaboration, and real-time ecosystem feedback`}
      />

      <div className="bg-[#1F1F1F] text-white py-16 px-6 sm:px-10 md:py-20 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            {/* 
        max-w-3xl (or similar, e.g., max-w-2xl, max-w-4xl) constrains the width 
        of this content block to keep text lines readable and match the image.
      */}
            <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
              {/* Subtitle: // WHAT WE DO */}
              {"  // WHAT WE DO"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6 sm:mb-8">
              {/* Main Heading */}
              Venture Creation <br />
              and Scaling
            </h2>

            {/* Paragraphs container with spacing */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {/* First paragraph text color is text-gray-300 for a slightly softer white */}
                Once a viable opportunity is validated, internal teams are
                assembled to develop a minimum viable product (MVP), followed by
                structured acceleration phases that guide ventures through
                growth, product-market fit, revenue traction, and investment
                readiness.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {/* Second paragraph */}
                This pillar also manages a portfolio of ventures, providing
                ongoing operational support, governance, mentorship, and
                strategic partnerships. Whether targeting local markets or
                scaling across Africa, each venture is designed for long-term
                sustainability and positive socio-economic impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 text-white py-16 px-6 sm:px-10 md:py-20 lg:px-24">
        {/* 
    Background: Using bg-zinc-900 (#18181b) which is very close to the dark gray in the image.
    You could also use bg-neutral-900 (#171717) or a custom color like bg-[#1A1A1A].
  */}
        <div className="max-w-screen-xl mx-auto">
          {/* Content Block: AcceleratorFACTORY */}
          <div className="max-w-3xl">
            {/* 
        max-w-3xl (or similar, e.g., max-w-2xl, max-w-4xl) constrains the width 
        of this content block to keep text lines readable and match the image's layout.
      */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6 sm:mb-8">
              {/* Main Heading */}
              AcceleratorFACTORY <br />
              2021 Cohort
            </h2>

            {/* Paragraphs container with spacing */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {/* text-gray-300 provides a slightly softer white for paragraph text */}
                The Accelerator Factory Cohort 2021, led by BlueSPACE Innovation
                Hub, was a program designed to identify and scale high-potential
                digital ventures. It used data analysis, partner collaboration,
                and ecosystem feedback to develop MVPs and guide startups
                through growth, product-market fit, revenue traction, and
                investment readiness.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                The program was part of the Ghana Innovation Hub, established in
                2018 by a consortium of MDF West Africa, BlueSPACE Africa, and
                Ghana Communication Technology University (GCTU). It operated
                under the World Bank-funded eTransform Ghana project,
                implemented by the Ministry of Communications and
                Digitalization.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                MDF West Africa led the consortium with expertise in enterprise
                development, BlueSPACE focused on innovation and acceleration,
                and GCTU provided academic support. Together, they offered
                startups training, mentorship, co-working spaces, and access to
                funding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ImageGallerySection galleryImages={galleryImages} />
      <AcceleratorProgramsSection />
      <PortfolioStartupsSection />
      <YouTubeEmbedSection />
      <NewFooter />
    </div>
  );
};

export default page;
