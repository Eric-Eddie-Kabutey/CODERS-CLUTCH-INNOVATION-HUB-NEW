"use client";
import React, { useState } from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "How to Stay Motivated Through Challenges – A Guide for Non-Tech Founders",
    image: "https://kedrus.io/wp-content/uploads/2025/01/chllenge-.jpeg",
    category: "Insights",
    tags: ["Motivation", "Founder Journey"]
  },
  {
    id: 2,
    title: "Building Your Personal Support System as a Non-tech founder",
    image: "https://kedrus.io/wp-content/uploads/2024/11/Building-a-personal-support-system.jpeg",
    category: "Insights",
    tags: ["Support System", "Networking"]
  },
  {
    id: 3,
    title: "Fintech in Africa and the future of Nigeria",
    image: "https://kedrus.io/wp-content/uploads/2024/10/Fintech-in-Africa-1.jpeg",
    category: "Africa Emerging Market",
    tags: ["Fintech", "Africa", "Nigeria"]
  },
  {
    id: 4,
    title: "Finding Your Big Idea – How to Identify and Validate Promising Ideas",
    image: "https://kedrus.io/wp-content/uploads/2024/10/Finding-your-bigidea-.jpeg",
    category: "Product",
    tags: ["Ideation", "Validation"]
  },
  {
    id: 5,
    title: "The Art of Storytelling: Crafting Your Founder Story and Brand Narrative",
    image: "https://kedrus.io/wp-content/uploads/2024/10/art-of-storytelling-.jpeg",
    category: "Enterprise",
    tags: ["Storytelling", "Branding"]
  },
  {
    id: 6,
    title: "Transitioning From Idea to Execution: Turning Your Vision into Reality",
    image: "https://kedrus.io/wp-content/uploads/2024/10/idea-to-execution.jpeg",
    category: "Product",
    tags: ["Execution", "Strategy"]
  },
];

const filters = [
  "All Articles",
  "Africa Emerging Market",
  "Enterprise",
  "Industry News",
  "Insights",
  "Product",
];

function InsightsGrid() {
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === "All Articles") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => 
        article.category === filter
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                  : "bg-white text-gray-800 border border-gray-300 hover:border-green-500 hover:bg-green-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""}{" "}
            {activeFilter !== "All Articles" && `in ${activeFilter}`}
          </p>
        </div>

        {/* Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-3">
                    {article.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-auto w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full px-6 py-3 text-sm font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">
              We couldn&apos;t find any articles matching &quot;{activeFilter}&quot;
            </p>
            <button 
              onClick={() => handleFilterClick("All Articles")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default InsightsGrid;
