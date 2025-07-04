import React from 'react';

const TableOfContents = ({ tableOfContents, isTocOpen, setIsTocOpen, scrollToHeading }) => {
  if (tableOfContents.length === 0) return null;

  return (
    <>
      {/* Desktop Sidebar TOC */}
      <div className="hidden lg:fixed lg:block left-4 top-24 w-64 h-[calc(100vh-6rem)] z-40">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-full overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-sm font-bold text-gray-800 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Table of Contents
            </h3>
          </div>
          
          <div className="p-4 overflow-y-auto h-full">
            <nav className="space-y-1">
              {tableOfContents.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 text-sm ${
                    item.level === 1 ? 'font-semibold text-gray-800' :
                    item.level === 2 ? 'font-medium text-gray-700 ml-3' :
                    'text-gray-600 ml-6'
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
                      item.level === 1 ? 'bg-blue-600' :
                      item.level === 2 ? 'bg-blue-400' :
                      'bg-blue-300'
                    }`}></span>
                    <span className="truncate">{item.text}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile TOC */}
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
    </>
  );
};

export default TableOfContents;
