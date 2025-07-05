import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (category) {
      fetchBlogsByCategory();
    }
  }, [category]);

  const fetchBlogsByCategory = async () => {
    try {
      setLoading(true);
      setError(null);

      // Capitalize the first letter for API call
      const categoryForAPI = category.charAt(0).toUpperCase() + category.slice(1);
      const apiUrl = `https://bloging-website-wnaj.onrender.com/api/blogs/category/${categoryForAPI}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      } else {
        setError(data.message || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError('Error connecting to server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const icons = {
      'Beauty': '💄',
      'Tech': '💻',
      'Fitness': '💪',
      'Business': '📈',
      'Sports': '⚽'
    };
    return icons[categoryName] || '📝';
  };

  const getCategoryColor = (category) => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const colors = {
      'Beauty': 'from-rose-400 via-pink-500 to-purple-600',
      'Tech': 'from-blue-400 via-cyan-500 to-indigo-600',
      'Fitness': 'from-green-400 via-emerald-500 to-teal-600',
      'Business': 'from-orange-400 via-amber-500 to-red-600',
      'Sports': 'from-yellow-400 via-orange-500 to-red-600'
    };
    return colors[categoryName] || 'from-gray-400 via-slate-500 to-gray-600';
  };

  const handleReadMore = (blog) => {
    navigate(`/content/${blog._id}`, { state: { blog } });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center relative overflow-hidden">
        {/* Loading UI (unchanged) */}
        {/* ... */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center relative">
        {/* Error UI (unchanged) */}
        {/* ... */}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Banner Section */}
      <div className={`relative min-h-[50vh] w-full flex items-center justify-center bg-gradient-to-r ${getCategoryColor(category)} text-white text-center overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full top-10 left-10 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-10 right-10 blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 text-white text-5xl mb-8 shadow-xl backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {getCategoryIcon(category)}
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} <span className="bg-white/20 px-3 py-1 rounded-xl">Blogs</span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore top {category.toLowerCase()} insights, stories & articles curated for you
          </motion.p>
        </motion.div>
      </div>

      {/* Blog Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Blog List or Empty UI (unchanged) */}
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Blogs Found</h3>
              <p className="text-gray-600">There are no blogs in the {category} category yet.</p>
            </div>
          ) : (
            // Blog Cards (unchanged)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.bannerImage}
                      alt={blog.category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                   
                  </div>

                  <div className="p-8">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {blog.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {blog.summary}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(category)} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">{blog.author || 'Admin'}</span>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-700">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                        <p className="text-xs text-gray-500">Published</p>
                      </div>
                    </div>

                    <motion.button 
                      onClick={() => handleReadMore(blog)}
                      className={`w-full bg-gradient-to-r ${getCategoryColor(category)} text-white py-3 px-6 rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold transform hover:-translate-y-1`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read Full Article
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;
