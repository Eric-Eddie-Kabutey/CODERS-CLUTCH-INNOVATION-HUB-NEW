import React from "react";

function NetworkSection() {
  return (
    <section className="w-full bg-[#f3fef2] text-white px-6 py-20 flex justify-center">
      <div className="max-w-6xl px-10 w-full">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#00a63d] text-sm font-medium mb-2">
            Community & Ecosystem
          </p>
          <h2 className="text-4xl text-black md:text-5xl font-bold">
            A Network That Works{" "}
            <span className="text-black-400 font-normal">for You</span>
          </h2>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Left Box */}
          <div className="bg-[#1a1a1a] rounded-lg divide-y divide-gray-700">
            {[
              "Mentors & Advisors",
              "Investor Network",
              "Corporate Partners",
              "Alumni Community",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 px-6 py-6 text-lg"
              >
                <span className="text-gray-400 text-base font-medium">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="text-black mb-6 leading-relaxed">
              When you join the Coders Clutch hub, you tap into a thriving
              ecosystem of founders, investors, researchers, and industry
              experts. Collaboration isn’t just encouraged, it’s built into
              everything we do.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition w-fit">
              Meet Our Community
            </button>
          </div>
        </div>

        {/* Bottom Statement */}
        <p className="text-left text-xl md:text-2xl font-medium">
          <span className="text-black">
            We connect visionaries, innovators, and entrepreneurs with the tools,
            mentors, and <br />
          </span>{" "}
          <span className="text-gray-500">
            opportunities they need to make an impact.
          </span>
        </p>
      </div>
    </section>
  );
}

export default NetworkSection;
