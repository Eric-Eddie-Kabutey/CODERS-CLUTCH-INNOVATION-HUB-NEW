import React from "react";

// SVG icon for the arrow in the button
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const CollaborateSection = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          {/* Top section: Heading and Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* Left side: Text content */}
            <div className="md:w-auto">
              {" "}
              {/* Allow it to take necessary width, button will take the rest */}
              <p className="text-sm font-medium text-neutral-600 mb-2">
                {" // Let's collaborate"}
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight tracking-tighter">
                Send us an email,
                <br />
                to discuss your further
              </h2>
            </div>

            {/* Right side: Button */}
            {/* Use min-w-max or similar if button text wrapping is an issue, but it seems fine */}
            <a
              href="#contact" // Replace with actual contact link or mailto
              className="inline-flex items-center justify-center bg-[#3B00F0] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-150 whitespace-nowrap mt-4 md:mt-1"
              // md:mt-1 aligns button slightly lower than pure items-start if heading wraps differently.
              // Adjust mt-4 md:mt-1 or remove if precise alignment with the very top is needed.
              // The image seems to align the button more with the first line of the heading.
            >
              Contact Us
              <ArrowRightIcon />
            </a>
          </div>

          {/* Horizontal Rule */}
          <hr className="border-t border-neutral-300" />

          {/* Bottom Paragraph */}
          <p className="mt-10 sm:mt-12 md:mt-16 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
            We are eager to continue the conversation and would be delighted to
            hear your thoughts on our impact and{" "}
            <strong className="font-bold text-black">
              potential partnership
            </strong>{" "}
            with you and your{" "}
            <strong className="font-bold text-black">company or brand.</strong>
          </p>
        </div>
      </div>
      {/* This div represents the very light gray area visible at the bottom of the provided image.
          It might be the start of a footer or a different section background.
      */}
      <div className="bg-neutral-50 h-20 w-full"></div>
    </>
  );
};

export default CollaborateSection;
