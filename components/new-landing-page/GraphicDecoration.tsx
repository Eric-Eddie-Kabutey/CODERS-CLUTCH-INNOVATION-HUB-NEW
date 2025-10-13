import React from 'react';

const GraphicDecoration = () => {
  return (
    <div
      className="w-22 h-4"
      // Using Tailwind's arbitrary values to create a repeating linear gradient
      style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, #FBBF24, #FBBF24 4px, transparent 4px, transparent 8px)',
      }}
    />
  );
};

export default GraphicDecoration;