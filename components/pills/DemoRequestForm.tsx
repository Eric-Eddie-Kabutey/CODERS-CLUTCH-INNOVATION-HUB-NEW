// components/DemoRequestForm.js
"use client"; // If you plan to add form handling logic

import React from "react";
import { CalendarDays, MoreHorizontal } from "lucide-react";

const DemoRequestForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // Example: Gather form data
    // const formData = new FormData(event.target as HTMLFormElement);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data);
  };

  const inputBaseClasses =
    "block w-full rounded-lg bg-neutral-800 border-transparent px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm";
  const labelBaseClasses = "block text-xs font-medium text-neutral-300 mb-1.5";

  return (
    <section className="bg-neutral-950 text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Text */}
        <div className="text-center md:text-left mb-10 md:mb-12">
          <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider mb-3">
            {"  // Our Initiatives"}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Send us an email, <br className="sm:hidden" />
            to be a part of our next Demo Day.
          </h2>
          <p className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
            We’re{" "}
            <strong className="font-semibold text-white">
              passionate creatives
            </strong>{" "}
            who are excited about unique ideas and help fin-tech companies to{" "}
            <strong className="font-semibold text-white">
              create amazing identities
            </strong>{" "}
            by showing them what’s possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {/* Name */}
            <div>
              <label htmlFor="fullName" className={labelBaseClasses}>
                Name (required)
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your full name"
                required
                className={inputBaseClasses}
              />
            </div>

            {/* Company/Startup Name */}
            <div>
              <label htmlFor="companyName" className={labelBaseClasses}>
                Company/Startup Name (required)
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Your company or startup name"
                  required
                  className={`${inputBaseClasses} pr-10`} // Add padding for icon
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  {/* The icon in the image is a bit like a checkbox or three dots. Using MoreHorizontal. */}
                  <MoreHorizontal
                    className="h-4 w-4 text-neutral-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelBaseClasses}>
                Email (required)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your professional email"
                required
                className={inputBaseClasses}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelBaseClasses}>
                Phone (optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your contact number"
                className={inputBaseClasses}
              />
            </div>

            {/* Demo Title / Subject */}
            <div>
              <label htmlFor="demoTitle" className={labelBaseClasses}>
                Demo Title / Subject (required)
              </label>
              <input
                type="text"
                name="demoTitle"
                id="demoTitle"
                placeholder="Brief title or focus of your demo"
                required
                className={inputBaseClasses}
              />
            </div>

            {/* Preferred Demo Date */}
            <div>
              <label htmlFor="demoDate" className={labelBaseClasses}>
                Preferred Demo Date
              </label>
              <div className="relative">
                <input
                  type="text" // Can be type="date" for native picker, but styling it is harder
                  name="demoDate"
                  id="demoDate"
                  placeholder="dd/mm/yyyy"
                  className={`${inputBaseClasses} pr-10`} // Add padding for icon
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <CalendarDays
                    className="h-4 w-4 text-neutral-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Brief Description of Your Demo */}
          <div className="md:col-span-2">
            {" "}
            {/* This div ensures it can span if the parent was a grid, not strictly needed here as the parent is space-y */}
            <label htmlFor="demoDescription" className={labelBaseClasses}>
              Brief Description of Your Demo
            </label>
            <textarea
              name="demoDescription"
              id="demoDescription"
              rows={5}
              placeholder="Tell us about your demo and what you’d like to showcase at Bluespace"
              required
              className={`${inputBaseClasses} min-h-[120px] resize-y`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-neutral-700 px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950 transition-colors w-full sm:w-auto"
            >
              Request a Demo Slot
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DemoRequestForm;
