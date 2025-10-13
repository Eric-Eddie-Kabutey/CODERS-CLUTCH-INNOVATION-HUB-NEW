import React from "react";

// SVG icon component for the three dots in the "Company" input
const ThreeDotsIcon = () => (
  <svg
    className="h-5 w-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM14 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);

// SVG icon component for the dropdown arrow
const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ContactInfoFormSection = () => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
          {/* Column 1: Location */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-black mb-5">Location</h2>
            <h3 className="text-base font-semibold text-black mb-1">Ghana</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              06 Quarcoo Lane Tech Bureau
              <br />
              Airport Residential Accra Ghana
              <br />
              Accra.
            </p>
          </div>

          {/* Column 2: Schedule your visit */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-black mb-5">
              Schedule your visit
            </h2>
            <h3 className="text-base font-semibold text-black mb-1">
              Assistance hours:
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Monday – Friday
              <br />6 am to 6 pm GMT
            </p>
            <h3 className="text-base font-semibold text-black mb-1">
              Call directly
            </h3>
            <p className="text-sm text-gray-700">Ph: +233 20 973 4485</p>
          </div>

          {/* Column 3: Say hello (Form) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-black mb-6">Say hello</h2>
            <form action="#" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-xs font-semibold text-gray-900 mb-1"
                  >
                    Name (required)
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Your full name"
                    className="block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-black placeholder-gray-500 focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company-institution"
                    className="block text-xs font-semibold text-gray-900 mb-1"
                  >
                    Company / Institution (required)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="company-institution"
                      id="company-institution"
                      placeholder="Your company or institution name"
                      className="block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-black placeholder-gray-500 focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D] pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ThreeDotsIcon />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-900 mb-1"
                  >
                    Email (required)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your working email"
                    className="block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-black placeholder-gray-500 focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-gray-900 mb-1"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your contact number"
                    className="block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-black placeholder-gray-500 focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service-program"
                  className="block text-xs font-semibold text-gray-900 mb-1"
                >
                  Interested Service or Program
                </label>
                <div className="relative">
                  <select
                    id="service-program"
                    name="service-program"
                    defaultValue=""
                    className="appearance-none block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-gray-500 focus:text-black focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D] pr-10"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="service1" className="text-black">
                      Digital Transformation Consulting
                    </option>
                    <option value="programA" className="text-black">
                      Startup Incubation Program
                    </option>
                    <option value="service2" className="text-black">
                      Custom Software Development
                    </option>
                    <option value="programB" className="text-black">
                      Tech Skills Bootcamp
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-900 mb-1"
                >
                  Additional Message / Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your interest, expectations or questions"
                  className="block w-full bg-[#F3F4F6] border-transparent rounded-lg py-2.5 px-3.5 text-sm text-black placeholder-gray-500 focus:ring-1 focus:ring-[#00A79D] focus:border-[#00A79D] resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00A79D] hover:bg-[#008F86] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A79D]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoFormSection;
