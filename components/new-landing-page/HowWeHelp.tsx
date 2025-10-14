'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

import { TABS_DATA } from '@/data/tabs-data'; 
import HandDrawnCircle from '@/components/svg/HandDrawnCircle';
import GraphicDecoration from '@/components/svg/GraphicDecoration';

const HowWeHelp = () => {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);
  const activeContent = TABS_DATA.find((tab) => tab.id === activeTab);
  
  const TabContent = ({ content }: { content: typeof TABS_DATA[0] | undefined }) => {
    if (!content) return null;

    return (
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">        
         <motion.div
          className="relative h-96 w-full order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={content.imageSrc}
            alt={content.contentTitle}
            layout="fill"            
            className="object-contain md:object-cover"
          />
          <div className="absolute top-8 left-0 z-0">
            <GraphicDecoration />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{content.contentTitle}</h3>
          <p className="text-lg text-gray-600 mb-8">{content.contentDescription}</p>
          <a href="#" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            {content.buttonText}
          </a>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          How we{' '}
          <span className="relative inline-block">
            help
            <HandDrawnCircle />
          </span>
        </h2>

        {/* --- DESKTOP TABS --- */}
        <div className="hidden md:grid grid-cols-4 border-b border-gray-200 mb-12">
          {TABS_DATA.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative w-full py-4 text-lg font-medium text-center transition-colors duration-300 hover:bg-gray-50">
              <span className={activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'}>{tab.title}</span>
              {activeTab === tab.id && <motion.div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-blue-600" layoutId="underline" />}
            </button>
          ))}
        </div>

        {/* --- MOBILE ACCORDION --- */}
        <div className="md:hidden">
          {TABS_DATA.map((tab) => (
            <div key={tab.id} className="border-b border-gray-200 last:border-b-0">
              <button onClick={() => setActiveTab(tab.id === activeTab ? '' : tab.id)} className="w-full flex justify-between items-center py-5 text-left text-lg font-medium">
                <span>{tab.title}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${activeTab === tab.id ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              {activeTab === tab.id && <div className="w-full h-1 bg-blue-600 mb-[-1px]"/>}
              
              <AnimatePresence>
                {activeTab === tab.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="py-8">
                      <TabContent content={activeContent} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- DESKTOP CONTENT AREA --- */}
        <div className="hidden md:block mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TabContent content={activeContent} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;