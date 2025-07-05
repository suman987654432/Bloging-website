import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacy = () => {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Privacy Policy</h1>
         
         <div className="prose prose-sm sm:prose-lg max-w-none">
           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Information We Collect</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
               <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                 <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">Personal Information</h3>
                 <ul className="text-gray-700 space-y-2">
                   <li>• Name and email address</li>
                   <li>• Profile information</li>
                   <li>• Comments and interactions</li>
                   <li>• Newsletter subscriptions</li>
                 </ul>
               </div>
               <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                 <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">Usage Data</h3>
                 <ul className="text-gray-700 space-y-2">
                   <li>• Blog posts you read</li>
                   <li>• Category preferences</li>
                   <li>• Time spent on articles</li>
                   <li>• Device and browser info</li>
                 </ul>
               </div>
             </div>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">How We Use Your Information</h2>
             <div className="space-y-4">
               <div className="border-l-4 border-purple-400 pl-4">
                 <h3 className="font-semibold text-purple-800">Content Personalization</h3>
                 <p className="text-gray-600">Recommend relevant blog posts from Beauty, Tech, Fitness, Business, and Sports categories based on your interests.</p>
               </div>
               <div className="border-l-4 border-orange-400 pl-4">
                 <h3 className="font-semibold text-orange-800">Communication</h3>
                 <p className="text-gray-600">Send you newsletters, blog updates, and respond to your comments and inquiries.</p>
               </div>
               <div className="border-l-4 border-teal-400 pl-4">
                 <h3 className="font-semibold text-teal-800">Analytics & Improvement</h3>
                 <p className="text-gray-600">Analyze reading patterns to improve our content and user experience on BlogSphere.</p>
               </div>
             </div>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Data Sharing & Third Parties</h2>
             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
               <p className="text-gray-700 mb-4">
                 We do not sell your personal information. We may share data with:
               </p>
               <ul className="text-gray-700 space-y-2">
                 <li>• Analytics services (Google Analytics) to understand blog performance</li>
                 <li>• Comment systems for user engagement features</li>
                 <li>• Email services for newsletters and notifications</li>
                 <li>• Social media platforms when you share our content</li>
               </ul>
             </div>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Your Rights & Choices</h2>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
               <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
                 <h3 className="font-semibold text-gray-800 mb-2">Access</h3>
                 <p className="text-sm text-gray-600">Request access to your personal data</p>
               </div>
               <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
                 <h3 className="font-semibold text-gray-800 mb-2">Update</h3>
                 <p className="text-sm text-gray-600">Correct or update your information</p>
               </div>
               <div className="text-center p-3 sm:p-4 border border-gray-200 rounded-lg">
                 <h3 className="font-semibold text-gray-800 mb-2">Delete</h3>
                 <p className="text-sm text-gray-600">Request deletion of your data</p>
               </div>
             </div>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Data Security</h2>
             <p className="text-gray-600 leading-relaxed mb-4">
               We implement appropriate security measures to protect your personal information against unauthorized access, 
               alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
             </p>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Children's Privacy</h2>
             <p className="text-gray-600 leading-relaxed">
               BlogSphere is not intended for children under 13. We do not knowingly collect personal information 
               from children under 13. If we become aware of such collection, we will delete the information immediately.
             </p>
           </section>

           <section className="mb-6 sm:mb-8">
             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Contact Us</h2>
             <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-lg">
               <p className="text-gray-700 mb-4">
                 If you have any questions about this Privacy Policy or how we handle your data, please contact us:
               </p>
               <div className="space-y-2 text-gray-600">
                 <p>• Email: privacy@blogsphere.com</p>
                 <p>• Through our Contact page</p>
                 <p>• Mailing address: [sumanqaj9876@gmail.com]</p>
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

export default Privacy