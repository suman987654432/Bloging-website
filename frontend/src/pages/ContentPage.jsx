import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import TableOfContents from '../components/TableOfContents';
import ArticleContent from '../components/ArticleContent';
import CommentSection from '../components/CommentSection';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { useComments } from '../hooks/useComments';
import Footer from '../components/Footer';

const ContentPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Custom hooks
  const { tableOfContents, scrollToHeading, modifiedContent } = useTableOfContents(blog);
  const { commentForm, isSubmitting, MAX_COMMENT_LENGTH, handleInputChange, handleCommentSubmit } = useComments(blog);

  // Debug logging
  useEffect(() => {
    console.log('ContentPage - tableOfContents:', tableOfContents);
    console.log('ContentPage - isTocOpen:', isTocOpen);
  }, [tableOfContents, isTocOpen]);

  useEffect(() => {
    if (location.state?.blog) {
      setBlog(location.state.blog);
      setLoading(false);
    } else {
      fetchBlogById();
    }
  }, [id]);

  const fetchBlogById = async () => {
    try {
      const response = await fetch(`https://bloging-website-wnaj.onrender.com/api/blogs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlog(data.blog);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
            <button 
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <style jsx>{`
        .blog-content {
          line-height: 1.8;
        }
        
        .blog-content ul {
          list-style-type: disc;
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .blog-content ol {
          list-style-type: decimal;
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .blog-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
        }
        
        .blog-content ul ul {
          list-style-type: circle;
          margin: 0.5rem 0;
        }
        
        .blog-content ol ol {
          list-style-type: lower-alpha;
          margin: 0.5rem 0;
        }
        
        .blog-content p {
          margin: 1rem 0;
        }
        
        .blog-content h1, .blog-content h2, .blog-content h3, 
        .blog-content h4, .blog-content h5, .blog-content h6 {
          margin: 1.5rem 0 1rem 0;
          line-height: 1.3;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        
        .blog-content th, .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem;
          text-align: left;
        }
        
        .blog-content th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
          border-radius: 0.5rem;
        }
        
        .blog-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .blog-content a:hover {
          color: #1d4ed8;
        }
        
        .blog-content strong {
          font-weight: 600;
        }
        
        .blog-content em {
          font-style: italic;
        }
        
        .blog-content code {
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.875em;
        }
        
        .blog-content pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        
        .blog-content pre code {
          background-color: transparent;
          padding: 0;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex">
        {/* Fixed TOC Sidebar - Always visible on desktop */}
        {tableOfContents.length > 0 && (
          <div className="hidden lg:block w-80 bg-white shadow-xl border-r border-gray-200 sticky top-16 self-start">
            <div style={{ height: '85vh', width: '320px' }} className="flex flex-col">
              {/* TOC Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Table of Contents
                </h3>
              </div>

              {/* TOC Content */}
              <div className="p-4 overflow-y-auto flex-1">
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Desktop TOC clicked:', item); // Debug log
                        
                        if (scrollToHeading && item.id) {
                          scrollToHeading(item.id);
                        } else {
                          // Fallback scroll method
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ 
                              behavior: 'smooth', 
                              block: 'start',
                              inline: 'nearest'
                            });
                          }
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
          </div>
        )}

        {/* Main Content - Positioned to the right */}
        <div className="flex-1 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <button 
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 group font-medium"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </button>

            {/* Article Content - Let it handle mobile TOC */}
            <ArticleContent 
              blog={blog} 
              tableOfContents={tableOfContents}
              isTocOpen={isTocOpen}
              setIsTocOpen={setIsTocOpen}
              scrollToHeading={scrollToHeading}
              modifiedContent={modifiedContent}
            />

            {/* Comment Section */}
            <CommentSection 
              commentForm={commentForm}
              handleInputChange={handleInputChange}
              handleCommentSubmit={handleCommentSubmit}
              isSubmitting={isSubmitting}
              MAX_COMMENT_LENGTH={MAX_COMMENT_LENGTH}
            />

            {/* Navigation */}
            <div className="mt-8 mb-8 flex justify-center">
              <button 
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Back to {blog.category} Articles
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer/>
    </>
  );
};

export default ContentPage;
