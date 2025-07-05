import React, { useState } from 'react';

const ArticleContent = ({ 
  blog, 
  tableOfContents, 
  isTocOpen, 
  setIsTocOpen, 
  scrollToHeading, 
  modifiedContent 
}) => {
  if (!blog) return null;

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={blog.bannerImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400?text=Blog+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Mobile TOC Toggle */}
      {tableOfContents.length > 0 && (
        <div className="lg:hidden px-6 py-4 border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => {
              console.log('Mobile TOC toggle clicked, current state:', isTocOpen); // Debug log
              setIsTocOpen(!isTocOpen);
            }}
            className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Table of Contents
            </span>
            <svg 
              className={`w-5 h-5 transform transition-transform ${isTocOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile TOC Content - Implement directly here */}
          {isTocOpen && (
            <div className="mt-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4">
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Mobile TOC item clicked:', item); // Debug log
                        
                        // Close mobile TOC
                        setIsTocOpen(false);
                        
                        // Scroll to heading
                        if (scrollToHeading && item.id) {
                          setTimeout(() => {
                            scrollToHeading(item.id);
                          }, 100);
                        } else {
                          // Fallback scroll method
                          setTimeout(() => {
                            const element = document.getElementById(item.id);
                            if (element) {
                              element.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start',
                                inline: 'nearest'
                              });
                            }
                          }, 100);
                        }
                      }}
                      className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 text-sm border border-transparent hover:border-blue-200 ${
                        item.level === 1 ? 'font-semibold text-gray-800' :
                        item.level === 2 ? 'font-medium text-gray-700 ml-4' :
                        'text-gray-600 ml-8'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          item.level === 1 ? 'bg-blue-600' :
                          item.level === 2 ? 'bg-blue-400' :
                          'bg-blue-300'
                        }`}></span>
                        <span className="leading-relaxed">{item.text}</span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="px-6 sm:px-8 lg:px-12 py-8">
        {/* Summary */}
        <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{blog.summary}</p>
        </div>

        {/* Blog Content with proper HTML rendering */}
        <div className="prose prose-xl max-w-none">
          <div className="blog-content text-gray-800 leading-relaxed text-lg space-y-6">
            {modifiedContent ? (
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            ) : blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : blog.description ? (
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 italic text-xl">No content available for this article.</p>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        {blog.tags && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Related Topics:</h3>
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 text-sm bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full border border-gray-200 hover:shadow-md transition-shadow duration-300 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {blog.category}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
