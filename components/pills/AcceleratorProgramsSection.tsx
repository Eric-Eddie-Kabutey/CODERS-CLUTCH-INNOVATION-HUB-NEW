import React from "react";
import ProgramCard from "./ProgramCard"; // Adjust path if needed

const programs = [
  {
    imageSrc: "/pills/Blossom-Academy-Fair-2-scaled.jpg", // Replace with your actual image path
    imageAlt: "BIH Startup Catalyst Program participants",
    title: (
      <>
        BIH Startup <br />
        Catalyst Program
      </>
    ),
    description:
      "A premier accelerator designed to propel your startup to new heights. Our program offers unparalleled support, resources, and mentorship to help you navigate your business.",
    imageCredit: "OBIBINI STUDIO | BLOSSOM ACADEMY DATA FAIR",
  },
  {
    imageSrc: "/pills/mt-149-1-scaled.jpg", // Replace with your actual image path
    imageAlt: "BlueSPACE Innovation Xchange Program event",
    badgeText: "mt-149 (1)",
    title: (
      <>
        BlueSPACE Innovation <br />
        Xchange Program
      </>
    ),
    description:
      "At BlueSPACE Innovation Xchange (BIX) Program, we empower startups to thrive globally. As part of the BlueSPACE Innovation Hub AcceleratorFACTORY, we specialize in connecting ambitious startups.",
  },
  // Add more programs here if needed
];

const AcceleratorProgramsSection: React.FC = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6 sm:px-10 md:py-20 lg:px-24">
      {/* 
        Background color #1A1A1A is very dark gray. 
        Tailwind's `bg-zinc-900` or `bg-neutral-900` are alternatives.
      */}
      <div className="max-w-screen-2xl mx-auto">
        {" "}
        {/* Wider max-width for this section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16">
          AcceleratorFACTORY <br />
          Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-16 sm:mb-20 md:mb-24">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              imageSrc={program.imageSrc}
              imageAlt={program.imageAlt}
              title={program.title}
              description={program.description}
              badgeText={program.badgeText}
              imageCredit={program.imageCredit}
              // buttonLink={`/programs/${program.id}`} // Example link
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorProgramsSection;
