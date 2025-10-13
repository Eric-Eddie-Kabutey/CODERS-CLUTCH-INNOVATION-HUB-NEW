// import Image from "next/image";
import React from "react";

// SVG Icon Components (approximating the style in the image)
const ArrowUpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

const ArrowDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
  </svg>
);

const MinusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

// Logo Symbol Component

const ImpactReportViewer = () => {
  // Replace with your actual background image URL (ensure it's in /public)
  const backgroundImageUrl = "/team/download.png"; // Example: '/images/woman-smiling-hijab-laptop.jpg'

  return (
    <div
      className="w-full max-w-7xl mx-auto shadow-xl flex flex-col bg-white"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* Header */}
      {/* <header className="bg-white py-4 px-5 md:py-5 md:px-7 flex items-center border-b border-gray-200">
        <div className="flex items-center space-x-2.5">
          <div>
            <Image
              src={"/BlueSpace-BIH-1.png"}
              width={300}
              height={100}
              alt="logo"
            />
          </div>
        </div>
      </header> */}

      {/* Main Content (Image and Text) */}
      {/* Adjusted aspect ratio to better fit the visual */}
      <main className="flex-grow relative overflow-hidden aspect-[1100/650]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      </main>

      {/* Footer Controls */}
      <footer className="bg-[#606060] text-[#DCDCDC] py-[5px] px-3 flex items-center justify-between text-[11px] md:text-xs">
        <div className="flex items-center space-x-1">
          <button className="p-[3px] hover:bg-black/20 rounded-sm">
            <ArrowUpIcon className="w-4 h-4" />
          </button>
          <button className="p-[3px] hover:bg-black/20 rounded-sm">
            <ArrowDownIcon className="w-4 h-4" />
          </button>
          <span className="mx-1.5 border-l border-[#888888] h-3.5"></span>
          <span>Page 1 / 31</span>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-[3px] hover:bg-black/20 rounded-sm">
            <MinusIcon className="w-4 h-4" />
          </button>
          <span className="mx-1.5 border-l border-[#888888] h-3.5"></span>
          <button className="p-[3px] hover:bg-black/20 rounded-sm">
            <PlusIcon className="w-4 h-4" />
          </button>
          <span className="ml-1.5">Zoom 100%</span>
        </div>
      </footer>
    </div>
  );
};

export default ImpactReportViewer;
