import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore <span className="text-indigo-600">Categories</span>
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover amazing content across different topics and find exactly what you're looking for.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white aspect-square">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-80 group-hover:opacity-60 transition duration-500`}></div>

                {/* Foreground content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 z-10">
                  <motion.div
                    className="text-5xl md:text-6xl mb-3"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    Click to explore
                  </p>
                </div>

                {/* Glow & Accents */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-50 transition duration-500 rounded-3xl"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border border-white/70 rounded-full group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border border-white/70 rounded-full group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
