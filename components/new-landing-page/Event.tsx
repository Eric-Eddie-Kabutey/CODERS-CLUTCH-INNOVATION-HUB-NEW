"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
  { id: "01", title: "Monthly Demo Days", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "02", title: "Founder Meetups", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "03", title: "Innovation Conferences", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "04", title: "Skill-Building Workshops", image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "05", title: "Tech Hackathons", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "06", title: "Investor Pitches", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "07", title: "Product Showcases", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "08", title: "Community Building Nights", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: "09", title: "Leadership Retreats", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

function Events() {
  return (
    <section className="w-full bg-emerald-700 py-24 px-4">
      {/* Uniform container - width matches Innovation and ContactSection */}
      <div className="w-full max-w-7xl mx-auto bg-emerald-700 rounded-tr-3xl rounded-tl-3xl p-4 sm:p-6 md:p-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Events & Networking
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Learn. Connect.
                <br className="hidden md:block" />
                Innovate.
              </h2>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              From pitch nights to masterclasses, our events are designed to
              inspire learning and unlock opportunities for startups.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Upcoming Events
              </button>
            </div>
          </motion.div>
        </div>

        {/* Events Grid Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b2027] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b2027] to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 lg:w-96 group cursor-pointer"
              >
                <div className="bg-white rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-gray-200">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-lg">
                        Learn More →
                      </button>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-500 text-sm">📅 Coming soon</span>
                      <span className="text-green-600 text-sm font-medium">Free Entry</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-8 h-2 bg-green-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
