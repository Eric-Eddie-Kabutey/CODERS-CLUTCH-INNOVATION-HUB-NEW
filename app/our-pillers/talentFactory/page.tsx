import NewFooter from "@/components/new-landing-page/NewFooter";
import DigitalTalentSection from "@/components/pills/DigitalTalentSection";
import HeroSectionPill from "@/components/pills/HeroSectionPill";
import ImageGallerySection from "@/components/pills/ImageGallerySection";
import TalentFactorySection from "@/components/pills/TalentFactorySection";
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
        title={"TalentFACTORY"}
        describtion={` TalentFactory is the human capital engine of BIH-DEVS. It sources, trains, and deploys highly skilled professionals who are placed into BIH-backed ventures or connected with external employers in the broader digital economy`}
        subtitle={"TalentFACTORY"}
      />
      <DigitalTalentSection />
      <div className="bg-[#161616] text-white py-12 px-6 sm:px-10 md:py-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
            {/* Subtitle text color #A0A0A0 is close to text-gray-400 or text-zinc-400 */}
            {" // CAREER FAIR"}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            TalentFactory <br />
            Activations
          </h1>
        </div>
      </div>
      <ImageGallerySection galleryImages={galleryImages} />
      <TalentFactorySection />
      <NewFooter />
    </div>
  );
};

export default page;
