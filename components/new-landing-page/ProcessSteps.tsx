import React from 'react';
import { PROCESS_STEPS_DATA } from '@/data/process-steps-data';
const ProcessSteps = () => {
  return (
    <section className="bg-[#f3fef2] py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 lg:mb-12">
          {PROCESS_STEPS_DATA.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 border border-emerald-700 rounded-lg shadow-sm flex flex-col"
            >
              {/* Numbered Box */}
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-700 rounded-md mb-6">
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Timeline */}
        <DynamicTimeline />
      </div>
    </section>
  );
};

export default ProcessSteps;


// Inner component that is render  under neath the process-steps cards

const DynamicTimeline = () => {
  const numSteps = PROCESS_STEPS_DATA.length;


  return (
    <div className="bg-transparent pt-10">
      <div className="max-w-5xl mx-auto px-4">
        {/*
          Timeline Container:
          - Uses flex for general structure.
          - Uses a pseudo-element for the continuous horizontal line.
        */}
        <div className="relative flex justify-between items-center h-2 overflow-visible">
          
          {/* Horizontal Line (Pseudo-element approach for simplicity) */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2"></div>
          
          {/* Dynamic Dots */}
          {PROCESS_STEPS_DATA.map((step, index) => (
            <div 
              key={step.number}
              className="relative z-10" // z-10 ensures the dot sits above the line
              style={{
                // Calculate position dynamically for non-grid layout safety
                // We use transform to visually center the dots over the line
                left: `${(index / (numSteps - 1)) * 100}%`,
                transform: 'translateX(-50%)',
                position: 'absolute', // Position absolute within the relative parent
              }}
            >
              {/* The Dot/Marker */}
              <div className="w-4 h-4 bg-emerald-700 rounded-full shadow-md"></div>
            </div>
          ))}
        </div>       
      </div>
    </div>
  );
};