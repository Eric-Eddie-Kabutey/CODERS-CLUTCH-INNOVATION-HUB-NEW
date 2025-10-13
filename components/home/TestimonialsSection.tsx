"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    tag: "Refinement and Encouragement",
    quote:
      "Bluespace Innovation Hub didn’t just help us refine our business idea—they walked with us through every stage: from building our prototype to pitching to investors. Thanks to their accelerator program, we’ve expanded to five regions and are making real impact in agri-tech.",
    name: "Kwame Mensah",
    title: "Co-founder",
  },
  {
    id: 2,
    tag: "Design Quality",
    quote:
      "As a young entrepreneur, I had an idea but didn’t know where to start. Bluespace helped me validate my idea, build a minimum viable product, and even pitch to investors. Today, our logistics app is helping over 500 small businesses deliver more efficiently. I owe a lot of our progress to Bluespace’s relentless support.",
    name: "Ama Boateng",
    title: "Co-founder",
  },
  {
    id: 3,
    tag: "Strategic Partnership",
    quote:
      "Partnering with Bluespace opened doors we never imagined. Their network and strategic guidance were pivotal in securing our first major enterprise client. The team's dedication goes beyond just consultation; they become true partners in your journey.",
    name: "David Lee",
    title: "CEO, Tech Solutions Inc.",
  },
  {
    id: 4,
    tag: " mentorship",
    quote:
      "The mentorship I received at Bluespace was invaluable. The experienced mentors provided practical advice and helped me navigate the challenges of a startup. Their insights were crucial for our growth and success.",
    name: "Sarah Chen",
    title: "Founder, EduTech Start",
  },
];

const TestimonialsSection = () => {
  // Removed unused swiperInstance state
  const [activeIndex, setActiveIndex] = useState(0);
  // Navigation elements need to be outside Swiper for this layout
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const totalSlides = testimonialsData.length;

  interface SwiperInstance {
    realIndex: number;
  }

  const handleSlideChange = (swiper: SwiperInstance): void => {
    setActiveIndex(swiper.realIndex); // Use realIndex for looped sliders
  };

  return (
    <div className="bg-slate-50 font-sans py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 mb-2">{"// Testimonials"}</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0052CC] mb-10 md:mb-12 leading-tight">
          & Praises
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Enable loop for continuous sliding
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Initially set active index
            setActiveIndex(swiper.realIndex);
            // Hack to re-init navigation after refs are set
            setTimeout(() => {
              if (swiper.params && swiper.navigation) {
                if (swiper.params.navigation) {
                  if (typeof swiper.params.navigation === "object") {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }
                }
                swiper.navigation.destroy(); // Destroy old nav
                swiper.navigation.init(); // Init new nav
                swiper.navigation.update(); // Update nav state
              }
            }, 0);
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            768: {
              // md
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="pb-4" // Add some padding bottom if nav overlaps
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto flex flex-col">
              {" "}
              {/* Ensure slides take height */}
              <div className="flex flex-col flex-grow h-full">
                {" "}
                {/* Make card content grow */}
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md mb-5 self-start">
                  {testimonial.tag}
                </span>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 flex-grow">
                  “{testimonial.quote}”
                </p>
                <div>
                  <h4 className="text-black font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation and Pagination */}
        <div className="flex justify-between items-center mt-8 md:mt-10">
          <div className="text-black font-bold text-xl md:text-2xl">
            <span>{String(activeIndex + 1).padStart(1, "0")}</span>
            <span className="text-gray-400 mx-2">---</span>
            <span>{String(totalSlides).padStart(1, "0")}</span>
          </div>
          <div className="flex space-x-3 md:space-x-4">
            <button
              ref={navigationPrevRef}
              aria-label="Previous testimonial"
              className="text-black hover:text-gray-700 transition-colors disabled:opacity-50"
            >
              <ArrowLeft size={28} strokeWidth={2.5} />
            </button>
            <button
              ref={navigationNextRef}
              aria-label="Next testimonial"
              className="text-black hover:text-gray-700 transition-colors disabled:opacity-50"
            >
              <ArrowRight size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
