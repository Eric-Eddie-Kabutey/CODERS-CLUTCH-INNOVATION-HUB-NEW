import React from "react";

function AboutService() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left big image */}
      <div className="relative rounded-2xl overflow-hidden min-h-[500px]">
        <img
          src="https://kedrus.io/wp-content/uploads/2024/08/control.jpeg"
          alt="control"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
          <button className="px-4 py-1 mb-4 rounded-full border border-white/60 bg-white/20 text-sm backdrop-blur-sm self-start">
            Our promise
          </button>
          <h2 className="text-3xl font-semibold leading-snug">
            We help <span className="font-bold">non-tech</span> <br />
            founders move from <br />
            <span className="font-bold">idea to product.</span>
          </h2>
        </div>
      </div>

      {/* Right top image */}
      <div className="flex flex-col gap-6">
        <div className="relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[240px]">
          <img
            src="https://kedrus.io/wp-content/uploads/2024/06/Kedrus-Image.jpg"
            alt="mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
            <button className="px-4 py-1 mb-4 rounded-full border border-white/60 bg-white/20 text-sm backdrop-blur-sm self-start">
              Our mission
            </button>
            <h2 className="text-xl font-semibold leading-snug">
              Building <span className="font-bold">meaningful products</span> that empower
              lives and business.
            </h2>
          </div>
        </div>

        {/* Right bottom image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[240px]">
          <img
            src="https://kedrus.io/wp-content/uploads/2024/06/Kedrus-Image.jpg"
            alt="vision"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
            <button className="px-4 py-1 mb-4 rounded-full border border-white/60 bg-white/20 text-sm backdrop-blur-sm self-start">
              Our vision
            </button>
            <h2 className="text-xl font-semibold leading-snug">
              Helping <span className="font-bold">non-technical founders</span> build
              innovative products
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutService;
