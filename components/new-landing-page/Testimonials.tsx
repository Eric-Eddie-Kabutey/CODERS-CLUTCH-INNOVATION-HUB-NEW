"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    title: "It's just incredible!",
    quote:
      "This hub gave our startup the connections and mentorship we needed to secure our first major investor.",
    author: "Jimmy Bartney",
    position: "Product Manager at Picko Lab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Satisfied User Here!",
    quote:
      "The collaborative spirit here is unmatched. We've made more progress in six months than we imagined possible.",
    author: "Natasha Romanoff",
    position: "Black Widow",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "No doubt, Coders is the best!",
    quote:
      "\"The best\"! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    author: "Moritika Kazuki",
    position: "Finance Manager at Mangan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-green-600 font-medium mb-4">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Our User Kind Words
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Here are some testimonials from our user after their experience
              with Coders Clutch Innovation Hub
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-green-800 text-white rounded-2xl p-8 h-full flex flex-col">
                {/* Title */}
                <h3 className="font-semibold text-xl mb-4">
                  {testimonial.title}
                </h3>

                {/* Quote */}
                <p className="text-gray-100 text-base leading-relaxed mb-6 flex-grow">
                  {testimonial.quote}
                </p>

                {/* Thin Horizontal Line */}
                <hr className="border-t border-green-700 mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-200 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-12 gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow hover:bg-green-700 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;