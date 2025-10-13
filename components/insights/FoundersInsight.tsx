import React from 'react'
import Image from 'next/image'

function FoundersInsight() {
  return (
    <div>
      <section className="w-full flex flex-col px-6 py-16 bg-white">
        
        {/* Wrapper for Button + Card */}
        <div className="w-full max-w-5xl flex flex-col mx-auto">
          
          {/* CTA Button */}
          <button className="self-start text-white py-2 px-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-sm font-medium mb-8 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Featured Articles
          </button>

          {/* Main Card */}
          <div className="w-full bg-gradient-to-br from-[#e6f6d2] to-[#d4f0c3] rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10 shadow-lg hover:shadow-xl transition-all duration-300">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 relative h-80 md:h-auto">
              <Image
                src="https://kedrus.io/wp-content/uploads/2025/01/chllenge-.jpeg"
                alt="Motivation"
                className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none transition-transform duration-300 hover:scale-105"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 bg-[#f7fff6] p-8 md:p-10 flex flex-col items-start text-left">
              {/* Badge */}
              <span className="bg-gradient-to-r from-green-700 to-emerald-700 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
                Startups
              </span>

              {/* Article Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight">
                How to Stay Motivated Through Challenges – A Guide for Non-Tech Founders
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                Starting a business as a non-tech founder is brave, no doubt about it. You&apos;re stepping into
                unfamiliar territory, learning new skills, and pushing through obstacles that test your resolve daily.
              </p>

              {/* Read Article Button */}
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold bg-white hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Read Article
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default FoundersInsight
