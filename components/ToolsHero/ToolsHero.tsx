import React from "react";

function ToolsHero() {
  return (
    <section className="w-full bg-[#f3fef2] py-24 lg:py-32 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-lime-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-6xl w-full px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-green-800">Essential Resources</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            The Founder&apos;s
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Toolbox
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We have created powerful tools to help you{" "}
            <span className="font-bold text-gray-900 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              build, innovate and scale
            </span>{" "}
            as a non-tech founder.
          </p>

        </div>
      </div>
    </section>
  );
}

export default ToolsHero;