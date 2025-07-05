import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



const Term = () => {
  return (
    <>
       <Navbar/>
       <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Terms of Service</h1>
             
             <div className="prose prose-sm sm:prose-lg max-w-none">
               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Acceptance of Terms</h2>
                 <p className="text-gray-600 leading-relaxed">
                   By accessing and using BlogSphere, you accept and agree to be bound by these Terms of Service. 
                   If you do not agree to these terms, please do not use our platform.
                 </p>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Use of Our Service</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                   <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                     <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">Permitted Uses</h3>
                     <ul className="text-gray-700 space-y-2">
                       <li>• Reading blog content across all categories</li>
                       <li>• Sharing articles on social media</li>
                       <li>• Commenting respectfully on posts</li>
                       <li>• Subscribing to newsletters</li>
                     </ul>
                   </div>
                   <div className="bg-red-50 p-4 sm:p-6 rounded-lg">
                     <h3 className="text-lg sm:text-xl font-semibold text-red-800 mb-2 sm:mb-3">Prohibited Uses</h3>
                     <ul className="text-gray-700 space-y-2">
                       <li>• Posting spam or malicious content</li>
                       <li>• Copying content without permission</li>
                       <li>• Harassing other users</li>
                       <li>• Violating any applicable laws</li>
                     </ul>
                   </div>
                 </div>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Content Guidelines</h2>
                 <div className="space-y-4">
                   <div className="border-l-4 border-blue-400 pl-4">
                     <h3 className="font-semibold text-blue-800">User Comments</h3>
                     <p className="text-gray-600">Comments must be respectful and relevant to the blog post. We reserve the right to moderate and remove inappropriate content.</p>
                   </div>
                   <div className="border-l-4 border-purple-400 pl-4">
                     <h3 className="font-semibold text-purple-800">Category Content</h3>
                     <p className="text-gray-600">Our content spans Beauty, Tech, Fitness, Business, and Sports. All content is for informational purposes only.</p>
                   </div>
                   <div className="border-l-4 border-orange-400 pl-4">
                     <h3 className="font-semibold text-orange-800">Intellectual Property</h3>
                     <p className="text-gray-600">All blog content, design, and materials are owned by BlogSphere or licensed to us. Unauthorized use is prohibited.</p>
                   </div>
                 </div>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">User Accounts</h2>
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                   <p className="text-gray-700 mb-4">If you create an account on BlogSphere:</p>
                   <ul className="text-gray-700 space-y-2">
                     <li>• You are responsible for maintaining account security</li>
                     <li>• You must provide accurate information</li>
                     <li>• You are responsible for all activities under your account</li>
                     <li>• We may suspend accounts that violate these terms</li>
                   </ul>
                 </div>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Disclaimer of Warranties</h2>
                 <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6">
                   <p className="text-gray-700">
                     BlogSphere is provided "as is" without warranties of any kind. We do not guarantee that:
                   </p>
                   <ul className="text-gray-700 space-y-1 mt-3">
                     <li>• The service will be uninterrupted or error-free</li>
                     <li>• All content is accurate or up-to-date</li>
                     <li>• The platform will meet your specific needs</li>
                   </ul>
                 </div>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Limitation of Liability</h2>
                 <p className="text-gray-600 leading-relaxed">
                   BlogSphere and its owners shall not be liable for any indirect, incidental, special, or consequential 
                   damages arising from your use of our platform or any content therein.
                 </p>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Termination</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                   <div className="p-4 border border-gray-200 rounded-lg">
                     <h3 className="font-semibold text-gray-800 mb-2">By You</h3>
                     <p className="text-sm text-gray-600">You may stop using BlogSphere at any time</p>
                   </div>
                   <div className="p-4 border border-gray-200 rounded-lg">
                     <h3 className="font-semibold text-gray-800 mb-2">By Us</h3>
                     <p className="text-sm text-gray-600">We may suspend access for terms violations</p>
                   </div>
                 </div>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Changes to Terms</h2>
                 <p className="text-gray-600 leading-relaxed">
                   We reserve the right to modify these terms at any time. Changes will be posted on this page with 
                   an updated revision date. Continued use after changes constitutes acceptance.
                 </p>
               </section>

               <section className="mb-6 sm:mb-8">
                 <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Contact Information</h2>
                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg">
                   <p className="text-gray-700 mb-4">
                     For questions about these Terms of Service, contact us:
                   </p>
                   <div className="space-y-2 text-gray-600">
                     <p>• Email: sumanqaj9876@gmail.com</p>
                     <p>• Through our Contact page</p>
                    
                   </div>
                 </div>
               </section>

              
             </div>
           </div>
         </div>
       </div>
       <Footer/>
    </>
  )
}

export default Term