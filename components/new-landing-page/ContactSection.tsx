"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Uniform Width Container */}
        <div className="w-full grid md:grid-cols-2 gap-12 bg-[#f0f0f0] shadow-lg p-4 sm:p-6 md:p-8 rounded-3xl">
          {/* Left Side */}
          <div>
            <p className="text-green-600 font-semibold mb-2">Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re a founder, investor, or partner, we&apos;d love
              to hear from you.
            </p>

            <h3 className="font-semibold text-gray-800 mb-6">
              Quick Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="text-gray-700">hello@codersclutch.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </span>
                <span className="text-gray-700">
                  Tema, 5th Avenue Road — Greater Accra Region, Ghana
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="bg-white p-4 sm:p-6 md:p-8 shadow-md rounded-3xl">
            <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
