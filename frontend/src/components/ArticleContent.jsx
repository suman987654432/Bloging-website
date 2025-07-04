import React from 'react';

const ArticleContent = ({ blog, tableOfContents, isTocOpen, setIsTocOpen, scrollToHeading, modifiedContent }) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Article Image */}
      {blog.bannerImage && (
        <div className="w-full h-72 md:h-[28rem] overflow-hidden relative">
          <img 
            src={blog.bannerImage} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}

      {/* Article Content */}
      <div className="p-8 md:p-12 lg:p-16">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
          {blog.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">{(blog.author || 'Admin').charAt(0)}</span>
              </div>
              <div>
                <span className="text-gray-800 font-semibold text-lg">{blog.author || 'Admin'}</span>
                <p className="text-gray-500 text-sm">Author</p>
              </div>
            </div>
          </div>
          <div className="text-gray-600 text-lg font-medium">
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Summary */}
        {blog.summary && (
          <div className="mb-10">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-500">
              <p className="text-xl text-gray-700 leading-relaxed italic font-medium">
                {blog.summary}
              </p>
            </div>
          </div>
        )}

        {/* Mobile Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <div className="mb-10 lg:hidden">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Table of Contents
                </h3>
                <svg 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isTocOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isTocOpen && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <nav className="space-y-2 mt-4">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToHeading(item.id)}
                        className={`block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 ${
                          item.level === 1 ? 'text-base font-semibold text-gray-800' :
                          item.level === 2 ? 'text-sm font-medium text-gray-700 ml-4' :
                          'text-sm text-gray-600 ml-8'
                        }`}
                      >
                        <span className="flex items-center">
                          <span className={`w-2 h-2 rounded-full mr-3 ${
                            item.level === 1 ? 'bg-blue-600' :
                            item.level === 2 ? 'bg-blue-400' :
                            'bg-blue-300'
                          }`}></span>
                          {item.text}
                        </span>
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-xl max-w-none">
          <div className="text-gray-800 leading-relaxed text-lg space-y-6">
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
      </div>
    </article>
  );
};

export default ArticleContent;
