import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import TableOfContents from '../components/TableOfContents';
import ArticleContent from '../components/ArticleContent';
import CommentSection from '../components/CommentSection';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { useComments } from '../hooks/useComments';

const ContentPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Custom hooks
  const { tableOfContents, isTocOpen, setIsTocOpen, scrollToHeading, modifiedContent } = useTableOfContents(blog);
  const { commentForm, isSubmitting, MAX_COMMENT_LENGTH, handleInputChange, handleCommentSubmit } = useComments(blog);

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
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Desktop Table of Contents Sidebar */}
        {tableOfContents.length > 0 && (
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
        )}

        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
          tableOfContents.length > 0 ? 'lg:ml-72' : ''
        }`}>
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 group font-medium"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </button>

          {/* Article Content */}
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
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Back to {blog.category} Articles
            </button>
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
    </>
  );
};

export default ContentPage;