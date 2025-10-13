import React from 'react'

function ServicesHero() {
  return (
    <section className="bg-[#f3fef2] px-6 py-16 md:py-44 min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-[#0b2027] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight">
            Tailored solutions<br />
            for your <span className="text-[#2a7d2e]">growth</span>
          </h1>
          
          <p className="mt-8 text-[#0b2027] text-lg md:text-xl leading-relaxed max-w-3xl">
            Find solutions tailored to your challenges, putting you at the center. 
            Explore how our expertise can simplify your journey, making tech work for you.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2a7d2e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#236927] transition-colors duration-300 shadow-lg">
              Explore Services
            </button>
            <button className="border-2 border-[#0b2027] text-[#0b2027] px-8 py-4 rounded-lg font-semibold hover:bg-[#0b2027] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero