import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Your Blog
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Sharing stories, insights, and knowledge that inspire growth and spark meaningful conversations.
              Join our community of curious minds and passionate creators.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition hover:scale-110">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links & Categories side by side on mobile */}
          <div className="col-span-2 grid grid-cols-2 gap-6 sm:gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="/" className="text-gray-300 hover:text-indigo-400 transition">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-indigo-400 transition">About</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-indigo-400 transition">Blog</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-indigo-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-300">Categories</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="/category/beauty" className="text-gray-300 hover:text-indigo-400 transition">Beauty</a></li>
                <li><a href="/category/tech" className="text-gray-300 hover:text-indigo-400 transition">Tech</a></li>
                <li><a href="/category/fitness" className="text-gray-300 hover:text-indigo-400 transition">Fitness</a></li>
                <li><a href="/category/business" className="text-gray-300 hover:text-indigo-400 transition">Business</a></li>
                <li><a href="/category/sports" className="text-gray-300 hover:text-indigo-400 transition">Sports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">&copy; 2024 Your Blog. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-400 transition">Terms of Service</a>
            <a href="/cookies" className="hover:text-indigo-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
