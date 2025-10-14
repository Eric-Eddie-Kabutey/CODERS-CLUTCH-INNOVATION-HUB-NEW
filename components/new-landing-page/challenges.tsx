import React from "react";
import Image from "next/image";
import Link from "next/link";

function Challenges() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-25 py-12 sm:py-16 bg-emerald-800 text-white">

      {/* Solutions Section */}
        <div className="p-6 sm:p-12 md:p-16 space-y-8 md:space-y-12">
          <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center md:text-left">
            We connect visionaries, innovators, and entrepreneurs 
            <br className="hidden md:block" /> 
            with the tools, mentors, and opportunities they need to make an impact.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            
            {/* Product Strategy */}
            <div className="border-b border-black/10 pb-4 md:border-b-0 md:border-r md:pr-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Product Strategy</h4>
              <p className="text-gray-200 mb-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Our approach to product strategy is simple: we dive deep into your ideas, break down the challenges, and create a clear roadmap that aligns technology with your vision, guiding your product from concept to reality.
              </p>
              <Link
                href="/services"
                className="inline-block border-2 border-emerald-800 bg-white text-emerald-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium hover:border-white  transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Develop a strategy
              </Link>
            </div>

            {/* Product Design */}
            <div className="border-b border-black/10 pb-4 md:border-b-0 md:border-r md:px-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Product Design</h4>
              <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                We take the time to truly understand your vision, market needs, and customer behavior. This allows us to design a user-friendly product that connects with your audience and solves real problems.
              </p>
              <Link
                href="/services"
                className="inline-block border-2 border-emerald-800 bg-white text-emerald-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium hover:border-white  transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Design your product
              </Link>
            </div>

            {/* Product Development */}
            <div className="pb-4 md:pl-6">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Product Development</h4>
              <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                Product development is like conducting a symphony — we work hand-in-hand with you every step of the way. Using the right technologies and methods, we ensure your product is both scalable and functional.
              </p>
              <Link
                href="/services"
                className="inline-block border-2 border-emerald-800 bg-white text-emerald-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium hover:border-white  transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Build your product
              </Link>
            </div>
          </div>
        </div>
      {/* Inner container */}
      <div className="hidden w-full rounded-tl-4xl rounded-tr-4xl px-6 sm:px-8 md:px-12 lg:px-16 bg-[#0b2027] space-y-16 md:space-y-28 py-12 md:py-16">

        {/* Heading */}
        <div className="hidden text-left mt-6 md:mt-16 max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug">
            We understand your challenges 
            <br className="hidden lg:block" />
            as a <span className="text-orange-500">non-tech founder</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-4">
            Building a product from scratch is tough. With over a decade of experience, Kedrus is here to help you tackle tech complexities, fear of failure,
            communication gaps, decision-making stress, and the sense of isolation.
          </p>
        </div>

        

        {/* Product Lab */}
        <div className="bg-[#0F3F35] hidden mb-16 md:mb-20 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 sm:p-12 md:p-16 flex flex-col justify-center space-y-6 md:space-y-8">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Product Lab</h4>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Our product lab empowers non-tech founders like you to effectively navigate the challenges of product development. Through our series of innovation workshops, we turn your ideas into successful products.
            </p>
            <Link
              href="/services"
              className="inline-block border border-white rounded-full px-4 sm:px-6 py-2 sm:py-3 md:px-4 text-xs sm:text-sm md:text-base font-medium hover:bg-white hover:text-[#0F3F35] transition w-60 text-center"
            >
              Validate your ideas
            </Link>
          </div>
          <div className="relative h-64 sm:h-72 md:h-auto">
            <Image
              src="/Product-Lab-1.jpg"
              alt="Product Lab"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Challenges;
