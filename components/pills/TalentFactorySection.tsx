import React from "react";

const TalentFactorySection = () => {
  return (
    <section className="bg-[#1C1C1C] text-white py-16 px-6 sm:px-12 md:py-20 lg:px-24">
      {/* 
        Background color #1C1C1C is a very dark gray, almost black.
        Tailwind's zinc-900 (#18181b) or gray-900 (#111827) are alternatives.
      */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Content Block */}
        <div className="text-center md:text-left flex-1">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
            {/* Subtitle text color #A0A0A0 is close to text-gray-400 or text-zinc-400 */}
            {"  // OUR INITIATIVES"}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
            Join TalentFactory <br />
            Register today
          </h2>
          <p className="text-base sm:text-lg text-gray-200 md:text-white leading-relaxed max-w-lg md:max-w-md">
            {/* 
              Paragraph text is white. Using text-gray-200 for a very slight softening, 
              or text-white directly. The image looks like plain white.
            */}
            Join the TalentFactory initiative and become the best version of
            yourself as you start a new journey.
          </p>
        </div>

        {/* Right Button Block */}
        <div className="mt-8 md:mt-0 flex-shrink-0">
          <button className="bg-[#5A5A5A] hover:bg-[#4A4A4A] text-white font-semibold text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-colors duration-200 shadow-md">
            {/* 
              Button background #5A5A5A. Tailwind's gray-600 (#4B5563) or zinc-600 (#52525B) are close.
              Hover state slightly darker.
            */}
            Register today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentFactorySection;
