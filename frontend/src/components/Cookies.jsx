import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Cookies = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Cookie Policy</h1>

                        <div className="prose prose-sm sm:prose-lg max-w-none">
                            <section className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">What Are Cookies?</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Cookies are small text files that are placed on your device when you visit BlogSphere.
                                    They help us provide you with a better browsing experience and allow certain features to work properly.
                                </p>
                            </section>

                            <section className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">How We Use Cookies</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                                        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">Essential Cookies</h3>
                                        <p className="text-gray-700">Required for basic site functionality, user authentication, and security.</p>
                                    </div>
                                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                                        <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">Analytics Cookies</h3>
                                        <p className="text-gray-700">Help us understand how visitors interact with our blog content and categories.</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                                        <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2 sm:mb-3">Preference Cookies</h3>
                                        <p className="text-gray-700">Remember your preferred blog categories (Beauty, Tech, Fitness, Business, Sports).</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
                                        <h3 className="text-lg sm:text-xl font-semibold text-orange-800 mb-2 sm:mb-3">Marketing Cookies</h3>
                                        <p className="text-gray-700">Used to deliver relevant content and track the effectiveness of our campaigns.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Third-Party Cookies</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    BlogSphere may use third-party services for analytics, social media integration, and advertising.
                                    These services may set their own cookies on your device.
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Google Analytics - for website traffic analysis</li>
                                    <li>Social Media Platforms - for sharing blog posts</li>
                                    <li>Comment Systems - for user engagement</li>
                                    <li>Advertising Partners - for relevant ad delivery</li>
                                </ul>
                            </section>

                            <section className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Managing Your Cookie Preferences</h2>
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                    <p className="text-gray-700">
                                        You can control cookies through your browser settings. However, disabling certain cookies
                                        may affect your experience on BlogSphere.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full">
                                        Accept All Cookies
                                    </button>
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition w-full">
                                        Essential Only
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full">
                                        Customize Settings
                                    </button>
                                </div>
                            </section>

                            <section className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Contact Us</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    If you have any questions about our cookie policy or how we handle your data on BlogSphere,
                                    please don't hesitate to contact us through our Contact page.
                                </p>
                            </section>

                           
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cookies