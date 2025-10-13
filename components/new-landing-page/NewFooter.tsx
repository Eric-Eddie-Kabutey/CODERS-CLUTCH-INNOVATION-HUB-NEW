import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

function NewFooter() {
  return (
    <footer className="bg-white text-gray-700 px-16 md:px-32 py-16 border-t">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Column: Logo and Description */}
        <div className="md:w-1/3">
          <img
            src="/logo.png"
            alt="Coders Clutch Logo"
            className="w-36 mb-6"
          />
          <p className="text-sm leading-relaxed">
            Visionaries, innovators, and entrepreneurs with the tools, mentors,
            and opportunities they need to make an impact.
          </p>
        </div>

        {/* Right Column: All Links */}
        <div className="md:w-2/3 flex flex-col md:flex-row justify-end gap-16">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Our Pillars</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Impact Report</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><Linkedin size={18}/> LinkedIn</li>
              <li className="flex items-center gap-3"><Twitter size={18}/> Twitter</li>
              <li className="flex items-center gap-3"><Instagram size={18}/> Instagram</li>
              <li className="flex items-center gap-3"><Facebook size={18}/> Facebook</li>
              <li className="flex items-center gap-3"><Youtube size={18}/> YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
        <div className="text-gray-500">© Coderclutch 2025</div>
      </div>
    </footer>
  );
}

export default NewFooter;
