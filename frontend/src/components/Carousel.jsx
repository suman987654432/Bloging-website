import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesCore } from '../components/Sparkles' 

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      category: "Beauty",
      title: "Discover Beauty Secrets",
      description: "Unlock the latest beauty trends, skincare routines, and makeup tutorials from industry experts.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      bgColor: "from-rose-400 via-pink-500 to-purple-600",
      iconColor: "text-pink-400",
    },
    {
      id: 2,
      category: "Tech",
      title: "Future of Technology",
      description: "Stay ahead with cutting-edge technology news, reviews, and insights on AI, blockchain, and gadgets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80",
      bgColor: "from-blue-400 via-cyan-500 to-indigo-600",
      iconColor: "text-blue-400",
    },
    {
      id: 3,
      category: "Fitness",
      title: "Transform Your Body",
      description: "Get in shape with expert workout plans, nutrition guidance, and motivation for a healthier lifestyle.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
      bgColor: "from-green-500 to-emerald-700",
    },
    {
      id: 4,
      category: "Business",
      title: "Build Your Empire",
      description: "Learn entrepreneurial strategies, startup tips, and how to scale your business like a pro.",
      image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1464&auto=format&fit=crop",
      bgColor: "from-orange-500 to-red-700",
    },
    {
      id: 5,
      category: "Sports",
      title: "Athletic Excellence",
      description: "From training tips to performance insights—everything you need to level up your game.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
      bgColor: "from-yellow-500 to-orange-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index) => setCurrentSlide(index)

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[95vh] overflow-hidden shadow-2xl border-2 border-white/40 rounded-3xl bg-gradient-to-br from-gray-900/30 to-black/40 backdrop-blur-sm">
      <SparklesCore background="transparent" particleColor="#ffffff" particleDensity={60} />

      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} flex flex-col lg:flex-row items-center justify-between relative overflow-hidden`}>
                
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-20 left-20 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-32 right-32 w-56 h-56 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/8 rounded-full blur-xl animate-bounce delay-700"></div>
                  <div className="absolute top-10 right-10 w-24 h-24 bg-white/12 rounded-full blur-lg animate-pulse delay-300"></div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-0 text-white space-y-6 md:space-y-8 text-center lg:text-left z-20">
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex items-center justify-center lg:justify-start gap-3"
                  >
                    <div className={`w-3 h-3 rounded-full bg-white animate-pulse`}></div>
                    <span className="bg-white/30 backdrop-blur-lg px-5 py-2.5 rounded-full text-sm uppercase tracking-widest font-bold border border-white/30 shadow-xl">
                      {slide.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl"
                    initial={{ opacity: 0, x: -40 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                    {slide.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed font-light max-w-2xl"
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.3, duration: 0.8 }}>
                    {slide.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <button className="group relative px-10 py-5 bg-white text-gray-900 font-black text-lg rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-white/20">
                      <span className="relative z-10 flex items-center gap-3">
                        Get Started 
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse"></div>
                    </button>
                  </motion.div>
                </div>

                {/* Enhanced Image Section */}
                <div className="hidden lg:flex w-full lg:w-1/2 h-full lg:h-auto mt-8 lg:mt-0 relative justify-center items-center z-20 px-6 lg:px-8">
                  <motion.div 
                    className="relative group w-full max-w-2xl"
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                  >
                    {/* Multiple Glowing Layers */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/40 via-transparent to-white/40 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-80"></div>
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm border-2 border-white/40 bg-white/5">
                      {/* Image */}
                      <img
                        src={slide.image}
                        alt={slide.category}
                        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      />
                      
                      {/* Overlay Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Elements on Image */}
                      <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
                      <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/80 rounded-full animate-pulse delay-500"></div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-white/60 rounded-tl-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-white/60 rounded-br-lg"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-lg hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 z-40 shadow-2xl border border-white/30 group"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-lg hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 z-40 shadow-2xl border border-white/30 group"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-40 bg-black/30 backdrop-blur-lg rounded-full px-6 py-4 border border-white/20 shadow-xl">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-60"></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-black/30 z-40 rounded-t-3xl">
        <motion.div
          className="h-full bg-gradient-to-r from-white via-white/90 to-white shadow-lg rounded-t-3xl"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}

export default Carousel;
