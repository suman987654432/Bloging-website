import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bgColor: "from-rose-400 to-pink-600",
      icon: "💄",
   
    },
    {
      id: 2,
      name: "Tech",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      bgColor: "from-blue-400 to-indigo-600",
      icon: "💻",
    
    },
    {
      id: 3,
      name: "Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      bgColor: "from-green-400 to-emerald-600",
      icon: "💪",
     
    },
    {
      id: 4,
      name: "Business",
      image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=400&q=80",
      bgColor: "from-orange-400 to-red-600",
      icon: "📈",
   
    },
    {
      id: 5,
      name: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80",
      bgColor: "from-yellow-400 to-orange-600",
      icon: "⚽",
     
    }
  ]

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-3xl md:text-5xl font-black text-gray-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore <span className="">Categories</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover amazing content across different topics and find exactly what you're looking for
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  {/* Icon */}
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {category.icon}
                  </motion.div>
                  
                  {/* Category Name */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-2 group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Click indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Click to explore</span>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-50 transition-opacity duration-500 backdrop-blur-sm"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:scale-110"></div>
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category