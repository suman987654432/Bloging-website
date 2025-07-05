import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = ({ onLogout }) => {
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [blogCount, setBlogCount] = useState(0)
  const [commentCount, setCommentCount] = useState(0)
  const navigate = useNavigate()

  // Fetch counts when component mounts
  useEffect(() => {
    fetchCounts()
    
    // Listen for refresh events
    const handleRefreshCounts = () => {
      fetchCounts()
    }
    
    window.addEventListener('refreshCounts', handleRefreshCounts)
    
    // Cleanup
    return () => {
      window.removeEventListener('refreshCounts', handleRefreshCounts)
    }
  }, [])

  const fetchCounts = async () => {
    try {
      // Fetch blog count
      const blogResponse = await fetch('http://localhost:5000/api/blogs')
      const blogData = await blogResponse.json()
      if (blogData.success) {
        setBlogCount(blogData.blogs.length)
      }

      // Fetch comment count
      const commentResponse = await fetch('http://localhost:5000/api/comments')
      const commentData = await commentResponse.json()
      if (commentData.success) {
        setCommentCount(commentData.comments.length)
      }
    } catch (error) {
      console.error('Error fetching counts:', error)
    }
  }

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
    
    switch(itemName) {
      case 'Dashboard':
        navigate('/adminp/dashboard')
        break
      case 'Add Blog':
        navigate('/adminp/addblog')
        break
      case 'Manage Blogs':
        navigate('/adminp/blogs')
        break
      case 'Comments':
        navigate('/adminp/comments')
        break
      case 'Logout':
        if (onLogout) {
          onLogout()
        } else {
          navigate('/admin')
        }
        break
      default:
        break
    }
  }

  const menuItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H10a2 2 0 01-2-2V5z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Manage Blogs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      count: blogCount
    },
    {
      name: 'Comments',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      count: commentCount
    },
    {
      name: 'Add Blog',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Logout',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      ),
      color: 'from-gray-500 to-gray-600',
      isLogout: true
    }
  ]

  return (
    <motion.div 
      className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black h-screen shadow-2xl border-r border-gray-700/50 flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Admin Panel
              </h2>
              <p className="text-gray-400 text-sm mt-1">Manage your blog</p>
            </motion.div>
          )}
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className={`w-5 h-5 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Admin Profile */}
      {!isCollapsed && (
        <motion.div 
          className="p-6 border-b border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <h3 className="text-white font-semibold">Admin User</h3>
              <p className="text-gray-400 text-sm">Super Administrator</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
              activeItem === item.name
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            } ${item.isLogout ? 'mt-auto' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
            
            {/* Icon */}
            <div className={`relative z-10 p-2 rounded-lg bg-gradient-to-r ${item.color} ${activeItem === item.name ? 'text-white' : 'text-white/80'}`}>
              {item.icon}
            </div>
            
            {/* Text */}
            {!isCollapsed && (
              <span className="relative z-10 font-medium text-left flex-1">
                {item.name}
              </span>
            )}
            
            {/* Active indicator */}
            {activeItem === item.name && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r"
                layoutId="activeIndicator"
                transition={{ duration: 0.2 }}
              />
            )}
            
            {/* Count badge */}
            {item.count !== undefined && item.count > 0 && !isCollapsed && (
              <span className="relative z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                {item.count}
              </span>
            )}
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700/50">
        {!isCollapsed && (
          <motion.div
            className="text-center text-gray-500 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© 2024 BlogSite Admin</p>
            <p className="mt-1">Version 1.0.0</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default AdminNavbar