"use client";

import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isOkayWithTracking, setIsOkayWithTracking] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log({ email, isOkayWithTracking });
    setEmail("");
    setIsOkayWithTracking(false);
  };

  const socialLinks = [
    { name: "X.", href: "#" },
    { name: "Ig.", href: "#" },
    { name: "Li.", href: "#" },
    { name: "Fb.", href: "#" },
  ];

  return (
    <footer className="bg-slate-50 font-sans text-sm text-gray-700">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Logo and Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image
              src="/BlueSpace-BIH-1.png"
              alt="BlueSPACE Innovation Hub"
              width={160}
              height={48}
              className="h-8 w-auto mb-5"
              priority
            />
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-blue-600 font-semibold"
                  aria-label={`Follow us on ${link.name.replace(".", "")}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Headquarters */}
          <div>
            <h5 className="font-bold text-black mb-3 text-base">Headquarters</h5>
            <p className="font-semibold text-black">BlueSPACE Innovation.</p>
            <p>06 Quarcoo Lane Tech Bureau,</p>
            <p>Airport Residential Accra Ghana</p>
            <p>Accra.</p>
          </div>

          {/* Column 3: Work Inquiries & Career */}
          <div>
            <h5 className="font-bold text-black mb-3 text-base">Work inquiries</h5>
            <p className="mb-1">Interested in working with us?</p>
            <a
              href="mailto:info@bluespaceinnovationhub.com"
              className="font-bold text-black hover:text-blue-600 block mb-4"
            >
              info@bluespaceinnovationhub.com
            </a>

            <h5 className="font-bold text-black mb-2 text-base">Career</h5>
            <p className="mb-1">Looking for a job opportunity?</p>
            <a href="#" className="font-bold text-black hover:text-blue-600">
              See open positions
            </a>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h5 className="font-bold text-black mb-3 text-base">
              Sign up for the newsletter
            </h5>
            <form onSubmit={handleNewsletterSubmit} className="mb-3">
              <div className="flex items-center bg-gray-200 rounded-md p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-transparent flex-grow p-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-200 text-[#00A99D] font-semibold px-3 py-2 rounded-md flex items-center space-x-1.5 hover:bg-gray-300 transition-colors"
                  aria-label="Sign Up for newsletter"
                >
                  <span className="bg-gray-400 text-white p-1 rounded-sm text-xs">
                    <SendHorizonal size={12} strokeWidth={2} />
                  </span>
                  <span>Sign Up</span>
                </button>
              </div>
            </form>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="trackingConsent"
                checked={isOkayWithTracking}
                onChange={(e) => setIsOkayWithTracking(e.target.checked)}
                className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="trackingConsent" className="text-xs text-gray-600">
                I&apos;m okay with getting emails and having that activity tracked
                to improve my experience.
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-600 mb-2 md:mb-0">
            © 2019-2025 BlueSPACE Innovation Hub. All rights reserved.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Security
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-black">
              Privacy & Cookie Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Fixed Side Elements */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 transform -rotate-90 origin-bottom-left hidden lg:block">
        <span className="font-bold text-black tracking-wider">Scroll to top</span>
      </div>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 transform rotate-90 origin-top-right hidden lg:block">
        <span className="text-xs text-gray-400 tracking-wider">
          Follow Us --- Fb. / Ig. / Yt. / X. / Lk.
        </span>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-white p-2 rounded-md shadow-lg border border-gray-300 hover:shadow-xl transition-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <span className="sr-only">Privacy Settings</span>
        </button>
        <p className="text-center text-[10px] text-gray-500 mt-0.5">
          Privacy - Terms
        </p>
      </div>
    </footer>
  );
};

export default Footer;
