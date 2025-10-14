import React from 'react';
import { PROCESS_STEPS_DATA } from '@/data/process-steps-data';
const ProcessSteps = () => {
  return (
    <section className="bg-[#f3fef2] py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default ProcessSteps;