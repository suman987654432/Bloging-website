import React, { useState } from 'react';
import Navbar from "../components/Navbar"    
import Footer from "../components/Footer"    
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://bloging-website-wnaj.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <div className="h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(79, 70, 229, 0.8)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="text-center text-white px-4 sm:px-6 z-10 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl">
            Contact Us
          </h1>
          <div className="w-24 sm:w-32 md:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full mx-auto mb-4 sm:mb-6"></div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/95 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2">
            Let's create something amazing together
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 sm:top-40 -left-10 sm:-left-20 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-20 sm:bottom-40 -right-10 sm:-right-20 w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-r from-pink-300/10 to-yellow-300/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start relative z-10">
          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Get In Touch
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium px-2 sm:px-0">
                Ready to bring your vision to life? We're here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-blue-100/50 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl flex-shrink-0">
                    <MdEmail className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">Email Us</h3>
                    <span className="text-gray-600 text-base sm:text-lg font-medium break-all sm:break-normal">contact@yourblog.com</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-green-100/50 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
                  <div className="bg-gradient-to-br from-green-600 to-green-800 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl flex-shrink-0">
                    <MdPhone className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">Call Us</h3>
                    <span className="text-gray-600 text-base sm:text-lg font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-purple-100/50 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl flex-shrink-0">
                    <MdLocationOn className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-1 sm:mb-2">Visit Us</h3>
                    <span className="text-gray-600 text-base sm:text-lg font-medium">123 Blog Street, City, State 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-lg shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] sm:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100/80">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Send us a Message
                </h3>
                <div className="w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300/60 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg focus:outline-none focus:border-blue-600 focus:ring-2 sm:focus:ring-4 focus:ring-blue-200/40 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-400/60 font-medium"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300/60 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg focus:outline-none focus:border-blue-600 focus:ring-2 sm:focus:ring-4 focus:ring-blue-200/40 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-400/60 font-medium"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300/60 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg focus:outline-none focus:border-blue-600 focus:ring-2 sm:focus:ring-4 focus:ring-blue-200/40 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-400/60 font-medium"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300/60 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg focus:outline-none focus:border-blue-600 focus:ring-2 sm:focus:ring-4 focus:ring-blue-200/40 transition-all duration-300 resize-none bg-gray-50/50 hover:bg-white hover:border-gray-400/60 font-medium"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 hover:from-blue-800 hover:via-indigo-800 hover:to-purple-800 text-white font-bold py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <MdSend className="text-lg sm:text-xl md:text-2xl" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    <Footer/>
</>
  );
};

export default Contact;
