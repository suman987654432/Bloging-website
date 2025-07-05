import React, { useState, useEffect } from 'react'

const Testimonal = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Beauty Enthusiast",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "BlogSphere's beauty section has completely transformed my skincare routine! The detailed reviews and tutorials are incredibly helpful. I've discovered so many amazing products through their recommendations.",
      bgColor: "from-pink-100 to-rose-100"
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Tech Professional",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a software developer, I rely on BlogSphere's tech articles to stay updated with the latest trends. Their in-depth analysis and practical tutorials have helped me advance my career significantly.",
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Fitness Coach",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The fitness content on BlogSphere is outstanding! From workout routines to nutrition tips, everything is well-researched and practical. I often share these articles with my clients.",
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Owner",
      category: "Business",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "BlogSphere's business insights have been invaluable for my startup. The entrepreneurship articles and market analysis help me make informed decisions for my company's growth.",
      bgColor: "from-purple-100 to-violet-100"
    },
    {
      id: 5,
      name: "Jennifer Lee",
      role: "Sports Journalist",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The sports coverage on BlogSphere is fantastic! From match analyses to athlete profiles, they provide comprehensive coverage that keeps me informed about all the latest sporting events.",
      bgColor: "from-orange-100 to-amber-100"
    },
    {
      id: 6,
      name: "Michael Brown",
      role: "Content Creator",
      category: "General",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "BlogSphere is my go-to platform for quality content across all categories. The writing quality is exceptional, and the variety of topics means there's always something interesting to read.",
      bgColor: "from-indigo-100 to-blue-100"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of readers trust BlogSphere for quality content across Beauty, Tech, Fitness, Business, and Sports
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-gradient-to-br ${testimonial.bgColor} rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl`}>
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                        {/* User Info */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                          />
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 font-medium">{testimonial.role}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                            testimonial.category === 'Beauty' ? 'bg-pink-200 text-pink-800' :
                            testimonial.category === 'Tech' ? 'bg-blue-200 text-blue-800' :
                            testimonial.category === 'Fitness' ? 'bg-green-200 text-green-800' :
                            testimonial.category === 'Business' ? 'bg-purple-200 text-purple-800' :
                            testimonial.category === 'Sports' ? 'bg-orange-200 text-orange-800' :
                            'bg-indigo-200 text-indigo-800'
                          }`}>
                            {testimonial.category}
                          </span>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex-1">
                          <div className="flex justify-center lg:justify-start mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

     
      </div>
    </section>
  )
}

export default Testimonal