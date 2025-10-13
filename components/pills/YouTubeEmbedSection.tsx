// components/YouTubeEmbedSection.js
"use client"; // No client-side hooks needed for a simple iframe, but good practice if you might add interactivity later

import React from "react";

const YouTubeEmbedSection = ({ videoId = "dQw4w9WgXcQ" }) => {
  // Default placeholder video ID
  if (!videoId) {
    return (
      <section className="bg-neutral-900 py-12 md:py-16 lg:py-20 flex justify-center items-center">
        <p className="text-white">Video ID is missing.</p>
      </section>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="bg-neutral-900 py-8 sm:py-12 md:py-16 lg:py-20">
      {/*
        You can add a section title here if needed, e.g.:
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Watch Our Accelerator Factory 2021</h2>
        </div>
      */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-4xl xl:max-w-5xl">
        {/* Aspect Ratio Box: This creates a responsive container for the iframe */}
        {/* Common aspect ratios: 16:9 -> padding-bottom: 56.25%; 4:3 -> padding-bottom: 75% */}
        <div
          className="relative h-0"
          style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubeEmbedSection;
