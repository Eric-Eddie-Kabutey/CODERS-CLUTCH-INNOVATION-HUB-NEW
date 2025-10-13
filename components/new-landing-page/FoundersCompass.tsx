import React from "react";

function FoundersCompass() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-16 text-center">
      {/* Small Intro Text */}
      <p className="text-sm text-gray-600 max-w-2xl mb-3">
        Carefully curated insights designed to help{" "}
        <span className="font-semibold">Non-Tech Founders</span> Build High-Growth Tech Companies.
      </p>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-12">
        The Founders <br /> Compass
      </h2>

      {/* Main Card */}
      <div className="w-full max-w-5xl bg-[#e6f6d2] rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://kedrus.io/wp-content/uploads/2025/01/chllenge-.jpeg"
            alt="Motivation"
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-[#f7fff6] p-8 flex flex-col items-start text-left">
          {/* Badge */}
          <span className="bg-[#0b2027] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            Startups
          </span>

          {/* Article Title */}
          <h3 className="text-2xl font-bold mb-4">
            How to Stay Motivated Through Challenges – A Guide for Non-Tech Founders
          </h3>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Starting a business as a non-tech founder is brave, no doubt about it. You’re stepping into
            unfamiliar territory, learning new […]
          </p>

          {/* Read Article Button */}
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-full font-medium bg-white hover:bg-green-600 hover:text-white transition">
            Read Article
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
  Check out more insights
</button>
    </section>
  );
}

export default FoundersCompass;
