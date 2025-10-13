// components/BoardMembersSection.tsx
import React from "react";
import Image from "next/image"; // Using next/image for optimization

// --- IMPORTANT ---
// Replace these imageUrl placeholders with the actual paths to your images.
// For example, if your images are in `public/images/board/`,
// the paths would be like `/images/board/saqid-nazir.jpg`.
// Ensure the images are appropriately sized for a 160x160px display.
const boardMembersData = [
  {
    name: "Saqid Nazir",
    title: "Chief Executive Officer at People's Pension Holding",
    imageUrl: "/team/Untitled-1111111-scaled.png", // REPLACE
  },
  {
    name: "Amoye Henry",
    title: "Amoye Henry Founder & CEO / Pitch Better",
    imageUrl: "/team/eeeeeeee-scaled.png", // REPLACE
  },
  {
    name: "Akwasi Aboagye",
    title: "CEO Bayport Ghana",
    imageUrl: "/team/newwww-scaled.png", // REPLACE
  },
  {
    name: "Isaac Newton",
    title: "National Project Coordinator Ghana-International Trade Centre",
    imageUrl: "/team/new-scaled.png", // REPLACE
  },
  {
    // Assuming there's a fifth member based on the layout structure
    // If not, you can remove this entry.
    // If the image for the fifth person is missing from the full screenshot, use a relevant placeholder.
    name: "Board Member Five", // REPLACE with actual name
    title: "Title of Board Member Five", // REPLACE with actual title
    imageUrl: "/team/nnenenenne-scaled.png", // REPLACE (e.g., image of last person in screenshot)
  },
];

export function BoardMembersSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading Area */}
        <div className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
          {" "}
          {/* Constrain width of heading block */}
          <p className="text-sm font-medium text-gray-500 mb-2 sm:mb-3">
            Our Experience
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[52px] font-bold text-black leading-tight tracking-tight">
            Our Board
            <br />
            Members
          </h2>
        </div>

        {/* Responsive grid for board members */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {boardMembersData.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              {/* Circular Image Container */}
              <div className="relative w-48 h-48 mb-5">
                {" "}
                {/* 160px x 160px circle */}
                <Image
                  src={member.imageUrl}
                  alt={`Profile picture of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
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
