// components/TeamMembersSection.tsx
import React from "react";
import Image from "next/image"; // Using next/image for optimization

// --- IMPORTANT ---
// Replace these imageUrl placeholders with the actual paths to your images.
// For example, if your images are in `public/images/team/`,
// the paths would be like `/images/team/samuel-amanor.jpg`.
// Ensure the images are appropriately sized for a 160x160px display.
const teamMembersData = [
  {
    name: "Samuel Amanor",
    title: "Founder",
    imageUrl: "/team/management.png", // REPLACE
  },
  {
    name: "Onyeka Ekeh",
    title: "COO/Digital Impact & Marketing Head",
    imageUrl: "/team/onyeka-scaled.png", // REPLACE
  },
  {
    name: "Maya Barakeh",
    title: "Head of Innovation Xchange",
    imageUrl: "/team/maya-scaled.png", // REPLACE
  },
  {
    name: "Kelvin Abraham",
    title: "DigitalFACTORY Ops Lead",
    imageUrl: "/team/Abraham-scaled.png", // REPLACE
  },
  {
    name: "Micheal K. Ahwireng",
    title: "CodeFACTORY Lead",
    imageUrl: "/team/kofi-scaled.png", // REPLACE
  },
  {
    name: "Charles Kobina",
    title: "TalentFACTORY Ops Associate",
    imageUrl: "/team/emeka-scaled.png", // REPLACE
  },
  {
    name: "Chukwuemeka Ndukwe",
    title: "Head of Code Partners",
    imageUrl: "/team/staff10.png", // REPLACE
  },
  {
    name: "Paul Maen",
    title: "Marketing and Community Manager",
    imageUrl: "/team/paul-maen-new-scaled.png", // REPLACE
  },
];

export function TeamMembersSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      {/* Container for the grid, centered with max-width and padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive grid for team members */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembersData.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image Container */}
              <div className="relative w-40 h-40 mb-5">
                {" "}
                {/* 160px x 160px circle */}
                <Image
                  src={member.imageUrl}
                  alt={`Profile picture of ${member.name}`}
                  layout="fill"
                  objectFit="cover" // Ensures the image covers the area, cropping if necessary
                  className="rounded-full" // Makes the image circular
                  // Optional: Add a placeholder for loading or if images are missing
                  // placeholder="blur"
                  // blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                />
              </div>

              {/* Member Name */}
              <h3 className="text-lg font-bold text-black mb-1">
                {member.name}
              </h3>

              {/* Member Title */}
              <p className="text-sm text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
