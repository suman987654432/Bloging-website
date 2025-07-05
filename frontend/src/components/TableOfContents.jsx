import React from 'react';

const TableOfContents = ({ tableOfContents = [], isTocOpen, setIsTocOpen, scrollToHeading }) => {
  if (!tableOfContents.length) return null;

  const handleTocClick = (item) => {
    console.log('TOC clicked:', item);

    if (scrollToHeading && item.id) {
      scrollToHeading(item.id);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      } else {
        console.warn('Element not found:', item.id);
      }
    }

    if (setIsTocOpen) {
      setIsTocOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden shadow-lg mx-auto max-w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setIsTocOpen(!isTocOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-300 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
      >
        <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            <span className="hidden xs:inline">Table of Contents</span>
            <span className="xs:hidden">Contents</span>
          </span>
        </h3>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-2 sm:mr-3 font-medium hidden xs:block">
            {tableOfContents.length} sections
          </span>
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isTocOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
          }`}>
            <svg
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                isTocOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* TOC Items with smooth animation */}
      <div className={`transition-all duration-300 ease-in-out ${isTocOpen ? 'max-h-80 sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        {isTocOpen && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
            <nav className="space-y-0.5 sm:space-y-1 mt-3 sm:mt-4">
              {tableOfContents.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleTocClick(item);
                  }}
                  className={`group block w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-transparent hover:border-blue-200 hover:shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                    item.level === 1
                      ? 'text-sm font-semibold text-gray-900 bg-white shadow-sm hover:shadow-md'
                      : item.level === 2
                      ? 'text-sm font-medium text-gray-700 ml-2 sm:ml-4 bg-gray-50/50 hover:bg-blue-50'
                      : 'text-sm text-gray-600 ml-4 sm:ml-8 bg-gray-50/30 hover:bg-blue-50'
                  }`}
                >
                  <span className="flex items-center">
                    <span
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full mr-2 sm:mr-3 flex-shrink-0 transition-all duration-200 group-hover:scale-110 ${
                        item.level === 1
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-sm'
                          : item.level === 2
                          ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                          : 'bg-gradient-to-r from-blue-300 to-blue-400'
                      }`}
                    ></span>
                    <span className="leading-relaxed group-hover:translate-x-1 transition-transform duration-200 flex-1 text-xs sm:text-sm">
                      {item.text}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1 sm:ml-2">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
            
            {/* Close indicator */}
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center flex items-center justify-center">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="hidden sm:inline">Tap any section to navigate & close</span>
                <span className="sm:hidden">Tap to navigate</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;
