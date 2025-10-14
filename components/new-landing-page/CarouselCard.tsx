import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GraphicDecoration from './GraphicDecoration';
import { TextWithUnderlineSvg } from '../svg/UnderlineSvg';

type CardProps = {
  category: string;
  title: string;
  subtitle: string;
  linkText: string;
  image: string;
  bgColor: string;
  textColor: string;
};

const CarouselCard = ({ category, title, subtitle, linkText, image, bgColor, textColor }: CardProps) => {
  return (
    <motion.div
      layout
      // The parent container handles the rounding and overflow
      className={`relative flex flex-col md:flex-row w-full h-full lg:min-h-[300px]  2xl:min-h-[400px] rounded-xl overflow-hidden shadow-lg ${bgColor}`}
    >
      {/* --- Image Section (Refactored) --- */}
      {/* Takes up 40% width on medium screens and up (md:w-2/5) */}
      <div className="relative w-full md:w-2/5 h-64 md:h-[90%] order-first md:order-none -rotate-2 -mt-4 -ml-2">
        <Image
          src={image}
          alt={title}
          fill // Use `fill` to make the image cover its parent container
          className="object-cover" // Ensures the image covers the area without distortion
        />
        {/* The decoration is positioned relative to this container */}
        <div className="absolute -bottom-2 left-4 z-10">
          <GraphicDecoration />
        </div>
      </div>

      {/* --- Text Content Section (Refactored) --- */}
      {/* Takes up 60% width on medium screens and up (md:w-3/5) */}
      <div className={`w-full md:w-3/5 py-6 md:py-8 lg:py-10 px-8 md:px-10 lg:px-12 flex flex-col justify-between ${bgColor} ${textColor}`}>
        <p className="text-sm uppercase font-light tracking-wider mb-2">{category}</p>
        <TextWithUnderlineSvg className='hidden md:inline-block -left-[0px]' >
        <h2 className="text-xl md:text-4xl font-normal leading-tight mb-4">{title}</h2>        
        </TextWithUnderlineSvg>
     
        <p className="text-sm font-semibold mb-8">{subtitle}</p>
        <a href="#" className="font-semibold group">
          {linkText}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default CarouselCard;