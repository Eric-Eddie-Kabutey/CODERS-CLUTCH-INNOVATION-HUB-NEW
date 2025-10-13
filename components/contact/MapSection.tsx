import React from "react";

const MapSection = () => {
  // The iframe src is provided by the user.
  // Note: The screenshot shows Accra, Ghana, but the provided iframe is for Brusubi. We'll use the provided iframe.
  const mapIframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9656.594221091409!2d-16.740453509585734!3d13.397997006439466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec2977c0799d31b%3A0x761d64876f1af7d6!2sBrusubi!5e0!3m2!1sen!2sgm!4v1748540031993!5m2!1sen!2sgm";

  return (
    // The container for the map. Full width, and a common height for map sections.
    // The screenshot shows the map taking up the full available width.
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]">
      {/* Map/Satellite Toggle Buttons - Styled to mimic Google Maps interface */}
      {/* Positioned at the top-left corner of the map container */}
      <div
        className="absolute top-2.5 left-2.5 z-10 flex bg-white rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] overflow-hidden"
        // Using a shadow very similar to Google Maps UI elements
      >
        <button
          type="button"
          aria-pressed="true" // Visually, "Map" is the default active state in the screenshot
          className="px-[11px] py-[7px] text-[13px] font-medium text-black bg-white border-r border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10"
          // Adjusted padding to be more compact like the image
          // Active button styling: black text, white background
          // Border-r for the separator line
        >
          Map
        </button>
        <button
          type="button"
          aria-pressed="false"
          className="px-[11px] py-[7px] text-[13px] font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10"
          // Inactive button styling: gray text, white background
        >
          Satellite
        </button>
      </div>

      {/* Google Maps Iframe */}
      <iframe
        src={mapIframeSrc}
        className="w-full h-full" // Make iframe fill its parent container
        style={{ border: 0 }} // Remove default iframe border
        loading="lazy" // Lazy load the iframe for performance
        referrerPolicy="no-referrer-when-downgrade" // Standard security practice
        title="Location Map" // Descriptive title for accessibility
      ></iframe>
    </div>
  );
};

export default MapSection;
