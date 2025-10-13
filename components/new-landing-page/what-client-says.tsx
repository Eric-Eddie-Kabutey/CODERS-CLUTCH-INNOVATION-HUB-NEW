"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: `“Kedrus.io helped us transform how we present Sobaz to the world. Our brand now reflects our evolution, and our stakeholders have a clear understanding of our expanded vision. The strategy, execution, and impact have been phenomenal. This repositioning has solidified our leadership in the industry, and we are now fully equipped for future growth.”`,
    name: "Nwabuaeze Godswill Esq",
    role: "Public Relations Sobaz",
    image:
      "https://kedrus.io/wp-content/uploads/2025/02/IMG_7844-removebg-preview.png",
  },
  {
    text: `“The team transformed how I deliver my services and reach my audience. Their solution automated everything I needed—from consultations to course sales—and gave me the tools to focus on helping people. The platform is intuitive, and the feedback from my clients has been incredible. I couldn’t have asked for a better partner in scaling my business.”`,
    name: "Doctor of the future",
    role: "Certified nutritionist",
    image:
      "https://kedrus.io/wp-content/uploads/2025/01/Doctor-of-the-future.jpeg",
  },
  {
    text: `“Working with the team was a game-changer for ELECTRICSOL. They not only brought our vision to life but also gave us the tools to connect with our audience more effectively. The branding and website have exceeded our expectations, and we’ve received countless compliments on the professionalism it exudes. We’re grateful for their expertise and dedication to making this a success.”`,
    name: "Alapa Hyacinth",
    role: "Brand Manager Electricsol",
    image:
      "https://kedrus.io/wp-content/uploads/2025/01/Alapa-Hyacinth-Brand-Manager-Electricsol.jpg",
  },
];

function WhatClientSays() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, role, image } = testimonials[current];

  return (
    <div className="w-full py-16 bg-[#0b2027] flex flex-col items-center text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        What our Clients are saying
      </h2>
      <p className="text-gray-300 mb-12">
        Real stories of success and satisfaction from our Valued Clients
      </p>

      {/* Testimonial Card */}
      <div className="relative max-w-2xl">
        <div className="bg-[#e6f6d2] text-gray-800 min-h-[28rem] rounded-xl shadow-lg p-10 relative flex flex-col justify-center items-center">
          {/* Quote Symbol */}
          <Quote className="text-[#a7d08d] absolute top-8 left-8 w-14 h-14 p-2" />

          {/* Testimonial Text */}
          <p className="text-lg text-center leading-relaxed px-6">{text}</p>

          {/* Profile Section */}
          <div className="flex items-center gap-4 bg-[#0b2027] text-white px-6 py-4 rounded-tr-xl rounded-bl-xl shadow-md absolute bottom-0 left-0 w-1/2">
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full border-2 border-[#e6f6d2] object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-300">{role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#1a3a43] hover:bg-[#24525c] p-2 rounded-full shadow-md transition"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#1a3a43] hover:bg-[#24525c] p-2 rounded-full shadow-md transition"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Pagination */}
      <p className="text-gray-400 text-sm mt-20">
        {current + 1} / {testimonials.length}
      </p>
    </div>
  );
}

export default WhatClientSays;
